# Validação da atualização visual

Validação em 6 de novembro de 2026. Branch `codex/portfolio-upgrade`, base `e08bcb550c6ba29186a7ad184c731261d49a5953`. Alterações locais; sem commit, merge ou deploy.

## Ferramentas e execução

Servidor Python na porta 8080, servindo /workspace/Portfolio. Chromium headless instalado na máquina, via Playwright para Python. Não foram instaladas dependências de aplicação nem executado build, porque o projeto é estático.

```bash
python3 -m http.server 8080 --bind 127.0.0.1
node --check app.js
node --check projects.js
git diff --check
```

Os dois checks de sintaxe e a verificação de whitespace passaram. Referências de arquivos e fragmentos do HTML foram conferidas; sem IDs duplicados, referências locais inexistentes ou fragmentos inválidos.

## Resultado funcional

18 verificações compostas aprovadas. Script desta sessão: /tmp/validate-portfolio-red.py. Evidência: /tmp/portfolio-final-validation.json. Esses arquivos temporários não fazem parte do repositório e podem não existir em outra máquina.

- HTTP 200 e conteúdo idêntico ao checkout para HTML, scripts, estilos, avatar, favicon e as duas fontes locais.
- SHA-256 de vercel.json idêntico ao registrado antes das alterações.
- Ação da primeira dobra utilizável com as animações de entrada pausadas pelo teste: nenhum atraso obrigatório.
- Tema exclusivamente escuro, inclusive com preferência antiga por tema claro no localStorage. Fontes locais efetivamente carregadas.
- Três projetos, dois espaços de captura pendente e trecho de BERT comparado ao código público original.
- Larguras 320, 390, 768, 1024 e 1440 px: sem rolagem horizontal, filtros Todos=3/Web=1/Sistemas=1/IA=1, estados aria-pressed e anúncio da quantidade.
- Nas cinco larguras: painéis dos três projetos abertos por Enter; foco inicial no fechar, navegação por Tab dentro do modal nativo, Escape e botão de fechamento com retorno ao acionador. Conteúdo do painel sem rolagem horizontal.
- Menu móvel: abrir, Escape com foco no botão, navegação por seção com fechamento e foco no destino.
- Filtro e projeto na URL; reload preserva a abertura do projeto; combinação de filtro incompatível é normalizada para a categoria correta.
- Link “Pular para o conteúdo” chega ao main. Outline visível em navegação por teclado.
- Cópia de e-mail testada com permissão real do navegador negada (alternativa manual) e concedida (conteúdo conferido no clipboard).
- prefers-reduced-motion: nenhuma animação ativa, sem smooth scroll, transição estática e painéis utilizáveis.
- Passagem visual acompanha a rolagem livre; nenhuma rolagem presa ou controlada artificialmente.
- Nenhum erro JavaScript, requisição falha ou HTTP 4xx/5xx nos recursos da própria página durante os testes.
- Emulação de toque: menu, navegação, filtro e painel por tap.
- JavaScript desativado: apresentação, seções, contato e links alternativos dos projetos disponíveis. Filtros e painéis dependem de JavaScript.

## Revisão web-design-guidelines

Guia atual consultado em https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md. frontend-design também foi lida e aplicada. O brief do usuário prevalece em cores, voz pessoal em português e uso exclusivo de tema escuro.

- index.html:41 — corrigido destino do skip link com tabindex=-1.
- styles.css:18 — foco visível; layout de 320 px e quebra de conteúdo longo conferidos.
- upgrade.css:20 — movimento reduzido desliga animação/transição e smooth scroll.
- app.js:175 — filtros/painéis restauram estado pela URL; painéis usam diálogo nativo.
- projects.js:5 — dados estruturados alimentam lista/painel; mídia pendente explicitamente identificada.

Na revisão das interações implementadas, não restou falha funcional conhecida nas verificações realizadas. Isso não equivale a auditoria completa de acessibilidade ou a teste com leitor de tela.

## Links externos

Requisições de leitura nesta sessão, com TLS e proxy preservados:

| Destino | Resultado |
| --- | --- |
| github.com/fatalite38 | HTTP 200 |
| github.com/fatalite38/GeloMaisSabor | HTTP 200 |
| github.com/fatalite38/AnalyzeSentimentBERT | HTTP 200 |
| BERT /blob/main/analyzesentiment.py | HTTP 200 |
| BERT /blob/main/Tcc.pdf | HTTP 200 |
| www.cococuesta.com.br | Bloqueio do proxy, CONNECT 403 |
| www.linkedin.com/in/luiz-dpedrozo/ | Bloqueio do proxy, CONNECT 403 |

O antigo caminho BERT /blob/main/AnalyzeSentiment.ipynb retornou 404 e foi substituído por links aos materiais reais. A inacessibilidade de Coco Cuesta/LinkedIn nesta máquina não estabelece indisponibilidade pública dos sites. Mailto foi conferido como endereço preservado; envio de e-mail e identidade do perfil LinkedIn exigem confirmação do autor.

## Capturas desta sessão

- /tmp/portfolio-final-desktop.png (1440 × 1000, página completa).
- /tmp/portfolio-final-mobile.png (390 × 844, página completa).
- /tmp/portfolio-final-320.png (320 × 800, página completa).
- /tmp/portfolio-final-tablet.png (768 × 1024, página completa).
- /tmp/portfolio-final-panel.png (painel BERT em desktop).

Inspeção visual realizada nas capturas, incluindo tablet e painel. Não há ferramenta de URL pública de prévia nesta sessão. Localhost da nuvem não é acessível pelo localhost do computador do usuário; use as capturas ou execute o checkout localmente conforme README.

## Limites e pendências

- Não testado em Safari/Firefox, dispositivo físico, leitor de tela ou ambiente de produção. Toque e movimento reduzido foram emulados no Chromium. Nenhuma nota Lighthouse ou auditoria de contraste completa é reivindicada.
- Foto profissional visível na conversa, porém sem arquivo acessível na máquina; avatar temporário preservado. Segunda referência visual não recebida como arquivo acessível.
- Coco Cuesta: captura fiel do site bloqueada pela rede. Gelo Gestão: falta captura real com dados demonstrativos e confirmação dos módulos existentes/planejados. Não foi criada interface fictícia para substituí-las.
- BERT: estudo acadêmico; código/modelo não executado nesta tarefa, sem API e sem métricas de desempenho afirmadas.
- Confirmar contato, LinkedIn, andamento da especialização UTFPR e datas da trajetória antes de uma publicação futura. Currículo antigo segue sem download.
