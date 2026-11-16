# Auditoria de preenchimento e conferência — 16/11/2026

> **Documento de trabalho, não aprovação jurídica.** 🟨 **PRÉ-PREENCHIDO — CONFERÊNCIA RECOMENDADA** identifica informação observável em fonte pública ou em inspeção estática do repositório. **@@@@** identifica decisão, confirmação de pessoa responsável ou dado ainda não obtido. **MODELO** identifica campo que só será preenchido quando o formulário for usado. Nunca confunda uma licença da **fonte consultada** com a licença do **nosso site**.

## 1. Dados que foi possível pré-preencher

| Informação | Pré-preenchimento 🟨 (conferir antes de validar definitivamente) | Evidência / onde conferir |
| --- | --- | --- |
| Endereço público | https://surreal-complex.github.io/TrigTest/ | Página publicada / configuração Pages do repositório. |
| Repositório de código | https://github.com/Surreal-Complex/TrigTest | Endereço público do GitHub. |
| Conta que hospeda o repositório | Surreal-Complex | URL do repositório; **não identifica, por si só, a pessoa ou instituição titular dos direitos**. |
| Hospedagem informada no projeto | GitHub Pages | [Documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages); confirmar configuração de produção e eventuais domínios alternativos. |
| Auditoria preliminar do código | 16/11/2026; 35 arquivos no inventário inspecionado, base do commit `6e75d75f3ae4a22456138e0785121819a87986af` | Inventário do repositório; vale para essa versão, **não** substitui teste no navegador, rede, produção nem aprovação final. |
| Coleta própria visível no código | Na versão analisada, não foram localizados formulários `<form>`, chamadas `fetch()`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`, uso explícito de `localStorage`, `sessionStorage` ou `document.cookie`. | Pesquisa nos arquivos locais HTML/JS/CSS. **Não é garantia de ausência total de tratamento de dados**; logs do provedor e alterações futuras podem existir. |
| Dependências externas carregadas automaticamente no HTML | Não foram identificados `<iframe>` nem `<script src="https://...">` nem folhas de estilo remotas nesse inventário. | Inspeção estática, pendente de verificação em produção. Links externos abertos voluntariamente pelos visitantes são outra situação. |
| Identificação de dois autores indicados | Jessica Camily Hildebrandt; Peterson Luiz do Nascimento da Silva | Nomes já indicados nos materiais acadêmicos do projeto, **coautoria, grafia e direitos ainda exigem anuência humana**. |
| Assistência de IA identificada | ChatGPT (OpenAI) no planejamento, textos de apoio, interface e código | Histórico de colaboração e [Créditos e referências](CREDITOS-E-REFERENCIAS.md). Modelos exatos, proporções, revisão e aprovação continuam `@@@@`. |
| OBMEP — página geral de uso | **Creative Commons Atribuição 3.0 Brasil (CC BY 3.0 BR)** indicada pelo Portal da Matemática/OBMEP | [Página do Portal sobre o uso do material](https://portaldaobmep.impa.br/index.php/site/usar?a=2) → [texto CC BY 3.0 BR](https://creativecommons.org/licenses/by/3.0/br/). Conferir avisos específicos do item antes de reproduzir. |
| PhET — simulações HTML comuns | **CC BY-NC 4.0**, conforme página geral de licenciamento | [PhET Licensing](https://phet.colorado.edu/en/licensing). **Não estender automaticamente a PhET-iO, marcas, imagens de terceiros ou uso comercial**. A obra indicada no site hoje é um **link**. |
| Math LibreTexts / OpenStax — três páginas listadas na biblioteca | Cada uma das três páginas listadas abaixo mostra **CC BY 4.0** e atribuição **OpenStax** | [Capítulo Trigonometric Functions — Precalculus 2e](https://math.libretexts.org/Bookshelves/Precalculus/Precalculus_2e_%28OpenStax%29/05%3A_Trigonometric_Functions); [Right Triangle Trigonometry — Algebra and Trigonometry 2e](https://math.libretexts.org/Workbench/Algebra_and_Trigonometry_2e_%28OpenStax%29/07%3A_The_Unit_Circle_-_Sine_and_Cosine_Functions/7.03%3A_Right_Triangle_Trigonometry); [Unit Circle — Precalculus 1e](https://math.libretexts.org/Bookshelves/Precalculus/Precalculus_1e_%28OpenStax%29/13%3A_Trigonometric_Functions/13.02%3A_Unit_Circle_-_Sine_and_Cosine_Functions). **A plataforma não possui licença única**; verificar imagens, versões e adaptações. |

**Alcance da checagem:** esses resultados são um retrato da fonte pública/documentação e código, não uma auditoria jurídica, de segurança ou de rede. O site continua sendo um projeto **com licenciamento original pendente de decisão**.

## 2. Pendências que dependem de pessoas e instituições

| Campo pendente | Onde conseguir | Onde editar |
| --- | --- | --- |
| Grafia, coautoria, contribuição e titularidade de cada parte | Confirmação escrita de Jessica, Peterson e eventuais coautores; instrumentos de cessão/contratos institucionais | `FICHA-TECNICA.md`, `CREDITOS-E-REFERENCIAS.md`, `LICENCIAMENTO.md`, `sobre/index.html`, `CITATION.cff`. |
| Instituição, curso, disciplina, professor(a), campus e projeto | Plano de ensino, coordenação, secretaria, orientador(a) e documentação acadêmica | Ficha técnica e aba Sobre. |
| Contato público, titular do tratamento de dados e fluxo para atendimento | Equipe gestora/instituição; canal público autorizado, sem expor dados pessoais desnecessários | `PRIVACIDADE.md`, `TERMOS-DE-USO.md`, `ACESSIBILIDADE.md`, ficha e Sobre. |
| Licença própria dos textos/PDFs e dos códigos/jogos | Decisão documentada e consentimento dos efetivos titulares; examinar permissões de terceiros | `LICENCIAMENTO.md`, `REGISTRO-DE-FONTES-E-LICENCAS.md`, `README.md`, Sobre e futuro `LICENSE`. |
| Outros materiais efetivamente reproduzidos e adaptações | Inventário item a item; página da obra, licença, autor, versão e permissões adicionais | Registro de fontes, créditos, notas nos próprios materiais. |
| Versão editorial, data de aprovação, publicação formal, marcas e apoios | Histórico Git + decisão editorial/institucional formal | Ficha, termos, citação, Sobre. |
| Modelos de IA, duração, validação matemática, revisão técnica e responsáveis | Histórico das conversas/ferramentas e confirmação dos participantes | Créditos, licenciamento e Sobre. |
| Provedores, política definitiva e dados pessoais | Conferir configurações GitHub, rede do site no navegador, políticas contratuais e eventual responsável LGPD | Privacidade, termos e Sobre. |
| Acessibilidade real e barreiras dos jogos/gráficos | Teste com teclado, leitores de tela, zoom, contraste e usuários | `ACESSIBILIDADE.md` e Sobre. |
| Assinaturas de autorização e datas de consulta de cada usuário | Titulares (autorização) ou pesquisador que efetivamente consultou a fonte (citações) | Modelos/registro; **documentos assinados devem ficar fora do repositório público**. |

## 3. O que não significa “pendência do site”

Os `@@@@` em `MODELO-DE-AUTORIZACAO.md` são **campos intencionais de formulário em branco**; não devem ser preenchidos com pessoas fictícias nem assinaturas publicadas. Os `@@@@` de data de acesso em `COMO-CITAR.md` e na aba Sobre são **variáveis de cada trabalho acadêmico**; quem cita informa o dia de sua consulta. Os `@@@@` em exemplos de crédito de imagens e de PDFs futuros são preenchidos **quando o material existir**.

## 4. Como revisar o destaque e inserir as informações

1. Abra [a pasta de documentos](https://github.com/Surreal-Complex/TrigTest/tree/main/documentos) ou [a aba Sobre](https://github.com/Surreal-Complex/TrigTest/blob/main/sobre/index.html) no GitHub com sua conta autorizada.
2. Busque **`🟨`** nos arquivos `.md`, ou **“Verificado — confira”** na página Sobre. Confira a fonte citada e, se permanecer correta, remova a indicação *provisória* ao aprovar o documento. A data da conferência deve ser atualizada.
3. Busque **`@@@@`** para completar apenas os campos que realmente dependem de vocês. Dados copiados para vários arquivos precisam ser consistentes. **Não troque modelos de uso futuro por dados inventados.**
4. Em `sobre/index.html`, edite o texto visível dentro do `<dd>` correspondente; o estilo `<span class="token">@@@@</span>` identifica o que está faltando, enquanto `<span class="review-badge">...` destaca os dados pré-preenchidos.
5. Faça commit em branch de revisão, crie pull request, confira e publique após integrar à `main`. Verifique [site publicado](https://surreal-complex.github.io/TrigTest/) e [portal documental](https://surreal-complex.github.io/TrigTest/documentos/).
6. **Não declare uma licença do site nem conformidade legal antes das decisões, testes e autorizações pendentes.**

## 5. Sites oficiais para novas verificações

- [GitHub Pages — hospedagem](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) e [privacidade do GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- [Math LibreTexts](https://math.libretexts.org/), [PhET Licensing](https://phet.colorado.edu/en/licensing), [OBMEP — como usar](https://portaldaobmep.impa.br/index.php/site/usar?a=2), [OpenStax](https://openstax.org/).
- [Creative Commons — escolha](https://creativecommons.org/chooser/), [SPDX](https://spdx.org/licenses/), [Open Source Initiative](https://opensource.org/licenses).
- [ANPD](https://www.gov.br/anpd/pt-br), [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), [Lei de Direitos Autorais](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm), [WCAG 2.2/W3C](https://www.w3.org/TR/WCAG22/).

**Próxima conferência formal por pessoa responsável:** **@@@@** (nome, data e parecer). 
