# Migração para React + TypeScript + Vite

## Base e inventário antes de alterar a implementação

Branch codex/portfolio-upgrade; commit c24354eac578a2f6f0f7d7462feb105d3c97b125. Árvore limpa no início, sem AGENTS.md no repositório. A configuração vercel.json e os estilos foram registrados por hash; a versão estática foi preservada fora do checkout para comparação na mesma máquina.

Funcionalidades da base que devem permanecer:

- Tema somente escuro e identidade grafite/branco/vermelho; CSS styles.css e upgrade.css, fontes locais Space Grotesk/DM Sans, avatar temporário e conteúdo existente.
- Header fixo, links de seção, skip link com foco no main, menu disclosure móvel: abrir/fechar, clique fora, saída do foco, Escape e fechamento no breakpoint.
- Três projetos (Coco Cuesta, Gelo Gestão, BERT), filtros Todos/Web/Sistemas/IA, contagens e aria-pressed/role=status.
- Dados comuns à lista e aos painéis; capturas pendentes identificadas e trecho real de BERT.
- Diálogo nativo: Enter para abrir, foco inicial no fechar, contenção de foco, Escape/botão/clique fora para fechar e retorno ao acionador; travamento da rolagem apenas com modal aberto.
- Estado filtro/projeto na URL, reload, popstate e normalização de filtro incompatível com o painel solicitado.
- Links de contato/projetos, nova aba com rel seguro, cópia de e-mail com alternativa manual e ano atualizado.
- Entrada coordenada sem bloquear controles, passagem ligada à rolagem com requestAnimationFrame/IntersectionObserver, cleanup dos listeners e prefers-reduced-motion.
- Seções Sobre, formação, trajetória e contato; responsividade em 320/390/768/1024/1440 px.
- Informações reais e pendências da foto, capturas, módulos Gelo Gestão e confirmação de dados pessoais; nenhum novo resultado ou funcionalidade inventado.
- A versão estática contém fallback sem JavaScript. A versão React deve preservar conteúdo e contatos também no HTML sem JS, via pré-renderização leve no build, sem biblioteca adicional de roteamento/estado/animação.

## Plano técnico e critério de preservação visual

Manter os dois arquivos CSS e os assets na localização atual; Vite importa/processa os recursos necessários. Componentes de seção e componentes de projeto substituem criação manual de DOM. Dados tipados com união discriminada para mídia e conteúdo de seções. Estado de filtros/painel em React e diálogo nativo via ref; listeners com cleanup e suporte ao StrictMode. Sem bibliotecas de UI, router ou animação.

A direção de frontend-design continua a aprovada: os seis tokens, as duas fontes, composição e movimento são preservados. A revisão web-design-guidelines cobre semântica, foco, teclado, mídia, URL, performance e movimento reduzido; não redesenha esta etapa.

Validação: typecheck, build de produção, smoke no dev e interações no build servido localmente; capturas comparativas da base e da versão migrada nas cinco larguras. vercel.json deve permanecer idêntico. Durante a implementação inicial, não fazer commit, push, merge ou deploy. Na preparação para revisão, commit e push são autorizados apenas para codex/portfolio-upgrade; merge e deploy continuam proibidos.

## Resultado

Implementação concluída em componentes React/TypeScript. React e React DOM são as únicas dependências de execução. Vite processa os recursos; o próprio react-dom/server pré-renderiza conteúdo no build, sem biblioteca extra. Os tipos e o build passaram, assim como as suítes de interação de produção e desenvolvimento e os testes complementares de histórico, foco e menu.

A comparação final com a base tem zero pixels diferentes nas capturas de 320, 390, 768, 1024 e 1440 px. Geometria, texto normalizado, links e dados dos projetos foram preservados. styles.css, upgrade.css e vercel.json permanecem idênticos. Evidências e limites em QA.md. A implementação inicial foi concluída sem commit, push, merge ou deploy. A etapa seguinte prepara o commit e o push para revisão no PR #1, preservando vercel.json e sem merge ou deploy.
