# Luiz Pedrozo — direção visual atual

## Objetivo e público

Apresentar Luiz a recrutadores e potenciais clientes como desenvolvedor full stack, com interesse em IA aplicada e visão de negócio. A evidência vem dos projetos e da trajetória documentados; não de métricas ou escalas de proficiência.

## Plano de design

- Fundo #08090b; superfície #111216; texto #f5f4f1; texto secundário #b2b2bb; vermelho #f13b46; borda #2d2e34.
- Space Grotesk variável nos títulos, DM Sans variável na leitura. Fontes locais com licenças OFL preservadas em assets/fonts; nenhuma dependência de Google Fonts em execução.
- Nome em escala grande à esquerda; retrato moderado à direita; apresentação e duas ações imediatamente utilizáveis. Alinhamento à esquerda e linhas de leitura curtas.
- Na passagem aos projetos, uma linha vermelha se expande com a rolagem, sem travar a página. Os projetos formam três entradas horizontais, com mídia e texto, e painéis nativos para aprofundamento.

```text
lp.                       Projetos / Sobre / Trajetória / Contato
Nome em grande escala     retrato moderado
Apresentação e ações      identificação
                  passagem visual
Projetos                  filtros
mídia / material          resumo / tecnologias / detalhes
Sobre                     formação e trajetória
Contato                   e-mail / LinkedIn / GitHub
```

## Revisão do plano

A janela de IDE e os dashboards simulados da proposta anterior competiam com a identidade pessoal e poderiam sugerir capturas reais. Foram retirados. A composição concentra a expressão no nome e na luz vermelha do retrato; as demais seções priorizam conteúdo. Não há código inventado, números decorativos, movimento em todas as seções ou scroll controlado.

## Movimento e acessibilidade

Entrada coordenada e curta, sem ocultar controles ou bloquear cliques. Animações limitadas a transform/opacity. Movimento de passagem ligado à rolagem, desligado com prefers-reduced-motion. Sem loops, cursores personalizados ou dependência de hover. Foco visível, menu disclosure, filtros com aria-pressed, diálogo nativo com Escape/retorno de foco. Filtros e projeto aberto se refletem na URL.

## Evidências e limites das imagens

- Foto profissional: visível na conversa, mas nenhum arquivo disponibilizado ao filesystem ou identificador de download. O avatar existente é temporário e identificado. Não gerar rosto. A segunda referência de composição não chegou como arquivo acessível.
- Coco Cuesta: endereço canônico https://www.cococuesta.com.br/ consta no repositório GeloMaisSabor. Rede bloqueou www e domínio raiz (CONNECT 403). Captura real pendente, sem interface fictícia. Tecnologias e contexto conferidos no README público, HEAD a1c058fffde8c9956cd8c9fba3c16bad81092bb7.
- Gelo Gestão: nenhuma captura real ou repositório público disponível. Escopo em desenvolvimento, sem afirmar módulos entregues. É necessário distinguir itens existentes de planejados com o autor e obter capturas com dados demonstrativos.
- BERT: README menciona notebook, mas o caminho antigo AnalyzeSentiment.ipynb retorna 404. A árvore pública no HEAD 3354bd5dd7046590b79862931c2f8ebeca3c85cb contém analyzesentiment.py (exportação do Colab) e Tcc.pdf. A mídia é um trecho literal desse código, sem resultados fabricados e sem simular uma API. O código usa PyTorch/Transformers no modelo e TensorFlow/Keras no carregamento do IMDb.

## Conteúdo a confirmar com Luiz

E-mail público, LinkedIn /in/luiz-dpedrozo/, situação atual da especialização UTFPR, datas da trajetória e divisão de funcionalidades existentes/planejadas do Gelo Gestão. Informações já documentadas foram preservadas, sem inventar novas qualificações. Currículo antigo continua sem download.

## Continuidade

React, TypeScript e Vite; dados tipados dos projetos em src/data/projects.ts. vercel.json deve permanecer intacto. Sem commit, merge ou deploy sem pedido. As diretrizes instaladas de frontend-design e web-design-guidelines foram lidas; o guia atual da Vercel foi consultado para revisão. Brief do usuário prevalece em cores, voz pessoal em português e uso exclusivo de tema escuro.

## Migração técnica com preservação visual

Base aprovada: c24354eac578a2f6f0f7d7462feb105d3c97b125. O inventário anterior à migração está em MIGRACAO.md. Os seis tokens, Space Grotesk/DM Sans, hierarquia, composição, avatar temporário, conteúdo e animações foram mantidos. styles.css e upgrade.css não foram alterados.

A alteração é de implementação: seções em componentes React, mídia e seções com tipos discriminados, estado de filtros/painéis em hook e diálogo nativo controlado por refs. Os efeitos removem listeners, observadores e frames ao desmontar, inclusive no StrictMode. Não há UI kit, router ou biblioteca de animação.

Vite processa CSS, fontes e avatar para URLs com hash. O build pré-renderiza a página com o próprio react-dom/server, para preservar conteúdo e links sem JavaScript, e hidrata a experiência. A URL é aplicada após a hidratação para manter a saída inicial consistente; o ano do build também é atualizado depois da hidratação para evitar divergência em viradas de ano.

O brief continua prevalecendo sobre recomendações gerais das skills: não redesenhar a página, não trocar a identidade visual, não inventar interfaces para projetos e não alterar deploy nesta etapa. A comparação visual e os limites estão em QA.md.
