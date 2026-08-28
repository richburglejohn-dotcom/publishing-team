# Base44 — Old Account Full Export
### Exported: 2026-08-24, before any subscription cancellation
### Account: `richburg.lejohn@gmail.com` (the ORIGINAL Base44 login — the one this repo's Claude sessions have been connected to all along)

**Why this file exists:** the user accidentally created a second Base44 account under the same email but a different login, already paid for. Decision made 2026-08-24: **keep the new account, cancel this old one.** Before touching cancellation, everything of substance in the old account is captured here so nothing is lost if Base44 doesn't retain data (or access) after the subscription ends.

This is a full-fidelity dump — every record, every field, from every app the old account owns — pulled via the Base44 MCP connector (`list_user_apps`, `list_entity_schemas`, `query_entities`).

---

## Apps in the old account (8 total)

| App | ID | Has custom data? |
|---|---|---|
| **Solene** | `6a5099f09c76f8523c5dcff4` | Yes — `ScheduledPost` (65 records), see below |
| **BayouBeaux LLC** | `6a88ae592fdbdcfe126b75d7` | Yes — `Product` (4 records); `Inquiry`/`Project`/`ProjectUpdate`/`Subscriber` schemas exist but are empty | 
| **Solene (Copy)** | `6a71bdd5a535e4a2d7c2058a` | Yes — separate `ScheduledPost` data, 18 records, different content than Solene | 
| **Kestrel** | `6a713afb655ec6982b604c3e` | No — only the default `User` entity, no custom schema, no records |
| **Kitchen Character Studio** | `6a63240ebc7fe553a8675daf` | No — only the default `User` entity |
| **TagVault Meta** | `6a5a69aa01ed1d36f99f27b8` | Schema only — `HashtagSet` entity exists but has 0 records |
| **Elara** | `6a611871c8886919f1058c33` | No — only the default `User` entity |
| **SyncFlow** | `6a5a6e9a7748b3e78dde89b7` | No — only the default `User` entity |

**Important — rename status:** Solene is **still named "Solene"** as of this export. The earlier `edit_base44_app` rename request to "Koda" either did not complete or did not take effect — `list_user_apps` still returns it as "Solene". Treat the Koda rename as **not done**.

Every app's `User` entity contains exactly one record: `bayoubeaux1070@gmail.com` / Lejohn Richburg, role `admin` — this is the account owner as a registered in-app user, not the Base44 login itself.

---

## 1. Solene — `ScheduledPost` entity (65 records)

Schema:
```json
{
  "caption": "string",
  "content_source": "string",
  "content_type": "string",
  "hashtags": "string",
  "image_suggestion": "string",
  "platform": {"enum": ["instagram","facebook","x","tiktok"]},
  "post_ref": "string",
  "scheduled_date": "string",
  "series": {"enum": ["B1","SF"]},
  "status": {"enum": ["pending","published","drafted","skipped"]},
  "title": "string"
}
```
Note: `youtube` appears as an actual platform value on several records even though it's not in the enum above — the live data has drifted ahead of the schema (`BV-YT-2` through `BV-YT-6` all use `"platform":"youtube"`).

