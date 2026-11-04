# Continuar o portfólio no Codex local

O upgrade está na branch `codex/portfolio-upgrade`. O PR permanece em rascunho para permitir as próximas alterações sem merge ou publicação.

## Se você já tem o repositório no computador

Abra o PowerShell na pasta Portfolio e confira alterações locais:

```powershell
git status
git fetch origin
git switch --track origin/codex/portfolio-upgrade
codex
```

Se essa branch já existir localmente, use `git switch codex/portfolio-upgrade` em vez de criar outra branch de acompanhamento. Preserve alterações locais pendentes antes de trocar de branch.

## Se ainda não tem uma cópia local

```powershell
git clone --branch codex/portfolio-upgrade https://github.com/fatalite38/Portfolio.git
Set-Location Portfolio
codex
```

## Prompt para retomar

> Continue o upgrade do meu portfólio nesta branch. Leia README.md, ANALISE-UPGRADE.md, DESIGN.md e QA.md. Preserve o visual, os conteúdos reais e os links já preparados. Mantenha HTML, CSS e JavaScript por enquanto. Gelo Gestão deve continuar identificado como projeto em desenvolvimento, com interface ilustrativa; BERT é um notebook acadêmico, sem API pública. Não invente métricas, depoimentos, proficiência ou currículo. Implemente as próximas alterações que eu pedir e confira responsividade, teclado, filtros, diálogos, tema e links. Não faça merge nem deploy sem eu solicitar.

## Conferências antes de uma publicação futura

- Confirmar e-mail e LinkedIn, revisar formação e experiências.
- Decidir se mantém o avatar ilustrado ou troca por uma foto atual.
- Anexar um currículo atualizado antes de adicionar download.
- Revisar os exemplos ilustrativos dos projetos e substituir por capturas demonstrativas quando apropriado.
- Testar no celular e por teclado.

A configuração em vercel.json bloqueia deploy automático apenas para `codex/portfolio-upgrade`. A página abre por `index.html` sem build. A futura adoção de React com TypeScript é opcional; o upgrade visual não depende dessa migração.
