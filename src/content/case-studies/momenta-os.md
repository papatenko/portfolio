---
title: 'Momenta OS'
summary: 'A Slack-first AI assistant that streamlines LinkedIn content creation across multiple clients.'
tech: ['AI Agents', 'Slack API', 'JSON Schema', 'MCP', 'Google Drive API', 'Canva API']
image: '/images/projects/momenta-os.svg'
order: 1
---

## Problem & user context

Marketing teams managing LinkedIn for multiple clients burn hours per post: researching each client's audience, matching their brand voice, drafting copy, sourcing imagery, and routing everything through approvals. Context lives in scattered docs, and every new writer starts from zero.

Momenta OS puts the whole workflow inside Slack — where the team already works — backed by per-client knowledge that improves with every post.

## Constraints & tradeoffs

- **Slack-first, not app-first.** Meeting users in their existing tool meant designing around Slack's interaction model (threads, slash commands, block kit) instead of a custom UI.
- **Per-client isolation.** Each client's brand voice, content pillars, and posting history must stay separate while sharing one pipeline. Client knowledge is stored per-workspace and injected at generation time.
- **Structured over freeform.** Generation steps use JSON object mode with strict JSON schemas so downstream automation (image generation, scheduling, Drive filing) never receives malformed output.
- **Plan-then-execute.** Workflows propose a plan for human review before executing — a deliberate tradeoff of speed for client trust.

## Architecture

<!-- TODO: replace with a real diagram (e.g. export from Excalidraw/FigJam to /public/images/case-studies/) -->

```text
Slack (slash commands, threads)
   │
   ▼
Orchestrator (agent + JSON-schema workflows)
   ├── Research pipeline ──► LinkedIn analysis → brand-voice profile
   ├── Content generation ─► text / image / video drafts
   ├── MCP integrations ───► Google Drive (assets), Canva (branded posters)
   └── Client knowledge ───► per-client store, updated after each post
```

## Highlights

- LinkedIn research pipeline that reverse-engineers a client's brand voice: audience, content pillars, cadence, tone, CTA patterns, hashtag strategy, and top/underperforming post analysis.
- Branded asset generation through Canva endpoints, filed automatically to client folders in Google Drive.
- Automation steps validated against JSON schemas end-to-end.

## Results & lessons

<!-- TODO: add real metrics (posts/week, hours saved, clients onboarded) -->

- Cut multi-client content production from hours to minutes per post.
- Structured outputs (JSON schemas) eliminated an entire class of pipeline failures.
- Lesson: research quality drives content quality — investing in the analysis pipeline paid off more than tweaking generation prompts.
