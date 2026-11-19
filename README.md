# Trigonometria Interativa — Recurso Educacional Aberto (REA)

Projeto educacional de Trigonometria para o Ensino Médio, com estudo, exploração interativa, treino, jogos e espaço para materiais didáticos produzidos pelo grupo.

## Estrutura do site — edição por abas

A versão reorganizada tem **sete entradas principais** na navegação superior:

1. **Página Inicial** — `index.html`. Apresentação visual, atalhos para todas as áreas e destaque para o Palácio.
2. **Estudar** — `estudar/index.html`. Introdução, finalidade, mapa com dez eixos temáticos, métodos de estudo e glossário, com guias recolhíveis.
3. **Explorar** — `explorar/index.html`. Laboratórios de círculo unitário, gráfico transformável de seno e conversão de unidades; aprofundamentos, curiosidades e fontes externas.
4. **Praticar** — `praticar/index.html`. Questões comentadas, treino interativo por dificuldade, espaço para PDFs, listas, avaliações e desafios.
5. **Jogar** — `jogar/index.html`. Apresentação visual específica de cada jogo, regras e orientações.
6. **Professores** — `professores/index.html`. Planos de aula, estratégias, questões de aplicação, avaliação, recursos e inclusão.
7. **Sobre** — `sobre/index.html`. Projeto, autores, créditos, referências, licenças, informações legais e campos pendentes marcados como `@@@@`.

Os **links da navegação principal** estão no cabeçalho de cada uma dessas páginas. As **sub-abas** são atalhos para seções dentro da página e os **guias recolhíveis** usam o elemento HTML `<details>`.

### Estrutura de arquivos atual

```text
TrigTest/
├── index.html                         Página Inicial
├── assets/
│   ├── rea.css                        Visual roxo, menus e responsividade
│   └── rea.js                         Menu móvel, laboratórios e treino
├── estudar/
│   └── index.html
├── explorar/
│   └── index.html
├── praticar/
│   └── index.html
├── jogar/
│   └── index.html
├── professores/
│   └── index.html
├── sobre/
│   └── index.html
├── conteudos/
│   ├── index.html                     Biblioteca existente
│   ├── fundamentos.html
│   ├── circulo.html
│   ├── funcoes.html
│   ├── identidades.html
│   ├── aplicacoes.html
│   └── estilo.css
├── jogos/
│   └── missao-quadrantes.html
├── palacio-trigonometrico.html
└── materiais/
    ├── lista-exercicios.html
    └── roteiro-investigativo.html
```

Arquivos anteriores `estilos.css` e `interacoes.js` na raiz foram mantidos para preservar o histórico, mas **não são utilizados pelas sete novas páginas**.

## Identidade visual, favicon e logomarca

O símbolo próprio do projeto representa um **círculo trigonométrico com um raio dourado e o símbolo π**, sobre fundo roxo. Foi criado especialmente para o site, usando formas vetoriais originais, sem copiar logomarcas externas. A arte não altera a licença geral ainda pendente de escolha dos titulares.

- `assets/logo-trigonometria.svg` — marca vetorial usada no cabeçalho de todas as sete áreas principais, na Página Inicial e como favicon SVG.
- `assets/favicon-32.png` — favicon alternativo de 32 × 32 pixels.
- `assets/apple-touch-icon.png` — ícone de 180 × 180 pixels para atalhos em dispositivos Apple.
- `favicon.ico` — compatibilidade com navegadores que solicitam o favicon tradicional na raiz.

Para substituir a identidade no futuro, atualize esses quatro arquivos com novas versões consistentes, preservando nomes e caminhos. As páginas HTML já apontam para os arquivos; caso renomeie um arquivo, atualize também o caminho nos elementos `<link rel="icon">` e nas imagens de marcação `<img class="brand-logo">`. **Não envie arquivo de marca de terceiros sem verificar o direito de uso.** O navegador pode manter um ícone anterior em cache; teste em janela anônima.

## Como acrescentar os PDFs depois

**Os PDFs futuros ainda não foram criados nem vinculados**. Por isso, o site apresenta apenas avisos de material em preparação, sem links quebrados.

### 1. Prepare os arquivos

Organize localmente os materiais teóricos, listas, avaliações, roteiros e gabaritos que produzir. Exemplo de destino **sugerido**, não de arquivos já existentes:

