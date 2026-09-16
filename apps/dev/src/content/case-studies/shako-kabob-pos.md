---
title: 'Shako Kabob: Foodtruck POS'
summary: 'Full-stack point-of-sale and online ordering platform for a food truck, from database schema to automated deploys.'
description: 'A full-stack food-truck point-of-sale and online ordering platform using React, Node, MySQL, and Docker on Coolify, from database schema to automated deploys. Case study by Justin Kondratenko.'
ogImage: '/og/shako-kabob-pos.png'
tech: ['React', 'Vite', 'Node.js', 'MySQL', 'Docker', 'GitHub Actions', 'Turborepo', 'Coolify']
repoUrl: 'https://github.com/papatenko/point-of-sale-system'
demoUrl: 'https://pos.papatenko.org/'
image: '/images/projects/shako-kabob.png'
order: 2
---

## Problem & user context

A food truck runs on thin margins and fast lines. Shako Kabob needed one system for customer-facing online ordering, employee management, inventory tracking, and sales reporting without per-transaction SaaS fees.

## Constraints & tradeoffs

- Team of 4, real client. I directed the team and split the Turborepo monorepo so frontend, API, and database work could ship in parallel.
- Relational from day one. Orders, inventory, employees, and sales live across 18+ MySQL tables with foreign-key constraints. The schema keeps reporting queries simple.
- Self-hosted deploys. GitHub Actions builds Docker images for Coolify with a containerized MySQL instance. Docker layer caching cut build times by 50%.

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
- Lesson: schema design is product design for a POS. Every hour spent on the ERD saved three downstream.
