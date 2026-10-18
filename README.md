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

Notes are kept in a Google Sheet, one row per note. A short Apps Script in the sheet, [`google/notes.gs`](google/notes.gs), is published as a web app, and the site reads and writes notes through its link. The script decides what anyone with the link can do. If the sheet can't be reached, the map works as usual and the note box says so. Notes typed while offline are kept on the device and sent when the connection returns.

### Try it without the sheet

Open [http://localhost:8000/?notes=demo](http://localhost:8000/?notes=demo). Notes are kept in this browser only, and every tab shares them. The facilitator passcode is `demo`.

### One-time setup

Use a personal Google account. School and work accounts often aren't allowed to share a web app with "Anyone".

1. **Make the sheet.** Create a blank Google Sheet, for example "Workshop notes".
2. **Add the script.**
   1. In the sheet, open **Extensions → Apps Script**.
   2. Delete what's in the editor, paste all of [`google/notes.gs`](google/notes.gs), and click **Save**.
3. **Set the facilitator passcode.**
   1. In the Apps Script editor, open **Project Settings** (the gear icon).
   2. Under **Script properties**, click **Add script property**.
   3. Set **Property** to `PASSCODE` and **Value** to a passcode of 16 or more characters, such as `maple-river-4417-lantern`. Click **Save script properties**.
   - The facilitator controls stay locked until a passcode this long is set.
4. **Publish the web app.**
   1. Click **Deploy → New deployment**.
   2. Click the gear next to "Select type" and choose **Web app**.
   3. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
   4. Click **Deploy**.
   5. Google asks you to authorize the script. Choose your account. On the warning "Google hasn't verified this app", click **Advanced → Go to (project name)**, then **Allow**. The warning appears because you wrote the script yourself.
5. **Copy the link.** Copy the **Web app URL**, which ends in `/exec`. Put it in [`js/notes-config.js`](js/notes-config.js) as `sheetUrl`. Also add the link to a shared doc as `fallbackUrl`, for people to use if notes go offline.
6. **Check it.** Open the `/exec` link with `?op=ping` on the end. It should show `{"ok":true,"result":true}`. A **notes** tab appears in the sheet after the first note.

**Changing the script later.** After you paste a new version, open **Deploy → Manage deployments**. Click the pencil, set **Version** to **New version**, and click **Deploy**. Without this, the link keeps running the old code. The link itself doesn't change.

### At the meeting

- **Facilitator link.** Open the site with `?facilitate` before the `#`, for example `https://shrutidas.com/public-participation/?facilitate`. Then click **Notes** and enter the passcode. The passcode is never in the URL, so it's safe to show this screen on a projector.
- **Controls.** The panel then has three controls:
  - **Hide** on any note, and **Restore** to bring it back.
  - **Clear this case**, which hides every note on the case to start a new round.
  - **Export CSV**.
- **The sheet is the record.** Every note is in the **notes** tab as it arrives.
  - To hide a note from the sheet, type `TRUE` in its **hidden** cell. Everyone's screen updates within a few seconds.
  - Don't delete or reorder rows, and don't type in the **id**, **updated_at** or **author_key** columns.

### Before a meeting

- **Load test.** Run it 2–3 days before:
  ```bash
  node scripts/notes-loadtest.mjs <web-app-url> <passcode>
  ```
  It simulates 40 people and a burst of 40 notes, hides them, then removes them from the sheet. It should end with **PASSED**. Add a number at the end for a different size of room, for example `… <passcode> 60`. Google limits how many requests one script answers at once, so the test shows whether your room size is safe.
- **Freeze the content.** Don't push to `main` from the day before until the notes are exported. Each note is tied to its card's position on the map and saved with the card's title. If content edits move or reword a card, its notes go under "Notes on content that changed" instead of onto the wrong card. Change `contentRev` in `js/notes-config.js` whenever the map content changes.
- **Emergency stop.** To stop new notes immediately, add a script property `CLOSED` with the value `yes`, the same way as `PASSCODE`. New notes are refused, and the writer's text goes back into their box. Existing notes stay visible. Delete the property to reopen. This takes effect at once, with no new deployment.
