# Google Flow Regeneration Package
## "Jambalaya vs. Paella" — Fixing the Embroidery Defect
### Created: 2026-09-09
### Status: PILOT REGENERATION — replaces `outputs/baron-jambalaya-vs-paella-youtube-v1.mp4`, held per `outputs/baron-jambalaya-vs-paella-youtube-post-copy-v1.md`'s flag (garbled apron embroidery, worst on the opening title-card frame).

## Why this exists

The original 6-clip video is otherwise solid — clean argument, good pacing, no character drift — but every clip has garbled, illegible embroidered text on Baron's apron ("Bawr Croer...", "RegeBarge..." instead of "Baron Vieux" / "Bayouboujee"), worst on the very first frame (the intro title card, likely the thumbnail). This package regenerates it with the fix validated on Meta AI this week: **explicit blocky/sans-serif font instruction**, never just "embroidered text."

**Dialogue note:** the original video's audio was Baron's own native spoken argument, generated in-clip — no separate script doc exists anywhere in the repo for it (checked). The lines below are a reconstruction matching the same beats and thesis described in `outputs/baron-jambalaya-vs-paella-youtube-post-copy-v1.md` (clip-by-clip content notes), **not a verbatim transcript of the original audio** — flagging this clearly since it's a real difference from the "close to verbatim" rule used elsewhere in this repo, which only applies when an original script exists to be verbatim *to*.