```text
materiais/
└── pdfs/
    ├── teoria/
    │   ├── fundamentos.pdf
    │   ├── circulo-trigonometrico.pdf
    │   ├── funcoes-trigonometricas.pdf
    │   ├── identidades.pdf
    │   └── aplicacoes.pdf
    ├── listas/
    │   ├── lista-fundamentos.pdf
    │   ├── lista-circulo.pdf
    │   └── lista-funcoes.pdf
    ├── avaliacoes/
    │   └── avaliacao-diagnostica.pdf
    └── professores/
        └── plano-de-aula-01.pdf
```

Use nomes de arquivo sem espaço e com hífens, para facilitar as URLs.

### 2. Envie para o repositório

No GitHub, abra o repositório, selecione a branch `main` (após a integração da versão) e use **Add file → Upload files**. Envie os documentos para os caminhos acima; crie primeiro as pastas se necessário. Faça **Commit changes**.

### 3. Coloque os links no site

Abra `praticar/index.html` para acrescentar listas e avaliações, `estudar/index.html` para materiais teóricos, ou `professores/index.html` para roteiros. Substitua o texto do cartão "material em preparação" pelo link do PDF. Exemplo, a partir de `praticar/index.html`:

```html
<a href="../materiais/pdfs/listas/lista-fundamentos.pdf" target="_blank" rel="noopener noreferrer">
  Abrir lista de fundamentos em PDF
</a>
```

Para o mesmo arquivo, a partir de `index.html` na raiz, use:

```html
<a href="materiais/pdfs/listas/lista-fundamentos.pdf">Lista de fundamentos</a>
```

Para incluir o link em `materiais/lista-exercicios.html`, use `pdfs/listas/lista-fundamentos.pdf` porque a página está dentro da pasta `materiais/`.

**Teste o link no site publicado.** PDFs de preferência devem permitir selecionar texto, conter título, autoria, referências, descrição de figuras e licença adequada. Gabaritos podem ser arquivos separados.

## Como inserir novos capítulos e conteúdos teóricos

1. Crie o novo arquivo HTML em `conteudos/`, por exemplo `equacoes-trigonometricas.html`.
2. Utilize `conteudos/estilo.css` como referência visual, ou o novo `assets/rea.css` com caminho relativo `../assets/rea.css`.
3. No arquivo `estudar/index.html`, encontre o guia do novo tema e substitua o aviso de material em preparação por um link:
   `<a href="../conteudos/equacoes-trigonometricas.html">Estudar equações trigonométricas</a>`.
4. Acrescente o capítulo também ao índice `conteudos/index.html`.
5. Faça commit e teste a navegação.

As trilhas contemplam fundamentos, círculo, funções, identidades, aplicações, equações e inequações, funções inversas, periodicidade, coordenadas polares, números complexos e contextualização histórica. Alguns desses eixos são **projetos de expansão** e não devem ser apresentados como capítulos já completos.

## Como preencher os campos @@@@ de Sobre

Acesse o arquivo `sobre/index.html` no GitHub, clique no ícone de lápis **Edit this file**, use `Ctrl + F` para localizar cada `@@@@` e troque apenas o marcador pelo valor correto.

Exemplo:

```html
<dd><span class="token">@@@@</span></dd>
```

Pode ser alterado para:

```html
<dd>Universidade / Instituição de Ensino</dd>
```

**Não substitua todos os `@@@@` automaticamente por um único valor**, porque cada marcador corresponde a um dado diferente. Os campos pendentes incluem:

- instituição de ensino; curso e disciplina; orientação docente;
- contato institucional; versão e data da ficha técnica;
- licença dos textos, atividades, jogos e códigos;
- condições de reutilização e declaração de titularidade;
- créditos de materiais externos adicionais;
- política de privacidade; termos de uso e direitos autorais;
- declaração de acessibilidade; contato para correções e data dos termos.

Os documentos anteriores indicam **Jessica Camily Hildebrandt** e **Peterson Luiz do Nascimento da Silva** como autores do trabalho. Confirmem a grafia e as contribuições antes de publicar a ficha final.

## Como testar antes de publicar

- Conferir os menus no computador e celular; a versão móvel usa um botão **Menu**.
- Testar os atalhos internos e o comportamento de abertura dos painéis recolhíveis.
- Conferir o círculo interativo, o gráfico de seno e o conversor de graus/radianos em `Explorar`.
- Conferir o treino em `Praticar` nos quatro modos (básico, intermediário, avançado e misto).
- Acessar os dois jogos em `Jogar` e verificar se não há erros nas questões.
- Conferir se os marcadores `@@@@` estão apenas na página Sobre e na documentação.
- Garantir que não há links para PDFs ainda inexistentes.
- Confirmar créditos e licenças antes da entrega acadêmica como REA.

