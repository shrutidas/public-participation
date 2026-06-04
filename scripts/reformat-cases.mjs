import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const casesDir = join(root, 'js/cases');

const caseRanges = [
  ['meta-youth.js', 39, 70],
  ['covid-schools.js', 71, 100],
  ['covid-vaccines.js', 101, 118],
  ['genx-pfas.js', 119, 151]
];

const appLines = (await import('fs')).readFileSync(join(root, 'js/app.js'), 'utf8').split('\n');

// Fall back to git version if app.js no longer has inline cases
let sourceLines = appLines;
if (!appLines[38]?.includes('Case Study 1')) {
  const { execSync } = await import('child_process');
  sourceLines = execSync('git show HEAD:js/app.js', { cwd: root }).toString().split('\n');
}

function parseCase(start, end) {
  let body = sourceLines.slice(start - 1, end).join('\n');
  body = body.replace(/\]\s*\}\s*,?\s*$/, ']}');
  return Function(`"use strict"; return (${body});`)();
}

function escapeTemplate(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function wrapTemplate(str, baseIndent, width = 86) {
  const words = str.split(/\s+/);
  const lines = [];
  let line = baseIndent;

  for (const word of words) {
    const next = line === baseIndent ? `${line}${word}` : `${line} ${word}`;
    if (next.length > width && line !== baseIndent) {
      lines.push(line);
      line = `${baseIndent}${word}`;
    } else {
      line = next;
    }
  }
  if (line.trim()) lines.push(line);
  return lines.join('\n');
}

function formatParagraph(str, indent) {
  const inner = wrapTemplate(escapeTemplate(str), `${indent}  `);
  return `${indent}paragraph(\`\n${inner}\n${indent}\`)`;
}

function formatSources(sources, indent) {
  if (sources.length === 1) {
    const s = sources[0];
    return `${indent}sources: [source('${s.l.replace(/'/g, "\\'")}', '${s.u}')],`;
  }

  const inner = sources
    .map(s => `${indent}  source('${s.l.replace(/'/g, "\\'")}', '${s.u}'),`)
    .join('\n');

  return `${indent}sources: [\n${inner}\n${indent}],`;
}

function formatEntry(entry, indent) {
  return [
    `${indent}entry({`,
    `${indent}  date: '${entry.date.replace(/'/g, "\\'")}',`,
    `${indent}  category: '${entry.cat}',`,
    `${indent}  actors: '${entry.actors.replace(/'/g, "\\'")}',`,
    `${indent}  text: ${formatParagraph(entry.text, `${indent}  `)},`,
    formatSources(entry.srcs, `${indent}  `),
    `${indent}}),`
  ].join('\n');
}

function formatCase(data) {
  const entries = data.entries.map(e => formatEntry(e, '    ')).join('\n\n');

  return `import { caseStudy, entry, paragraph, source } from './helpers.js';

export default caseStudy({
  num: '${data.num.replace(/'/g, "\\'")}',
  title: '${data.title.replace(/'/g, "\\'")}',
  overview: ${formatParagraph(data.overview, '  ')},
  entries: [
${entries}
  ]
});
`;
}

for (const [filename, start, end] of caseRanges) {
  const data = parseCase(start, end);
  writeFileSync(join(casesDir, filename), formatCase(data));
  console.log(`Reformatted ${filename} (${data.entries.length} entries)`);
}
