# Agent standing rules (Claude, Koda, Muse)

Approved by Lejohn in Claude's chat on 2026-11-12 (CT). These five rules came out of the Nov 11-12 session, where each gap below cost real time. They add to the existing rules (flag and hold; nothing goes live until Claude checks and Lejohn approves; no retry on a policy refusal; Koda posts code and waits for Claude's "approved" before deploying). They replace nothing.

## 1. Approvals travel through one doc

Lejohn gives most approvals in Claude's chat, which Koda and Muse cannot see. On Nov 12 Koda held an approved Facebook task for about an hour for that reason.

- Claude records every approval Lejohn gives in chat in the Turn folder doc **"Approvals log - Lejohn's decisions"**: date and time (CT), Lejohn's words or a close paraphrase, and the exact scope.
- Koda and Muse treat an entry as Lejohn's approval for exactly the items listed, and nothing wider. They do not wait for Lejohn to repeat it in their own chat.
- Anything Lejohn says directly to an agent overrides the log.
- The log never covers spending money, deleting anything, creating accounts, or changing account settings. Those are confirmed with Lejohn directly each time.
- Claude writes only what Lejohn actually said. A Claude proposal Lejohn has not answered is not an approval and is not logged as one.

## 2. Whoever posts, logs, in the same step

Three Ep 1 podcast clips sat on Facebook from August with no log row, so the cascade looked unposted in November.

- The agent that publishes or schedules a post adds the row to `outputs/scheduled-posting-lookup.csv` in the same working step: date, platform, source file, heading, and a note with status, account or page id, and post or video id.
- Koda commits the row himself for Facebook posts. Claude does the same for its accounts.
- A post that is scheduled is logged SCHEDULED, then updated to PUBLISHED only after the post id is confirmed.
- After a timeout, check the account for the post before retrying.

## 3. One owner per account

Two agents posting to the same Instagram account on different rails caused the Sep 12 duplicates.

| Account | Owner | Rail |
|---|---|---|
| Instagram: Baron.Vieux, FuturIQ | Claude | Windsor.ai |
| Facebook pages (Baron Vieux; Bayoubeaux1070 once Koda holds its token) | Koda | Graph API |
| YouTube | Claude | Metricool |
| TikTok baronvieux | Claude | Buffer |
| TikTok futur.iq | Koda stages, Lejohn attaches the file and publishes | Browser |

A non-owner does not post to an account. If the owner is unavailable, the task waits or goes to Lejohn.

## 4. The folder is checked on a schedule, and Lejohn's time follows his calendar

Lejohn asked "check folder" by hand many times on Nov 12, mostly while he was at his other job.

- The Turn folder is checked hourly by a scheduled task covering every agent (Muse, Koda, Gemini, Meta AI drops). Claude answers the agents in the folder so work keeps moving. Scheduled tasks cannot run more often than hourly; during a live session Claude adds tighter in-session checks when Lejohn asks.
- Each check reads Lejohn's Google Calendar first (Lejohn, 2026-11-12: "apply according to my schedule. Use my calendar"). While a busy block is in progress, or overnight, the check logs what it found and does not message him. The one exception is something already live that is wrong or harmful.
- Everything held is delivered as one digest at the first check after he is free, ordered by what needs his decision first.
- Requests that need his hands (a file attach, a manual label, a re-upload, a listen) are scheduled for his free hours, never for a busy block.
- Agents title anything that needs his decision "<Agent> to Claude - NEEDS LEJOHN - <topic> <date>", and put the outcome in every title (GENERATED, REFUSED, POSTED, HOLD) so a check can be read from titles.
- The calendar is read fresh each time. No schedule details are written into this repo, which is public.

## 5. Prompts are checked against standing rules before credits are spent

Ep 2 clip 4 showed a fillet because its prompt was written before Lejohn's whole-fish rule and nobody re-read it. The fix cost a regenerate, a re-stitch, and a re-upload.

- Standing visual rules live in `references/generation-standing-rules.md`.
- Before any paid generation (Google Flow, ElevenLabs, Meta AI), the prompt goes to Claude in the Turn folder. Claude checks it against that file and the series bible and answers GO or a fix list. One round, no credits spent before GO.
- When Lejohn gives a new visual rule, Claude adds it to the file the same session and re-reads every prompt not yet generated.
