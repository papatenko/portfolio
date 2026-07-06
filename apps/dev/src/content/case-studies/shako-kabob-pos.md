---
title: 'Shako Kabob — Foodtruck POS'
summary: 'Full-stack point-of-sale and online ordering platform for a food truck, from database schema to automated deploys.'
tech: ['React', 'Vite', 'Node.js', 'MySQL', 'Docker', 'GitHub Actions', 'Turborepo', 'Coolify']
repoUrl: 'https://github.com/papatenko/point-of-sale-system'
demoUrl: 'https://pos.papatenko.org/'
image: '/images/projects/shako-kabob.png'
order: 2
---

## Problem & user context

A food truck runs on thin margins and fast lines. Shako Kabob needed one system covering the whole operation — customer-facing online ordering plus back-of-house employee management, inventory tracking, and sales reporting — without paying per-transaction SaaS fees.

## Constraints & tradeoffs

- **Team of 4, real client.** I directed the team: splitting the monorepo (Turborepo) so frontend, API, and database work could ship in parallel without stepping on each other.
- **Relational from day one.** Orders, inventory, employees, and sales live across 18+ MySQL tables with real foreign-key discipline — reporting queries stay simple because the schema does the work.
- **Self-hosted deploys.** GitHub Actions builds Docker images deployed on Coolify with a containerized MySQL instance — no managed-cloud lock-in, and Docker layer caching cut build times by 50%.

## Architecture

```text
Customers ──► React + Vite storefront (online ordering)
Staff ──────► POS dashboard (employees, inventory, sales)
                 │  REST APIs
                 ▼
             Node.js API ──► MySQL (18+ tables)
                 ▲
   GitHub Actions ──► Docker images ──► Coolify (self-hosted)
```

## Results & lessons

- Production deployment serving a real business, led end to end by a team of 4.
- 50% faster CI builds from Docker layer caching + Turborepo task caching.
- Lesson: schema design *is* product design for a POS — every hour spent on the ERD saved three downstream.
