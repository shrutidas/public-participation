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


/**
 * Split entry HTML into a lead of about `maxLen` visible characters and the
 * rest, without cutting inside a tag. Used by the full timeline and by the
 * spine map, where boxes show the lead and the sidebar shows the whole entry.
 */
export function splitEntryText(text, maxLen = 150) {
  const plain = text.replace(/<[^>]+>/g, '');
  if (plain.length <= maxLen) return { lead: text, rest: null };
  let cut = maxLen;
  const sp = plain.lastIndexOf(' ', cut);
  if (sp > maxLen * 0.55) cut = sp;
  let plainSeen = 0;
  let htmlCut = 0;
  for (; htmlCut < text.length && plainSeen < cut; htmlCut++) {
    if (text[htmlCut] === '<') {
      while (htmlCut < text.length && text[htmlCut] !== '>') htmlCut++;
    } else {
      plainSeen++;
    }
  }
  if (cut < plain.length && plain[cut] === ' ') {
    while (htmlCut < text.length && /\s/.test(text[htmlCut])) htmlCut++;
  }
  return { lead: text.slice(0, htmlCut), rest: text.slice(htmlCut).trimStart() || null };
}