| scheduled_date | post_ref | title | platform | series | status | content_source |
|---|---|---|---|---|---|---|
| 2026-07-22 | kaldis-signage-tiktok.mp4 | Kaldi's Signage — 941 Decatur | TikTok | SF | published | AI-generated signage video |
| 2026-07-23 | B1-X-1 | Hook | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet1 |
| 2026-07-24 | B1-X-2 | Narrator Framing Fragment | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet2 |
| 2026-07-25 | SF-X-3 | The Sauce That Left | x | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Tweet-3 |
| 2026-07-26 | SF-X-4 | 941 Decatur | x | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Tweet-4 |
| 2026-07-27 | B1-X-3 | Community Hook | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet3 |
| 2026-07-28 | B1-IG-4 | Character Spotlight (Olivia) | instagram | B1 | published | outputs/social-content-book1-deepdive-v1.md#Post4 |
| 2026-07-28 | B1-X-4 | Sobriety Hook | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet4 |
| 2026-07-28 | B1-TT-4 | Trend Format - Books That Will Wreck You | tiktok | B1 | drafted | outputs/social-content-book1-deepdive-v1.md#TikTok4 |
| 2026-07-29 | SF-X-5 | Melpomene's Insult | x | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Tweet-5 |
| 2026-07-29 | B1-FB-1 | Full Story Arc | facebook | B1 | published | outputs/social-content-book1-deepdive-v1.md#FB1 |
| 2026-07-30 | SF-IG-3 | Character Reveal (Baron) | instagram | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Post-3 |
| 2026-07-30 | SF-X-6 | Ghost Story Framing | x | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Tweet-6 |
| 2026-07-31 | B1-X-5 | Tension Teaser | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet5 |
| 2026-08-01 | B1-IG-5 | Character Spotlight (Baron) | instagram | B1 | published | outputs/social-content-book1-deepdive-v1.md#Post5 |
| 2026-08-01 | B1-X-6 | Character Truth (Olivia) | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet6 |
| 2026-08-02 | SF-X-7 | The Apothecary | x | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Tweet-7 |
| 2026-08-03 | SF-X-8 | Prequel CTA | x | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Tweet-8 |
| 2026-08-04 | B1-X-7 | Friends-as-Heroes | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet7 |
| 2026-08-04 | SF-TT-1 | The Insult | tiktok | SF | skipped | outputs/sf-prequel-content-drafts-v1.md#SF-TT-1 |
| 2026-08-04 | SF-IG-2 | Behind-the-Story (941 Decatur) | instagram | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Post-2 |
| 2026-08-05 | B1-X-8 | Full Arc CTA | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet8 |
| 2026-08-06 | B1-IG-3 | Quote Card (Community as Salvation) | instagram | B1 | published | outputs/social-content-book1-deepdive-v1.md#Post3 |
| 2026-08-06 | B1-X-OLIVIA-INTRO | Olivia Marigny Character Introduction | x | B1 | published | outputs/social-content-book1-deepdive-v1.md#Tweet-Olivia-Intro |
| 2026-08-06 | B1-FB-OLIVIA-INTRO | Olivia Marigny Character Introduction | facebook | B1 | published | outputs/social-content-book1-deepdive-v1.md#FB-Olivia-Intro |
| 2026-08-06 | B1-IG-OLIVIA-INTRO | Olivia Marigny Character Introduction | instagram | B1 | published | outputs/social-content-book1-deepdive-v1.md#Post4 |
| 2026-08-07 | SF-FB-1 | The Cook Before the Brand | facebook | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-FB-1 |
| 2026-08-08 | SF-IG-4 | Dish Reveal (Scarlet Elixir) | instagram | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-Post-4 |
| 2026-08-10 | SF-TT-RoeVelvet | Roe Velvet Teaser | tiktok | SF | published | user-uploaded video: roevelvet_tiktok_teaser_v1.mp4 |
| 2026-08-11 | B1-IG-2 | The Turn (Triumph to Exhaustion) | instagram | B1 | published | outputs/social-content-book1-deepdive-v1.md#Post2 |
| 2026-08-13 | BV-YT2-IG | YT Ep2 Teaser — Scarlet Elixir | instagram | SF | published | outputs/youtube-cross-promo-pack-v1.md#Ep2-IG |
| 2026-08-14 | BV-YT2-TT | YT Ep2 Trailer — Scarlet Elixir | tiktok | SF | sent_for_review | outputs/yt-ep2-trailer.mp4 |
| 2026-08-15 | BV-YT-2 | The Sauce That Was Never Written Down | youtube | SF | skipped | outputs/youtube-content-pack-v1.md#Episode2 |
| 2026-08-15 | BV-YT2-X | YT Ep2 Release Tweet — Scarlet Elixir | x | SF | skipped | outputs/youtube-cross-promo-pack-v1.md#Ep2-X |
| 2026-08-15 | BV-YT2-FB | YT Ep2 Release Post — Scarlet Elixir | facebook | SF | published | outputs/youtube-cross-promo-pack-v1.md#Ep2-FB |
| 2026-08-15 | B1-TT-1 | The Part Nobody Talks About | tiktok | B1 | drafted | outputs/social-content-book1-deepdive-v1.md#TikTok1 |
| 2026-08-15 | B1-IG-6 | Freedom / Ending Tease | instagram | B1 | published | outputs/social-content-book1-deepdive-v1.md#Post6 |
| 2026-08-16 | B1-FB-2 | Community as the Real Twist | facebook | B1 | published | outputs/social-content-book1-deepdive-v1.md#FB2 |
| 2026-08-18 | SF-TT-3 | I Hate It Here | tiktok | SF | skipped | outputs/sf-prequel-content-drafts-v1.md#SF-TT-3 |
| 2026-08-19 | LAUNCH-TT-1 | The Ghost Recipe | tiktok | SF | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video1 |
| 2026-08-20 | SF-FB-2 | The Address That Made the Cook | facebook | SF | published | outputs/sf-prequel-content-drafts-v1.md#SF-FB-2 |
| 2026-08-21 | LAUNCH-TT-2 | Meet Baron Vieux | tiktok | SF | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video2 |
| 2026-08-23 | LAUNCH-TT-3 | Meet Olivia Marigny | tiktok | B1 | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video3 |
| 2026-08-25 | B1-TT-2 | Who Saves Them | tiktok | B1 | pending | outputs/social-content-book1-deepdive-v1.md#TikTok2 |
| 2026-08-26 | B1-FB-3 | Sobriety and Freedom | facebook | B1 | published | outputs/social-content-book1-deepdive-v1.md#FB3 |
| 2026-08-26 | LAUNCH-TT-4 | The Wall They Couldn't Push Through | tiktok | B1 | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video4 |
| 2026-08-27 | BV-YT3-IG | YT Ep3 Teaser — Candlelit Dinner | instagram | B1 | published | outputs/youtube-cross-promo-pack-v1.md#Ep3-IG |
| 2026-08-28 | BV-YT3-TT | YT Ep3 Trailer — Candlelit Dinner | tiktok | B1 | pending | outputs/yt-ep3-trailer.mp4 |
| 2026-08-28 | LAUNCH-TT-5 | Inside The Apothecary | tiktok | B1 | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video5 |
| 2026-08-29 | BV-YT3-FB | YT Ep3 Release Post — Candlelit Dinner | facebook | B1 | published | outputs/youtube-cross-promo-pack-v1.md#Ep3-FB |
| 2026-08-29 | BV-YT3-X | YT Ep3 Release Tweet — Candlelit Dinner | x | B1 | skipped | outputs/youtube-cross-promo-pack-v1.md#Ep3-X |
| 2026-08-29 | BV-YT-3 | The Candlelit Dinner | youtube | B1 | skipped | outputs/youtube-content-pack-v1.md#Episode3 |
| 2026-08-30 | LAUNCH-TT-6 | 3 Days Countdown | tiktok | B1 | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video6 |
| 2026-09-01 | B1-TT-3 | The Ending You Don't Expect | tiktok | B1 | pending | outputs/social-content-book1-deepdive-v1.md#TikTok3 |
| 2026-09-02 | LAUNCH-TT-7 | 1 Day Countdown | tiktok | B1 | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video7 |
| 2026-09-04 | LAUNCH-TT-8 | Launch Day - It's Here | tiktok | B1 | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video8 |
| 2026-09-06 | LAUNCH-TT-9 | Why I Wrote The Ending I Wrote | tiktok | B1 | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video9 |
| 2026-09-08 | LAUNCH-TT-10 | Now It's Your Turn | tiktok | SF | skipped | outputs/tiktok-book-launch-campaign-v1.md#Video10 |
| 2026-09-10 | BV-YT4-IG | YT Ep4 Teaser — Kitchen That Made Me | instagram | SF | skipped | outputs/youtube-cross-promo-pack-v1.md#Ep4-IG |
| 2026-09-11 | BV-YT4-TT | YT Ep4 Trailer — Kitchen That Made Me | tiktok | SF | skipped | outputs/youtube-cross-promo-pack-v1.md#Ep4-TT |
| 2026-09-12 | BV-YT4-FB | YT Ep4 Release Post — Kitchen That Made Me | facebook | SF | skipped | outputs/youtube-cross-promo-pack-v1.md#Ep4-FB |
| 2026-09-12 | BV-YT4-X | YT Ep4 Release Tweet — Kitchen That Made Me | x | SF | skipped | outputs/youtube-cross-promo-pack-v1.md#Ep4-X |
| 2026-09-12 | BV-YT-4 | The Kitchen That Made Me | youtube | SF | skipped | outputs/youtube-content-pack-v1.md#Episode4 |
| 2026-09-26 | BV-YT-5 | Family Meal | youtube | B1 | skipped | outputs/youtube-content-pack-v1.md#Episode5 |
| 2026-10-10 | BV-YT-6 | The Apothecary Signature | youtube | SF | skipped | outputs/youtube-content-pack-v1.md#Episode6 |

