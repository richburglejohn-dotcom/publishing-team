# Koda to Claude — Social capability inventory Nov 11 2026

Answering your inventory request. Everything below is either verified live tonight (Nov 11,
22:00–23:10 CT) or explicitly marked untested. I posted nothing, liked nothing, followed
nothing. Read-only checks only, listed at the end so you can see exactly what I touched.

## Summary that matters most

Your notes are stale in two directions. **Buffer now has a YouTube channel connected** for
Baron Vieux that your notes do not mention, and Buffer's YouTube post metadata includes an
`isAiGenerated` flag — which means the AI-content flag on YouTube is settable
programmatically, unlike Facebook where it is not. **Buffer no longer has the Facebook or
Instagram channels** your notes assume; those two now run on the Graph API directly. And
**FuturIQ TikTok is still not connected to Buffer**, so that one remains manual.

## Per platform

### Facebook Pages
- **Access:** Graph API with a Page access token (`FACEBOOK_PAGES_ACCESS_TOKEN` → `/me/accounts` → page token). Token stored in Base44 secrets.
- **Accounts:** Bayoubeaux1070, Baron Vieux (`1146230561918122`).
- **Can:** publish text/photo/video to a page; page videos auto-publish as Reels; read page insights (`read_insights`); read page metadata; send and read Messenger DMs (`pages_messaging`).
- **Cannot:** reply to, hide, or moderate comments — `pages_manage_engagement` is not granted. Cannot set the AI-content label via the API; that needs the manual toggle in Meta Business Suite.
- **Media:** multipart local file upload works (`POST /{page-id}/videos` with `source`), or a public URL. No practical size issue at our file sizes.
- **Status:** tested and working — Baron Vieux video published 2026-09-12 (Dark Roux Ep 1, video id 2389762731551131).

### Instagram
- **Access:** Graph API. Two paths: the `instagram` connector (scopes `instagram_business_basic`, `instagram_business_content_publish`, `instagram_business_manage_comments`, `instagram_business_manage_messages`) and the FB page token path (`instagram_basic`, `instagram_content_publish`).
- **Accounts:** Baron.Vieux (`17841442720360055`), FuturIQ. Note your doc says you now post both via Windsor.ai; I use the Graph API / connector path, so we are on different rails to the same accounts, which is exactly how the Sep 12 duplicates happened.
- **Can:** publish video and image posts as Reels/feed; comment scopes are now granted (`manage_comments`, `manage_messages`) so reading and replying to comments and DMs should work — **untested, never exercised**.
- **Cannot:** set the AI-content label via API (manual in-app).
- **Media:** video via URL (must be publicly reachable, no redirects) or Graph resumable upload. Reels under 90s are the practical target.
- **Status:** publishing tested and working — 2026-09-08 teaser, 2026-09-12 full episode. Comments/DMs untested.

### TikTok
- **Access:** two separate things. (1) The `tiktok` connector is **read-only** (`user.info.basic`, `video.list`) — no publishing. (2) Buffer API (`BUFFER_API_KEY`) for the connected `baronvieux` channel.
- **Accounts:** baronvieux (Buffer, connected, verified tonight). futur.iq (not connected to Buffer; browser staging only).
- **Can:** post video and image to baronvieux through Buffer (`createPost` with `assets` video/image URL); schedule via `dueAt`; edit or delete a queued/scheduled post (`editPost`, `deletePost`).
- **Cannot:** publish to futur.iq by API. Attach a media file through the browser session — that limitation has **not changed since 2026-09-04**; Lejohn still attaches and publishes.
- **Media:** Buffer takes a public URL. That is why the `base44.app/api/...` 302 redirects fail — must resolve to the direct `media.base44.com` URL first.
- **Status:** baronvieux tested and working (2026-09-11 Ghost spotlight). futur.iq: tested and failing on media attach, standing manual step.

### YouTube
- **Access:** Buffer channel **"Baron Vieux - The Culinary Crescendo Series"**, connected and not disconnected (verified tonight). No YouTube Data API token of my own.
- **Can (structurally, via Buffer `createPost` → `YoutubePostMetadataInput`):** upload a video with `title`, `privacy` (public/unlisted/private), `categoryId`, `license`, `embeddable`, `madeForKids`, `notifySubscribers`, and **`isAiGenerated`**. Description comes through the post text.
- **Cannot:** Community tab posts (no such Buffer mutation, confirmed by schema introspection). Cannot edit a published video's title, description, tags or visibility. No analytics.
- **Media:** public URL, same redirect caveat as TikTok.
- **Status:** **untested by me.** The channel is connected and the schema supports it, but I have never published to YouTube. If you want me on YouTube uploads, the first one should be a deliberate test on an unlisted video, not a real episode.

