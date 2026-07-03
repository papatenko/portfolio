---
title: 'Momenta OS'
summary: "An AI OS harness that syncs across the whole team's ChatGPT instances — one shared vault of client context, brand voice, and institutional memory."
tech: ['ChatGPT Agents', 'Knowledge Vault', 'Prompt Systems', 'Workflow Design', 'Feedback Loops']
image: '/images/projects/momenta-os.png'
order: 1
---

## Problem & user context

Marketing teams managing LinkedIn for multiple clients burn hours per post: researching each client's audience, matching their brand voice, drafting copy, and routing everything through approvals. Worse, every teammate's AI assistant starts from zero — context lives in scattered docs, and two people asking ChatGPT for "a post for the same client" get two different brands.

Momenta OS fixes the *sync* problem. It's an AI OS harness distributed to the whole Momenta Fire team through a shared ChatGPT project/agent config, all pointing at one knowledge vault: client folders, brand voice docs, content rules, approved and rejected examples, feedback logs, and automation docs. The vault is the single source of truth; every teammate's assistant behaves like the same assistant.

## How it works

Every request follows the same workflow, enforced by the harness:

1. **Load the right context.** The assistant pulls from the vault structure — the client's folder, brand voice doc, content rules, approved/rejected examples, and feedback history — before writing a word.
2. **Follow the right workflow.** For LinkedIn content: identify the client, load context, review examples and feedback, draft the post, score it against the brand rules, revise, then hand back a decision point — revise, approve, reject, or mark as published.
3. **Respect the feedback system.** One offhand comment doesn't silently rewrite brand rules. Repeatable feedback gets turned into a *proposed* update that goes through an explicit update process — institutional memory changes deliberately, not accidentally.
4. **Create usable outputs.** Posts, visual briefs, captions, client onboarding docs, content calendars, feedback logs, and vault organization — each filed where it belongs.

Day-to-day usage is command-like: *"create post for ChangeOvr about filter maintenance"*, *"score this post"*, *"log this as approved feedback"*, *"help onboard a new client"*.

## Constraints & tradeoffs

- **Harness over app.** Instead of building custom software, the OS lives inside the tool the team already uses (ChatGPT) via project/agent config — zero onboarding friction, instant sync when the config or vault updates.
- **Vault as source of truth.** All client knowledge is externalized into the vault rather than living in any one person's chat history — the team can grow without losing memory.
- **Governed change.** The scoring and feedback-approval loop trades a little speed for brand consistency clients can trust.

## Architecture

```text
Team member A ─┐
Team member B ─┼─► ChatGPT (shared project / agent config = Momenta OS harness)
Team member C ─┘            │
                            ▼
                  Momenta OS knowledge vault
                  ├── client folders (context, onboarding)
                  ├── brand voice docs + content rules
                  ├── approved / rejected examples
                  ├── feedback logs ──► proposed rule updates (governed)
                  └── automation & workflow docs
                            │
                            ▼
        Drafts → score → revise → approve / reject / published
```

## Results & lessons

<!-- TODO: add real metrics (posts/week, clients onboarded, revision rounds saved) -->

- The whole team's AI now speaks each client's brand voice consistently — no per-person prompt drift.
- Feedback compounds: every approval/rejection makes the next draft better for everyone, not just the person who received the note.
- Lesson: the vault structure matters more than the prompts — a well-organized source of truth makes even simple instructions reliable.