**Update 2026-09-09 — 5 individual clips reviewed, cuts the regeneration work roughly in half.** Lejohn uploaded 5 clips (`Dont_call_it_paella`, `Jambalaya_vs_Paella_argument`, `Rice_method_changes_everything`, `Paella_vs_Jambalaya_rice_technique`, `Call_to_action_subscribe_membership`) — these appear to be the component clips for Koda's separate "rice technique" video (`references/Book1_Campaign_Manual_Posting_Guide.md` item #2, hosted on base44.app, which is blocked by this session's network proxy and couldn't be checked directly). Findings:
- **2 clips show Baron and have the same garbled cursive embroidery defect** ("Dont_call_it_paella" — Baron holding a cast-iron pot toward camera; "Call_to_action_subscribe_membership" — closing CTA, on-screen text "JOIN THE TABLE — MEMBERSHIP LINK BELOW" matches this doc's Scene 6 exactly). Both need the same font-fix regeneration as the scenes below.
- **3 clips are clean b-roll, no character, no embroidery risk — reusable as-is, no regeneration needed:** `Jambalaya_vs_Paella_argument` (a title card reading "TWO DISHES. ONE OLD ARGUMENT."), `Rice_method_changes_everything` (jambalaya being stirred, hands only), `Paella_vs_Jambalaya_rice_technique` (paella pan with shrimp and peas, no people).

So the actual Flow work needed is just the two Baron-facing shots (the pot-holding hero moment and the CTA) — use Scene 1 and Scene 6 prompts below for those, skip regenerating equivalent b-roll since these three clean clips already cover it.

---

## LOCKED REFERENCE IMAGES

Same as every other Baron Vieux piece this week — `references/baron-portrait-apron-kitchen-v1.jpeg` for character + kitchen, `references/baron-mentoring-kitchen-v1.webp` for embroidery/apron detail.

## VERIFICATION PROTOCOL

Same as the Dark Roux pilot (`references/baron-vieux-episode1-darkroux-googleflow-v1.md`):
1. Baron matches the locked reference — same face, glasses, coat/apron.
2. Kitchen matches the same reference in every scene.
3. **Embroidery text, if in frame, is legible** — check against `baron-mentoring-kitchen-v1.webp`. This is the specific defect being fixed; if it renders garbled again, regenerate, don't accept it.
4. No extra characters in frame except where a background staff member is explicitly called for (Scene 1 only, per the original).
5. Stitch check after all 6 are generated — cut in order, watch as one clip, confirm no visible jump.

## STRICT GENERATION RULES

One take per scene, generated in order 1→6, no batching. Reference image pasted fresh into every scene's prompt. If a take drifts, regenerate — don't loosen the prompt to match what came out.

---

### SCENE 1 — Intro Title Card
**Visual:** Baron in his kitchen, adjusting his apron/coat, warm confident energy, camera settling into a medium shot. A second kitchen staff member visible working in the soft-focus background.
**Dialogue (Baron):** "Baron Vieux. Welcome back to the Culinary Crescendo Series."
**On-screen text (added in edit, not generation):** "Baron Vieux — The Culinary Crescendo Series"

### SCENE 2 — "Don't Call It Paella"
**Visual:** Opens on a close-up of jambalaya in a cast-iron pot — shrimp, sausage, rice. Cuts to Baron, direct to camera, making his opening case.
**Dialogue (Baron):** "First thing — don't call this paella. I don't care how it looks in a photo. It's not paella."

### SCENE 3 — The Argument
**Visual:** Baron, talking head, no on-screen text, mid-explanation, animated hand gesture.
**Dialogue (Baron):** "People keep comparing the two like they're the same dish wearing different clothes. They're not. The comparison itself is the mistake."

### SCENE 4 — "It's Not the Ingredients"
**Visual:** Baron's thesis statement, cuts to jambalaya b-roll — rice being stirred in the pot, absorbing the stock.
**Dialogue (Baron):** "It's not the ingredients. Swap the protein, swap the pan — doesn't matter. It's the rice method. That's the whole argument."

### SCENE 5 — Paella Close-Up
**Visual:** Clean comparison payoff — a shrimp-and-rice paella in a wide pan, socarrat crust visible at the edges.
**Dialogue (Baron, voiceover):** "Paella wants that crust on the bottom, hands off once it's in the pan. Jambalaya wants you stirring, building layers the whole way through. Different rice, different discipline."

### SCENE 6 — CTA
**Visual:** Baron, direct to camera, closing energy.
**Dialogue (Baron):** "That's the difference. Join the table — membership link's below."

---

## COPY-PASTE PROMPTS FOR GOOGLE FLOW

Attach `references/baron-portrait-apron-kitchen-v1.jpeg` fresh before each scene.

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, a lean, sharp-featured chef with square black glasses, wearing a gray chef's coat and a black tool-apron (phone pocket, wooden spatula, leather straps), in a stainless-steel professional kitchen with an exposed hood and combi oven — same face, coat, apron, and kitchen as the attached reference image, not a different one.

Medium shot, warm confident energy. Baron adjusting his apron/coat, settling into frame. A second kitchen staff member works in soft focus in the background — one other person only, no more.

Dialogue (Baron): "Baron Vieux. Welcome back to the Culinary Crescendo Series."

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive. This is the single most important instruction in this prompt — the previous take failed here.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Opens on a close-up of jambalaya in a cast-iron pot — shrimp, sausage, rice, visible steam. Cuts to Baron, direct to camera, mid-sentence, confident and direct. No other people in frame.

Dialogue (Baron): "First thing — don't call this paella. I don't care how it looks in a photo. It's not paella."

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Talking-head shot, no on-screen text, mid-explanation, one animated hand gesture. No other people in frame.

Dialogue (Baron): "People keep comparing the two like they're the same dish wearing different clothes. They're not. The comparison itself is the mistake."

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Baron delivering his thesis statement to camera, then cut to close jambalaya b-roll — rice being stirred in the pot, visibly absorbing the stock, steam rising. No other people in frame.

Dialogue (Baron): "It's not the ingredients. Swap the protein, swap the pan — doesn't matter. It's the rice method. That's the whole argument."

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Clean comparison close-up shot — a shrimp-and-rice paella in a wide, shallow pan, socarrat crust visible and crisp at the edges, no hands or people in frame, same kitchen setting as the reference image in soft focus behind it.

Dialogue (Baron, voiceover): "Paella wants that crust on the bottom, hands off once it's in the pan. Jambalaya wants you stirring, building layers the whole way through. Different rice, different discipline."

Audio: quiet kitchen ambiance under the voiceover, no other sound.
```

**ATTACH:** `baron-portrait-apron-kitchen-v1.jpeg`
```
Baron Vieux, same chef as the attached reference image — same face, glasses, gray coat, black tool-apron, same stainless-steel kitchen with exposed hood and combi oven visible in the background.

Direct to camera, closing energy, confident smile. No other people in frame.

Dialogue (Baron): "That's the difference. Join the table — membership link's below."

If any embroidered text on the coat or apron is visible, render it in plain, blocky, sans-serif lettering, large and clearly legible — not script or cursive.
```

---

## What happens after generation

Run all 6 through Google Flow in order, drop the clips back, and I'll verify against the checklist above — same discipline as every other pilot this week, including the stitch check and a specific close-up pass on the embroidery in Scene 1 and 2 (the two frames where it's most visible/likely to be checked by a viewer). If it passes: this becomes the replacement for `outputs/baron-jambalaya-vs-paella-youtube-v1.mp4`, and the original gets superseded, not deleted (kept for reference per the repo's usual practice). If the embroidery defect recurs even with the explicit instruction: that's a real finding for `references/meta-ai-prompt-technique-v1.md`'s Flow-side counterpart — worth checking whether Flow needs a different fix than Meta AI did.
