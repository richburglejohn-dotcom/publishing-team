# Pipeline Tool Capabilities — Who Actually Does What
### Created: 2026-09-03

This is the routing table for the "Claude as pipeline core" model (see the standing rule in `references/drive-folder-reference.md`). The point: when something can't be done directly one way, check this list for who *can* before defaulting to "here's a script to copy and paste." Copy-paste-for-Lejohn is the last resort, not the default.

## Live tool access (as of 2026-09-04) — direct, no human hop needed

**Getting a video/image to Buffer at all — the public-URL trick.** `create_post`'s assets need a direct, fetchable URL, not a local file. This repo is a **public** GitHub repo, so `https://raw.githubusercontent.com/richburglejohn-dotcom/publishing-team/main/<path>` works directly — 200, no redirect, range-request support confirmed. Any file already committed to the repo can be posted this way without needing Koda's `media.base44.com` hosting trick.

**YouTube via Buffer — Shorts force portrait, regardless of which cut you send.** Buffer classifies anything short-duration as a YouTube Short and will reject a landscape (1280x720) asset with "Video must be vertical (portrait orientation) for YouTube Shorts" even if you didn't ask for Shorts specifically. Confirmed 2026-09-04 posting the Roe Velvet video — the horizontal cut was rejected, the vertical (1080x1920) cut posted fine. **Always send the vertical cut for a YouTube post via Buffer** unless the video is long enough that Buffer treats it as a regular upload instead.

**No Short-vs-regular toggle exists — confirmed 2026-09-05 via full schema check.** `YoutubePostMetadataInput` only has title/categoryId/privacy/license/embeddable/madeForKids/notifySubscribers/isAiGenerated — nothing controls Shorts classification, and Buffer doesn't merely default to Shorts, it hard-rejects a landscape asset rather than posting it as a regular upload. Getting the same video onto the channel's regular Videos tab (not just Shorts) needs a native YouTube Studio upload — Lejohn-manual, no connector for it exists here (checked `ListConnectors` — Google Calendar/Drive only, no YouTube/Google-content connector).

**No YouTube Community-tab posting anywhere — confirmed 2026-09-05.** Searched Buffer's entire GraphQL schema (`__schema.types`) for anything Community-related — nothing exists, for any platform, not just YouTube. No other connected tool reaches it either. Would need a new connector, not a config change.

**Buffer** — organic social publishing and scheduling. `create_post` publishes or queues directly to a connected channel (`shareNow`, `addToQueue`, `customScheduled`). Connected channels right now: **Baron Vieux - The Culinary Crescendo Series** (YouTube) and **baronvieux** (TikTok, book brand). **Third slot is deliberately left open (2026-09-04 decision)** — Koda already covers FB/IG for both brands (see below), so there's no current gap it needs to fill; re-check with Lejohn before assuming it should go to any specific channel. `futur.iq` TikTok is intentionally *not* here — see Koda entry below.

**Meta Ads (Marketing API)** — paid/advertising only: campaigns, ad sets, ad creatives, custom audiences, catalogs, pixels, A/B tests, IG media discovery for boosting. **Does not create organic posts** — its closest equivalents (`ads_create_creative` with `object_story_id`, Partnership Ads) boost or reference an *existing* organic post, they don't publish one. If the ask is "run this as an ad" or "boost this post," this is the tool. If the ask is "just publish it," that's Buffer.

**Base44 (Koda)** — the renamed continuation of the original "Solene" Base44 Agent (that old account is being kept, not migrated — see `references/base44-old-account-full-export-2026-08-24.md`). Koda is a Base44 **Agent** (superagent), not an **App** — Claude's Base44 MCP tools (`list_user_apps`, `query_entities`, etc.) only see Apps and cannot query or message Koda directly. Everything Claude knows about Koda's work comes from what Koda commits to this repo (`automation/COORDINATION.md` for the Kit/formulary code, `outputs/*.md` post packages for content) — never assume Koda's live status without that kind of evidence.

