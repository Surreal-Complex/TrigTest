# Trigonometria Interativa — REA

Ambiente educacional de Trigonometria para estudantes do Ensino Médio, com uma sequência de estudo, exploração visual, atividades e jogo digital.

> **Status:** versão de desenvolvimento na branch `rea-materiais-interativos`. Esta versão ainda não substitui a publicada pela branch `main`.

## Conteúdo desta branch

- **`index.html`** — página inicial e trilha com cinco módulos:
  1. Razões trigonométricas no triângulo retângulo;
  2. Círculo trigonométrico;
  3. Funções seno e cosseno;
  4. Identidades, operações com arcos e meio-arco;
  5. Aplicações de alturas e distâncias.
- Dois laboratórios interativos no mesmo HTML: círculo trigonométrico e gráfico da função seno com controles de amplitude e período.
- Questionário com seis questões e comentários explicativos.
- Orientações iniciais para professores.
- **`palacio-trigonometrico.html`** — jogo original do grupo com doze desafios.

O arquivo `index.html` desta branch **inclui CSS e JavaScript internamente**. Portanto, não depende de `assets/estilos.css` ou `assets/interacoes.js`; essa é uma diferença em relação à organização atual da `main`.

## Testar a versão

1. No GitHub, selecione a branch **`rea-materiais-interativos`**.
2. Abra o arquivo `index.html` no editor ou baixe o repositório em ZIP nessa branch.
3. Para executar localmente, mantenha `index.html` e `palacio-trigonometrico.html` na mesma pasta.
4. Abra `index.html` em um navegador.
5. Confira os links de navegação, o ajuste do ângulo no círculo, a amplitude e a frequência do gráfico, as seis questões e o link que abre o jogo.

**Publicação:** o GitHub Pages do projeto atualmente usa a branch `main`. Para colocar esta versão no ar, primeiro revise e integre as alterações por meio do [pull request #1](https://github.com/Surreal-Complex/TrigTest/pull/1), observando eventuais conflitos com alterações posteriores da `main`.

## Proposta pedagógica

**Público-alvo:** Ensino Médio, com revisão dos conhecimentos necessários sobre triângulos e razões trigonométricas.

**Objetivo:** apoiar a compreensão de conceitos de Trigonometria por uma sequência de explicações, investigação de representações, prática com feedback e resolução de desafios.

**Fluxo sugerido:** Estudar → Explorar → Praticar → Jogar → Retomar conceitos.

## Autoria e créditos

Os documentos originais da atividade indicam Jessica Camily Hildebrandt e Peterson Luiz do Nascimento da Silva como integrantes do grupo; a identificação do produto final deve ser confirmada pelos autores.

O site inclui um link para a simulação **Trig Tour**, da PhET Interactive Simulations, Universidade do Colorado Boulder. O material externo não é redistribuído como parte deste repositório.

- [Trig Tour](https://phet.colorado.edu/en/simulations/trig-tour)
- [Licenciamento oficial da PhET](https://phet.colorado.edu/en/licensing)

## Licença — decisão pendente

Antes de divulgar este projeto como REA finalizado, confirmem a titularidade dos textos, figuras, código e jogo, e indiquem uma licença aberta aplicável a cada componente autoral. Uma opção a considerar é CC BY 4.0. Recursos de terceiros devem conservar suas próprias licenças e atribuições.

## Próximas validações

- Revisão matemática e pedagógica dos conteúdos e respostas.
- Testes de navegação e acessibilidade no computador e no celular.
- Conclusão das fichas de autoria, referências e licenciamento.
- Integração desta branch à versão pública quando aprovada.

## Ampliação da biblioteca — novembro de 2026

A branch agora contém uma seção de **biblioteca ampliada**, integrada à página inicial, com os seguintes novos caminhos:

- `conteudos/index.html` — índice dos cinco capítulos.
- `conteudos/fundamentos.html` — ângulos, triângulos, seno, cosseno, tangente e radianos.
- `conteudos/circulo.html` — quadrantes, ângulos de referência e sinais.
- `conteudos/funcoes.html` — funções seno, cosseno e tangente, amplitude e período.
- `conteudos/identidades.html` — relação fundamental, soma de arcos, arco duplo e meio-arco.
- `conteudos/aplicacoes.html` — alturas, distâncias, inclinações e leis dos senos e dos cossenos.
- `conteudos/estilo.css` — estilo compartilhado dos capítulos.
- `jogos/missao-quadrantes.html` — jogo com níveis, oito desafios, dicas, pontuação e comentários.
- `materiais/lista-exercicios.html` — 15 questões comentadas com opção de impressão em PDF.
- `materiais/roteiro-investigativo.html` — sequência de dois encontros com avaliação e mediação.

### Próximas melhorias propostas
1. Expandir cada capítulo com mais representações visuais e sequências graduais.
2. Melhorar a acessibilidade de todos os SVGs e controles.
3. Oferecer mais questões por tópico, com soluções que mostrem estratégias alternativas.
4. Revisar as respostas do novo jogo e testar em navegadores diferentes.
5. Verificar autoria, licenças e referências antes da entrega final do REA.
6. Integrar a branch à `main` depois da revisão, sem perder o histórico.
