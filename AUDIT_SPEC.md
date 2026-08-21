# Chain content audit specification

You are auditing one causal-chain data file in /home/claude/pp/js/chains/. The
goal: every statement in the file must be rooted in its cited source, and the
file's voice must be systematic and neutral, not editorial. You will edit the
file directly.

## Part 1: Source verification and quotes

For EVERY `evidence({...})` item (including counterEvidence):

1. Fetch each cited source URL with WebFetch. If the primary URL is blocked
   (403, captcha, paywall), try WebSearch for an open-access version (PMC
   mirror, preprint, official summary). You may ADD a verified alternative as a
   second `source(...)` entry; never delete or replace the original.
2. Check every number, date, name, and causal statement in the `finding`
   against what the source actually says. Fix discrepancies in the finding.
   If a discrepancy would change the evidence grade or the link's strength, do
   NOT regrade; record it in your report instead.
3. When the source is fetchable, add a `quote:` field with a VERBATIM passage
   (roughly 15-50 words) that directly supports the finding. Use
   `quote: paragraph(` ... `),` placed after `finding`. The quote must be
   copied exactly from the fetched text; ellipses [...] allowed for cuts.
   NEVER paraphrase inside a quote. NEVER fabricate a quote. If you cannot
   fetch the source, add no quote and list the item under "unverifiable by
   fetch" in your report.
4. If a source contradicts the finding and you cannot reconcile it, correct
   the finding to match the source and record the correction in your report.

## Part 2: Voice audit

Rewrite where needed so that:

- `claim:` states the causal assertion neutrally: what is asserted to have
  produced what, and through what mechanism. No verdicts ("the strongest
  indictment", "most consequential"), no drama ("the uncomfortable finding"),
  no memo-speak ("the memo should...", "state this plainly").
- `thesis:` characterizes what the assembled evidence shows, with
  characterizations attributed to the record: "The available causal evidence
  supports X; no study was identified that Y." Never first person. Never
  advice to a memo or writer.
- `finding:` reports only what the source reports: who did the study or took
  the action, when, what was found, with numbers. Name the source inline
  (author or organization plus year) if not already named. Remove judgments
  about the project's own argument ("load-bearing citation", "a significant
  correction to the memo's framing"); if such a judgment carries real
  methodological content, move it into `caveat:`.
- `caveat:` methodological limitations only (design, sample, source bias).
- `gaps:` open research questions, phrased impersonally: "No study was
  identified that...", "Whether X has not been tested." Never "I could not
  find", never advice about what a memo should say. Keep the substance; the
  gap list IS the research plan.
- `participation.description:` a factual account: who acted, what they did,
  when, and what documented outcome followed. Direct quotes from sources are
  welcome here inline (with quotation marks) when verified.
- Chain `outcome:` a measured or estimated quantity with its source basis, no
  rhetorical framing.

## Part 3: Style rules (already project policy)

- NO em dashes anywhere. Use parentheses, colon, semicolon, or comma.
- American spelling. Exception: proper nouns (the journal "Nature Human
  Behaviour").
- No first person. No "we". No "the memo".
- Keep inline <strong>/<em> markup where it highlights numbers or key phrases.

## Hard constraints

- Do NOT change: link `id`, `from`, `to`, `after`, `strength`, participation
  `kind`/`effect`, chain `id`/`label`/`track`, or any source URL (adding a
  verified second source is allowed). If you believe one of these is wrong,
  put it in your report; do not edit it.
- Keep the `paragraph(...)`/`evidence(...)`/`participation(...)` call
  structure intact. `quote:` goes right after `finding:`.
- After editing, run `cd /home/claude/pp && node scripts/lint-cases.mjs` and
  make sure it passes. If it fails, fix your syntax until it passes.

## Report format (your final message)

Return a compact report:
1. VERIFIED: count of evidence items checked against a fetched source, and how
   many now carry quotes.
2. CORRECTIONS: each factual fix you made (item, was, now, source).
3. UNVERIFIABLE BY FETCH: items whose sources could not be fetched (list URL
   and what blocked it). These keep their finding but get no quote.
4. FLAGS: anything you believe needs a grade/strength change or looks wrong
   but was outside your authority to edit.
5. VOICE: a few before/after examples of editorial language you neutralized.
