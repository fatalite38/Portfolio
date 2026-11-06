# Luiz Pedrozo — Portfólio

Portfólio profissional com apresentação, formação, trajetória, projetos e contato. Desenvolvido com React, TypeScript e Vite, inclui filtros de projetos, painéis de detalhes com galerias e download do currículo.

A interface é responsiva e oferece navegação por teclado, foco visível e suporte à preferência por movimento reduzido.

## Tecnologias

- React e React DOM
- TypeScript
- Vite
- CSS com fontes locais Space Grotesk e DM Sans

## Requisitos

- Node.js 22.12 ou superior; recomendado Node.js 24.x
- npm

## Desenvolvimento

```bash
npm ci
npm run dev
```

Aplicação disponível em `http://localhost:5173`.

## Verificação e build

```bash
npm run typecheck
npm run build
```

O build gera o site estático em `dist/`, com conteúdo pré-renderizado e interações ativadas pelo React. Para visualizar o resultado localmente:

```bash
npm run preview
```

Endereço local: `http://localhost:4173`.

## Organização

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

Os projetos e contatos são mantidos em [src/data/projects.ts](src/data/projects.ts) e [src/data/contact.ts](src/data/contact.ts). As licenças das fontes estão em [assets/fonts/](assets/fonts/).