## Publicação

O GitHub Pages deste projeto publica a branch `main`. Modificações realizadas em outra branch **não ficam públicas até serem integradas à `main`**. Use pull requests para revisar alterações antes da integração.

URL esperada, caso a configuração do Pages permaneça a mesma:

https://surreal-complex.github.io/TrigTest/

## Referências externas

- [Mathematics LibreTexts](https://math.libretexts.org/) — biblioteca de Matemática, com materiais de autores e licenças variados.
- [PhET — Trig Tour](https://phet.colorado.edu/en/simulations/trig-tour) — simulação para explorar relações trigonométricas; confira [as licenças específicas](https://phet.colorado.edu/en/licensing).
- [Portal da Matemática / OBMEP](https://portaldaobmep.impa.br/) — recursos complementares de Matemática.

Esta versão apenas **indica links para referências externas**; não copia os materiais desses sites. Para usar ou adaptar conteúdo, imagens ou exercícios específicos, verifique autoria, licença e obrigações de atribuição da obra utilizada.

## Documentação legal e acadêmica — minutas para revisão

Foi acrescentado o [portal público de documentação](https://surreal-complex.github.io/TrigTest/documentos/) e a pasta [documentos/](documentos/), contendo:

- [Ficha técnica](documentos/FICHA-TECNICA.md)
- [Licenciamento e direitos autorais](documentos/LICENCIAMENTO.md)
- [Créditos, fontes e transparência de IA](documentos/CREDITOS-E-REFERENCIAS.md)
- [Política de privacidade — minuta](documentos/PRIVACIDADE.md)
- [Termos de uso — minuta](documentos/TERMOS-DE-USO.md)
- [Acessibilidade — declaração e plano de testes](documentos/ACESSIBILIDADE.md)
- [Registro de fontes e licenças](documentos/REGISTRO-DE-FONTES-E-LICENCAS.md)
- [Guia de preenchimento e publicação](documentos/GUIA-DE-PREENCHIMENTO.md)
- [Modelo de autorização para colaboradores](documentos/MODELO-DE-AUTORIZACAO.md)
- [Auditoria de dados pré-preenchidos e pendências — 16/11/2026](documentos/AUDITORIA-DE-PENDENCIAS.md)

**Importante:** a [auditoria](documentos/AUDITORIA-DE-PENDENCIAS.md) separa informações **🟨 pré-preenchidas por fonte pública (conferência recomendada)**, informações **`@@@@` para confirmação dos responsáveis** e **campos-modelo** que só serão preenchidos quando usados. Os documentos continuam minutas. Não se deve retirar o status de minuta antes de revisar os fatos com os responsáveis. Não há arquivo `LICENSE` definitivo porque os titulares ainda não escolheram e aprovaram uma licença.

## Como referenciar o site em trabalhos acadêmicos

A aba [Sobre → Como citar](https://surreal-complex.github.io/TrigTest/sobre/#como-citar) contém referência ABNT sugerida, citação autor-data e crédito breve para apresentações, com botões de cópia. O [guia de citação](documentos/COMO-CITAR.md) traz também um modelo BibTeX para LaTeX. O arquivo [CITATION.cff](CITATION.cff), na raiz, habilita a função **Cite this repository** do GitHub.

**Atenção:** os autores indicados (Jessica Camily Hildebrandt e Peterson Luiz do Nascimento da Silva) constam da documentação do projeto, mas a grafia, atribuição de contribuições e os dados institucionais precisam de confirmação. Citar não substitui as permissões para adaptar ou redistribuir conteúdos.

## Transparência sobre apoio de IA generativa

A criação, reorganização visual, programação assistida e documentação do projeto contaram com apoio de **ChatGPT (OpenAI)**. As contribuições e os limites do uso estão descritos na [aba Sobre — Uso de IA](https://surreal-complex.github.io/TrigTest/sobre/#ia) e no documento [Créditos e referências](documentos/CREDITOS-E-REFERENCIAS.md). Modelos exatos, datas de uso, eventuais outras ferramentas e nomes de revisores devem ser confirmados e preenchidos nos campos `@@@@`.

## Licenciamento do projeto

**PENDENTE — @@@@**

Uma licença aberta para textos, imagens, atividades e jogos precisa ser definida pelos titulares e devidamente publicada. Evite atribuir uma licença sem confirmar a titularidade dos componentes ou a possibilidade de adaptação e redistribuição dos materiais de terceiros.
