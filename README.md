# Portfólio de Luiz Pedrozo

Portfólio em HTML, CSS e JavaScript para recrutadores e potenciais clientes. Posicionamento full stack, interesse em IA aplicada e tecnologia conectada ao contexto de negócio. Sem instalação de dependências ou etapa de build.

## Executar

Na pasta do repositório:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

No Windows, use `python` se necessário. Abra `http://localhost:8080` no computador em que o servidor foi iniciado. Também pode usar o Live Server da IDE. O ambiente na nuvem desta sessão não oferece uma URL pública de prévia; localhost da nuvem não é o localhost do seu computador.

## Organização

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura, apresentação, formação, trajetória e contato |
| `styles.css` | Tema escuro, tipografia, layout, componentes e responsividade |
| `upgrade.css` | Abertura, passagem por rolagem e movimento reduzido |
| `projects.js` | Dados dos três projetos e referências de mídia |
| `app.js` | Renderização, menu, filtros, URL, painéis, foco e cópia de e-mail |
| `assets/fonts/` | Space Grotesk e DM Sans, com licenças OFL |
| `DESIGN.md` | Direção visual e evidências do conteúdo |
| `QA.md` | Validações, limites e pendências |
| `CONTINUAR-NO-CODEX.md` | Instruções para retomar o trabalho |

## Experiência atual

- Somente tema escuro, em grafite, branco e vermelho.
- Abertura coordenada sem bloquear conteúdo ou ações; rolagem livre.
- Três projetos: Coco Cuesta, Gelo Gestão e análise de sentimentos com BERT.
- Filtros com estado na URL (`?filtro=web`, `sistemas`, `ia`).
- Detalhes em diálogo nativo, com Escape, foco contido e retorno ao botão de origem. Link direto: `?projeto=bert`.
- Menu compacto acessível, navegação por teclado e preferência por movimento reduzido.
- Fontes locais: o carregamento da página não depende do Google Fonts.
- Contato por e-mail, LinkedIn e GitHub; cópia de e-mail com alternativa manual.

Para adicionar um projeto, acrescente um registro em `projects.js`, com ID único, categoria, contexto, contribuição, tecnologias, mídia e links verificados. O mesmo registro alimenta a lista e o painel. Ajuste o total dos filtros em `index.html` e os filtros se criar uma categoria. `media.type = 'image'` aceita uma captura real com `src`, `alt`, `width`, `height` e `caption`; nenhum screenshot deve ser fabricado como se fosse a interface real.

## Precisão dos materiais

A foto profissional aparece na conversa, mas o arquivo não chegou ao filesystem da nuvem; o avatar original segue identificado como temporário. A segunda referência visual também não chegou como arquivo acessível.

Coco Cuesta tem endereço canônico `https://www.cococuesta.com.br/`, conferido no repositório público. A captura fiel está pendente porque a rede bloqueou o site. Gelo Gestão permanece em desenvolvimento, sem captura real disponível ou demonstração pública; a divisão entre funcionalidades existentes e planejadas precisa ser confirmada.

BERT é um estudo acadêmico. O repositório publica `analyzesentiment.py` (exportado do Colab) e `Tcc.pdf`; o link antigo para `AnalyzeSentiment.ipynb` não existe na árvore verificada. O portfólio exibe um trecho verdadeiro do código, sem API de inferência ou métricas de desempenho inventadas.

Os assets antigos foram preservados, mas não são usados para simular interfaces. Snake Game e os desafios Node.js deixaram a seleção principal nesta etapa, conforme o escopo de três projetos. O currículo antigo continua sem link de download.

## Publicação

`vercel.json` mantém o bloqueio de deploy automático da branch `codex/portfolio-upgrade`. A etapa 1 autoriza commit e push para atualizar o PR #1 e preparar um preview; a liberação do deploy aguarda a conferência da integração e da branch de produção do projeto `portfolio` na Vercel. As APIs do GitHub e da Vercel foram bloqueadas pela política de rede desta máquina. Nenhum merge, promoção ou alteração do domínio de produção é autorizado. Novas tarefas já executam em ambiente isolado; use o checkout existente, sem criar worktree a menos que seja solicitado.
