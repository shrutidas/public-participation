/** Shared rendering helpers. */

export function openUrl(u) {
  window.open(u, '_blank', 'noopener,noreferrer');
}

/** Escape a string for safe use inside an HTML attribute. */
export function attr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/** Render a row of source links. `srcs` are {l, u} pairs. */
export function srcHtml(srcs, cls = 'esrc-link') {
  if (!srcs?.length) return '';
  return srcs.map(s =>
    `<a class="${cls}" data-url="${attr(s.u)}">Source: ${s.l}</a>`
  ).join('');
}

/**
 * Delegate clicks on any [data-url] element to openUrl. Called once at boot,
 * so dynamically rendered source links do not each need their own handler.
 */
export function bindSourceLinks(root = document) {
  root.addEventListener('click', e => {
    const a = e.target.closest('[data-url]');
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    openUrl(a.dataset.url);
  });
}
