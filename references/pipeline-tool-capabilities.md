# Pipeline Tool Capabilities — Who Actually Does What
### Created: 2026-09-03

This is the routing table for the "Claude as pipeline core" model (see the standing rule in `references/drive-folder-reference.md`). The point: when something can't be done directly one way, check this list for who *can* before defaulting to "here's a script to copy and paste." Copy-paste-for-Lejohn is the last resort, not the default.

## Live tool access (as of 2026-09-04) — direct, no human hop needed

**Buffer** — organic social publishing and scheduling. `create_post` publishes or queues directly to a connected channel (`shareNow`, `addToQueue`, `customScheduled`). Connected channels right now: **Baron Vieux - The Culinary Crescendo Series** (YouTube) and **baronvieux** (TikTok, book brand). **Third slot is deliberately left open (2026-09-04 decision)** — Koda already covers FB/IG for both brands (see below), so there's no current gap it needs to fill; re-check with Lejohn before assuming it should go to any specific channel. `futur.iq` TikTok is intentionally *not* here — see Koda entry below.

**Meta Ads (Marketing API)** — paid/advertising only: campaigns, ad sets, ad creatives, custom audiences, catalogs, pixels, A/B tests, IG media discovery for boosting. **Does not create organic posts** — its closest equivalents (`ads_create_creative` with `object_story_id`, Partnership Ads) boost or reference an *existing* organic post, they don't publish one. If the ask is "run this as an ad" or "boost this post," this is the tool. If the ask is "just publish it," that's Buffer.

**Base44 (Koda)** — the renamed continuation of the original "Solene" Base44 Agent (that old account is being kept, not migrated — see `references/base44-old-account-full-export-2026-08-24.md`). Koda is a Base44 **Agent** (superagent), not an **App** — Claude's Base44 MCP tools (`list_user_apps`, `query_entities`, etc.) only see Apps and cannot query or message Koda directly. Everything Claude knows about Koda's work comes from what Koda commits to this repo (`automation/COORDINATION.md` for the Kit/formulary code, `outputs/*.md` post packages for content) — never assume Koda's live status without that kind of evidence.

Koda's actual scope, confirmed 2026-09-04:
- **Facebook:** Bayoubeaux1070 page + Baron Vieux page.
- **Instagram:** Baron.Vieux + FuturIQ profiles.
- **TikTok (`futur.iq`):** Koda's own remote-browser automation, not via Buffer. Koda can stage everything — caption, hashtags, title, settings — but **cannot attach the media file itself for TikTok specifically** (confirmed 2026-09-04: the browser can drive every other step but not TikTok's upload widget, most likely because TikTok's uploader needs either a local file for a native OS file-picker or file-injection access the remote browser doesn't have). This appears to be a TikTok-only limitation — Koda's FB/IG posting hasn't reported the same issue, consistent with FB/IG already working well. **Working model: Koda stages the full post, Lejohn does the one manual step of attaching the file and publishing** — same as the long-standing manual-TikTok rule, just with everything else pre-built. Note Koda *can* bypass this entirely for URL-based assets by calling Buffer's `createPost` API directly instead of its own browser (it proposed exactly this for a `futur.iq` image post on 2026-09-04) — but that path requires the target channel to be connected in Buffer, which trades away a Buffer slot. Check with Lejohn before assuming which method Koda is using for a given post.

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
