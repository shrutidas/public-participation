#!/usr/bin/env node
/**
 * Export the research repository as CSV, straight from the case and chain data.
 *
 * The repository is not a separate document that can drift — it is whatever is
 * currently cited in js/cases and js/chains. Re-run this after adding sources:
 *
 *   node scripts/export-research.mjs > research-repository.csv
 */

import { pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { cases } = await import(pathToFileURL(join(root, 'js/cases/index.js')).href);

const COLUMNS = [
  'Case',
  'Record Type',
  'Chain',
  'Link ID',
  'Causal Chain Placement',
  'Link Strength',
  'Evidence Grade',
  'Participation Kind',
  'Participation Effect',
  'Date',
  'Actors',
  'Resource Title',
  'URL',
  'Key Finding',
  'Verbatim Quote',
  'Caveat',
  'Deep Link'
];

/** Strip inline markup and collapse whitespace so cells stay readable. */
const plain = s => String(s ?? '')
  .replace(/<[^>]+>/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const cell = v => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const rows = [];
const seenUrls = new Set();

for (const c of cases) {
  const base = `#/case/${c.slug}`;

  for (const ch of c.chains ?? []) {
    for (const l of ch.links) {
      const placement = `${plain(l.from)} -> ${plain(l.to)}`;
      const linkUrl = `${base}/chain/${ch.id}/${l.id}`;

      const pushEvidence = (ev, type) => {
        for (const s of ev.srcs) {
          seenUrls.add(s.u);
          rows.push({
            Case: c.title,
            'Record Type': type,
            Chain: ch.label,
            'Link ID': l.id,
            'Causal Chain Placement': placement,
            'Link Strength': l.strength,
            'Evidence Grade': ev.grade,
            'Participation Kind': '',
            'Participation Effect': '',
            Date: '',
            Actors: '',
            'Resource Title': s.l,
            URL: s.u,
            'Key Finding': plain(ev.finding),
            'Verbatim Quote': plain(ev.quote),
            Caveat: plain(ev.caveat),
            'Deep Link': linkUrl
          });
        }
      };

      for (const ev of l.evidence) pushEvidence(ev, 'Evidence');
      for (const ev of l.counterEvidence) pushEvidence(ev, 'Counter-evidence');

      l.participation.forEach((p, i) => {
        for (const s of p.srcs) {
          seenUrls.add(s.u);
          rows.push({
            Case: c.title,
            'Record Type': 'Participation instance',
            Chain: ch.label,
            'Link ID': l.id,
            'Causal Chain Placement': placement,
            'Link Strength': l.strength,
            'Evidence Grade': '',
            'Participation Kind': p.kind,
            'Participation Effect': p.effect,
            Date: p.date,
            Actors: plain(p.actors),
            'Resource Title': s.l,
            URL: s.u,
            'Key Finding': `${p.name}: ${plain(p.description)}`,
            Caveat: '',
            'Deep Link': `${linkUrl}/p/${i}`
          });
        }
      });

      // Proposed participation: the counterfactual record, one row per
      // proposal, sourced to the project's design work rather than to a URL.
      for (const p of l.proposals ?? []) {
        rows.push({
          Case: c.title,
          'Record Type': p.unstudied ? 'Proposed participation (unstudied link)' : 'Proposed participation',
          Chain: ch.label,
          'Link ID': l.id,
          'Causal Chain Placement': placement,
          'Link Strength': l.strength,
          'Evidence Grade': '',
          'Participation Kind': plain(p.method),
          'Participation Effect': '',
          Date: '',
          Actors: '',
          'Resource Title': p.srcs?.[0]?.l ?? '',
          URL: p.srcs?.[0]?.u ?? '',
          'Key Finding': `${p.name}: ${plain(p.description)} Presumed mechanism: ${plain(p.mechanism)}`,
          Caveat: '',
          'Deep Link': linkUrl
        });
      }

      // Open questions carry no source by definition; they are what is missing.
      for (const g of l.gaps) {
        rows.push({
          Case: c.title,
          'Record Type': 'Open question',
          Chain: ch.label,
          'Link ID': l.id,
          'Causal Chain Placement': placement,
          'Link Strength': l.strength,
          'Evidence Grade': '',
          'Participation Kind': '',
          'Participation Effect': '',
          Date: '',
          Actors: '',
          'Resource Title': '',
          URL: '',
          'Key Finding': plain(g),
          Caveat: '',
          'Deep Link': linkUrl
        });
      }
    }
  }

  for (const e of c.entries) {
    for (const s of e.srcs) {
      seenUrls.add(s.u);
      rows.push({
        Case: c.title,
        'Record Type': 'Timeline entry',
        Chain: '',
        'Link ID': '',
        'Causal Chain Placement': '',
        'Link Strength': '',
        'Evidence Grade': '',
        'Participation Kind': e.cat === 'purple' ? 'participation (timeline)' : '',
        'Participation Effect': '',
        Date: e.date,
        Actors: plain(e.actors),
        'Resource Title': s.l,
        URL: s.u,
        'Key Finding': plain(e.text),
        Caveat: '',
        'Deep Link': `${base}/timeline`
      });
    }
  }
}

process.stdout.write(COLUMNS.join(',') + '\n');
for (const r of rows) {
  process.stdout.write(COLUMNS.map(k => cell(r[k])).join(',') + '\n');
}

const byType = {};
for (const r of rows) byType[r['Record Type']] = (byType[r['Record Type']] || 0) + 1;
console.error(`${rows.length} rows, ${seenUrls.size} unique URLs`);
console.error(Object.entries(byType).map(([k, v]) => `  ${k}: ${v}`).join('\n'));