Koda's actual scope, confirmed 2026-09-04:
- **Facebook:** Bayoubeaux1070 page + Baron Vieux page. **Real API access (Meta Graph API), not browser automation** — corrected 2026-09-04, per Lejohn: "Koda doesn't use browser for FB and IG. It does it the same way," i.e. the same category of direct Graph API call Claude uses via Windsor.ai/Meta Ads, just with a token that has publish scope Claude's connectors currently don't.
- **Instagram:** Baron.Vieux + FuturIQ profiles. Same — real API access, not browser.
- **TikTok (`futur.iq`):** Koda's own remote-browser automation, not via Buffer — **this is the one platform where Koda is actually driving a browser**, not FB/IG. Koda can stage everything — caption, hashtags, title, settings — but **cannot attach the media file itself for TikTok specifically** (confirmed 2026-09-04: the browser can drive every other step but not TikTok's upload widget). **Working model: Koda stages the full post, Lejohn does the one manual step of attaching the file and publishing.** Note Koda can also bypass this entirely for URL-based assets by calling Buffer's `createPost` API directly — but that requires the target channel connected in Buffer, trading away a Buffer slot.

**What it would take to post FB/IG without routing through Koda or Lejohn — checked 2026-09-04:** Claude found a real Instagram Graph API write path via the already-connected Windsor.ai connector (`create_video_post`/`create_image_post`/`create_carousel_post`/`create_story` against account `17841442720360055`, "Baron Vieux (baron.vieux)") — but Windsor.ai's write actions are currently **disabled account-wide** for richburg.lejohn@gmail.com (toggle at Settings → API Access → "Enable write actions for Claude, ChatGPT & API": https://onboard.windsor.ai/app/settings/account). Once that's on, Claude can publish to Instagram directly, no Koda hop. **Facebook has no equivalent path yet** — both Windsor.ai's `facebook` connector and the Meta Ads MCP tool only expose ad/boost actions (`boost_post`, `create_ad`, etc.), no organic page-post action; whatever token Koda's FB access uses has a publish scope neither of Claude's connectors currently has. Until a connector with `pages_manage_posts`-equivalent scope is set up for Claude, FB still needs Koda or Lejohn.

**GitHub / git** — the actual canon store. Nothing character art or content-related is real for the rest of the pipeline until it's committed here (see the approval-hub standing rule).

**Google Drive / Gmail / Calendar** — read/write file and communication access, already covered by the daily automation check.

## No direct access — has to run through Lejohn

**Meta AI (the consumer image/video generation product)** — no API connector exists for this from here. Every Meta AI generation in this pipeline is Lejohn (or whoever's driving it) prompting it directly and dropping the result into Drive. This is the one leg of the pipeline that is genuinely manual right now — not a workaround, a real gap. If a connector for it becomes available, it goes in this file's "Live tool access" section.

**TikTok media attachment** — see the Koda entry above. Everything else about a TikTok post can be staged by Koda; attaching the actual video/image file and publishing is Lejohn's step.

**Buffer channel connect/disconnect** — confirmed 2026-09-04 via GraphQL schema introspection: Buffer's public API has no mutation for connecting or removing a channel (`removeChannel` exists only as a `ChannelAction` on the UI side, not in `Mutation`). Any channel-list change needs Lejohn in Buffer's own Settings UI — Claude can verify the resulting state with `list_channels` but can't cause the change.

## The actual rule this file exists to support

When a task needs "post/publish/schedule something," check here first:
1. Straightforward organic post/schedule → **Buffer**, directly.
2. Turning an existing post into a paid ad → **Meta Ads**, directly.
3. Needs a new image/video generated by Meta AI → **Lejohn**, with a specific prompt spec from the request queue (`references/character-generation-request-queue.md`) — not a vague ask.
4. Needs the ScheduledPost log updated or Solene's browser-staged posts touched → **Base44**, directly.
5. Anything else that looks like it needs a human hand on a keyboard for a *specific, named* reason (e.g. Meta AI's chat UI, TikTok's manual-post rule above) → say so explicitly, name the reason, and hand over exactly what's needed — not a generic "you'll have to do this part."

Keep this file updated as connectors change — a tool disconnecting or reconnecting between sessions is common (see the ambient reconnect/disconnect notices), so re-check live availability before assuming a capability listed here still needs a human hop, or vice versa.
