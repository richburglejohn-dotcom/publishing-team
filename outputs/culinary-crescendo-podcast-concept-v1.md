# Culinary Crescendo — Podcast Concept
## "The Apothecary Sessions" (working title)
### Created: 2026-07-18

**Brief:** rotating cast of series characters, purpose = marketing funnel for the books, format = full 20–40 min episodes.

---

## Decision (superseded 2026-08-22): real people host, not Baron

**Reversed per your direction on 2026-08-22 — the podcast will be hosted by real people (you, and potentially other real guests), not Baron Vieux as an AI-voiced character.** The section below is kept for history; skip to the update at the bottom for the current plan.

~~Updated per your direction — Baron Vieux hosts the show himself, voiced by the same AI voice heard in his existing Flow-generated media. Not a new voice, not you reading his lines — the actual established Baron voice, kept consistent across every format he appears in.~~

**What changes with real hosts:**
- **No fictional-AI-host disclosure problem.** The heavy disclosure requirement below (built for "an AI-voiced fictional character is the entire host, with no platform-native toggle to lean on") no longer applies — a real person hosting a podcast about their own books doesn't trigger it.
- **Voice-clone dependency is now optional, not blocking.** You can host live/recorded as yourself, full stop. If you'd rather not re-record every episode, an ElevenLabs clone of **your own voice** (not Baron's) is a legitimate convenience tool — but it's a nice-to-have for throughput, not a hard dependency the way a fictional character's voice was.
- **Baron's own voice work (Flow's `@Voice: Charon`, the voice bank) stays scoped to what it's actually for now: Baron appearing on camera/in-clip in Flow-generated video content** (TikTok/Instagram), not hosting long-form audio. See `references/baron-vieux-voice-reference-master-v1.md`.
- **Light disclosure, if you use an ElevenLabs clone of your own voice for any segment:** a simple, one-time note in the show description ("some narration uses an AI voice model of the host's own voice") is good practice, but nowhere near the "fictional character voiced by AI" bar this doc originally planned around.

**Open question this reversal raises, not yet resolved:** Episodes 1–3 (`podcast-episode-1-baron-script-v1.md`, `-2-rampart-script-v1.md`, `-3-melpomene-script-v1.md`) are all written in **Baron's first-person voice** — "I" is Baron throughout. If you're hosting as yourself, those scripts need to become author-voice, third-person about Baron and the cast ("Baron says...", not "I..."), not just get read by a different voice. Worth a decision before writing Episode 4: rewrite the existing three, or treat them as the Baron-hosted draft that's now retired in favor of a fresh author-voice Episode 1.

---

## Format

**Structure: one supporting character's arc per episode, Baron hosts, in AI voice.**

Each episode uses one character from the series bible as the spine — Baron introduces them, walks through their scene, their conflict, their lesson, in his own voice, first-person, same tone as his existing bios/scripts. Two layers per episode:
1. **The character, in the story** — Baron sets up who they are and their scene, with a key passage read or paraphrased in his voice
2. **The real thing underneath** — the craft, ownership, or systems-thinking lesson that character represents, and how it maps to something a listener can use (this is the marketing-funnel engine: every episode gives a real value-add *and* makes someone who's never read the books want to know how the scene actually plays out on the page)

Closes with a CTA in Baron's voice: which book, which chapter, "here's where you meet them for real."

**Episode length:** 20–30 min is more realistic than 40 for a one-person hosted show without a co-host or guest booking pipeline. 40 works once you're comfortable and have a backlog of characters with enough material (Baron, Rampart, and Melpomene can easily carry 30+; Ghost or Farrah can't yet — thin material, would need padding).

---

## Season 1 lineup (rotating cast, ordered by how much material each character already has)

| # | Character | Episode angle | Book tie-in |
|---|---|---|---|
| 1 | **Baron Vieux** | Origin — the insult that built an empire | Prequel / Book 1 |
| 2 | **Rampart** | Leading without raising your voice — the quiet-authority arc | Prequel |
| 3 | **Melpomene** | The antagonist who's right about the wrong things — why the insult that broke Baron built him | Prequel |
| 4 | **Calliope** | The person who believes in you before you believe in yourself | Prequel |
| 5 | **Olivia Marigny ("The Voice")** | A voice before a name — how Book 1's love story actually starts in the prequel | Prequel → Book 1 |
| 6 | **Chef Conti Jasper** | "That is a female watermelon" — mentorship that corrects with humor, never judgment | Prequel (backstory) |
| 7 | **Elysian Fields / Carondelet** | The gatekeepers — what it actually takes to open a restaurant in New Orleans | Prequel |
| 8 | **Theron & Jamara** | The crew that saves the business when the founders can't | Book 1 |

Eight episodes is a real, finishable Season 1 — enough to prove the format without overcommitting before you know if it's working.

---

## Why this serves the marketing funnel specifically

- Every episode is really a **guided spoiler-light book tour** — it gives away just enough of a character's real depth to make "go read the actual scene" the natural next step, not a hard sell.
- It reuses assets you already have (manuscript text, series bible, Baron's existing AI voice/clips) instead of requiring new production infrastructure.
- It slots into `outputs/scheduled-posting-lookup.csv` as a new content lane: each episode can be chopped into 3–4 short clips (a line, the lesson, the CTA — all in Baron's voice) for Instagram/TikTok/X the same week the full episode drops — see `outputs/podcast-clip-posting-calendar-plan-v1.md` for exactly how this feeds the calendar.
- It's the clearest "proof of work" content for FuturIQ's future pitch (per `references/futuriq-vision-sketch-v1.html`) — a real creator building a real cross-media pipeline from one manuscript.

---

## What's needed to actually start (not something I can do for you)

- A voice-cloning/TTS tool (ElevenLabs or similar) — I don't have one, so this is the one hard dependency before any episode can actually be produced
- A hosting platform (Spotify for Podcasters / Buzzsprout / similar — free tiers exist)
- Intro/outro music (royalty-free, or I can help you find/license options once you pick a platform)
- A recording/generation cadence — even biweekly is fine for Season 1's 8 episodes

## What I can do next
- ~~Write the full Episode 1 script~~ — done, see `outputs/podcast-episode-1-baron-script-v1.md`
- ~~Write Episode 2~~ — done, see `outputs/podcast-episode-2-rampart-script-v1.md` ("The Wall" — Rampart), grounded directly in the storage-room debrief, the Friday-rush allergy confrontation, and the POS-crash handoff from Chapters 1–3, plus the Roe Velvet cake scene from Chapter 9
- ~~Write Episode 3~~ — done, see `outputs/podcast-episode-3-melpomene-script-v1.md` ("The Insult" — Melpomene), grounded in the Friday-rush oven failure and the post-shift bar confrontation from Chapters 3 and 5; deliberately plays him as competent and afraid rather than a flat antagonist, per this doc's original angle for the episode
- Continue writing ahead through the Season 1 lineup (Calliope next) so the script backlog is ready the moment a voice-clone tool is picked — scripts don't block on tooling, only the actual audio does
- Draft the show's own bio/description copy — including the required disclosure line — for whichever platform you land on
- Pull clean audio-only exports of Baron's existing clips as voice-cloning reference samples, once you've picked a tool

**Status as of 2026-08-21:** 3 of 8 Season 1 scripts written (Baron, Rampart, Melpomene). Still blocked only on picking a TTS/voice-clone tool — everything else (scripts, voice reference audio, posting-calendar integration) is either done or ready to go.
