# Guia de validação final do Trigonometria Interativa

**Situação:** lista de verificações humanas e editoriais pendentes. Esta página não é certificado de acessibilidade, conformidade jurídica ou correção matemática. Atualizada em 19/11/2026.

**Site:** https://surreal-complex.github.io/TrigTest/

O repositório já possui uma verificação automática em `scripts/validar-site.mjs` (executada pelo GitHub Actions). Ela confere arquivos, links internos, âncoras, sintaxe de JavaScript e estrutura do banco de 60 questões. **Não substitui** os testes abaixo nem verifica se todos os gabaritos estão matematicamente corretos.

## 1. Revisão de acessibilidade — fazer com pessoas e dispositivos reais

Responsável pelo teste: **@@@@**. Data: **@@@@**. Dispositivos e navegadores: **@@@@**.

- [ ] **Teclado:** acesse a Página Inicial, Estudar, Explorar, Praticar, Jogar, Professores e Sobre. Use `Tab`, `Shift+Tab`, `Enter`, `Espaço` e teclas direcionais sem mouse. Confirme que todos os controles importantes funcionam e o foco é visível.
- [ ] **Menus móveis:** use um celular e confira se o botão Menu abre, fecha e permite selecionar todas as áreas.
- [ ] **Leitor de tela:** teste ao menos com NVDA no Windows (https://www.nvaccess.org/) ou VoiceOver no macOS/iOS. Verifique títulos, instruções, questões, alternativas, resultados e mensagens de erro.
- [ ] **Zoom:** amplie o navegador para 200% e 400%. Confirme que não há cortes, sobreposições, textos ocultos nem controles inacessíveis.
- [ ] **Gráficos:** experimente círculo unitário, transformações do seno, lei dos cossenos e funções inversas. Confirme que toda informação importante é comunicada também por texto, não apenas pela figura ou pela cor.
- [ ] **Jogos:** complete uma partida de cada jogo usando teclado, leitor de tela e, separadamente, dispositivo sensível ao toque. Observe se dicas, respostas e pontuação são compreensíveis.
- [ ] **Contraste:** avalie textos, botões e estados de acerto/erro em fundos claros e escuros. Não use somente cores para comunicar respostas.
- [ ] **Pessoas reais:** se possível, peça a pelo menos uma pessoa que use tecnologia assistiva para executar uma atividade e relatar barreiras encontradas.

Para conduzir a revisão, utilize a orientação oficial do W3C: https://www.w3.org/WAI/test-evaluate/ e https://www.w3.org/TR/WCAG22/.

**Resultado e barreiras encontradas:** **@@@@**.

## 2. Revisão matemática e pedagógica — necessária antes da versão acadêmica definitiva

Responsáveis: **@@@@**. Data: **@@@@**.

- [ ] Resolver **independentemente** as 60 questões do banco em `assets/banco-questoes.js`; conferir as quatro alternativas, gabarito, justificativa, nível e possíveis ambiguidades.
- [ ] Revisar os dez capítulos em `conteudos/`, especialmente domínios, soluções gerais, notação, demonstrações, gráficos, unidades e definições históricas.
- [ ] Resolver e testar as questões e explicações geradas pelos dois jogos.
- [ ] Conferir os resultados dos laboratórios com casos conhecidos; testar valores extremos dos controles e entradas inválidas.
- [ ] Aplicar um pequeno teste-piloto com estudantes e professores; registrar dúvidas recorrentes, tempo e clareza dos enunciados.
- [ ] Validar referências externas, citações, atribuições autorais e licenças para os materiais efetivamente incorporados.

**Observações da revisão:** **@@@@**.

## 3. Teste visual e técnico manual — roteiro rápido

- [ ] Abrir o site no Chrome/Edge, Firefox e pelo menos um navegador móvel. Conferir larguras estreitas (aproximadamente 320–390 px), médias (768 px) e desktop.
- [ ] Visitar todas as sete abas e os dez capítulos. Abrir e fechar os guias recolhíveis.
- [ ] Conferir que os subtítulos e as sub-abas não se sobrepõem, sobretudo na página Estudar.
- [ ] Usar a busca de Estudar; ativar e desativar o progresso local, verificando o funcionamento do botão de apagar marcações.
- [ ] Resolver treinos nas três dificuldades e no modo misto; conferir reinício, pontuação e explicações.
- [ ] Gerar uma folha para professores em múltipla escolha e resposta aberta; imprimir/salvar como PDF, com e sem gabarito.
- [ ] Abrir um endereço inexistente, por exemplo `https://surreal-complex.github.io/TrigTest/pagina-inexistente-para-teste`, e confirmar a página personalizada de erro 404.
- [ ] Conferir o mapa de páginas em `https://surreal-complex.github.io/TrigTest/sitemap.xml`.
- [ ] Abrir o console do navegador (F12) e conferir se há erros de JavaScript ou requisições de arquivos inexistentes durante a navegação.

**Observações dos testes:** **@@@@**.

## 4. Conferir o teste automático no GitHub

1. Abra https://github.com/Surreal-Complex/TrigTest.
2. Selecione **Actions** e localize **Validacao estatica do site**.
3. Abra a execução correspondente à atualização mais recente da branch `main`.
4. Confirme que o trabalho **Conferir links, scripts e questoes** terminou com sucesso. Se falhar, abra o registro para ver os caminhos e as linhas indicadas.
5. Execute a mesma rotina após cada inclusão de PDF, capítulo, jogo ou alteração de links.

Localmente, com Node.js instalado, é possível executar `node scripts/validar-site.mjs` na pasta do repositório.

## 5. Materiais autorais e documentos do projeto

- [ ] Elaborar, revisar e inserir as apostilas, avaliações, listas em PDF e gabaritos de autoria humana. Seguir o roteiro de pastas e links do `README.md`.
- [ ] Conferir a licença específica de cada material externo antes de reproduzir conteúdo ou imagens. Apenas colocar um link externo não significa incorporar sua licença ao site.
- [ ] Completar e aprovar os campos `@@@@` da ficha técnica, autoria, licenciamento, termos, privacidade e demais minutas. Consultar `documentos/GUIA-DE-PREENCHIMENTO.md`.
- [ ] Revisar a minuta `documentos/ACESSIBILIDADE.md` depois dos testes humanos, registrando resultados e barreiras conhecidas sem declarar conformidade não comprovada.

## 6. Visibilidade em mecanismos de busca — opcional

- [ ] Se desejar que o site seja encontrado em pesquisas, usar o Google Search Console (https://search.google.com/search-console/), verificar a titularidade do domínio/propriedade e enviar o endereço `https://surreal-complex.github.io/TrigTest/sitemap.xml`.
- [ ] Não prometer indexação imediata ou posição nos resultados: o sitemap facilita descoberta, mas não garante indexação.

## 7. Encerramento da validação

| Item | Resultado | Nome e data |
| --- | --- | --- |
| Revisão matemática | **@@@@** | **@@@@** |
| Revisão pedagógica | **@@@@** | **@@@@** |
| Acessibilidade | **@@@@** | **@@@@** |
| Teste em celulares e navegadores | **@@@@** | **@@@@** |
| Direitos autorais e licenças | **@@@@** | **@@@@** |
| Documentos e informações legais | **@@@@** | **@@@@** |

**Importante:** nenhuma marcação de `@@@@` deve ser substituída por uma aprovação fictícia. O site pode continuar disponível como protótipo educacional enquanto essas decisões e testes permanecem pendentes.
