# Generation standing rules

Check every image or video prompt against this file before spending credits (rule 5 in `references/agent-standing-rules.md`). Character canon stays in `references/series-bible.md` and the locked reference art; this file holds production rules and what was learned the hard way. Each line names its source.

## Baron Vieux, cooking series (Look B)

- Look B prompt and reference images: `references/character-flow-prompts-ready-to-use-v1.md` ("Baron Vieux — Look B (Cooking Series only)"). Square black glasses, gray chef's coat, black tool-apron with a phone pocket, wooden spatula and spoon, stainless-steel professional kitchen.
- As generated for Ep 2: plain gray coat with no embroidery, one phone in the chest pocket (Peekabeaux's Ep 2 prompts, Nov 2026).
- **No marks, logos or text on the chest in any cooking-series episode.** A garbled logo/text mark appeared on the saved Look B Character across several trailer shots and Lejohn accepted it as-is for the trailer only (2026-11-16, logged in "Approvals log addition - 2026-11-16 - Trailer coat mark: accept as-is, no patch"). That acceptance does not carry over: Lejohn confirmed 2026-11-18 it's a trailer-specific exception, and the plain-chest rule stands for Ep 4 and every other generation.
- **No wedding band, ring or jewelry on Baron in any new generation** (Lejohn, 2026-11-12). Every prompt where his hands can show says "bare hands, no rings, no jewelry". The ring already visible in Ep 2 clip 4 is accepted for that episode only.
- **Any hand in frame is Baron's and matches his skin tone.** If a shot does not need a hand, the prompt says "no hands in frame". Ep 2 clip 7 shipped with a light-skinned hand at the plate and Claude's check missed it in v4 and v5 (Lejohn caught it, 2026-11-12). Checks now include skin tone on every hand, including close-ups with no face.
- **One voice.** Baron's voice is the same in every clip, with no foreign accent. Each prompt with dialogue carries the same voice direction. Lejohn heard an accent at 10-15s of Ep 2 v5 (2026-11-12). No agent can judge voice, so every cut gets Lejohn's listen before it posts.

## Ep 2, Blackened Redfish

- **Whole fish throughout.** No fillets, no cut fish, no knife work in any shot (Lejohn, 2026-11-11). The original script and prompt package were written for fillets, so every remaining Ep 2 prompt is re-read against this rule.

## Ep 5, Crawfish Etouffee (learned 2026-11-25)

- **A shared start-frame image can bake in background elements no prompt can override.** The series' shared kitchen start frame (ElevenLabs asset `bgUuCB4JMUwqNrmHml8E`) has ambient steam/haze near the exhaust hood and background pots as part of the image itself. A prompt claiming a specific contradicting state (e.g. "every pot is empty, cold, dry, no steam") fails even when phrased positively and backed by a matching negative prompt, because the model is extending what the start frame already shows, not inventing it. Fix: don't make a state-claim about something the shared start frame already shows: for Shot 1 (Hook, camera-facing, no cooking yet in frame), drop the pot-state claim entirely rather than asserting "empty."
- **A described food item in a bowl can render as a different, wrong form of that food even with a strong positive description.** Ep 5 Shot 1 described "a bowl holding only peeled crawfish tails, no shells, no heads, no claws" (plus matching negative prompt) twice and both times the model rendered whole shell-on crawfish. Positive phrasing fixed the jewelry problem (Ep 4 Shot 5) but did not fix this. Fix that worked: remove the bowl/food item from the shot's visual description entirely rather than trying a third wording — the spoken line alone carries "crawfish etouffee" without needing it on screen.
- Credits are real money (ElevenLabs ~$1.32 per 8s 720p Veo 3.1 Fast clip, 2026-11-25 pricing). Two failed attempts on one shot is not a reason to stop fixing it, but exhausting prompt-wording variations on the same visual claim without changing the claim itself is a waste of a third attempt.

## Spoken lines (all videos)

- **"Peychaud's" is pronounced "Pay-shows".** In any spoken line, write it phonetically as "Pay-shows" in the prompt so the voice model says it right; on screen and in captions it stays "Peychaud's" (Lejohn, 2026-11-16, recorded in the Turn folder doc "Approvals log addition - 2026-11-16 - Ep 3 Shot 3 passed; Peychaud's pronounced "Pay-shows""). Ep 3 Shot 2 had to be re-rolled for this.

## Ep 3, The Gulf Remedy (learned 2026-11-16)

- Guacamole reads as thick and chunky: it holds its shape and breaks into clumps. Shot 5 attempt 1 failed because the avocado stretched and pulled like fabric (Lejohn).
- Plantain chips sit on their own small plate beside the mortar bowl, not in it (Lejohn, Shot 6).

## Generation method

- For a shot that must cut from or into an existing clip, use start-frame mode with the neighbouring clip's last frame, and leave the saved Character out. This passed Flow's "prominent people" gate first try on 2026-11-12 after the saved-Character path was refused.
- After a policy refusal: no reworded retry. Report it. A different input path needs Lejohn's go.
- Google Flow budget: one clip and one generation at a time, at most two attempts, credits reported before and after (Lejohn, 2026-11-12). Balance 630 after Ep 2 clip 4 v2, reset Nov 25.
- ElevenLabs fallback: Veo 3.1 Fast with start and end frames, price it with an estimate first. An 8s 720p clip cost 7,271 credits on 2026-11-12. Claude's shell cannot download from ElevenLabs, so someone signed in must save the file to the Turn folder.
- Every delivered clip comes with a verify copy under 2.5MB and first and last frame PNGs. Claude checks frames; voice and sound are Lejohn's ear check, since no agent can judge them.
