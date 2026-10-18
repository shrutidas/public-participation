/**
 * Where participants' notes are kept. See README, "Participant notes".
 *
 * The publishable key is meant to be public: the database rules in
 * supabase/schema.sql decide what it can do. Leave the URL empty and the
 * notes feature stays off. Add ?notes=demo to the page URL to try the
 * feature with notes kept in this browser only.
 */
export const NOTES = {
  url: '',            // https://<project>.supabase.co
  key: '',            // the publishable key (sb_publishable_...) or the legacy anon key
  // Stored with every note. Change it when the map's content changes, so an
  // export says which version of the site each note was written against.
  contentRev: '2026-10-17',
  // Shown when notes cannot reach the database: a shared doc to write in.
  fallbackUrl: '',
  pollMs: 5000
};
