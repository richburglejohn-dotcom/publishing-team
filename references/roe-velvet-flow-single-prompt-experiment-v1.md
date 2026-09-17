# Roe Velvet: Single-Prompt Experiment (all 8 scenes compressed into one generation)
### Created: 2026-09-17
### Purpose: cost/quality comparison against the validated scene-by-scene pipeline in `references/roe-velvet-video-prompts-googleflow.md`

## Why this is an experiment, not a plan

Google Flow's hard ceiling is **10 seconds per generation** (Gemini Omni Flash) or **8 seconds** (Veo 3.1, any variant). There is no mode (References to Video, Extend, or otherwise) that produces one continuous ~64-second clip from the full 8-scene script. "All scenes together as one prompt" therefore means: compress the entire Baron-to-Olivia arc (quiet bar to walk back) into a single 8-10s shot and see what the model keeps versus drops.

This is close to what the original discarded v2 draft already tried, and that draft produced the two headline failures this whole project has been fixing since: a wrong, duplicated cake and an extra unscripted woman. Expect the same risk here. Running it once is cheap (a single generation, same cost as any other one-off Flow clip) and gives a real before and after data point, that's the value, not a belief it will pass.

---

## PRODUCTION PROFILE

```text
SURFACE: Google Flow
MODEL: Gemini Omni Flash
MODE: References to Video
SEGMENT LENGTH: 10 seconds (the longest available; still 6.4x shorter than the 64s of scripted content)
ASPECT RATIO: 16:9
AUDIO POLICY: generated dialogue for the one line that survives, ambient restaurant sound underneath
TEXT POLICY: NO TEXT IN THE IMAGE, do not render words, labels, captions, or watermarks
```

## RUNTIME ARITHMETIC

- Full script: 8 scenes x ~8s scripted each = ~64 seconds of authored content.
- Single-generation ceiling: 10 seconds (Omni Flash) or 8 seconds (Veo 3.1).
- Compression ratio: roughly 6.4:1 (Omni) or 8:1 (Veo). The overwhelming majority of scripted beats, both lines of dialogue, and Rampart's whole role cannot fit. This prompt keeps only the reveal beat (Scene 4) plus a compressed frame of the walk-out and Olivia's bite reaction, dropped into one shot; everything else is cut.

## CAST / OBJECT / ENVIRONMENT INVENTORY (canonical handles)

- **@Baron**, reference: `references/baron-vieux-scarlett-notext-v1.jpg`
- **@Olivia**, reference: `references/olivia-marigny-headshot-v1.jpg`
- **@RoeVelvetCake**, reference: `references/roe-velvet-cake-reference-v1.jpg`
- **@Apothecary** (setting), reference: `outputs/apothecary-family-meal-anchor-v1.png`

Reference mapping for Omni's multimodal reference workflow:

```text
@Baron -> IMAGE_REF_0
@Olivia -> IMAGE_REF_1
@RoeVelvetCake -> IMAGE_REF_2
@Apothecary -> IMAGE_REF_3
```

Only @Baron and @Olivia appear. No other person, named or unnamed, should be in frame.

---

## COPY-PASTE GENERATION PROMPT

```text
NO TEXT IN THE IMAGE: do not render words, labels, captions, or watermarks.

Photoreal video, 10 seconds, interior of @Apothecary, a New Orleans restaurant kitchen and bar, late at night after the dinner rush, warm low light, exposed brick, soft jazz bleeding faintly from the dining room.

[0-3s]: @Baron, lean deliberate build, dark-skinned, sharp-featured, square-framed black glasses, gray chef's coat, worn leather apron tied at the waist, carries @RoeVelvetCake (round two-layer orange velvet cake, white frosting, single mound of glossy orange roe on top, candied orange peel at the base) across the room toward @Olivia with calm theatrical confidence.

[3-7s]: @Baron sets @RoeVelvetCake down in front of @Olivia, lifts both hands theatrically, leans in on the pause. @Baron speaks, verbatim, no paraphrasing: "You will notice that I have done the unthinkable. I have made the roe... wait." Room hush during the line.

[7-10s]: @Olivia, jazz and blues singer, late twenties, warm brown skin, natural curls pulled back loosely, simple dark top, small gold hoop earrings, reacts with amusement, takes a small bite, sets the fork down slowly.

AUDIO: @Baron's line spoken clearly, room-tone restaurant ambience underneath, no other dialogue, no narration.

Only @Baron and @Olivia appear in frame. No other characters, no camera moves beyond a static medium shot on the table, no additional dialogue beyond the single line above.
```

---

## APPROVAL CHECKLIST (apply after generation, same as every other Flow take)

1. Does @Baron match his reference (age, face, coat, apron)?
2. Does @Olivia match her reference?
3. Is @RoeVelvetCake the same object as the reference (two-layer, roe mound, candied peel), not a different or duplicated cake?
4. Is Baron's line audible and verbatim?
5. Did anything unscripted show up (extra people, a second cake, wrong setting)?
6. Compare against the Scene 4 Sora 2 result (`references/roe-velvet-sora2-scene4-result-v2.mp4`) if useful, since that already proves the same 4 references and the same single beat (the reveal) can pass cleanly when isolated to one scene.

If any item fails, that is the direct cost/quality answer to "one prompt vs sections": the sectioned pipeline is what to keep using and this stays as a documented single data point, not a swap-in replacement.
