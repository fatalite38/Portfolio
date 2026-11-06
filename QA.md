# Validação da migração React + TypeScript + Vite

Base: c24354eac578a2f6f0f7d7462feb105d3c97b125, branch codex/portfolio-upgrade. O inventário anterior à migração está em MIGRACAO.md. Este registro documenta a migração e suas validações. A etapa de envio para revisão autoriza commit e push da branch, sem merge ou deploy.

## Verificações de código e build

- npm install concluiu com React/React DOM e ferramentas TypeScript/Vite; package-lock.json gerado. O formatador usado pontualmente não foi adicionado às dependências.
- npm run typecheck passou com TypeScript strict, noUnusedLocals e noUnusedParameters.
- npm run build passou: bundle cliente, pré-renderização com react-dom/server e remoção da pasta temporária .prerender.
- npm run dev e npm run preview iniciaram nas portas 5173 e 4173. Nos dois modos, nenhuma falha de recurso, erro JavaScript ou mensagem de erro de hidratação na inspeção inicial.
- Dados de src/data/projects.ts comparados em JSON com os de projects.js da base: valores idênticos. Nenhuma funcionalidade, métrica, experiência ou mídia foi inventada.
- styles.css, upgrade.css, vercel.json e os assets originais permanecem sem alterações; hashes dos dois estilos e do deploy conferidos.
- app.js e projects.js da raiz foram removidos e substituídos por componentes, hooks e dados tipados. Não há duas implementações da aplicação em paralelo.
- git diff --check passou. dist, .prerender e node_modules são ignorados e não serão incluídos no diff.

## Navegador e interações

Chromium headless via Playwright para Python, já disponível no ambiente. Os testes da migração foram executados contra os servidores reais de desenvolvimento e do build. Scripts e evidências temporários desta máquina:

- /tmp/validate-react-portfolio.py
- /tmp/migration-extended.py
- /tmp/portfolio-react-production/validation.json (17 verificações compostas aprovadas)
- /tmp/portfolio-react-development/validation.json (16 verificações compostas aprovadas; teste sem JS específico do build não se aplica ao dev)

Cobertura:

- Primeira dobra acionável durante a entrada animada, sem esperar o término.
- Somente tema escuro, mesmo com preferência antiga por tema claro no localStorage. Fontes locais carregadas.
- Três projetos e mídias preservadas: dois espaços explicitamente pendentes e o trecho verdadeiro de BERT.
- 320, 390, 768, 1024 e 1440 px: sem rolagem horizontal; filtros Todos=3/Web=1/Sistemas=1/IA=1, estado aria-pressed, contagem anunciada.
- Em cada largura, painéis dos três projetos: abrir por Enter, foco inicial no fechar, Tab no diálogo nativo, Escape e botão de fechar com retorno ao acionador. Sem rolagem horizontal no painel.
- Menu móvel: abrir, fechar, Escape, retorno ao botão e navegação por seção com foco no destino.
- URL: filtro e painel restaurados após reload; filtro incompatível normalizado.
- Skip link chegando ao main; foco visível em navegação por teclado.
- Cópia de e-mail com permissão real negada (alternativa manual) e concedida (conteúdo conferido no clipboard).
- prefers-reduced-motion: sem animações ou smooth scroll, passagem estática e painéis funcionais.
- Passagem ligada à rolagem livre, sem prender a página.
- Zero erros de console/JavaScript/hidratação, requisições falhas ou HTTP 4xx/5xx nos recursos da página durante a suíte.
- Toque emulado: menu, link de seção, filtro, abrir e fechar painel.
- Build sem JavaScript: apresentação, três projetos pré-renderizados, seções e contatos disponíveis no HTML. As interações precisam de JS; o modo de desenvolvimento Vite também depende de JS.

Testes adicionais aprovados nos dois modos:

- Bloqueio da rolagem ao abrir modal e restauração ao fechar.
- Fechamento ao clicar no fundo.
- Popstate e botões Voltar/Avançar reais do navegador.
- Foco no projeto correto quando aberto pelo histórico após outro projeto; foco no filtro ativo se o acionador se torna oculto por uma mudança de histórico.
- Menu fecha por clique fora, saída do foco e troca de breakpoint.
- StrictMode em desenvolvimento sem duplicação observada de efeitos/listeners ou erro de console nos cenários testados.
- Virada de ano simulada para 2027 após um build de 2026: ano atualizado no cliente sem erros de hidratação ou console.
- Mensagem final de fallback e os três projetos conferidos no DOM do build com JavaScript desativado.

## Comparação com a versão visual aprovada

