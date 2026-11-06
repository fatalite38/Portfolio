# Continuar o portfólio — React + TypeScript + Vite

Branch codex/portfolio-upgrade, associada ao PR #1. Base da migração: c24354eac578a2f6f0f7d7462feb105d3c97b125, enviada na etapa anterior. A migração está preparada para revisão no PR #1. A instrução mais recente autoriza commit e push desta migração para codex/portfolio-upgrade. Não autoriza merge nem deploy; configuração da Vercel e nova prévia serão tratadas em outra etapa.

## Retomar

Confira branch, commit, estado do Git e eventuais AGENTS.md. Leia README.md, MIGRACAO.md, DESIGN.md e QA.md. Preserve alterações locais, incluindo arquivos não rastreados, e use o checkout existente; tarefas na nuvem já são isoladas. Não crie worktree sem pedido.

```bash
git status --short --branch
git rev-parse HEAD
npm ci
npm run dev
```

Dev: localhost:5173. Validação:

```bash
npm run typecheck
npm run build
npm run preview
```

Preview local de produção: localhost:4173, na mesma máquina. Use Node >=22.12. O build pré-renderiza a página e gera dist/; o site continua estático em produção. Não usar o antigo servidor Python sobre o diretório dos fontes. A pasta .prerender é temporária e removida ao final do build; dist e node_modules são ignorados.

## Manter nas próximas alterações

- Visual aprovado: somente escuro, grafite, branco e vermelho, fontes locais, composição e animações existentes.
- Componentes em src/components; projetos tipados em src/data/projects.ts e src/types/project.ts. Não recriar a antiga manipulação de DOM em app.js/projects.js, removidos na migração.
- Estado de filtro/projeto na URL, painéis nativos, foco e movimento reduzido; efeitos com cleanup para StrictMode.
- Ao adicionar mídia, importar assets reais para o Vite processá-los; mídia image exige texto alternativo e dimensões.
- Preservar as pendências de imagem/conteúdo e o caráter acadêmico/em desenvolvimento dos projetos.
- vercel.json deve continuar intacto. Esta etapa permite commit e push da migração apenas para codex/portfolio-upgrade. Não fazer merge nem deploy.

## Skills

Na máquina da nuvem foram instaladas e lidas:

- `/home/agent/.agents/skills/frontend-design/SKILL.md` (anthropics/skills).
- `/home/agent/.agents/skills/web-design-guidelines/SKILL.md` (vercel-labs/agent-skills).

A segunda skill consulta `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` antes de cada revisão. Arquivos em /home/agent são desta máquina e não estão versionados no repositório; confira a existência em uma nova máquina. As instruções do usuário prevalecem sobre recomendações gerais das skills.

## Pendências para a próxima etapa

- Anexar a foto profissional como arquivo acessível ao Codex; o caminho `C:/Users/...` não é acessível na nuvem. Manter o avatar até receber o arquivo. Não gerar rosto. Reenviar também a segunda referência de composição se quiser usá-la.
- Obter captura fiel de `https://www.cococuesta.com.br/`. Os domínios `cococuesta.com.br` e `www.cococuesta.com.br` foram bloqueados pelo proxy (CONNECT 403). Para captura na nuvem, adicioná-los em configurações do ambiente → acesso à internet → domínios permitidos, preservando as entradas existentes; aplicar a mudança e conferir eventuais recursos externos necessários à página real.
- Fornecer capturas reais do Gelo Gestão com dados demonstrativos e confirmar módulos concluídos versus planejados.
- Confirmar e-mail, LinkedIn `/in/luiz-dpedrozo/`, situação da especialização UTFPR e datas da trajetória. `www.linkedin.com` também foi bloqueado pela rede; o endereço preservado ainda precisa de confirmação do autor.
- Se houver novo currículo, revisar antes de oferecer download.

BERT: os materiais verificados são `analyzesentiment.py` e `Tcc.pdf`; o notebook antigo retorna 404. O código é uma exportação do Colab e inclui comandos de célula; não foi executado ou convertido nesta tarefa. Não apresentar o estudo como aplicação ou API pública.

## Histórico da tentativa de preview

O código estático foi enviado no commit c24354e ao PR #1. O preview da Vercel ficou pendente porque api.github.com e api.vercel.com estavam bloqueados pela rede e não havia autenticação Vercel nesta máquina. O GitHub informava portfolio-fatalite38.vercel.app como website; isso não confirma as configurações internas da Vercel.

As permissões de API foram salvas no rascunho do ambiente na etapa anterior, mas não foram aplicadas à instância então. Nesta etapa, enviar somente o código da migração para revisão no PR, sem deploy. Quando houver uma nova autorização para preview, conferir rede, vínculo fatalite38/Portfolio no projeto portfolio, branch de produção, comando npm run build e saída dist. Só depois avaliar a entrada da branch em vercel.json. Não promover para produção nem alterar domínio.
