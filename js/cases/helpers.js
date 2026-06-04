/** Collapse whitespace in one or more text fragments into a single paragraph. */
export function paragraph(...parts) {
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

/** One timeline source link. */
export function source(label, url) {
  return { label, url };
}

/**
 * One timeline entry.
 * category: red | orange | green | blue | purple
 */
export function entry({ date, category, actors, text, sources = [] }) {
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
  return { num, title, overview, entries };
}
