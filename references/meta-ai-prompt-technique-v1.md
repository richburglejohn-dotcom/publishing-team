# Meta AI Video Generation — Prompt Technique
### Created: 2026-09-05
### Status: IN PROGRESS — not locked yet. This distills what Round 1 → Round 2 of `video-tool-test-meta-vs-runway-v1.md` already taught us into reusable rules, to be confirmed or revised by the Episode 1 pilot (`baron-vieux-episode1-darkroux-googleflow-v1.md`, 7 clips) before treating anything here as settled. Same role for Meta AI that the "STRICT GENERATION RULES" section already plays for Google Flow — once this is proven, cross-check whether it also tightens Flow's results (see bottom).

## What's confirmed so far (Round 1 → Round 2, both on Baron alone)

**1. Embroidery legibility — explicit font instruction works.** Round 1 just said "embroidered" and got an illegible cursive scrawl. Round 2 added "plain, blocky, sans-serif lettering, large and clearly legible, not script or cursive" and got clean, readable "Baron Vieux" / "Bayouboujee." **Rule: always spell out the exact letterform, never just "embroidered text."**

**2. Object persistence needs to be stated explicitly, not implied by the action.** Round 1's prompt described carrying the cake as the scene's action but never said the cake had to stay visible — result: he walked the whole clip empty-handed. Round 2 added "visibly in both hands, held out in front of him at chest height, cake clearly in frame the entire shot" — result: fixed, cake present throughout. **Rule: for anything that must stay on-screen the whole clip, say so as an explicit, standalone instruction — don't trust the tool to infer persistence from a described action.**

**3. Naming a setting is NOT enough — text-only location descriptions don't hold.** Round 2 explicitly named "The Apothecary" with brick/heat-lamp detail and it still invented an unrelated, internally-inconsistent environment (a different kitchen at the start of the scene than the one Scene A ended in, then a third unrelated dining room). **Rule: a location needs a locked reference photo, the same discipline already required for characters and props — text description alone has now failed twice.** This is exactly why the Episode 1 pilot pairs `baron-portrait-apron-kitchen-v1.jpeg` as a real Ingredient rather than describing the kitchen in words. Whether this actually fixes it is still open — first real data point.

**4. Face-reveal camera direction — partial success, unresolved.** Asking for an arc to a 3/4 angle within the first 2-3 seconds got a brief glimpse (better than Round 1's zero visibility) but the shot still settled back to behind-only for most of the clip. **Rule: not yet solved — if a scene needs a clean identity-confirming angle, may need to specify the exact angle and how long to hold it, not just "arc to reveal."**

## 2026-09-09 — closed out: Meta AI not viable for this series, dropping it from the tool rotation

Two straight-through (single continuous take) attempts, both requested at 45s with explicit per-beat timing in the prompt: both came back hard-capped at **10.24 seconds** regardless of the timing instructions in the text prompt — confirms duration is a platform-level cap Meta AI's text prompt cannot override, not a prompting problem to keep solving. (Its own UI may have a separate length control outside the chat prompt, but this wasn't tested since Lejohn's call was to stop here.)

Second attempt also introduced a stylistic drift the first one didn't have: dramatic red/moody lighting throughout the kitchen, nothing like the clean stainless-steel look in the locked reference (`baron-portrait-apron-kitchen-v1.jpeg`) or established anywhere else in this series — even with the reference image attached. Embroidery legibility was good this time ("BARON VIEUX" rendered clean, confirming rule 1 below still holds), but the lighting/color-grade mismatch alone is enough to make this unusable as-is.

**Decision (Lejohn, 2026-09-09): "I don't like meta's versions" — dropping Meta AI from the Dark Roux pipeline.** Not filed to the repo. ElevenLabs (`gemini-omni-1.1-flash`) remains the strongest result this week (Scenes 1-3, see `references/baron-vieux-episode1-darkroux-elevenlabs-v1.md`) and is the path forward once credits top up; Google Flow remains the proven-at-scale fallback (Roe Velvet, 8 clips) if needed sooner.

## Open questions the Episode 1 pilot needs to answer

- Does a locked kitchen reference photo actually stop cross-scene setting drift, the way locked character/cake references already do? (Point 3 above, first real test.)
- Does the stitch check hold across 7 clips, or does a new failure mode appear at this longer scale that didn't show up at 2 clips?
- Do rules 1 and 2 above keep holding at scale, or were they specific to those two scenes?

## Once this locks in

Formalize into a numbered rule set here, same structure as Flow's "STRICT GENERATION RULES" section in `references/roe-velvet-video-prompts-googleflow.md`. Then check the reverse direction too — **Flow's own rules never formalized a locked-location-reference requirement either** (Roe Velvet's Apothecary setting was text-only description, same as what just failed twice here) — worth testing whether adding one tightens Flow's results the same way it's expected to help here.
