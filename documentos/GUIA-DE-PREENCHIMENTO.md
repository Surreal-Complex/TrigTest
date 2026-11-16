# Manual de preenchimento e publicação dos documentos

Este manual foi preparado para o repositório **[Surreal-Complex/TrigTest](https://github.com/Surreal-Complex/TrigTest)**, publicado em **[GitHub Pages](https://surreal-complex.github.io/TrigTest/)**. As minutas não equivalem a documentos finais assinados/aprovados. Não substitua todos os `@@@@` de uma vez: cada um representa uma informação diferente, às vezes repetida em mais de um documento.

## 1. Quais arquivos editar

| Arquivo | Serve para | O que precisa completar |
| --- | --- | --- |
| `documentos/FICHA-TECNICA.md` | Identificação, autoria, orientação e manutenção | Vínculos, funções, versão, contato, aprovação. |
| `documentos/LICENCIAMENTO.md` | Escolha de licenças e titularidade | Licenças por tipo de obra, consentimento dos autores, limites de materiais externos. |
| `documentos/CREDITOS-E-REFERENCIAS.md` | Créditos de autores, fontes e uso de IA | Participações individuais, revisores, bibliografia, imagens/códigos de terceiros. |
| `documentos/REGISTRO-DE-FONTES-E-LICENCAS.md` | Evidência para cada item reutilizado | URL da obra, licença exata, captura da licença, data, modificações e autorização. |
| `documentos/PRIVACIDADE.md` | Dados pessoais e hospedagem | Responsável/controlador, canal, tecnologias usadas, serviços, segurança, direitos e prazos. |
| `documentos/TERMOS-DE-USO.md` | Regras de acesso, uso e responsabilidade | Gestor, contato, licenças, data de vigência e aprovação institucional. |
| `documentos/ACESSIBILIDADE.md` | Barreiras, testes e atendimento | Resultados reais de testes com teclado/leitor de tela/zoom, responsável e canal. |
| `documentos/MODELO-DE-AUTORIZACAO.md` | Modelo de anuência para colaboradores | Nomes, obras, permissões expressas, data, assinaturas; **não publicar assinaturas ou documentos pessoais**. |
| `documentos/index.html` | Portal público dos documentos, na cor roxa | Atualizar resumos/status depois da aprovação; links apontam para os documentos no GitHub. |
| `sobre/index.html` | Ficha visível na aba Sobre | Substituir todos os campos `@@@@` correspondentes e ajustar o status para definitivo quando couber. |
| `README.md` | Instruções técnicas do repositório | Atualizar a seção de licenciamento e o registro de versões. |
| `LICENSE` (ainda inexistente) | Licença do software após decisão | **Criar só depois** de definir titularidade e licença; não inventar essa autorização. |

## 2. De onde tirar as informações pendentes

| Informação | Onde conseguir | Onde inserir |
| --- | --- | --- |
| Nomes, coautoria, funções e aprovações | Arquivos de autoria, histórico do projeto e concordância escrita de cada colaborador | Ficha, créditos, licenciamento e Sobre. |
| Instituição, curso, disciplina, campus e orientação | Plano de ensino, secretaria, coordenação, projeto acadêmico ou docente | Ficha e Sobre. |
| Contato público e gestor | Responsáveis pelo projeto e setor institucional de referência; criar e-mail funcional se desejado | Ficha, termos, privacidade, acessibilidade e Sobre. |
| Licença do conteúdo original | Deliberação escrita dos titulares depois de ler Creative Commons | Licenciamento, ficha, README, Sobre e avisos nos PDFs. |
| Licença do código original | Deliberação dos titulares, análise de dependências; ler OSI/SPDX | Licenciamento, `LICENSE` após aprovação e comentários/README. |
| Licenças de terceiros | Página original de cada recurso, licença do livro/site, permissões por e-mail quando necessário | Registro de fontes, créditos, rodapés do material adaptado. |
| Uso de IA e revisão humana | Histórico de criação, nome das ferramentas, participantes e validação efetiva | Créditos, licenciamento e ficha. |
| Hospedagem, IP, cookies e serviços | Código do repositório, configurações GitHub Pages, DevTools do navegador, políticas do provedor | Privacidade e Sobre. |
| Responsável LGPD e canal de direitos | Responsáveis pelo controle do recurso e, quando houver, área de privacidade institucional | Privacidade, ficha e Sobre. |
| Direitos de menores / imagens de alunos | Coordenação, responsáveis legais e orientações da ANPD; não coletar dados desnecessários | Privacidade, termos e registros internos de autorização. |
| Testes de acessibilidade e barreiras | Testes com teclado, leitores de tela, auditorias e devolutivas de usuários | Acessibilidade e Sobre. |
| Datas, versão e responsáveis pela aprovação | Registro de publicação/commit e aprovação expressa | Todos os documentos pertinentes e Sobre. |

## 3. Como editar diretamente no GitHub (sem instalar programas)

1. Entre em **https://github.com/Surreal-Complex/TrigTest** com uma conta que tenha permissão de edição.
2. Abra a pasta `documentos/` e clique no arquivo desejado, por exemplo, `FICHA-TECNICA.md`.
3. Clique no ícone **lápis** (*Edit this file*), ou use o atalho de edição disponível na interface.
4. Use **Ctrl + F** para localizar `@@@@`. Substitua **só o marcador correspondente** pelo dado comprovado. Atenção: o arquivo pode conter vários marcadores com funções diferentes.
5. Clique em **Commit changes**. Para alterações sensíveis (autorais e jurídicas), prefira criar uma nova branch e um **pull request** para revisão antes de integrar à `main`.
6. Edite também `sobre/index.html` nos campos equivalentes. No HTML, substitua `<span class="token">@@@@</span>` pelo texto validado, ou pelo mesmo `<span>` com texto atualizado, se preferir manter o destaque.
7. No arquivo `documentos/index.html`, retire a indicação **Minuta / pendente** apenas do documento realmente revisado e aprovado.
8. Após a integração na branch `main`, aguarde a publicação do GitHub Pages e confira **https://surreal-complex.github.io/TrigTest/sobre/** e **https://surreal-complex.github.io/TrigTest/documentos/**.

**Importante:** os documentos `.md` são o texto completo que pode ser editado e lido no GitHub; o portal `/documentos/` os organiza e disponibiliza links públicos. Se desejar conteúdo jurídico completo visível dentro de cada página do site (sem abrir GitHub), será preciso criar páginas HTML correspondentes ou ativar uma conversão Markdown→HTML com links testados.

## 4. Como criar `LICENSE` no momento certo

1. Após aprovação documentada, escolha a licença real do código e confira o texto canônico em [OSI](https://opensource.org/licenses) ou [SPDX](https://spdx.org/licenses/).
2. Crie na **raiz do repositório** um arquivo com o nome exato `LICENSE`, contendo o texto integral da licença e preenchimentos exigidos (ex.: ano e detentores na MIT).
3. Para textos e atividades sob licença Creative Commons, mantenha **avisos separados** em `LICENCIAMENTO.md` e nos próprios arquivos; não presuma que a MIT do código inclui ilustrações, PDFs ou terceiros.
4. Atualize README e Sobre com links diretos para as licenças aprovadas. Elimine a frase “licença pendente” **somente quando for verdade**.

## 5. Como incorporar futuramente materiais didáticos

- Envie o PDF acessível para a pasta planejada, como `materiais/pdfs/listas/lista-01.pdf`.
- Abra `praticar/index.html` e adicione `<a href="../materiais/pdfs/listas/lista-01.pdf">Lista 01 (PDF)</a>`; para teoria use `estudar/index.html`; para materiais docentes use `professores/index.html`.
- Na primeira página do PDF, indique **título, autores, versão, bibliografia, licença, fonte de figuras e créditos das adaptações**.
- Acrescente os materiais de terceiros ao registro de licenças. Evite subir comprovantes com assinaturas, RG, CPF, e-mails pessoais ou dados de menores ao repositório público.

## 6. Conferência antes de declarar a publicação regularizada

- [ ] Todos os titulares e contribuições foram conferidos e autorizaram a licença escolhida.
- [ ] Os materiais de terceiros têm fonte, licença, atribuição e compatibilidade registradas.
- [ ] As condições de hospedagem, dados, cookies e serviços foram testadas.
- [ ] A política de privacidade e o contato de direitos refletem o site **como ele está hoje**.
- [ ] Regras específicas relativas ao público menor de idade foram avaliadas.
- [ ] Testes de acessibilidade foram realizados e as limitações divulgadas.
- [ ] Dados institucionais, créditos, contatos, aprovações, versões e datas estão atualizados.
- [ ] Todas as menções “MINUTA” foram retiradas **apenas depois da aprovação** e não há `@@@@` remanescentes em documentos declarados definitivos.

**Atenção:** revisão técnica e jurídica da instituição ou de profissional habilitado pode ser necessária conforme a aplicação. Estes modelos facilitam o levantamento, mas não garantem, isoladamente, conformidade legal.
