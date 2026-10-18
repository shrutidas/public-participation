/**
 * Where participants' notes are kept. See README, "Participant notes".
 *
 * sheetUrl is the /exec link of the Google Sheet's web app (google/notes.gs).
 * It is meant to be public: the script decides what anyone with it can do.
 * Leave it empty and the notes feature stays off. Add ?notes=demo to the page
 * URL to try the feature with notes kept in this browser only.
 */
export const NOTES = {
  sheetUrl: '',       // https://script.google.com/macros/s/.../exec
  // Stored with every note. Change it when the map's content changes, so an
  // export says which version of the site each note was written against.
  contentRev: '2026-10-17',
  // Shown when notes cannot reach the sheet: a shared doc to write in.
  fallbackUrl: '',
  // How often each browser checks for other people's notes.
  pollMs: 6000
};
