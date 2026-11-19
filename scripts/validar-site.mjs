// Verificacoes estaticas do Trigonometria Interativa, sem dependencias externas.
// Executar: node scripts/validar-site.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ignored = new Set(['.git', 'node_modules', '.cache', 'dist']);
const issues = [];
let linksChecked = 0;
let scriptsChecked = 0;

function collect(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (ignored.has(entry.name)) return [];
    const full = join(dir, entry.name);
    return entry.isDirectory() ? collect(full) : [full];
  });
}

const files = collect(root);
const pages = files.filter(file => extname(file).toLowerCase() === '.html');
const ids = new Map(pages.map(file => [file, new Set(
  [...readFileSync(file, 'utf8').matchAll(/\bid\s*=\s*(["'])(.*?)\1/gi)].map(m => m[2])
)]));

function decode(value) {
  try { return decodeURIComponent(value); } catch { return value; }
}
function localTarget(from, href) {
  const path = decode(href.split(/[?#]/)[0]);
  if (!path) return from;
  if (path.startsWith('/')) {
    // O projeto eh servido em /TrigTest/ no GitHub Pages.
    const inProject = path.replace(/^\/TrigTest(?=\/|$)/, '');
    return resolve(root, '.' + inProject);
  }
  return resolve(dirname(from), path);
}
function checkTarget(from, reference) {
  const value = reference.trim();
  if (!value || /^(?:[a-z][\w+.-]*:|\/\/)/i.test(value)) return;
  const target = localTarget(from, value);
  const finalPath = existsSync(target) && statSync(target).isDirectory() ? join(target, 'index.html') : target;
  const label = relative(root, from);
  linksChecked++;
  if (!finalPath.startsWith(root + sep) && finalPath !== root) {
    issues.push(`${label}: caminho externo a pasta do projeto: ${value}`);
    return;
  }
  if (!existsSync(finalPath)) {
    issues.push(`${label}: arquivo inexistente: ${value}`);
    return;
  }
  const fragment = value.includes('#') ? decode(value.split('#').slice(1).join('#')) : '';
  if (fragment && ids.has(finalPath) && !ids.get(finalPath).has(fragment)) {
    issues.push(`${label}: ancora inexistente: ${value}`);
  }
}

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const label = relative(root, file);
  if (!/<html\b[^>]*\blang\s*=\s*["'][^"']+["']/i.test(html)) issues.push(`${label}: falta idioma no elemento html`);
  if (!/<title\s*>\s*[^<]+\s*<\/title\s*>/i.test(html)) issues.push(`${label}: falta titulo da pagina`);
  const idsFound = [...html.matchAll(/\bid\s*=\s*(["'])(.*?)\1/gi)].map(m => m[2]);
  if (new Set(idsFound).size !== idsFound.length) issues.push(`${label}: identificadores id duplicados`);
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=\s*["'][^"']*["']/i.test(match[0])) issues.push(`${label}: imagem sem atributo alt`);
  }
  for (const match of html.matchAll(/\b(?:href|src)\s*=\s*(["'])(.*?)\1/gi)) {
    checkTarget(file, match[2]);
  }
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (/\bsrc\s*=/.test(match[1]) || /\btype\s*=\s*["'](?:application\/json|application\/ld\+json)/i.test(match[1])) continue;
    if (!match[2].trim()) continue;
    try { new vm.Script(match[2], { filename: relative(root, file) }); scriptsChecked++; }
    catch (error) { issues.push(`${relative(root, file)}: script interno invalido: ${error.message}`); }
  }
}

for (const file of files.filter(path => extname(path) === '.js')) {
  try { new vm.Script(readFileSync(file, 'utf8'), { filename: relative(root, file) }); scriptsChecked++; }
  catch (error) { issues.push(`${relative(root, file)}: JavaScript invalido: ${error.message}`); }
}

const context = { window: {} };
try {
  vm.runInNewContext(readFileSync(join(root, 'assets/banco-questoes.js'), 'utf8'), context);
  const bank = context.window.TRIG_BANK;
  if (!Array.isArray(bank) || bank.length !== 60) throw Error('banco deve conter 60 questoes');
  const seen = new Set();
  bank.forEach((item, index) => {
    const n = index + 1;
    if (!['basico', 'intermediario', 'avancado'].includes(item.l)) issues.push(`Questao ${n}: nivel invalido`);
    if (typeof item.t !== 'string' || !item.t.trim()) issues.push(`Questao ${n}: falta tema`);
    if (typeof item.q !== 'string' || !item.q.trim()) issues.push(`Questao ${n}: falta enunciado`);
    if (seen.has(item.q)) issues.push(`Questao ${n}: enunciado duplicado`);
    seen.add(item.q);
    if (!Array.isArray(item.o) || item.o.length !== 4 || new Set(item.o).size !== 4 || item.o.some(v => typeof v !== 'string' || !v.trim())) issues.push(`Questao ${n}: alternativas invalidas`);
    if (!Number.isInteger(item.a) || item.a < 0 || item.a > 3) issues.push(`Questao ${n}: indice de gabarito invalido`);
    if (typeof item.e !== 'string' || !item.e.trim()) issues.push(`Questao ${n}: falta justificativa`);
  });
} catch (error) {
  issues.push(`Banco de questoes: ${error.message}`);
}

const sitemap = join(root, 'sitemap.xml');
if (existsSync(sitemap)) {
  const xml = readFileSync(sitemap, 'utf8');
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  if (!locations.length) issues.push('sitemap.xml: nenhum endereco encontrado');
  if (new Set(locations).size !== locations.length) issues.push('sitemap.xml: URLs duplicadas');
  for (const url of locations) {
    if (!url.startsWith('https://surreal-complex.github.io/TrigTest/')) {
      issues.push(`sitemap.xml: endereco fora do site: ${url}`);
    } else {
      const slug = url.slice('https://surreal-complex.github.io/TrigTest/'.length);
      checkTarget(sitemap, './' + slug);
    }
  }
}

console.log(`Conferidos ${pages.length} HTML, ${linksChecked} referencias locais e ${scriptsChecked} scripts.`);
if (issues.length) {
  console.error(`Foram encontrados ${issues.length} problema(s):`);
  for (const item of issues) console.error(' - ' + item);
  process.exitCode = 1;
} else {
  console.log('OK: arquivos, ancoras, sintaxe e estrutura do banco de questoes.');
}
