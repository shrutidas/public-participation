import { CAT, KEY_ORDER } from './categories.js';
import { cases } from './cases/index.js';

let cur = 0;
let mode = 'timeline';
let si = 0;
const filt = { red: true, orange: true, green: true, blue: true, purple: true };

function vis() {
  return cases[cur].entries.filter(e => filt[e.cat]);
}

function openUrl(u) {
  window.open(u, '_blank', 'noopener,noreferrer');
}

function srcHtml(srcs, cls) {
  return srcs.map(s => `<a class="${cls}" onclick="openUrl('${s.u}')">Source: ${s.l}</a>`).join('');
}

function actorsHtml(actors) {
  return `<span class="act-label">Actors:</span> ${actors}`;
}

function renderTabs() {
  document.getElementById('tabs').innerHTML = cases.map((c, i) =>
    `<div class="tab${i === cur ? ' active' : ''}" onclick="switchCase(${i})">
      <span class="tab-num">${c.num}</span>
      <span class="tab-title">${c.title}</span>
    </div>`).join('');
}

function renderOverview() {
  document.getElementById('ov-txt').textContent = cases[cur].overview;
  document.getElementById('ov-txt').classList.add('show');
  document.getElementById('ov-arr').classList.add('open');
}

function toggleOv() {
  document.getElementById('ov-txt').classList.toggle('show');
  document.getElementById('ov-arr').classList.toggle('open');
}

function renderKey() {
  document.getElementById('key-txt').innerHTML = KEY_ORDER.map(k => {
    const c = CAT[k];
    const q = c.questions ? `<div class="key-q">${c.questions}</div>` : '';
    return `<div class="key-item"><span class="key-badge ${c.badge}">${c.label}</span><div><div class="key-title">${c.title}</div>${q}</div></div>`;
  }).join('');
}

function toggleKey() {
  document.getElementById('key-txt').classList.toggle('show');
  document.getElementById('key-arr').classList.toggle('open');
}

function splitEntryText(text, maxLen = 150) {
  const plain = text.replace(/<[^>]+>/g, '');
  if (plain.length <= maxLen) return { lead: text, rest: null };
  let cut = maxLen;
  const sp = plain.lastIndexOf(' ', cut);
  if (sp > maxLen * 0.55) cut = sp;
  // Map plain-text cut point back through HTML to avoid splitting inside tags
  let plainSeen = 0;
  let htmlCut = 0;
  for (; htmlCut < text.length && plainSeen < cut; htmlCut++) {
    if (text[htmlCut] === '<') {
      while (htmlCut < text.length && text[htmlCut] !== '>') htmlCut++;
    } else {
      plainSeen++;
    }
  }
  // Keep the word-boundary space in the lead so lead + rest don't run together
  if (cut < plain.length && plain[cut] === ' ') {
    while (htmlCut < text.length && /\s/.test(text[htmlCut])) htmlCut++;
  }
  return { lead: text.slice(0, htmlCut), rest: text.slice(htmlCut).trimStart() || null };
}

function entryTextHtml(text) {
  const { lead, rest } = splitEntryText(text);
  if (!rest) return `<p class="etxt">${lead}</p>`;
  return `<p class="etxt"><span class="etxt-lead">${lead}</span><span class="etxt-ellipsis">…</span><span class="etxt-more">${rest}</span></p>`;
}

function renderTimeline() {
  const w = document.querySelector('#tl-wrap .tl-inner');
  w.innerHTML = '';
  cases[cur].entries.forEach(e => {
    const d = document.createElement('div');
    d.className = `ent cat-${e.cat}${filt[e.cat] ? '' : ' hidden'}`;
    d.innerHTML = `<div class="ehd" onclick="this.parentElement.classList.toggle('open')">
      <div class="edate">${e.date}</div>
      <div class="e-mid"><span class="ebadge ${CAT[e.cat].badge}">${CAT[e.cat].label}</span>${entryTextHtml(e.text)}</div>
      <div class="earr">▶</div>
    </div>
    <div class="ebd">
      <div class="eact">${actorsHtml(e.actors)}</div>
      <div class="esrcs">${srcHtml(e.srcs, 'esrc-link')}</div>
    </div>`;
    w.appendChild(d);
  });
  updateCount();
}

function renderStep() {
  const v = vis();
  const body = document.getElementById('st-body');
  const ctr = document.getElementById('st-ctr');
  if (!v.length) {
    body.innerHTML = '<div class="empty-msg">No entries match the selected filters.</div>';
    ctr.innerHTML = '0 of 0';
    document.getElementById('btn-prev').disabled = true;
    document.getElementById('btn-next').disabled = true;
    return;
  }
  if (si >= v.length) si = v.length - 1;
  if (si < 0) si = 0;
  const e = v[si];
  body.innerHTML = `<div class="st-card">
    <div class="st-meta">
      <span class="st-date">${e.date}</span>
      <span class="st-badge ${CAT[e.cat].badge}">${CAT[e.cat].label}</span>
    </div>
    <div class="st-actors">${actorsHtml(e.actors)}</div>
    <div class="st-text">${e.text}</div>
    <div class="st-srcs">${srcHtml(e.srcs, 'st-src-link')}</div>
  </div>`;
  ctr.innerHTML = `${si + 1} of ${v.length}<small>${cases[cur].num}</small>`;
  document.getElementById('btn-prev').disabled = si === 0;
  document.getElementById('btn-next').disabled = si === v.length - 1;
}

function step(d) {
  si += d;
  renderStep();
}

function updateCount() {
  const n = vis().length;
  document.getElementById('cnt').textContent = `${n} entr${n === 1 ? 'y' : 'ies'}`;
}

function switchCase(i) {
  cur = i;
  si = 0;
  renderTabs();
  renderOverview();
  renderTimeline();
  renderStep();
}

function toggleFilter(f) {
  if (f === 'all') {
    const allOn = Object.values(filt).every(v => v);
    Object.keys(filt).forEach(k => { filt[k] = !allOn; });
  } else {
    filt[f] = !filt[f];
  }
  document.querySelectorAll('.fl').forEach(b => {
    const df = b.dataset.f;
    if (df === 'all') b.classList.toggle('off', !Object.values(filt).every(v => v));
    else b.classList.toggle('off', !filt[df]);
  });
  si = 0;
  renderTimeline();
  renderStep();
  updateCount();
}

function setMode(m) {
  mode = m;
  document.querySelectorAll('.mbt').forEach(b => b.classList.toggle('on', b.dataset.m === m));
  document.getElementById('tl-wrap').classList.toggle('show', m === 'timeline');
  document.getElementById('st-wrap').classList.toggle('show', m === 'step');
}

Object.assign(window, {
  openUrl,
  toggleOv,
  toggleKey,
  setMode,
  toggleFilter,
  step,
  switchCase
});

renderTabs();
renderOverview();
renderKey();
renderTimeline();
renderStep();
