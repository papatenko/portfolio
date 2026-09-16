---
title: 'Momenta OS'
summary: 'An AI agent operating system for a marketing agency, built on a governed Google Drive vault. Supported AI assistants load client context, brand voice, and content rules before writing.'
description: 'Momenta OS: an agent operating system on a governed Google Drive vault, with 60+ versioned agent skills and Pressable MCP site updates. Case study by Justin Kondratenko.'
tech: ['Agent Harnesses', 'MCP', 'Agent Skills', 'Google Drive', 'WordPress', 'Pressable', 'Governance']
image: '/images/projects/momenta-os.png'
ogImage: '/og/momenta-os.png'
order: 1
---

## Problem & user context

A marketing agency running LinkedIn content for several industrial B2B clients spends hours on each post: researching the audience, matching brand voice, drafting, and routing everything through approvals. Each teammate's AI assistant starts from zero. Context lives in scattered docs, so two people asking for "a post for the same client" can get two different brands.

Momenta OS puts that context in one governed Google Drive vault. The vault holds client folders, brand voice docs, content rules, approved and rejected examples, feedback logs, and agent runbooks. Supported AI assistants read from it before writing, so the team works from the same source.

## How it works

**The vault is the source of truth.** Client context, brand voice, and content rules are versioned files. Changing a rule changes every agent's behaviour at once.

**Skills are runbooks, not prompts.** 60+ versioned agent skills encode the recurring work as machine-readable procedures: WordPress audits, SEO remediation, analytics coverage checks, site updates. Each one is a directory with a `SKILL.md` describing when it applies and what it does, so any supported AI harness can follow it.

**Site updates go through MCP.** WordPress changes run against the Pressable MCP server. An agent can make a scoped, reviewable change to a live site through the same interface used for other operations. The workflow now uses MCP instead of MainWP.

**Content moves through a governed pipeline.** Draft, score against the brand rules, revise, then approve, reject, or mark published. A structured feedback log records the process. One offhand comment does not rewrite a brand rule. Repeatable feedback becomes a *proposed* update that goes through an explicit approval step.

## Constraints & tradeoffs

- Governance over speed. The scoring and feedback approval loop costs a round trip. It preserves brand consistency and records why each rule exists.
- Portable skills over a bespoke app. Plain, versioned files survive a change of model or harness. They already run across three.
- Least privilege by design. Alongside the OS I wrote the company access governance standard with five trust tiers, a non-human class, and a per-service permission matrix. An agent with vault access needs access controls before it needs more automation.

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
- Lesson: the vault structure matters more than the prompt. A well-organised source of truth makes plain instructions reliable; a badly organised one makes clever prompts fragile.
- Lesson: moving site updates from MainWP to MCP gave the system an action path. That made access governance necessary.
