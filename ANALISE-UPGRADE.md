# Análise e proposta de evolução do portfólio

Análise em 4 de novembro de 2026. Repositório: https://github.com/fatalite38/Portfolio, branch `master`, commit `ed5fec71bb9c0a7e9c513171624d6bda8bf6adea`.

## Diagnóstico

A base é pequena e simples: HTML, CSS e JavaScript, sem framework ou etapa de build. Isso é uma vantagem para manutenção. O principal problema é que a apresentação continua descrevendo um estágio anterior da carreira e esconde as evidências de evolução.

| Prioridade | Evidência no repositório | Efeito | Proposta |
| --- | --- | --- | --- |
| Alta | `index.html` contém “Computer engineering student”. | O visitante recebe uma informação antiga sobre a formação. | Apresentar Engenharia de Computação concluída e a especialização em IA em andamento, com base no contexto atual informado por Luiz. |
| Alta | Portfólio contém apenas Snake Game e dois blocos estáticos “Loading...”. | A página transmite que os projetos não foram concluídos ou não carregaram. | Destacar Coco Cuesta, Gelo Gestão e BERT; manter Snake como estudo inicial secundário. |
| Alta | Links do currículo usam `assets/Curriculum.pdf`; a árvore contém `assets/Arquivo/Curriculum.pdf`. | O caminho publicado pelo HTML não corresponde ao arquivo no repositório. | Corrigir o caminho ao usar um PDF atualizado. O protótipo não oferece um currículo antigo como se fosse atual. |
| Alta | HTML usa `.acordeon Open`; CSS e JS consultam `.open`. | A intenção de abrir as seções inicialmente não funciona, pois o nome da classe é diferente. | Deixar os projetos e a trajetória visíveis; reservar diálogos para o aprofundamento dos cases. |
| Média | Botões de acordeão não informam `aria-expanded` ou `aria-controls`; o conteúdo recolhido usa apenas altura/opacidade. | Estado não é comunicado adequadamente e conteúdo invisível pode continuar na navegação por teclado. | Controles com estado explícito, diálogos nativos, foco visível e retorno do foco. |
| Média | `index.html` referencia `assets/CSS/about.css`, inexistente na árvore consultada. | Requisição de um arquivo que não existe e ruído na manutenção. | Remover referências obsoletas e verificar todos os assets. |
| Média | Imagens de links sociais e do projeto não têm descrições acessíveis; vários links abrem outra aba sem `rel`. | Ações ficam difíceis de reconhecer por leitores de tela. | Nomear links e ações e adotar `rel="noopener noreferrer"`. |
| Média | `</div>` fecha a estrutura iniciada com `<main>`; há itens `<li>` sem fechamento explícito e uso de títulos dentro de botões. | Estrutura depende da recuperação automática do navegador. | HTML semântico consistente, uma hierarquia de títulos e navegação por seção. |
| Editorial | Mistura de português e inglês, créditos de 2023, lista de logos e habilidades pessoais genéricas. | O visitante precisa deduzir o que Luiz sabe construir e quais informações ainda valem. | Português consistente, competências ligadas a projetos, formação e experiência contextualizadas. |

As constatações acima se baseiam na leitura dos arquivos e da árvore do GitHub. Não representam uma auditoria de segurança nem uma medição de Lighthouse da publicação antiga.

## O que manter

- Identidade azul e referência ao tema escuro do portfólio original.
- Avatar original, nome, localização e links profissionais.
- Simplicidade técnica: o protótipo continua sem dependências de execução.
- Snake Game como parte da evolução, sem ocupar o lugar dos projetos mais recentes.

## A nova apresentação

1. Abertura com nome, formação, foco em React/TypeScript e uma chamada direta para os projetos.
2. Janela interativa que apresenta três áreas: marca, operação e IA.
3. Projetos com contexto, implementação, tecnologias e links reais.
4. Gelo Gestão identificado como projeto em desenvolvimento; imagens explicitamente ilustrativas.
5. Formação e trajetória visíveis, em vez de informação central escondida em acordeões.
6. Contato por e-mail público do repositório, LinkedIn atual informado no projeto Coco Cuesta e GitHub.
7. Tema claro/escuro com preferência salva, navegação no celular e suporte a teclado.

## Critério de seleção dos projetos

- **Coco Cuesta:** demonstra aplicação web real e relação com um negócio.
- **Gelo Gestão:** demonstra regras de operação, autenticação e permissões. Não afirmar que todos os módulos planejados estão concluídos.
- **BERT:** conecta a graduação à IA aplicada; documentar o notebook e seus limites sem inventar métricas ou uma API em produção.
- **Desafios Node.js:** evidenciam fundamentos e organização do código.
- **Snake Game:** preserva um estudo inicial como registro de evolução.

## Antes da publicação definitiva

- Confirmar se o e-mail público do portfólio antigo ainda é o contato desejado.
- Decidir se mantém o avatar ilustrado ou fornece uma foto profissional atual.
- Anexar um currículo atualizado; só então adicionar a ação de download.
- Revisar se os contatos e links públicos continuam atuais.
- Se forem usadas capturas reais do Gelo Gestão, usar dados demonstrativos e sem informações operacionais privadas.

## Fontes

- https://github.com/fatalite38/Portfolio/blob/master/index.html
- https://github.com/fatalite38/Portfolio/blob/master/assets/acordeon.js
- https://github.com/fatalite38/Portfolio/blob/master/assets/CSS/acordeon.css
- https://github.com/fatalite38/Portfolio/blob/master/README.md
- https://github.com/fatalite38/GeloMaisSabor
- https://github.com/fatalite38/AnalyzeSentimentBERT
- https://github.com/fatalite38/Desafio-Target-Sistemas
- Formação, histórico profissional e escopo de Gelo Gestão: contexto fornecido por Luiz nesta conta. Revisar estados e datas ao implementar futuramente.
