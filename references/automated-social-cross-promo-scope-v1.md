# Scope: Automated Social Cross-Promo for Daily Briefs
### Created: 2026-09-04 by Claude
### Source: Idea Item #4, "Gemini to Claude Strategy & Ideas Hub - The Turn" Google Doc — Lejohn confirmed 2026-09-04 this is exactly what he asked Gemini to draft. Status there: Ideation Queue, not yet marked "Ready for Claude" (scoping now per Lejohn's go-ahead in this conversation, ahead of that doc's own status field).

**The ask (as written in the Gemini doc):** "On days when Baron Vieux episodes release, morning briefs automatically include ready-to-post captions and hashtags for Instagram, Facebook, and TikTok."

## What already exists to build this on

1. **`outputs/scheduled-posting-lookup.csv`** — a date → platform → content-file lookup, already exactly this shape: each row names a date, a platform, the source file, and the specific heading/caption to use. This is the natural data source — no new content format needed.
2. **Two live Routines that could carry this**, found via `list_triggers`:
   - **"Daily social check (Base44 updates + posting schedule + TikTok reminder)"** — fires daily 14:30 UTC, bound to a persistent session, already reads this exact CSV and reminds Lejohn about TikTok posts due that day. **This is the closer fit** — it's already business-scoped and already does half of this job (TikTok only).
   - **"Morning brief"** — fires weekdays 13:00 UTC via the generic `/morning` skill, fresh session each time, personal-role-oriented (calendar/tasks), with a "Turn folder" section already bolted on by an earlier ad hoc request. This is probably what "morning briefs" literally meant in Gemini's doc, but it's not business-pipeline-scoped by design.
3. **`references/pipeline-tool-capabilities.md`** already has the routing answer for "how does this actually get posted": Buffer directly for YouTube + `baronvieux` TikTok; Koda for FB (both pages), IG (both profiles), and `futur.iq` TikTok staging. So "ready-to-post" for FB/IG still means a caption/hashtag/asset package handed to Koda (or Lejohn), same pattern as today's Roe Velvet FB/IG package — not a fully autonomous post yet, except IG once Windsor.ai write actions get switched on.

## Gap this surfaces (flagging, not fixing silently)

**`scheduled-posting-lookup.csv` is stale.** Its last row is 2026-08-31; nothing from September is logged — including both of today's Roe Velvet posts (YouTube + TikTok via Buffer). If the cross-promo automation reads this CSV as-is, it will correctly report "nothing due" most days simply because filing a post was never wired to also writing a CSV row. This needs a standing rule (something like: "every post you file also gets a row in `scheduled-posting-lookup.csv`") before the automation is trustworthy — otherwise it's automating off a dead log.

**"Episode" doesn't map to anything built yet.** Gemini's doc frames this around Idea Item #3, a 3x/week Baron Vieux cooking-series pipeline (Mon/Wed/Fri, Episodes 1-4 already scripted on Gemini's side) — that series isn't in this repo as canon or as a posting cadence yet. Until that exists here, "episode release day" is really just "any day the CSV has a row for today," which is a fine substitute but worth naming explicitly so it isn't assumed to be something more structured than it is.

## Recommended implementation (not yet done — scoping only, per the ask)

1. **Backfill the CSV** with the missing September rows (at minimum today's two Roe Velvet posts) so the automation has real data to read from day one.
2. **Add the standing "file a post → log a CSV row" rule** somewhere durable (`CLAUDE.md` or `pipeline-tool-capabilities.md`) so the log doesn't go stale again.
3. **Extend the "Daily social check" Routine's prompt** (via `update_trigger`, not a code change) to add: for every CSV row matching today's date, print the platform, pull the caption/hashtags from the linked file, and tag it with how it actually gets posted (Buffer directly / Koda handoff / Lejohn-manual) per `pipeline-tool-capabilities.md` — same content, just surfaced automatically instead of requiring a manual CSV check.
4. **Leave the personal `/morning` Routine alone** unless Lejohn wants the same summary duplicated there — the business Routine above is the more accurate owner.

## Open decision for Lejohn
Confirm before this goes live: (a) OK to backfill the CSV now, (b) OK to add the standing logging rule, (c) OK to edit the Daily social check Routine's prompt to add this section. All three are small, reversible changes — flagging them rather than just doing them since it touches a live scheduled automation, not just a repo file.
