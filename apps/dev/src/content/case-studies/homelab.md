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

Cloud storage, photo backup, and web hosting subscriptions add up while putting your data in someone else's system. The goal was to replace them with self-hosted services reliable enough for daily family use and to run them with production habits.

Keeping five hosts, twenty-odd services, and a public TLS surface running without a monthly Sunday-afternoon rebuild is the harder part.

## How it works

**Everything is a git-backed container stack.** All 20+ stacks are defined in a repository, which is the only deployment path. The estate can rebuild from a clean host without manual compose steps.

**One identity, one front door.** Centralized SSO sits in front of the services that need it, an NGINX reverse proxy terminates TLS for the public ones, and network-wide DNS filtering handles the rest of the traffic. Remote access runs over a Tailscale mesh rather than an exposed port.

**Backups are scheduled and tested.** restic uses daily, weekly, and monthly retention for host configs, service stacks, and Docker volumes. Completion hooks page on a missed run. A silent backup failure can look fine until the restore is needed.

## Constraints & tradeoffs

- Reliability over novelty. Family photos live here. Every service needs a tested restore path, not only an install.
- Isolation over density. Proxmox VMs and LXC containers keep workloads apart so one misbehaving service cannot take the rest down. It costs some efficiency and makes maintenance calmer.
- Documentation over memory. Runbooks and workflow docs keep maintenance from depending on what I remember doing eight months ago.

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
- Lesson: backups I have not restored from are only plans. Testing restore behaviour before an emergency made the difference.
- Lesson: moving every stack into git made the estate boring. That is the goal.
