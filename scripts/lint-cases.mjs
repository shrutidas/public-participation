#!/usr/bin/env node

import { pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';
import { CAT, KEY_ORDER } from '../js/categories.js';
import {
  VALID_STRENGTHS, VALID_PARTICIPATION_KINDS, VALID_EFFECTS, VALID_NODE_ROLES
} from '../js/cases/helpers.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const casesDir = join(root, 'js/cases');

const caseFiles = readdirSync(casesDir)
  .filter(name => name.endsWith('.js') && name !== 'index.js' && name !== 'helpers.js')
  .sort();

const errors = [];

function error(file, message) {
  errors.push(`  ${file}: ${message}`);
}

async function lintCaseFile(file) {
  const path = join(casesDir, file);

  let mod;
  try {
    mod = await import(pathToFileURL(path).href);
  } catch (err) {
    error(file, `failed to load — ${err.message}`);
    return;
  }

  const data = mod.default;
  if (!data || typeof data !== 'object') {
    error(file, 'must export a default case study object');
    return;
  }

  for (const field of ['num', 'title', 'overview', 'entries']) {
    if (!(field in data)) error(file, `missing "${field}"`);
  }

  lintChains(file, data);

  if (!Array.isArray(data.entries)) return;

  data.entries.forEach((entry, index) => {
    const label = `entry ${index + 1} (${entry.date ?? 'no date'})`;

    for (const field of ['date', 'cat', 'actors', 'text', 'srcs']) {
      if (!(field in entry)) error(file, `${label} missing "${field}"`);
    }

    if (!KEY_ORDER.includes(entry.cat)) {
      error(file, `${label} has invalid category "${entry.cat}"`);
    }

    if (!CAT[entry.cat]) {
      error(file, `${label} category "${entry.cat}" is not defined in categories.js`);
    }

    if (!entry.text?.trim()) error(file, `${label} has empty text`);
    if (!entry.actors?.trim()) error(file, `${label} has empty actors`);

    if (!Array.isArray(entry.srcs) || entry.srcs.length === 0) {
      error(file, `${label} must have at least one source`);
      return;
    }

    entry.srcs.forEach((src, srcIndex) => {
      const srcLabel = `${label}, source ${srcIndex + 1}`;
      if (!src.l?.trim()) error(file, `${srcLabel} missing label`);
      if (!src.u?.trim()) error(file, `${srcLabel} missing URL`);
      else if (!/^https?:\/\//.test(src.u)) error(file, `${srcLabel} URL must start with http:// or https://`);
    });
  });
}

function lintSources(file, where, srcs) {
  if (!Array.isArray(srcs)) {
    error(file, `${where} has no sources array`);
    return;
  }
  srcs.forEach((src, i) => {
    const label = `${where}, source ${i + 1}`;
    if (!src.l?.trim()) error(file, `${label} missing label`);
    if (!src.u?.trim()) error(file, `${label} missing URL`);
    else if (!/^https?:\/\//.test(src.u)) {
      error(file, `${label} URL must start with http:// or https://`);
    }
  });
}

function lintChains(file, data) {
  if (!('chains' in data)) return;
  if (!Array.isArray(data.chains)) {
    error(file, '"chains" must be an array');
    return;
  }

  const seenChainIds = new Set();

  data.chains.forEach((ch, ci) => {
    const cLabel = `chain ${ci + 1} (${ch.id ?? 'no id'})`;

    for (const field of ['id', 'label', 'track', 'outcome', 'thesis', 'links']) {
      if (!(field in ch)) error(file, `${cLabel} missing "${field}"`);
    }
    if (seenChainIds.has(ch.id)) error(file, `${cLabel} has a duplicate chain id`);
    seenChainIds.add(ch.id);

    if (!Array.isArray(ch.links) || ch.links.length === 0) {
      error(file, `${cLabel} has no links`);
      return;
    }

    // Every node must carry a role for the map's color schema; every role
    // must belong to a node that exists.
    const nodeLabels = new Set(ch.links.flatMap(l => [l.from, l.to]));
    for (const [n, role] of Object.entries(ch.nodes ?? {})) {
      if (!VALID_NODE_ROLES.includes(role)) {
        error(file, `${cLabel} node "${n}" has invalid role "${role}"`);
      }
      if (!nodeLabels.has(n)) {
        error(file, `${cLabel} nodes map names "${n}", which no link uses`);
      }
    }
    for (const n of nodeLabels) {
      if (!(n in (ch.nodes ?? {}))) {
        error(file, `${cLabel} node "${n}" has no role in nodes`);
      }
    }

    const seenLinkIds = new Set();

    ch.links.forEach((l, li) => {
      const lLabel = `${cLabel}, link ${l.id ?? li + 1}`;

      for (const field of ['id', 'from', 'to', 'claim', 'strength']) {
        if (!(field in l)) error(file, `${lLabel} missing "${field}"`);
      }
      if (!l.name?.trim()) {
        error(file, `${lLabel} has no name — the map shows the event name on the link`);
      }
      if (seenLinkIds.has(l.id)) error(file, `${lLabel} has a duplicate link id`);
      seenLinkIds.add(l.id);

      if (!VALID_STRENGTHS.includes(l.strength)) {
        error(file, `${lLabel} has invalid strength "${l.strength}"`);
      }

      // Chains must actually chain. A link continues either the link
      // immediately before it, or an earlier link named in `after` — which
      // is how a chain expresses a branch. Either way, this link's `from`
      // must be its parent's `to`.
      if (li > 0) {
        const parent = l.after
          ? ch.links.find(p => p.id === l.after)
          : ch.links[li - 1];
        if (l.after && !parent) {
          error(file, `${lLabel} declares after: "${l.after}", which is not a link in this chain`);
        } else if (parent && parent.to !== l.from) {
          error(
            file,
            `${lLabel} breaks the chain — its "from" does not match the "to" of ${parent.id}`
          );
        }
      } else if (l.after) {
        error(file, `${lLabel} is the first link and cannot declare "after"`);
      }

      if (l.strength !== 'unstudied' && (!l.evidence || l.evidence.length === 0)) {
        error(file, `${lLabel} is graded "${l.strength}" but carries no evidence`);
      }

      [...(l.evidence ?? []), ...(l.counterEvidence ?? [])].forEach((ev, ei) => {
        const eLabel = `${lLabel}, evidence ${ei + 1}`;
        if (!ev.finding?.trim()) error(file, `${eLabel} has an empty finding`);
        if (!VALID_STRENGTHS.includes(ev.grade)) {
          error(file, `${eLabel} has invalid grade "${ev.grade}"`);
        }
        if (!ev.srcs?.length) error(file, `${eLabel} must have at least one source`);
        if (ev.quote != null && !String(ev.quote).trim()) {
          error(file, `${eLabel} has an empty quote`);
        }
        lintSources(file, eLabel, ev.srcs);
      });

      (l.participation ?? []).forEach((p, pi) => {
        const pLabel = `${lLabel}, participation ${pi + 1} (${p.name ?? 'unnamed'})`;
        if (!p.date?.trim()) error(file, `${pLabel} missing date`);
        if (!p.actors?.trim()) error(file, `${pLabel} missing actors`);
        if (!p.description?.trim()) error(file, `${pLabel} missing description`);
        if (!VALID_PARTICIPATION_KINDS.includes(p.kind)) {
          error(file, `${pLabel} has invalid kind "${p.kind}"`);
        }
        if (!VALID_EFFECTS.includes(p.effect)) {
          error(file, `${pLabel} has invalid effect "${p.effect}"`);
        }
        if (!p.srcs?.length) error(file, `${pLabel} must have at least one source`);
        lintSources(file, pLabel, p.srcs);
      });

      (l.proposals ?? []).forEach((p, pi) => {
        const pLabel = `${lLabel}, proposal ${pi + 1} (${p.name ?? 'unnamed'})`;
        if (!p.name?.trim()) error(file, `${pLabel} missing name`);
        if (!p.method?.trim()) error(file, `${pLabel} missing method`);
        if (!p.description?.trim()) error(file, `${pLabel} missing description`);
        if (!p.mechanism?.trim()) error(file, `${pLabel} missing mechanism`);
        if (typeof p.unstudied !== 'boolean') {
          error(file, `${pLabel} missing unstudied flag`);
        }
        if (p.srcs?.length) lintSources(file, pLabel, p.srcs);
      });

      (l.gaps ?? []).forEach((g, gi) => {
        if (!g?.trim()) error(file, `${lLabel}, gap ${gi + 1} is empty`);
      });
    });
  });
}

console.log(`Linting ${caseFiles.length} case files...\n`);

for (const file of caseFiles) {
  await lintCaseFile(file);
}

let cases;
try {
  ({ cases } = await import(pathToFileURL(join(casesDir, 'index.js')).href));
} catch (err) {
  errors.push(`  cases/index.js: failed to load — ${err.message}`);
}

if (cases) {
  if (cases.length !== caseFiles.length) {
    errors.push(`  cases/index.js: expected ${caseFiles.length} cases, found ${cases.length}`);
  }

  cases.forEach((caseStudy, index) => {
    try {
      caseStudy.entries.forEach(entry => {
        const badge = CAT[entry.cat].badge;
        if (!badge) throw new Error(`missing badge for ${entry.cat}`);
      });
    } catch (err) {
      error(cases[index]?.num ?? `case ${index + 1}`, `render check failed — ${err.message}`);
    }
  });
}

if (errors.length) {
  console.error(`Found ${errors.length} problem(s):\n`);
  errors.forEach(msg => console.error(msg));
  process.exit(1);
}

const chainCount = cases.reduce((n, c) => n + (c.chains?.length ?? 0), 0);
const linkCount = cases.reduce(
  (n, c) => n + (c.chains ?? []).reduce((m, ch) => m + ch.links.length, 0), 0
);
const partCount = cases.reduce(
  (n, c) => n + (c.chains ?? []).reduce(
    (m, ch) => m + ch.links.reduce((k, l) => k + (l.participation?.length ?? 0), 0), 0
  ), 0
);
const propCount = cases.reduce(
  (n, c) => n + (c.chains ?? []).reduce(
    (m, ch) => m + ch.links.reduce((k, l) => k + (l.proposals?.length ?? 0), 0), 0
  ), 0
);

console.log('All case studies passed lint.');
console.log(`  ${caseFiles.length} files, ${cases.reduce((n, c) => n + c.entries.length, 0)} entries total`);
console.log(`  ${chainCount} causal chains, ${linkCount} links, ${partCount} participation instances, ${propCount} proposed instances`);
