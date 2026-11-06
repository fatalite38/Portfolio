# Portfólio de Luiz Pedrozo

Portfólio em React, TypeScript e Vite para recrutadores e potenciais clientes. Mantém o visual aprovado: tema escuro em grafite, branco e vermelho, fontes locais, composição, conteúdo, animações e responsividade.

## Executar localmente

Pré-requisito: Node.js 22.12 ou superior (validado com Node 24). Na pasta do projeto:

```bash
npm ci
npm run dev
```

Abra `http://localhost:5173` no computador em que executou o comando. O lockfile está versionado; use `npm ci` para reproduzir as dependências. Na nuvem, localhost não é um endereço público do seu computador.

## Verificar e gerar a versão de produção

```bash
npm run typecheck
npm run build
npm run preview
```

O preview local do build usa `http://localhost:4173`. `build` executa a verificação de tipos, gera os arquivos de produção em `dist/` e pré-renderiza o conteúdo usando `react-dom/server`. A pasta temporária `.prerender/` é removida ao terminar. O site resultante é estático; não precisa de servidor React/Node em produção.

A pré-renderização mantém apresentação, projetos, formação e links no HTML mesmo sem JavaScript. React hidrata esse conteúdo para ativar menu, filtros, painéis e cópia de e-mail. No modo de desenvolvimento, a aplicação é renderizada pelo cliente. Abrir o index.html diretamente ou servir os fontes com Python não substitui o servidor Vite; para servir o resultado com outro servidor estático, use a pasta `dist/` após o build.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/App.tsx` | Composição da página |
| `src/components/` | Header, Hero, Projects, ProjectCard, ProjectDialog, ProjectMedia, About, Journey, Contact e Footer |
| `src/data/projects.ts` | Fonte única dos dados dos três projetos |
| `src/types/project.ts` | Tipos de projeto, categorias, seções, links e união discriminada de mídia |
| `src/data/contact.ts` | Contatos usados nas interações |
| `src/hooks/useProjectNavigation.ts` | Filtro, painel, URL, reload e popstate |
| `src/hooks/useScrollPassage.ts` | Transição de rolagem e movimento reduzido, com cleanup |
| `src/main.tsx` / `src/entry-server.tsx` | Renderização/hidratação e entrada de pré-renderização |
| `scripts/prerender.mjs` | Pré-renderização estática no build, sem framework extra |
| `styles.css` / `upgrade.css` | Estilos e animações aprovados, preservados |
| `assets/` | Fontes com licenças, avatar e materiais anteriores preservados |
| `MIGRACAO.md` | Inventário anterior à migração e critérios de preservação |
| `DESIGN.md` / `QA.md` | Direção visual, verificações e limites |
| `CONTINUAR-NO-CODEX.md` | Instruções para retomar |

Dependências de execução: apenas React e React DOM. Tipos, TypeScript, Vite e o plugin oficial React são ferramentas de desenvolvimento. Não há router, biblioteca de UI, estado ou animação adicional.

## Funcionalidades

- Tema somente escuro e fontes Space Grotesk/DM Sans servidas localmente.
- Abertura coordenada sem bloquear conteúdo ou controles; rolagem livre e passagem seletiva.
- Menu disclosure móvel, navegação por seção, skip link e foco visível.
- Coco Cuesta, Gelo Gestão e BERT, com filtros e contagem automática.
- Estado de filtro/projeto na URL (`?filtro=web`, `?projeto=bert`), reload e histórico do navegador.
- Diálogo nativo: abrir por Enter, foco inicial no fechar, contenção de foco, Escape, botão/clique fora e retorno ao acionador.
- Contato por e-mail, LinkedIn e GitHub; cópia de e-mail com alternativa manual.
- prefers-reduced-motion, teclado, toque e layouts de 320 a 1440 px verificados.

Para ampliar os projetos, adicione um registro em `src/data/projects.ts` que satisfaça `Project`. Para uma categoria existente, lista, painel e total do filtro são atualizados automaticamente. Categorias novas exigem atualizar o tipo, a lista de filtros e a validação da URL. Para capturas reais, importe o arquivo do diretório `assets/` e use mídia do tipo `image` com `src`, `alt`, `width`, `height` e `caption`.

## Pendências preservadas

- Foto profissional visível na conversa, mas sem arquivo acessível na nuvem: avatar identificado como temporário. Segunda referência visual não chegou como arquivo acessível.
- Captura fiel da Coco Cuesta, cujo endereço canônico é `https://www.cococuesta.com.br/`; o acesso foi bloqueado na etapa anterior.
- Capturas reais do Gelo Gestão com dados demonstrativos e confirmação dos módulos existentes versus planejados. Projeto permanece em desenvolvimento e sem demo pública.
- BERT é um estudo acadêmico, representado pelo código exportado do Colab e relatório de TCC, sem API ou resultados inventados.
- Confirmar e-mail, LinkedIn, situação da especialização e datas da trajetória. Currículo antigo continua sem download.

## Deploy e revisão

`vercel.json` permanece byte a byte igual ao da base e mantém o bloqueio de deploy da branch `codex/portfolio-upgrade`. A migração está preparada para revisão no PR #1. A etapa atual autoriza apenas commit e push para codex/portfolio-upgrade; merge e deploy continuam fora do escopo. Em uma etapa futura de publicação, será necessário conferir na Vercel o comando `npm run build` e a saída `dist`, além da integração e da branch de produção; nenhuma configuração remota foi alterada agora.
