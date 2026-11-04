# Portfólio de Luiz Pedrozo

Portfólio pessoal com projetos de desenvolvimento web, sistemas de gestão e inteligência artificial. Protótipo em HTML, CSS e JavaScript, sem instalação de dependências ou etapa de build.

## O que mudou

- Apresentação e formação atualizadas.
- Coco Cuesta, Gelo Gestão e BERT em destaque; exercícios Node.js e Snake Game como estudos complementares.
- Projetos com filtros, prévias interativas e detalhes em diálogos acessíveis.
- Trajetória profissional e acadêmica visível na página.
- Temas claro e escuro, navegação no celular e preferência de tema salva localmente.
- Contato por e-mail, LinkedIn e GitHub.

## Abrir localmente

Abra `index.html` no navegador ou use o Live Server da sua IDE. Os arquivos são estáticos; não é necessário executar npm install. A fonte Manrope usa Google Fonts e tem uma alternativa local se o serviço não estiver disponível. A cópia de e-mail tem uma instrução manual quando o navegador não permite acesso à área de transferência.

## Organização

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo e estrutura semântica |
| `styles.css` | Layout, componentes e responsividade |
| `upgrade.css` | Temas, identidade e trajetória |
| `app.js` | Menu, abas, filtros, diálogos, tema e contato |
| `assets/projects/` | Imagens e favicon do upgrade |
| `assets/img/profile2.jpg` | Avatar original reutilizado |
| `ANALISE-UPGRADE.md` | Diagnóstico do portfólio anterior |
| `CONTINUAR-NO-CODEX.md` | Como retomar a branch no computador |
| `DESIGN.md` | Direção visual e fontes do conteúdo |
| `QA.md` | Verificações realizadas e limites |

Os arquivos antigos de assets continuam preservados no histórico e na árvore, mas o novo HTML usa apenas os caminhos acima. O currículo antigo está sem link na nova página; adicione uma versão atualizada antes de oferecer download.

## Estado dos projetos

As prévias são composições ilustrativas. Gelo Gestão está em desenvolvimento e não expõe dados reais. BERT apresenta um estudo acadêmico em notebook, sem uma API de inferência neste portfólio. Não foram inventadas métricas de desempenho, depoimentos ou resultados comerciais.

## Publicação

A branch `codex/portfolio-upgrade` está com deploy automático da Vercel desabilitado por uma regra específica em `vercel.json`. A regra não desativa outras branches. Este trabalho foi enviado somente como PR, sem merge ou deploy. Quando houver decisão de publicar, revise o destino e a configuração antes de liberar a versão.
