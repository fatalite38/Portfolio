'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('open', opening);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);
const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const tabs = [...document.querySelectorAll('.preview-tabs [role="tab"]')];
function activateTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  document.getElementById('window-address').textContent = tab.dataset.address;
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
    if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
    if (event.key === 'Home') next = tabs[0];
    if (event.key === 'End') next = tabs[tabs.length - 1];
    if (next) { event.preventDefault(); activateTab(next, true); }
  });
});

const projects = [...document.querySelectorAll('[data-category]')];
const filters = [...document.querySelectorAll('[data-filter]')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let count = 0;
  projects.forEach(project => {
    const show = button.dataset.filter === 'all' || project.dataset.category === button.dataset.filter;
    project.hidden = !show;
    if (show) count++;
  });
  document.getElementById('filter-status').textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
}));

const cases = {
  coco: {
    category: 'Desenvolvimento web', status: 'Publicado · Site institucional', title: 'Coco Cuesta',
    intro: 'Uma presença digital para comunicar a transição de Mais Sabor para Coco Cuesta e apresentar a marca e seus produtos.',
    sections: [
      ['O problema', 'Apresentar uma nova identidade sem perder a história da empresa e facilitar o contato de quem quer conhecer os produtos.'],
      ['O que o projeto reúne', ['Apresentação da marca e contexto da mudança de identidade.', 'Catálogo de sabores com embalagens novas e em transição.', 'Navegação responsiva e caminhos para contato comercial.', 'Formulário integrado ao EmailJS e contato por WhatsApp.']],
      ['Implementação', 'Interface desenvolvida com React e TypeScript, Vite no ambiente de desenvolvimento e Tailwind CSS na estilização.']
    ], tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
    links: [{ label: 'Visitar site', href: 'https://cococuesta.com.br', primary: true }, { label: 'Ver repositório', href: 'https://github.com/fatalite38/GeloMaisSabor' }]
  },
  gelo: {
    category: 'Sistema de gestão', status: 'Em desenvolvimento · Projeto sem demonstração pública', title: 'Gelo Gestão',
    intro: 'Um sistema para organizar a operação: produtos, sabores, estoque e o acesso de cada pessoa ao que ela precisa fazer.',
    sections: [
      ['O contexto', 'Conectar as regras de uma operação de produtos congelados a uma interface que ajude a consultar e registrar o trabalho do dia a dia.'],
      ['Escopo em desenvolvimento', ['Cadastro de produtos, sabores e unidades, com conversões.', 'Registro de entradas e saídas e acompanhamento de estoque.', 'Empresas, perfis e permissões com controle de acesso por linha (RLS).', 'Histórico de alterações para apoiar a rastreabilidade.']],
      ['Implementação', 'React e TypeScript no frontend, com Supabase para autenticação, dados e políticas de acesso.']
    ], tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'RLS'], links: [],
    note: 'As imagens deste portfólio são uma representação ilustrativa da interface. Não há conexão com dados reais nem demonstração pública do sistema.'
  },
  bert: {
    category: 'Inteligência artificial', status: 'Projeto acadêmico · Trabalho de conclusão de curso', title: 'Análise de sentimento com BERT',
    intro: 'Um estudo de processamento de linguagem natural para classificar críticas do IMDb como positivas ou negativas com um modelo BERT pré-treinado.',
    sections: [
      ['A investigação', 'Explorar o uso de um modelo de linguagem na classificação de textos e entender o processo de preparação, treinamento e avaliação.'],
      ['O que está no notebook', ['Carregamento e preparação da base IMDb.', 'Treinamento com TensorFlow e a biblioteca Transformers.', 'Avaliação com precisão, recall, F1 e visualizações de resultados.']],
      ['Limites do estudo', 'O escopo é a classificação binária de críticas de filmes. O repositório documenta o experimento em notebook; não apresenta uma API de inferência em produção.']
    ], tech: ['Python', 'TensorFlow', 'Transformers', 'Scikit-learn', 'Jupyter'],
    links: [{ label: 'Abrir notebook no GitHub', href: 'https://github.com/fatalite38/AnalyzeSentimentBERT/blob/main/AnalyzeSentiment.ipynb', primary: true }, { label: 'Ver repositório', href: 'https://github.com/fatalite38/AnalyzeSentimentBERT' }]
  }
};
const dialog = document.getElementById('project-dialog');
let dialogTrigger = null;
const externalIcon = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('icon');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '#i-external');
  svg.append(use);
  return svg;
};
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = cases[button.dataset.project];
  if (!project) return;
  dialogTrigger = button;
  document.getElementById('dialog-category').textContent = project.category;
  document.getElementById('dialog-status').textContent = project.status;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-intro').textContent = project.intro;
  const details = document.getElementById('dialog-details');
  details.replaceChildren();
  project.sections.forEach(([heading, content]) => {
    const section = document.createElement('section');
    const title = document.createElement('h3');
    title.textContent = heading;
    section.append(title);
    if (Array.isArray(content)) {
      const list = document.createElement('ul');
      content.forEach(text => { const item = document.createElement('li'); item.textContent = text; list.append(item); });
      section.append(list);
    } else { const paragraph = document.createElement('p'); paragraph.textContent = content; section.append(paragraph); }
    details.append(section);
  });
  if (project.note) { const note = document.createElement('p'); note.className = 'dialog-note'; note.textContent = project.note; details.append(note); }
  const technologies = document.getElementById('dialog-tech');
  technologies.replaceChildren();
  project.tech.forEach(text => { const tag = document.createElement('li'); tag.textContent = text; technologies.append(tag); });
  const links = document.getElementById('dialog-links');
  links.replaceChildren();
  project.links.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.href; anchor.target = '_blank'; anchor.rel = 'noopener noreferrer';
    anchor.className = link.primary ? 'button button-primary' : 'text-link';
    anchor.textContent = link.label; anchor.append(externalIcon()); links.append(anchor);
  });
  dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
  document.querySelector('.dialog-close').focus();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialogTrigger?.focus({ preventScroll: true });
});

let copyReset;
document.querySelector('.copy-profile').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  const label = document.querySelector('.copy-profile span');
  try {
    await navigator.clipboard.writeText('luizfernandodp1103@gmail.com');
    label.textContent = 'E-mail copiado';
    status.textContent = 'Pronto para compartilhar.';
    clearTimeout(copyReset);
    copyReset = setTimeout(() => { label.textContent = 'Copiar meu e-mail'; status.textContent = ''; }, 4500);
  } catch {
    status.textContent = 'Copie este e-mail: luizfernandodp1103@gmail.com';
  }
});
document.getElementById('current-year').textContent = new Date().getFullYear();

// The preference is local to this browser; no account or external service is required.
const themeToggle = document.querySelector('.theme-toggle');
function updateThemeControl() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#111a29' : '#f7f9fc';
}
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('luiz-portfolio-theme', theme); } catch {}
  updateThemeControl();
});
updateThemeControl();
