# Continuar o portfólio

Branch de trabalho: `codex/portfolio-upgrade`, associada ao PR #1. Base desta etapa: `e08bcb550c6ba29186a7ad184c731261d49a5953`. A etapa 1 autorizou commit e push da implementação para atualizar o PR, com objetivo de gerar um preview. Confira o estado local e o SHA remoto antes de continuar; não confunda o envio do código com a conclusão de um deploy. Na consulta anterior o PR estava aberto; confira novamente antes de qualquer operação remota.

## Retomar com cuidado

```bash
git status --short --branch
git rev-parse HEAD
git diff --stat
```

Leia instruções do repositório, se existirem, e `README.md`, `DESIGN.md` e `QA.md`. Preserve alterações locais, incluindo arquivos não rastreados. Não use reset ou checkout de arquivos para descartar o trabalho. Tarefas na nuvem já são isoladas; não crie um worktree sem pedido.

Para executar o site, use o checkout existente:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
node --check projects.js
node --check app.js
```

No Windows, `python` pode substituir `python3`. Não é necessário npm install. Processos precisam ser iniciados em cada nova máquina; antes de usar a porta, confira se já há um servidor servindo este checkout.

## Decisões aprovadas

- HTML/CSS/JavaScript, somente tema escuro, grafite profundo, branco e vermelho intenso.
- Tipografia Space Grotesk e DM Sans local; nome em destaque e retrato moderado.
- Movimento de abertura curto e passagem seletiva ligada à rolagem. Não bloquear controles nem prender o scroll; respeitar movimento reduzido.
- Coco Cuesta, Gelo Gestão e BERT. Dados em projects.js alimentam lista e painéis.
- Painéis nativos com Escape, foco visível, retorno de foco e URL compartilhável.
- Nenhuma interface fictícia apresentada como captura real. Nenhuma métrica, qualificação, cliente ou funcionalidade inventada.
- A etapa 1 autoriza commit/push e preview desta branch. Alterar apenas a entrada dessa branch em vercel.json se necessário, após conferir a integração e a branch de produção na Vercel. Nenhum merge, promoção a produção ou alteração de domínio é autorizado.

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

## Etapa 1 — acesso ao preview

O GitHub informa `https://portfolio-fatalite38.vercel.app` como website do repositório, cuja branch padrão é master. Isso não confirma a configuração interna do projeto Vercel. A consulta do PR confirma que ele está aberto e usa codex/portfolio-upgrade; antes do envio desta etapa, não havia deployments associados ao PR.

As consultas a `api.github.com` (PR/checks/deployments pela CLI) e `api.vercel.com` (projeto portfolio) foram bloqueadas pela rede. Há autenticação GitHub disponível; não há token Vercel ou vínculo .vercel/project.json nesta máquina. Não solicitar valores de tokens em chat. O acesso Git HTTPS funciona e pode atualizar o PR sem API.

Foram adicionados api.github.com e api.vercel.com ao rascunho de rede do ambiente, preservando as permissões existentes. Revisar e salvar as configurações e publicar o ambiente para aplicar a mudança; o salvamento do rascunho não libera a rede da instância. Depois, conferir Settings → Git do projeto portfolio na Vercel: repositório fatalite38/Portfolio e branch de produção. Somente após confirmar que codex/portfolio-upgrade é uma branch de preview, habilitar sua entrada em vercel.json e enviar o ajuste. Alternativamente, criar pela interface da Vercel um deployment explicitamente Preview da branch/commit desejados. Não usar --prod nem promover o deployment.

Depois da criação, conferir estado Ready, ambiente Preview, SHA de origem e URL exata do deployment. Testar a URL e registrar se é pública ou protegida; não deduzir o endereço a partir do nome da branch.