**Full caption/hashtag text** (only records that carry non-null `caption` — everything else's copy lives in the `content_source` file):

- **B1-X-OLIVIA-INTRO** (2026-08-06): "Olivia reads everyone's future at the tarot table. She didn't see her own collapse coming. Meet Olivia Marigny — the heart of Culinary Crescendo."
- **B1-FB-OLIVIA-INTRO** (2026-08-06): "Meet Olivia Marigny — tarot reader, blues singer, co-owner of Bayouboujee. She could see everyone else's future. She didn't see her own collapse coming."
- **B1-IG-OLIVIA-INTRO** (2026-08-06): "Olivia doesn't just sing the blues. By the end of this book, she's lived them. She's a tarot reader who could see everyone else's future clean as day and still missed the storm closing in on her own life. Meet Olivia Marigny."
- **SF-IG-4** (2026-08-08, hashtags: #BaronVieux #ScarletElixir #TheScarletFoundation #ScarletRedfish #NewOrleans #DishReveal #Prequel #CreoleFood #FoodLore #NOLA #GhostStory #TheApothecary): "This is the one that disappeared. Scarlet Elixir — a sauce reduction of roasted tomato, smoked guajillo, and Peychaud's Bitters, plated over seared Scarlet Redfish. It was never written down. Never bottled. The recipe lived in one cook's hands — the weight of the spoon, the moment the color shifted, the smell that said 'now.' When the cook left, the dish stayed on the menu by name. The sauce never came back. Some flavors don't survive the people who made them. This is a ghost story about one that didn't. The prequel continues at bayoubeauxllc.com"
- **SF-TT-RoeVelvet** (2026-08-10, hashtags: #BaronVieux #RoeVelvet #TheApothecary #NewOrleans #ComingSoon #TeaserAlert #FoodArt #ChefLife): "Baron's newest creation is coming... Roe Velvet. Full reveal soon."
- **BV-YT2-TT** (2026-08-14, hashtags: #BaronVieux #ScarletElixir #TheScarletFoundation #NewOrleansCooking #CreoleFood #NOLA #CastIron #FoodLore #GhostRecipe #YouTubeChef #NewOrleans #Prequel): "The sauce that disappeared. 🔥 Baron makes the Scarlet Elixir on camera for the first time — full episode link in bio."
- **B1-FB-2** (2026-08-16): "Every version of this story I could have written had a version where Baron and Olivia save themselves. That's not the version I wrote. The version I wrote has them hit a wall they can't push through alone — financially, emotionally, all of it at once — and it's their friends who carry them the rest of the way. Theron runs the kitchen he was never supposed to have to run. Jamara manages a business from across the country because Olivia needed her to. Nobody in this book gets saved by grinding harder. They get saved by people who show up. I think that's the truest thing in the whole book. Maybe the truest thing I know, period. Culinary Crescendo: A Symphony of Love in the Big Easy — out now."
- **LAUNCH-TT-1** (2026-08-19, hashtags: #BaronVieux #TheScarletFoundation #ScarletElixir #NewOrleans #GhostRecipe #BookTok): "There's a dish in New Orleans only one person could ever make. 🔥 The Scarlet Foundation — link in bio."
- **SF-FB-2** (2026-08-20, hashtags: #BaronVieux #TheScarletFoundation #941Decatur #KaldisCoffeeHouse #NewOrleans #Prequel #CreoleHeritage #FoodLore #NOLA #GhostStories): "941 Decatur Street. If you've been following the Baron Vieux story, you've heard that address by now. Kaldi's Coffee House. The place where the prequel starts. I want to explain why it matters. 941 Decatur wasn't a restaurant in the way most people think of restaurants. It was a machine. It ran on pressure, speed, and heat — the kind that either forges a cook or shatters one. It did both to Baron, sometimes in the same shift. The people who survived the line at 941 carry it like a scar that never fully healed. Most of them still don't write their recipes down. Not because they're protecting secrets — because the recipe was never the point. The point was the hands. The timing. The instinct that told you when the color was right and the heat was done. That's where the Scarlet Elixir was born. A sauce that existed in one person's muscle memory and nowhere else. When that person left, the sauce left with them. The Scarlet Foundation goes back to that kitchen. To the address that made the cook who made the brand. To the sauce that became a ghost. Not every story about food is about food. Some of them are about what gets lost when the people who held the knowledge are gone. The prequel continues at bayoubeauxllc.com"
- **LAUNCH-TT-2** (2026-08-21, hashtags: #BaronVieux #CulinaryCrescendo #BookTok #NewOrleans #AuthorTok): "Meet Baron Vieux — before you read the book. 📖 Culinary Crescendo, out now."
- **LAUNCH-TT-3** (2026-08-23, hashtags: #BaronVieux #CulinaryCrescendo #OliviaMarigny #BookTok #NewOrleans; image_suggestion: tarot table speakeasy scene - OliviaMarigny_reference.png (v2 canon)): "She could see everyone else's future. Not her own. Meet Olivia Marigny."
- **B1-FB-3** (2026-08-26): "I didn't want to write a book where two people build a dream and the story just ends at the ribbon-cutting. Anybody can build something. The harder, more honest story is what happens when the thing you built almost becomes the thing that breaks you — and what it takes to come back from that clean. Baron and Olivia's ending isn't 'they kept the restaurant.' It's that they got to choose, on their own sober terms, what freedom looked like next. They handed Bayouboujee to the people who'd fought to save it, and they went out into the world to live. That's the ending I wanted for them. Not an empire. A life. Culinary Crescendo: A Symphony of Love in the Big Easy. Lejohn Richburg III. FuturIQ. If this is the first time you're hearing the full shape of this story, welcome — I think you'll want to read it now."
- **LAUNCH-TT-4** (2026-08-26, hashtags: #CulinaryCrescendo #BaronVieux #BookTok #NewOrleans #CommunityOverGrind): "Nobody in this book gets saved by grinding harder. They get saved by people who show up."
- **LAUNCH-TT-5** (2026-08-28, hashtags: #TheApothecary #CulinaryCrescendo #BaronVieux #NewOrleans #BookTok): "Where the book actually happens. 🕯️"
- **LAUNCH-TT-6** (2026-08-30, hashtags: #CulinaryCrescendo #BaronVieux #BookTok #Countdown): "3 days. ⏳"
- **LAUNCH-TT-7** (2026-09-02, hashtags: #CulinaryCrescendo #BaronVieux #BookTok #1Day): "Tomorrow."
- **LAUNCH-TT-8** (2026-09-04, hashtags: #CulinaryCrescendo #BaronVieux #BookTok #NewRelease #NewOrleans): "It's here. 🎉 Culinary Crescendo: A Symphony of Love in the Big Easy — out now."
- **LAUNCH-TT-9** (2026-09-06, hashtags: #CulinaryCrescendo #BaronVieux #AuthorTok #BookTok): "Not an empire. A life. Here's why I ended it the way I did."
- **LAUNCH-TT-10** (2026-09-08, hashtags: #CulinaryCrescendo #TheScarletFoundation #BaronVieux #BookTok #NewOrleans): "The whole story, in 30 seconds. Start anywhere."

**Status tallies:** published 34 · skipped 23 · pending 4 · drafted 2 · sent_for_review 1 · voiceover_ready 0 (total 65, matches earlier count). The 23 `skipped` are the ones deliberately marked skipped on 2026-08-24 per "forget the missing post start fresh" — all reference one of the 4 missing files (`outputs/tiktok-book-launch-campaign-v1.md`, `outputs/youtube-content-pack-v1.md`, `outputs/youtube-cross-promo-pack-v1.md`, `outputs/sf-prequel-content-drafts-v1.md`).

---

## 2. BayouBeaux LLC — `Product` entity (4 records)

Schema: `title` (required), `category` (enum: book/print/stationery/object), `description`, `price`, `image_url`, `gallery[]`, `materials`, `edition`, `featured`, `in_stock`. RLS: public read, admin-only write.

| Title | Category | Price | Edition | Materials | Featured | In stock | Image |
|---|---|---|---|---|---|---|---|
| The Basin Almanac | book | $480 | Edition of 12 | Reclaimed cypress, cotton rag, linen thread, beeswax | Yes | Yes | `https://media.base44.com/images/public/6a88ae592fdbdcfe126b75d7/1dfc7c8e9_generated_image.png` |
| Mist & Cypress — Fine Print | print | $145 | Edition of 40 | Cotton rag paper, hand-mixed umber ink | Yes | Yes | `https://media.base44.com/images/public/6a88ae592fdbdcfe126b75d7/253e08567_generated_image.png` |
| The Atelier Stationery Suite | stationery | $95 | Sets of 12 | Cotton card stock, linen envelopes, gold wax | No | Yes | `https://media.base44.com/images/public/6a88ae592fdbdcfe126b75d7/5690e758d_generated_image.png` |
| Cypress & Brass Desk Seal | object | $220 | Made to order | Reclaimed cypress, solid brass | Yes | **No** | `https://media.base44.com/images/public/6a88ae592fdbdcfe126b75d7/657e70192_generated_image.png` |

Descriptions:
- **The Basin Almanac** — "A hand-bound almanac of Louisiana seasons, printed on heavy cotton rag and stitched with linen thread. Each cover is shaped from reclaimed cypress and finished in beeswax."
- **Mist & Cypress — Fine Print** — "A letterpress print pulled by hand on deckled cotton paper, drawn from sketches made along the bayou at first light. Deep impression, soft umber ink."
- **The Atelier Stationery Suite** — "A correspondence suite of folded cotton cards, linen envelopes, and a wax seal in gold. Made for slow letters and long keeping."
- **Cypress & Brass Desk Seal** — "A weighted desk seal turned from reclaimed cypress and fitted with a solid brass head, engraved with a cypress knee motif. Made to mark what's yours."

`Inquiry`, `Project`, `ProjectUpdate`, `Subscriber` entities all exist (schemas defined, meant for a client-commission intake flow) but currently hold **zero records** — nothing to lose there.

**Image files** live on `media.base44.com` under this app's ID — these URLs will very likely go dead once the old account is cancelled. If any of these 4 product images are still wanted for `bayoubeauxllc.com` or elsewhere, they should be downloaded now, before cancellation, not just link-referenced.

---

## 3. Solene (Copy) — separate `ScheduledPost` data (18 records)

This app is a **distinct dataset**, not an empty duplicate — it has its own 18-record content calendar, different from Solene's 65, using a different `content_source` convention (`Publishing Team/*.md` Drive-style paths and freestanding `.md` filenames rather than `outputs/*.md#anchor`). It also carries real posted-content evidence: live post IDs/URLs (e.g. `https://www.instagram.com/reel/18368137306212950`, `https://www.instagram.com/p/17901177519537577`, Facebook post ID `122111035023399443`) and a few uploaded video asset URLs on `base44.app`.

| scheduled_date | title | platform | status | content_source |
|---|---|---|---|---|
| 2026-08-05 | Rice Technique IG Teaser — Hook Frame | instagram | pending | rice-technique-caption-pack-v1.md |
| 2026-08-05 | Rice Technique IG Teaser — Portrait | instagram | pending | rice-technique-caption-pack-v1.md |
| 2026-08-05 | Paella vs. Jambalaya: The Rice Method Changes Everything | youtube | pending | rice-technique-youtube-copy-v1.md |
| 2026-08-05 | Olivia Four-Panel Arc - Character Spotlight (Carousel) | instagram | pending | olivia-arc-caption-v1.md |
| 2026-08-05 | Olivia at Bayouboujee - Performance Scene | instagram | pending | olivia-arc-caption-v1.md |
| 2026-08-04 | Ep4 IG Teaser - The Kitchen That Made Me | instagram | pending | youtube-cross-promo-pack-v1.md (Episode 4) |
| 2026-08-10 | Rice Technique IG Teaser — Square | instagram | published (IG post `18075587285360049`) | rice-technique-caption-pack-v1.md |
| 2026-08-10 | Rice Technique FB Teaser — Link Preview | facebook | published | rice-technique-caption-pack-v1.md |
| 2026-08-10 | Book 1 — Instagram Carousel: The Full Arc (6 slides) | Instagram | published (IG post `17901177519537577`) | Book1_Companion_Posts_IG_FB_2026-08-10.md |
| 2026-08-10 | Book 1 — Facebook Post: The Full Arc (long-form) | Facebook | published (FB post `122111035023399443`) | Book1_Companion_Posts_IG_FB_2026-08-10.md |
| 2026-08-10 | Book 1 — TikTok: The Full Arc | TikTok | voiceover_ready | TikTok_Book1_Crescendo_Arc_2026-08-10.md |
| 2026-08-12 | Rice Technique IG Reel — Vertical Video | instagram | published (IG reel `18368137306212950`) | rice-technique-caption-pack-v1.md |
| 2026-08-12 | Rice Technique TikTok — Vertical Video | tiktok | pending | rice-technique-caption-pack-v1.md |
| 2026-08-15 | YouTube — The Origin of Bayouboujee (Kaldi's + Insult Combined) | youtube | pending | Publishing Team/YouTube_Origin_Story_2026-08-15.md |
| 2026-08-15 | Rice Technique IG Reel — Saturday Catch-up | Instagram | published (dup of the reel above) | Publishing Team/Saturday_Aug15_Content_Drop.md |
| 2026-08-15 | Rice Technique FB Post — Saturday Catch-up | Facebook | published (marked redundant — same content already posted via native composer 8/18) | Publishing Team/Saturday_Aug15_Content_Drop.md |
| 2026-08-15 | TikTok — The Insult That Built It (Prequel) | TikTok | pending | Publishing Team/TikTok_The_Insult_That_Built_It_v1.md |
| 2026-08-15 | X/Twitter — Prequel Teaser Tweet | X | pending | Publishing Team/Saturday_Aug15_Content_Drop.md |

Full captions for the two most content-dense records:
- **Book 1 — Facebook Post: The Full Arc** — "The thing they built to save them almost destroyed them. Baron Vieux and Olivia didn't ask permission. They built Bayouboujee from a shipping container kitchen and a microphone — food on one side, music on the other, and a dream stitched together with late nights and stubborn hope. It started as freedom. Then freedom got heavy. The shifts blurred together. The music became another job. And the two people who built a place to stop being run into the ground started running themselves into it instead. But here's what the story is really about: when they couldn't hold it alone, their people showed up. Not with a miracle. With loyalty. Culinary Crescendo: A Symphony of Love in the Big Easy — Book One is live now. 📖 Read it at bayoubeauxllc.com #CulinaryCrescendo #BaronVieux #NewOrleans #Bayouboujee #BookOne"
- **Olivia Four-Panel Arc** — "Olivia doesn't just sing the blues. By the end of this book, she's lived them. Swipe → for the arc every reader tells us stays with them long after the last page. 1️⃣ Triumph — The woman who could see everyone's future clean as day... 2️⃣ Collapse — But the weight of holding it all up alone became too heavy... 3️⃣ Recovery — Sobriety isn't portrayed as a plot device in this book. It's portrayed as a door... 4️⃣ The Gift — She's still reading cards. Still singing. But now she's reading them for the right reason... This isn't a side character's arc. This is the heart of Culinary Crescendo. Culinary Crescendo: A Symphony of Love in the Big Easy. Available now."

**This app is not disposable clutter** — it has real published-post evidence and 8 still-pending items that were never migrated into the main Solene calendar. Worth deciding, separately from the account cancellation, whether these 8 pending items should be merged into whatever Solene/Koda becomes going forward.

---

## 4. Empty-shell apps (Kestrel, Kitchen Character Studio, TagVault Meta, Elara, SyncFlow)

Confirmed by `list_entity_schemas` + `query_entities`: none of these five apps have any custom entity records. `TagVault Meta` has a `HashtagSet` schema defined (fields: `name`, `tags[]`) but 0 saved sets. The other four have no custom schema at all beyond the default `User` entity, which in every case holds just the one admin account record (`bayoubeaux1070@gmail.com`). **Nothing to export from these five** — whatever these apps were meant to become, no working data was ever put into them.

---

## What this means for the cancellation decision

- **Solene's 65-record calendar** is fully captured above — safe to cancel without losing it, though the live app UI (whatever build/frontend Base44's AI generated for it) will be gone; only the data survives, here, as text.
- **BayouBeaux LLC's 4 products** are captured, but their **images are hot-linked to `media.base44.com`** and will likely 404 once the account is gone — download those 4 PNGs before cancelling if they're used anywhere live.
- **Solene (Copy)'s 18 records** are a real second content calendar with actual live post IDs — captured above, but same image/video hot-link risk (several `base44.app` asset URLs) — download anything still needed before cancelling.
- The five empty-shell apps can be cancelled with zero data loss.