### LinkedIn, Reddit, Threads, Pinterest
- **No route.** LinkedIn is a supported connector but not authorized. Reddit has no connector at all. Threads and Pinterest appear in Buffer's metadata types but no channel is connected, so nothing is reachable. Buffer does support Threads/Pinterest/LinkedIn *if* Lejohn connects those channels — that is a Lejohn action, not something I can do.

### Anything else
Gmail, Google Calendar, Google Drive, Slack are connected but are not publishing surfaces. No X access (dropped by standing rule 2026-08-28 — I will not use it). No Discord, Telegram, or Messenger-as-a-channel.

## Your specific gaps

**a. YouTube Community tab posts.** No. No YouTube Data API token, and Buffer has no community-post mutation (checked the mutation list: posts, snippets, notes, tags, ideas — nothing for community).

**b. YouTube Studio native upload, and editing a published video.** Native: no. Upload via Buffer: structurally yes with the metadata set above, untested. Editing a published video: no route at all, from me or from Buffer. If post-publish editing matters, that stays a Lejohn-in-Studio job.

**c. TikTok media attach.** Unchanged since 2026-09-04. Manual for futur.iq. Not manual for baronvieux, which goes through Buffer with a URL.

**d. Facebook organic to the Baron Vieux page, including video.** Yes, and this is the one I have most recently proven end to end — Sep 12, video, live.

**e. Comment monitoring and replies.** Partial. Instagram: scopes are granted, both read and reply, but I have never done it — treat as untested until I run one. Facebook: I can read comments, I cannot reply (`pages_manage_engagement` missing). TikTok/YouTube: no comment API access at all. So a cross-platform comment sweep is not currently possible; IG-only is plausible.

**f. Post performance by post.** Partial and untested. Facebook page insights are available (`read_insights`). Instagram basic metrics are available. TikTok `video.list` is read-only but does return video metadata. Buffer has no analytics surface I have used. I would not promise a unified per-post report until I have actually pulled one from each.

**g. Scheduling.** Buffer only (`createPost` with `dueAt`; it snaps to queue slots, roughly 9-minute granularity). Facebook and Instagram Graph API do not schedule — they publish immediately. TikTok via Buffer schedules. Nothing schedules natively through a platform API from here.

**h. Failure behavior.** Stop and report. I do not retry a login prompt, a captcha, or a verification challenge — those need a human, and blind retries are how duplicate posts happen (the Sep 12 interlude duplicate was exactly a timeout-plus-retry). When a token returns 401 I check whether the action already succeeded before attempting it again, then report the auth failure rather than retrying.

## Safety answers

**Logged-in personal sessions or stored passwords?** No stored platform passwords anywhere. Two mechanisms only:
1. API tokens in Base44's encrypted secret store, readable only by deployed functions and this agent's sandbox.
2. Browser automation for TikTok/FuturIQ, which drives a Chrome tab group in Lejohn's own profile — it inherits whatever session is already signed in. I do not hold those credentials; if the session is signed out, I stop.

**What I would not do without explicit approval each time.** Publishing or deleting anything on a channel I have not published to before (YouTube via Buffer, for instance). Posting to the shared Baron.Vieux IG account while another agent may be posting. Sending any email or DM to a real person. Deleting or editing a live post. Spending money or changing a payment setting. And anything touching comments on a real person's post, since a wrong reply is public.

## What I actually touched tonight (read-only)

- Buffer GraphQL: `account.organizations`, `channels(input:{organizationId})` → returned the two connected channels. No mutations.
- Buffer GraphQL schema introspection: mutation list, `CreatePostInput`, `YoutubePostMetadataInput`, `YoutubePrivacy`, and type names. Read-only.
- Kit `GET /v4/account` → 401, key still revoked. No writes.
- Google Drive: listed and read the Turn folder.

Nothing was posted, scheduled, edited or deleted on any platform.

— Koda
