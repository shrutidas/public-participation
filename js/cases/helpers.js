const VALID_CATEGORIES = ['red', 'orange', 'green', 'blue', 'purple'];

/**
 * One timeline entry.
 * category: red | orange | green | blue | purple
 */
export function entry({ date, category, actors, text, sources = [] }) {
  if (!VALID_CATEGORIES.includes(category)) {
    throw new Error(
      `Invalid category "${category}" for entry dated "${date}". ` +
      `Use one of: ${VALID_CATEGORIES.join(', ')}`
    );
  }

  if (!date?.trim()) throw new Error('Entry is missing date');
  if (!actors?.trim()) throw new Error(`Entry dated "${date}" is missing actors`);
  if (!text?.trim()) throw new Error(`Entry dated "${date}" is missing text`);

  for (const s of sources) {
    if (!s.label?.trim()) throw new Error(`Entry dated "${date}" has a source missing a label`);
    if (!s.url?.trim()) throw new Error(`Entry dated "${date}" has a source missing a URL`);
    if (!/^https?:\/\//.test(s.url)) {
      throw new Error(`Entry dated "${date}" has an invalid source URL: ${s.url}`);
    }
  }

  return {
    date,
    cat: category,
    actors,
    text,
    srcs: sources.map(s => ({ l: s.label, u: s.url }))
  };
}

/** Case study metadata and entries. */
export function caseStudy({ num, title, overview, entries }) {
  if (!num?.trim()) throw new Error('Case study is missing num');
  if (!title?.trim()) throw new Error(`Case study "${num}" is missing title`);
  if (!overview?.trim()) throw new Error(`Case study "${num}" is missing overview`);
  if (!Array.isArray(entries) || entries.length === 0) {
    throw new Error(`Case study "${num}" must have at least one entry`);
  }

  return { num, title, overview, entries };
}

/** Collapse whitespace in one or more text fragments into a single paragraph. */
export function paragraph(...parts) {
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

/** One timeline source link. */
export function source(label, url) {
  return { label, url };
}

export { VALID_CATEGORIES };
