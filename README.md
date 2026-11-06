# Luiz Pedrozo — Portfólio

Portfólio profissional com apresentação, formação, trajetória, projetos e contato. Desenvolvido com React, TypeScript e Vite, inclui filtros de projetos, painéis de detalhes com galerias e download do currículo.

A interface é responsiva e oferece navegação por teclado, foco visível e suporte à preferência por movimento reduzido.

O card “Em construção” apresenta iniciativas futuras em uma composição SVG/CSS. Ele aparece em “Todos”, junto aos três projetos, e sozinho no filtro “Em construção”, sem alterar a contagem de projetos. Os filtros são refletidos na URL e podem ser retomados por recarga ou pelo histórico do navegador.

## Tecnologias

- React e React DOM
- TypeScript
- Vite
- CSS com fontes locais Space Grotesk e DM Sans

| Caminho | Conteúdo |
| --- | --- |
| `src/components/` | Seções da página, navegação e apresentação dos projetos |
| `src/data/` | Projetos, mídias e contatos |
| `src/hooks/` | Estado de navegação e comportamento de rolagem |
| `src/types/` | Tipos dos projetos, mídias e galerias |
| `src/main.tsx` | Renderização e hidratação da aplicação |
| `src/entry-server.tsx` e `scripts/prerender.mjs` | Pré-renderização do conteúdo no build |
| `assets/` | Imagens, fontes e currículo PDF |
| `styles.css` e `upgrade.css` | Estilos, responsividade e animações |