Cópia exata do commit estático servida isoladamente na porta 8081. Capturas da base e do build React obtidas no mesmo Chromium, com fontes prontas, animações finalizadas, topo da página e viewport de 1000 px de altura nas cinco larguras.

| Largura | Dimensão da captura completa | Pixels diferentes | Geometria, texto e links |
| --- | --- | --- | --- |
| 320 | 320 × 6748 | 0 | Iguais |
| 390 | 390 × 6268 | 0 | Iguais |
| 768 | 768 × 4684 | 0 | Iguais |
| 1024 | 1024 × 4711 | 0 | Iguais |
| 1440 | 1440 × 4624 | 0 | Iguais |

Uma diferença inicial de 1/64 de pixel causada por um espaço dividido em dois nós de texto no filtro foi corrigida. A comparação final tem zero pixels diferentes nas cinco capturas. Isso descreve as condições medidas, não garante equivalência em todos os navegadores ou em todos os instantes de animação.

Resultados: /tmp/migration-final-comparison/results.json. Capturas finais:

- /tmp/migration-final-comparison/1440.png
- /tmp/migration-final-comparison/1024.png
- /tmp/migration-final-comparison/768.png
- /tmp/migration-final-comparison/390.png
- /tmp/migration-final-comparison/320.png
- /tmp/portfolio-react-production/panel.png

Essas evidências temporárias não estão no repositório e podem não persistir em outra máquina. Não houve deployment público nesta etapa.

## Revisão das skills

frontend-design e web-design-guidelines instaladas foram lidas. Guia atual da Vercel obtido antes da revisão. Não houve redesenho; o brief de preservação e o português pessoal prevalecem sobre recomendações genéricas.

- src/components/Header.tsx — controles semânticos, estado ARIA, foco, Escape e cleanup de eventos.
- src/components/ProjectDialog.tsx — diálogo nativo e foco; referências imperativas usadas apenas nas APIs necessárias do navegador.
- src/hooks/useProjectNavigation.ts — URL, validação de parâmetros e hidratação inicial consistente.
- src/hooks/useScrollPassage.ts — requestAnimationFrame, observer e listeners com cleanup; movimento reduzido.
- src/components/ProjectMedia.tsx — mídia tipada, legenda, alt e dimensões obrigatórios para capturas reais.
- src/components/Footer.tsx — ano inicial consistente com a pré-renderização, atualizado após hidratação.
- index.html e scripts/prerender.mjs — metadados preservados, conteúdo estático disponível no build e fontes críticas locais.

## Diferenças técnicas e limites

O projeto agora exige Node para desenvolvimento/build e tem runtime React no cliente. O bundle cliente medido ficou em cerca de 245 kB (76 kB gzip), além de CSS, fontes e avatar; não foi feita medição Lighthouse. A pré-renderização ocorre no build, não há backend ou servidor SSR em produção. Arquivos de fonte devem ser servidos com Vite; o resultado em dist pode ser servido como site estático.

Não foram testados Safari/Firefox, leitor de tela ou aparelhos físicos. Toque e movimento reduzido foram emulados no Chromium. A comparação de pixels cobre a página estável nas cinco larguras, não cada quadro da animação.

Links e pendências da base foram preservados. GitHub havia respondido HTTP 200 na etapa anterior; Coco Cuesta e LinkedIn estavam bloqueados pelo proxy. Não foram feitas novas afirmações de disponibilidade desses serviços nem executado o modelo BERT nesta migração.

Continuam pendentes: arquivo da foto profissional e segunda referência visual, capturas reais de Coco Cuesta/Gelo Gestão, confirmação dos módulos existentes/planejados do Gelo Gestão, contatos e dados pessoais/formação. Avatar temporário, marcação de desenvolvimento e caráter acadêmico de BERT permanecem explícitos.

## Conferência antes do envio ao PR #1

- Base local e remota conferida: c24354eac578a2f6f0f7d7462feb105d3c97b125, branch codex/portfolio-upgrade; PR #1 aberto.
- npm run typecheck e npm run build executados novamente e aprovados. A pré-renderização terminou e removeu .prerender.
- Diff revisado, incluindo arquivos novos e removidos. package.json e package-lock.json entram como definição e trava das dependências; node_modules, dist, .prerender, caches e evidências temporárias ficam fora do commit.
- A documentação preserva as limitações de navegador, imagens e conteúdo. O build local não equivale a deployment público.
- vercel.json, styles.css, upgrade.css e os assets originais permanecem sem alterações. O envio é somente para a branch do PR; não há merge ou deploy nesta etapa.
