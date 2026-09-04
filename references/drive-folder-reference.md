# Google Drive Folder Reference — Base44 / Automation
### Created: 2026-07-19
### Corrected 2026-08-24: see note below — this is NOT how Solene actually sources content

Quick lookup for folder IDs used in the daily social automation check and Base44 handoff, so they don't need to be re-derived each session.

**Correction (2026-08-24):** with a live Base44 MCP connector now available, it turns out Solene (the Base44 app handling scheduled posts) does not read from this or any Drive folder. Its `ScheduledPost` entity has a `content_source` field that points directly at paths inside this git repo (e.g. `outputs/tiktok-book-launch-campaign-v1.md#Video3`), or occasionally a direct asset filename. The Base44 Drive folder below was a manual workaround from before this connector existed and isn't part of Solene's actual pipeline — keeping this section for history, but don't treat it as the live mechanism.

| Folder | ID | Purpose |
|---|---|---|
| Downloads | `1xkWk7B_zyoETWCAqbzUjqRTVuX4YHY70` | General uploads/downloads — where Flow-generated videos have landed historically |
| Publishing Team (root) | `1xOPiEKDYQn4NqPL7ZHjjaQ8UTmeDQHAb` | Main project folder tree |
| **Base44** | `1qdmfzO16MiwUQts0vDp2nKPlg5Ohu-rb` | **New (2026-07-19)** — created since there's no live Base44 MCP connector. Drop anything meant for Base44 to pick up and post here (quote cards, clips, scripts) instead of scattering them across Downloads. Subfolder of Publishing Team. |

## Why this folder exists
No Base44 connector is installed in this session, so files can't be pushed to Base44 directly — everything has to be a manual upload on Lejohn's end. This folder is the single designated drop point so it's obvious what's staged for Base44 versus general Drive clutter, and so future daily-automation-check runs know exactly where to look for new automation-bound assets.

## Note for future daily-automation-check runs
Include this folder's ID alongside the Downloads/Publishing Team checks when scanning for new entries.

## Standing rule (2026-08-28): every Solene image assignment needs a locked reference

Confirmed 2026-08-28: Solene stages Instagram posts via browser automation (types the caption, gets it to "just needs the Publish click") rather than a direct posting API. When a `ScheduledPost` record has no explicit image specified, Solene sources its own — generic/stock photos that don't match our established characters, not a malfunction, just filling a gap we left open.

Same failure mode already fixed for Google Flow video generation (see `references/roe-velvet-video-prompts-googleflow.md`'s locked-reference-image rules) — the fix here is the same discipline: **every content file feeding a character-photo post must have an explicit `**Image:**` line pointing at a real, established reference file in this repo.** Never leave it to Solene to pick. If no real reference photo exists yet for a character (e.g., Theron, Jamara), say so explicitly and default to a text-only quote-card design rather than let a substitute get chosen automatically.

**Already-published posts with the wrong photo:** Instagram does not support swapping the image on a live post — only caption/hashtag edits are possible via the API/UI. Fixing a wrong photo on something already posted means deleting and reposting, which has an engagement-loss cost — decide per-post whether that's worth it rather than doing it automatically.

## Standing rule (2026-08-28): no more X/Twitter content

Confirmed 2026-08-28: dropped X/Twitter entirely. Do not write X/Twitter posts in any future content pack, and do not queue them in Solene. Base44 has no delete tool for `ScheduledPost` records — the two still-pending X posts at the time of this decision were marked `status: "skipped"` instead (ids `6a9175f6af4bd7051168939d`, `6a90e00de744a2a0b2e5e4bb`); historical `published` X records from before this decision were left alone since they're just a log of what already happened and can't be un-posted.

## Standing rule (2026-09-03): Claude is the approval hub for Base44 + Meta AI

Confirmed 2026-09-03: Lejohn wants Claude as the core of the content pipeline, with Base44 and Meta AI reporting to Claude for approval, and Claude assigning what gets worked on next. Here's how that's actually enforced, not just declared:

1. **Nothing is canon until Claude files it.** Meta AI generations land in Drive (Downloads, or "The Turn - Shared Media for Claude") unreviewed. On each automation check, Claude compares new drops against `series-bible.md` and the current locked reference art, then either (a) commits it as new/updated canon and updates the bible's appearance note, or (b) holds it and flags the specific discrepancy for Lejohn's call — never silently files, never silently rejects.
2. **This is binding, not advisory, because of how Solene already works.** Per the standing rule above, every `ScheduledPost` needing a character photo must have an explicit `**Image:**` line pointing at a real file already committed to this repo — Solene never sources its own image and never reads Drive directly. So as long as new character art only becomes "real" by going through Claude's filing step, Base44 structurally cannot put anything on a live post that Claude hasn't approved first. No extra Base44 config needed to enforce this — it falls out of the existing content_source convention.
3. **Assigning the work:** rather than reactively reviewing whatever Meta AI happened to produce, Claude keeps a running list of what's actually needed next — see `references/character-generation-request-queue.md`. Lejohn (or whoever is driving the Meta AI side — no direct API access from this session) pulls the next item and its locked-reference specifics from that file, generates it, and drops the result back into Drive for the next check-in.
4. **Same discipline applies to new Base44/Solene capabilities** — a new automation, entity, or workflow request for Solene should be scoped here or in a repo file first rather than configured ad hoc in the Base44 UI, so there's one place tracking what each part of the "team" is currently working on and why.
5. **Routing, not credential-issuing.** Claude cannot issue or generate API keys/connectors for Base44, Meta AI, Buffer, etc. — those still come from Lejohn authorizing each connector on his own account. What Claude does own is deciding *which already-connected tool* handles a given task (e.g. "post this now" routes to Buffer directly, not to a copy-paste script for Lejohn) — see `references/pipeline-tool-capabilities.md` for the current map of what's live and what still requires a human hop, and why.
