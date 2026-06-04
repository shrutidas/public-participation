#!/usr/bin/env node

import { pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';
import { CAT, KEY_ORDER } from '../js/categories.js';

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

console.log('All case studies passed lint.');
console.log(`  ${caseFiles.length} files, ${cases.reduce((n, c) => n + c.entries.length, 0)} entries total`);
