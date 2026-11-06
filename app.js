'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const dialog = document.getElementById('project-dialog');
const closeDialogButton = document.querySelector('.dialog-close');
const filters = [...document.querySelectorAll('[data-filter]')];
const projectList = document.getElementById('project-list');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let dialogTrigger = null;
let activeProject = null;
let restoringUrl = false;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function externalLink(link) {
  const anchor = element('a', link.label, link.primary ? 'button button-primary' : 'text-link');
  anchor.href = link.href;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  return anchor;
}

function renderMedia(media) {
  if (media.type === 'image') {
    const figure = element('figure', '', 'source-preview');
    const image = element('img');
    image.src = media.src;
    image.alt = media.alt;
    image.width = media.width || 1280;
    image.height = media.height || 800;
    image.loading = 'lazy';
    figure.append(image, element('figcaption', media.caption));
    return figure;
  }
  if (media.type === 'source') {
    const figure = element('figure', '', 'source-preview');
    const pre = element('pre');
    pre.append(element('code', media.code));
    figure.append(element('figcaption', media.title), pre, element('p', media.caption));
    return figure;
  }
  const placeholder = element('div', '', 'media-placeholder');
  const symbol = element('span', '', 'placeholder-symbol');
  symbol.setAttribute('aria-hidden', 'true');
  placeholder.append(symbol, element('strong', media.title), element('p', media.description), element('small', media.caption));
  return placeholder;
}

portfolioProjects.forEach(project => {
  const fragment = document.getElementById('project-template').content.cloneNode(true);
  const article = fragment.querySelector('article');
  article.id = `project-${project.id}`;
  article.dataset.category = project.category;
  article.querySelector('.project-media').append(renderMedia(project.media));
  article.querySelector('.project-status').textContent = project.status;
  article.querySelector('h3').textContent = project.title;
  article.querySelector('.project-summary').textContent = project.summary;
  project.technologies.forEach(technology => article.querySelector('.technology-tags').append(element('li', technology)));
  const button = article.querySelector('button');
  button.dataset.project = project.id;
  button.setAttribute('aria-label', `Conhecer projeto: ${project.title}`);
  button.setAttribute('aria-haspopup', 'dialog');
  button.addEventListener('click', () => openProject(project, button));
  if (project.links.length) {
    const link = externalLink(project.links[0]);
    link.className = '';
    article.querySelector('.project-actions').append(link);
  }
  projectList.append(fragment);
});

function closeMenu(returnFocus = false) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('open');
  if (returnFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('open', opening);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  // Moving focus to the destination keeps a closed mobile disclosure from hiding it.
  const target = document.querySelector(link.hash);
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
document.addEventListener('focusin', event => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', () => closeMenu());

function updateUrl(key, value) {
  if (restoringUrl) return;
  const url = new URL(location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  history.replaceState(null, '', url);
}
function applyFilter(value, writeUrl = true) {
  const valid = filters.some(button => button.dataset.filter === value);
  const selected = valid ? value : 'all';
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selected)));
  let count = 0;
  projectList.querySelectorAll('[data-category]').forEach(article => {
    article.hidden = selected !== 'all' && article.dataset.category !== selected;
    if (!article.hidden) count++;
  });
  const number = new Intl.NumberFormat('pt-BR').format(count);
  document.getElementById('filter-status').textContent = `${number} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
  if (writeUrl) updateUrl('filtro', selected === 'all' ? null : selected);
}
filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));

function openProject(project, trigger) {
  // Keep the underlying trigger available for focus restoration, including deep links.
  const article = document.getElementById(`project-${project.id}`);
  if (article.hidden) applyFilter(project.category);
  activeProject = project.id;
  dialogTrigger = trigger || article.querySelector('[data-project]');
  document.getElementById('dialog-category').textContent = project.categoryLabel;
  document.getElementById('dialog-status').textContent = project.status;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-intro').textContent = project.summary;
  document.getElementById('dialog-media').replaceChildren(renderMedia(project.media));
  const details = document.getElementById('dialog-details');
  details.replaceChildren();
  project.sections.forEach(content => {
    const section = element('section');
    section.append(element('h3', content.title));
    if (content.text) section.append(element('p', content.text));
    if (content.items) {
      const list = element('ul');
      content.items.forEach(item => list.append(element('li', item)));
      section.append(list);
    }
    details.append(section);
  });
  if (project.note) details.append(element('p', project.note, 'dialog-note'));
  document.getElementById('dialog-tech').replaceChildren(...project.technologies.map(text => element('li', text)));
  document.getElementById('dialog-links').replaceChildren(...project.links.map(externalLink));
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
  closeDialogButton.focus({ preventScroll: true });
  updateUrl('projeto', project.id);
}
closeDialogButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  activeProject = null;
  if (!dialog.open) dialogTrigger?.focus({ preventScroll: true });
  updateUrl('projeto', null);
});
function restoreUrl() {
  restoringUrl = true;
  const params = new URLSearchParams(location.search);
  applyFilter(params.get('filtro') || 'all', false);
  const project = portfolioProjects.find(item => item.id === params.get('projeto'));
  if (project && (!dialog.open || activeProject !== project.id)) openProject(project);
  else if (!project && dialog.open) dialog.close();
  restoringUrl = false;
  const selected = filters.find(button => button.getAttribute('aria-pressed') === 'true').dataset.filter;
  updateUrl('filtro', selected === 'all' ? null : selected);
  if (!project) updateUrl('projeto', null);
}
window.addEventListener('popstate', restoreUrl);
restoreUrl();

const copyButton = document.querySelector('.copy-profile');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  const email = document.querySelector('.email-link').href.replace('mailto:', '');
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'E-mail copiado. Pronto para colar na sua mensagem.';
  } catch {
    copyStatus.textContent = `Copie este e-mail: ${email}`;
  }
});
document.getElementById('current-year').textContent = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(new Date());

// Only the transition reads layout. Work is scheduled once per frame, not per event.
const passage = document.querySelector('.project-transition');
let passageVisible = true;
let frame = null;
function updatePassage() {
  frame = null;
  if (reducedMotion.matches || !passageVisible) return;
  const bounds = passage.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (innerHeight - bounds.top) / (innerHeight * .8)));
  passage.style.setProperty('--passage', progress.toFixed(3));
}
function schedulePassage() {
  if (!frame && !reducedMotion.matches && passageVisible) frame = requestAnimationFrame(updatePassage);
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    passageVisible = entries[0].isIntersecting;
    if (passageVisible) schedulePassage();
  }, { rootMargin: '100px' });
  observer.observe(passage);
}
window.addEventListener('scroll', schedulePassage, { passive: true });
window.addEventListener('resize', schedulePassage);
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) passage.style.removeProperty('--passage');
  else schedulePassage();
});
schedulePassage();
