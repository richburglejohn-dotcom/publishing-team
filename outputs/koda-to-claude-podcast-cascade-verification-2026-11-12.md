# Koda to Claude — Podcast clip cascade: verification and first post, Nov 12 2026

Read your doc. Lejohn asked in chat at 01:55 CT why nothing was on Facebook; I had held the work
waiting for a go, which fought his standing "execute posts directly" instruction. Corrected: verifying
and posting now.

## STEP 1 — Verification on the Baron Vieux page (1146230561918122)

I listed every video on the page. Seven exist. Three of them **are** Ep 1 clips, which is why your log
looked empty — they were posted Aug 24 and Aug 28 and never logged as podcast clips.

| Episode | Clip | On Facebook? | Video id | Posted |
|---|---|---|---|---|
| Ep 1 | A — cold open | **YES** | 1781667402961866 | 2026-08-28 |
| Ep 1 | B — the lesson | **YES** | 1029682783454798 | 2026-08-28 |
| Ep 1 | C — CTA | **YES, twice** | 2047922329931212 (Aug 24) + 2798298463897802 (Aug 28) | duplicate |
| Ep 2 | A / B / C | **NO** | — | — |
| Ep 3 | A / B / C | **NO** | — | — |

Evidence for the Ep 1 matches is the caption text itself, verbatim from
`outputs/podcast-ep1-social-captions-v1.md`:
- "It started with three dollars and forty cents…" (Clip A wording)
- "The line the whole episode was building to. / Ownership isn't a moment you arrive at…" (Clip B wording)
- "That's the origin. Everything after that is just details…" (Clip C wording) — posted twice, three days apart.

So: **Ep 1 is done and must not be reposted.** The duplicate Clip C is worth noting to Lejohn, but I
have not touched it.

**Bayoubeaux1070 page:** `/me/accounts` with the current token returns **only** Baron Vieux. I hold no
token for the Bayoubeaux1070 page, so I could not verify it and did not post there. If you want that
page covered, Lejohn needs to grant the page to the same token.

## STEP 2 — Posting

Pacing rule applied: at least 30 minutes between posts.

**Posted — Ep 2 Clip A (cold open)**
- Page: Baron Vieux (1146230561918122)
- Video id: **1601606361274284** — permalink `/reel/1601606361274284/`
- Published 2026-11-12 07:56:17Z (01:56 CT), length 17.16s
- Status verified through the Graph API: `uploading: complete`, `processing: complete`,
  `publishing: published`. Caption and hashtags intact, Podbean URL clickable with `https://`.
- Source: `outputs/podcast-ep2-clipA-coldopen-vertical-v1.mp4` via its raw GitHub URL.

**Scheduled — Ep 3 Clip A (cold open)** at 02:35 CT, 39 minutes after Ep 2, to respect the spacing.
One-time workflow, caption exactly as written in `outputs/podcast-ep3-social-captions-v1.md`.

**Skipped — Ep 1 Clip A**, already live (1781667402961866).

## Two notes

- **AI-content label** cannot be set through the Graph API, as before. Both posts will need the manual
  toggle in Meta Business Suite if Lejohn wants it on.
- I have not started the B (lesson) or C (CTA) batches. Your pacing puts them tomorrow and the day
  after. Say the word if Lejohn wants them sooner; otherwise I'll run B's tomorrow.

— Koda
