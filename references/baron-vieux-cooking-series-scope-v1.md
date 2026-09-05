# Baron Vieux Cooking Series — Scope & Status
### Created: 2026-09-05
### Source: Gemini's "Base44 Content Review: Baron Vieux Scripts & Future IQ Copy" doc (Idea Item #3 + Assignment #4 in the Strategy & Ideas Hub) — read in full 2026-09-05, first time this repo has seen the actual script content beyond the doc title.

Lejohn's goal: get the YouTube channel onto a consistent, regular cadence, same discipline as the rest of the pipeline. This is the material to do it with — but there's a real feasibility gap to solve first, not just a scheduling task.

## What exists (script pack — genuinely good, ready to work from)

Four episodes, fully scripted, Baron Vieux solo (no other characters), scene-by-scene with Google Flow visual prompts and verbatim narration:

| Episode | Dish | Target day | Length | Scenes |
|---|---|---|---|---|
| 1 | The Secret to a True New Orleans Dark Roux | Monday | 4-6 min | 5 |
| 2 | Cast-Iron Blackened Redfish with Charred Lemon Butter | Wednesday | 6-8 min | 4 |
| 3 | Classic New Orleans Seafood Gumbo | Friday | 10-12 min | 4 |
| 4 | Creole Crawfish Étouffée | Next cycle | 7-9 min | 5 |

Full text (all scene visuals + narration) is in the Google Doc linked from the Strategy Hub — not yet copied into this repo; do that once we're actually producing an episode, not before, so it doesn't go stale relative to whatever gets adjusted during production.

## The real blocker: this needs a video pipeline none of today's testing has proven yet

Roe Velvet (the one video we've actually shipped) is ~63 seconds, built from 8 separately-generated ~8-second clips. Today's whole video-tool test (`references/video-tool-test-meta-vs-runway-v1.md`) was built around proving whether **two** connecting clips can stitch together without drift — and Meta AI, even after a targeted prompt fix, still failed the stitch check both rounds.

Each of these four episodes needs **15-25+ clips** stitched into one continuous scene (same character, same kitchen, same props, held together for 4-12 minutes) — not two. Scaling up to that before the 2-clip case is solved isn't a good bet: it multiplies every failure mode we've already seen (embroidery drift, wrong setting, character/age drift, stitch breaks) across many more cut points, on a public weekly schedule where a bad episode is a worse look than a delayed one.

## Recommended path (not started — needs Lejohn's go-ahead)

1. **Don't commit to Monday/Wednesday/Friday yet.** A promised weekly cadence that slips because the pipeline can't reliably produce a clean 5-minute video is worse than no promise.
2. **Pilot on the smallest real unit first** — not a full episode. Take Episode 1's Scene 1 + Scene 2 (Hook, then Ratio & The Fat — 2 scenes, ~90 seconds combined) as the next stitch test, same discipline as today's Cake-at-the-Pass/Walk-Out test, using whichever tool wins that comparison (Meta AI Round 3, or Runway/Kling if you decide to get a subscription).
3. **Only after a multi-scene pilot actually passes** the verification checklist (character, embroidery, stitch continuity — same as `video-tool-test-meta-vs-runway-v1.md`) does it make sense to attempt a full episode, then Assignment #4's actual ask (Base44 ScheduledPost ingestion across YouTube/TikTok/IG/FB).
4. **Don't schedule Base44 ScheduledPost entries for episodes that don't have finished, verified video yet** — same rule as everywhere else in this pipeline: a ScheduledPost needs a real, approved asset behind it, not a placeholder pointing at a script.

## Open decision for Lejohn

Given today's test results, are you okay pausing the "regular schedule" promise until the pipeline is actually proven at multi-scene scale, or is there a different near-term plan (e.g., a human-shot placeholder cadence while the AI pipeline gets sorted, or committing to a paid tool now to accelerate testing)?
