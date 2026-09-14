---
title: 'Momenta OS'
summary: 'An AI agent operating system for a marketing agency, built on a governed Google Drive vault — any supported AI assistant loads client context, brand voice, and content rules before it writes a word.'
description: 'Momenta OS: an agent operating system on a governed Google Drive vault, with 60+ versioned agent skills and Pressable MCP site updates. Case study by Justin Kondratenko.'
tech: ['Agent Harnesses', 'MCP', 'Agent Skills', 'Google Drive', 'WordPress', 'Pressable', 'Governance']
image: '/images/projects/momenta-os.png'
ogImage: '/og/momenta-os.png'
order: 1
---

## Problem & user context

A marketing agency running LinkedIn content for several industrial B2B clients burns hours per post: researching the audience, matching brand voice, drafting, and routing everything through approvals. Worse, every teammate's AI assistant starts from zero. Context lives in scattered docs, and two people asking for "a post for the same client" get two different brands.

Momenta OS fixes the context problem at the source. Instead of prompts living in individual chat histories, one governed Google Drive vault holds client folders, brand voice docs, content rules, approved and rejected examples, feedback logs, and the agent runbooks themselves. Any supported AI assistant can read from the vault before it writes anything, so the vault — not anyone's memory — is what the team's AI actually knows.

## How it works

**The vault is the source of truth.** Client context, brand voice, and content rules are versioned files, not prompt text. Changing a rule changes every agent's behaviour at once.

**Skills are runbooks, not prompts.** 60+ versioned agent skills encode the recurring work as machine-readable procedures: WordPress audits, SEO remediation, analytics coverage checks, site updates. Each one is a directory with a `SKILL.md` describing when it applies and what it does, so any supported AI harness can follow it.

**Site updates go through MCP.** WordPress changes run against the Pressable MCP server rather than a browser session, which means an agent can make a scoped, reviewable change to a live site instead of a human clicking through an admin panel. This replaced a MainWP-based workflow that had been the earlier approach.

**Content moves through a governed pipeline.** Draft → score against the brand rules → revise → approve, reject, or mark published, with a structured feedback log behind it. One offhand comment doesn't silently rewrite a brand rule; repeatable feedback becomes a *proposed* update that goes through an explicit approval step. Institutional memory changes deliberately.

## Constraints & tradeoffs

- **Governance over speed.** The scoring and feedback-approval loop costs a round trip. It buys brand consistency a client can trust, and an audit trail for why a rule exists.
- **Portable skills over a bespoke app.** Writing the skills as plain, versioned files rather than building custom software means they survive a change of model or harness. They already run across three.
- **Least privilege by design.** Alongside the OS I wrote the company access governance standard — five trust tiers plus a non-human class, and a per-service permission matrix — because an agent with vault access is an access-control question before it's a productivity one.

## Architecture

```text
 AI harnesses                         Governed Google Drive vault
 ├── ChatGPT web            ┌────────► ├── client folders (context, onboarding)
 ├── Claude                 ──────────┤          ├── brand voice docs + content rules
 └── Any supported assistant │          ├── approved / rejected examples
                            │          ├── feedback logs ─► proposed rule updates
                            │          └── skills/ (60+ versioned runbooks)
                            │
                            ▼
                    Pressable MCP server ──► client WordPress sites
                            │
                            ▼
        Draft → score → revise → approve / reject / published
```

## Results & lessons

- Per-post content turnaround dropped from 45 minutes to under 10 across an 8-person team.
- A GA4 and GTM coverage audit across 54 client WordPress sites turned raw scan output into a triaged rollout plan covering 25 untagged properties and 2 legacy tracking migrations.
- Lesson: the vault structure matters more than the prompt. A well-organised source of truth makes even plain instructions reliable, and a badly organised one makes clever prompts fragile.
- Lesson: retiring the MainWP workflow for MCP was the moment the system stopped being a writing assistant and started being able to *do* things — which is exactly when the access governance work became non-optional.
