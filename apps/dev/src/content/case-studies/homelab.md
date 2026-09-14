---
title: 'Proxmox Homelab'
summary: 'A 5-host Proxmox and Docker estate running 20+ container stacks under GitOps, with centralized SSO, DNS filtering, a Tailscale mesh, and backups I have actually restored from.'
description: 'A 5-host Proxmox and Docker estate: 20+ container stacks under GitOps, centralized SSO, network-wide DNS filtering, a Tailscale mesh, and tested restic backups. Case study by Justin Kondratenko.'
tech: ['Proxmox', 'Docker', 'GitOps', 'Tailscale', 'Nginx', 'restic', 'Linux', 'Networking']
repoUrl: 'https://github.com/papatenko/homelab'
image: '/images/projects/homelab.png'
ogImage: '/og/homelab.png'
order: 3
---

## Problem & user context

Cloud storage, photo backup, and web hosting subscriptions add up — and hand your data to someone else. The goal was to replace them with self-hosted services reliable enough for daily family use, and to run the whole thing with the discipline of a production environment rather than the habits of a hobby box.

That second half is the actual project. Anyone can install Nextcloud. Keeping five hosts, twenty-odd services, and a public TLS surface running without a Sunday-afternoon rebuild every month is a different problem.

## How it works

**Everything is a git-backed container stack.** All 20+ stacks are defined in a repository, so the repository is the only deployment path. There is no stack that exists because someone once ran `docker compose up` over SSH, and the estate rebuilds from a clean host with no manual compose steps.

**One identity, one front door.** Centralized SSO sits in front of the services that need it, an NGINX reverse proxy terminates TLS for the public ones, and network-wide DNS filtering handles the rest of the traffic. Remote access runs over a Tailscale mesh rather than an exposed port.

**Backups are scheduled and tested.** restic runs on a schedule with tiered daily, weekly, and monthly retention across host configs, service stacks, and Docker volumes. Completion hooks page on a missed run, because a backup job that silently stops is worse than no backup job — it looks fine right up until you need it.

## Constraints & tradeoffs

- **Reliability over novelty.** Family photos live here. Every service needs a tested restore path, not just an install.
- **Isolation over density.** Proxmox VMs and LXC containers keep workloads apart so one misbehaving service can't take the rest down with it. It costs some efficiency and buys a lot of sleep.
- **Documented, not tribal.** Runbooks and workflow docs, so maintenance doesn't depend on remembering what I did eight months ago.

## Architecture

```text
Internet ──► Router / firewall ──► NGINX reverse proxy (TLS)
                                          │
                              ┌───────────┴───────────┐
                              │  5-host Proxmox +     │
                              │  Docker estate        │
                              │  20+ stacks, GitOps   │
                              └───────────┬───────────┘
                                          │
       centralized SSO ──┬── network-wide DNS filtering ──┬── Tailscale mesh
                         │                                │  (zero-trust remote)
                         ▼                                ▼
              service stacks (files, photos, web, agent infra)
                         │
                         ▼
        restic ──► tiered daily / weekly / monthly retention
                   + completion hooks that page on a missed run
```

## Results & lessons

- Sustained 99%+ uptime across 8+ publicly reachable services.
- Replaced several paid cloud subscriptions with self-hosted equivalents.
- Survived real restore scenarios, which is the only evidence a backup strategy ever really produces.
- Lesson: backups you haven't restored from are hopes, not backups. Troubleshooting restore behaviour before an emergency is what made the difference.
- Lesson: moving every stack into git was the single change that made the estate boring, and boring is the goal.
