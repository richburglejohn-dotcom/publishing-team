# Olivia Marigny — Solo Teaser Video Prompt Package (Google Flow)
### Created: 2026-08-30

A short, dialogue-free teaser reel of Olivia Marigny alone, meant to run ahead of her debut in Culinary Crescendo — the same "not yet met, not yet named" window established in `references/series-bible.md`. No Baron, no other named cast. Structured as sequential ~8-second Flow clips, same convention as `references/roe-velvet-video-prompt-googleflow-v1.md`.

## Reference art (match likeness/wardrobe, do not free-hand)
**Primary likeness anchor: `references/olivia-marigny-contact-sheet-v1.jpg`** — confirmed by the author as the closest match to how Olivia is pictured. Four panels, each a different register — match the panel to the scene:
1. **Stage panel** — mustard-yellow slip dress, gold hoops, strappy heels, mic in hand, warm venue light.
2. **Private/weary panel** — bare-faced, hair down, tank top and shorts, guarded and tired.
3. **Daylight/domestic panel** — soft white top, garden setting, warm and unguarded, rare open smile.
4. **Tarot panel** — black top, candlelight, direct unreadable gaze, cards in hand.

Secondary references:
- `references/olivia-marigny-portrait-v1.png`
- `references/olivia-marigny-headshot-v1.jpg`
- `references/olivia-marigny-tarot-scene-v1.png`
- `references/olivia-marigny-performance-venue-ref-v1.jpg`
- New solo stills from `references/olivia-marigny-solo-portraits-prompt-googleflow-v1.md`, once generated — use those as additional likeness anchors.

## CHARACTER REFERENCE (reuse across all scenes)
**Olivia Marigny** — Black woman, Virgin Islands heritage, warm brown skin, dark expressive eyes, composed and unhurried. Jazz/blues singer. Carries visibly different registers by moment — radiant/commanding on stage (Panel 1), guarded/weary alone (Panel 2), warm/open in daylight (Panel 3), watchful over tarot cards (Panel 4) — pick the register the scene calls for. Stage persona draws on classic blues/torch-singer phrasing and room command — a tone reference only, not a real-person likeness. Slip dress and simple gold jewelry on stage; a lighter, softer look off stage. Match face/hair to the reference art listed above in every clip.

**Setting — the venue** — Small, dim New Orleans jazz bar, warm amber light, exposed brick, string lights, a haze in the air. This is the venue Baron has not found yet.

**Setting — the street** — A French Quarter side street at dusk/night, wrought-iron balconies, warm streetlamp glow against cool dusk light.

---

### SCENE 1 — Alone Before the Set
**Visual:** Medium shot, backstage or side-of-stage, Olivia checking her reflection in a small mirror or tuning a hoop earring, unhurried, present with herself. No dialogue.
**Mood/Lighting:** Warm practical bulb light, quiet, intimate.
**Audio:** Faint room tone, distant clink of glasses, no dialogue.

### SCENE 2 — Taking the Stage
**Visual:** Olivia walks confidently across a dim stage toward a vintage microphone stand and rests her hand on it — lead with this action, not the shot description, so Flow doesn't default to a static "singer at mic" pose matching Scene 1. Wide-to-medium shot, small room watching but out of focus/anonymous — no named characters in frame.
**Mood/Lighting:** Warm spotlight isolating her against the dim room.
**Audio:** Room hush, a single held note starting to hum, no lyrics/dialogue required. *(Post-production note only — do not type this line into Flow; it doesn't act on audio instructions in the visual prompt.)*

**Regen note (2026-08-30):** first pass came back reading nearly identical to Scene 1 — Flow held a static pose instead of the walking action. Foreground the movement, drop the Audio line from what you actually paste into Flow, and try again.

### SCENE 3 — The Number
**Visual:** Close-up, Olivia mid-performance, eyes half-lidded, full command of the moment, one hand loose at her side or resting on the mic.
**Mood/Lighting:** High-contrast amber key light, shallow depth of field, haze catching the light.
**Audio:** Sustained musical note or hum, no dialogue.

### SCENE 4 — The Walk Home
**Visual:** Wide shot, Olivia alone on the French Quarter side street afterward, unhurried pace, private half-smile, humming faintly to herself — this is the moment Baron will later hear from a distance, but he is not in this frame.
**Mood/Lighting:** Streetlamp glow against dusk blue, soft wrought-iron silhouettes in the background.
**Audio:** Faint hum, night street ambiance.

---

### Production Notes
- **Generation checklist (manual Flow runs):**
  - Upload the contact sheet (`references/olivia-marigny-contact-sheet-v1.jpg`) as the reference image for every clip, matching the panel closest to that scene's register.
  - Reject on sight, don't try to fix in-prompt: wrong hair color/texture, wrong skin tone, or an off-model face — regenerate rather than accepting a near-miss.
  - Watch for Baron (or any other figure) drifting into frame — every scene here is solo; reject if anyone else appears.
  - Don't accept "Turn"-era styling drifting into a pre-debut clip — timeline miss, reject it.
  - No on-screen text/title cards — add any caption in post per the Production Notes below.
- **Timeline note:** the contact sheet is her earlier-era look and is the correct anchor here. The more polished, curled/highlighted styling in `outputs/the-turn-facebook-campaign-v1/` (the Baron+Olivia dinner shoot) is a later, "successful" era of her — don't pull that styling into this pre-debut reel, or the timeline reads backwards.
- No title card / on-screen text requested in this package — Flow's video mode doesn't reliably render legible text; add any "coming soon"-style caption in post if this is cut into a teaser.
- Generate in order 1→4 for continuity, pasting the character reference fresh each time.
- Likeness check every clip against the reference art above — reject and regenerate rather than carrying an off-model frame into a stitched cut (same discipline as the Baron/Calliope checks in `references/roe-velvet-video-prompt-googleflow-v1.md`).
- Keep this strictly solo — no Baron, no named supporting cast — she has not been met yet in the story timeline.
