# public-participation

Tracking public participation in science and technology cases.

Interactive parallel timelines for four science and technology policy case studies.

Project Site: [`https://shrutidas.github.io/public-participation`](https://shrutidas.com/public-participation/)

## Local preview

From the repo root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Lint case studies

Before pushing, run:

```bash
node scripts/lint-cases.mjs
```

This checks that every case file loads, uses valid categories (`red`, `orange`, `green`, `blue`, `purple`), and has complete entries with valid source URLs. CI runs the same check before deploy.

## Participant notes

People at a workshop can leave notes on any card of the map.
- A card with notes shows a small yellow count.
- Selecting a card shows its notes under its detail, with a box to add one.
- The **Notes** button by the zoom control lists every note on the case.

Notes are stored in a free [Supabase](https://supabase.com) project. The site reads and writes them directly with the project's public key, and the database rules in [`supabase/schema.sql`](supabase/schema.sql) decide what that key can do. If the database can't be reached, the map works as usual and the note box says so. Notes typed while offline are kept on the device and sent when the connection returns.

### Try it without a database

Open [http://localhost:8000/?notes=demo](http://localhost:8000/?notes=demo). Notes are kept in this browser only, and every tab shares them. The facilitator passcode is `demo`.

### One-time setup

1. Create a free project at supabase.com.
2. In **SQL Editor**, paste and run `supabase/schema.sql`.
3. Set the facilitator passcode. Use a long random one: 16 or more characters.
   ```sql
   insert into private.facilitator (pass_hash)
   values (extensions.crypt('YOUR-PASSCODE', extensions.gen_salt('bf')))
   on conflict (id) do update set pass_hash = excluded.pass_hash;
   ```
4. In **Project Settings → API Keys**, copy the project URL and the publishable key into `js/notes-config.js`. Also add the link to a shared doc as `fallbackUrl`, for people to use if notes go offline.

Free projects pause after 7 days without use. Open the site, or run the load test, in the days before a meeting.

### At the meeting

- **Facilitator link.** Open the site with `?facilitate` before the `#`, for example `https://shrutidas.com/public-participation/?facilitate`. Then click **Notes** and enter the passcode. The passcode is never in the URL, so it's safe to show this screen on a projector.
- **Controls.** The panel then has three controls:
  - **Hide** on any note, and **Restore** to bring it back.
  - **Clear this case**, which hides every note on the case to start a new round.
  - **Export CSV**.
- **Backup copy.** Supabase's **Table Editor → notes → Export** also gives a full CSV.

### Before a meeting

- **Load test.** Run it 2–3 days before:
  ```bash
  node scripts/notes-loadtest.mjs <project-url> <publishable-key> <passcode>
  ```
  It simulates 60 people and a burst of 60 notes, then hides them. Afterwards, clean up with:
  ```sql
  delete from public.notes where case_slug = 'loadtest';
  ```
- **Freeze the content.** Don't push to `main` from the day before until the notes are exported. Each note is tied to its card's position on the map and saved with the card's title. If content edits move or reword a card, its notes go under "Notes on content that changed" instead of onto the wrong card. Change `contentRev` in `js/notes-config.js` whenever the map content changes.
- **Emergency stop.** To stop new notes immediately, run:
  ```sql
  revoke insert on public.notes from anon, authenticated;
  ```
  To reopen, run the `grant insert` line from `schema.sql` again.
