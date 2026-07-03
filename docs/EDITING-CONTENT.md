# How to update your portfolio content

No database, no CMS, no rebuild tooling to learn. Every piece of content is a plain file. Edit → commit → redeploy (or `docker compose up -d --build`).

## 1. Add or edit a project

Open `src/data/projects.ts` and add an object to the `projects` array:

```ts
{
  title: 'My New Thing',
  slug: 'my-new-thing',        // '' if no case study
  description: 'What it is, in one or two sentences.',
  outcome: 'One-line business/user result.',
  image: '/images/projects/my-new-thing.png',
  tech: ['TypeScript', 'Docker'],
  repo: 'papatenko/my-new-thing',   // enables live star count
  repoUrl: 'https://github.com/papatenko/my-new-thing',
  demoUrl: 'https://thing.papatenko.org',
  stars: 0,                          // fallback if API unreachable
},
```

Then drop a screenshot at `public/images/projects/my-new-thing.png` (1200×675 / 16:9 looks best). The grid, hover effects, and links render automatically.

## 2. Add a case study

Create `src/content/case-studies/my-new-thing.md` (filename = URL slug, must match the project's `slug`):

```md
---
title: 'My New Thing'
summary: 'One-sentence summary shown under the title.'
tech: ['TypeScript', 'Docker']
repoUrl: 'https://github.com/papatenko/my-new-thing'
demoUrl: 'https://thing.papatenko.org'
image: '/images/projects/my-new-thing.png'
order: 5
---

## Problem & user context
...

## Constraints & tradeoffs
...

## Architecture
...

## Results & lessons
...
```

The page appears at `/case-studies/my-new-thing/`. Frontmatter is schema-validated — a missing field fails the build with a clear message.

## 3. Update roles / typing animation / socials / email

`src/data/site.ts` — everything site-wide lives here: the roles the hero cycles through, intro paragraph, current company, fun fact, stats, social URLs, contact-form keys, response-time copy.

## 4. Update skills

`src/data/skills.ts`. Icons are [simple-icons](https://simpleicons.org) slugs (search the site for the slug). No icon? Omit `icon` and a terminal-style `>_` chip renders.

## 5. Update the experience timeline

`src/data/experience.ts` — newest job first. Dates are plain strings ("2025", "Jan 2025"), `end: 'Present'` for the current role.

## 6. Replace the resume

Overwrite `public/resume.pdf`. Both "Download Resume" buttons point there.

## 7. Retheme / themes

All colors are CSS variables at the top of `src/styles/global.css` — `:root` holds the light (banner white/gold/pink) palette, `html[data-theme='dark']` holds the warm-gray dark variant. Change `--accent` in both blocks and the whole site follows. The nav toggle persists the user's choice in localStorage; first visit follows their OS setting.

## Remaining placeholders (search for `TODO:`)

- Momenta company name / exact title in `src/data/site.ts` and `experience.ts`
- Real metrics in `src/content/case-studies/momenta-os.md`
- Real screenshots: overwrite the placeholder PNGs in `public/images/projects/`
  (`rps-tournament.png`, `homelab.png`, `shako-kabob.png`, `portfolio-platform.png`,
  `momenta-os.png`, `schematic-spelunker.png`) — 1200×675 / 16:9 looks best
- Architecture diagrams in case studies (export from Excalidraw → `public/images/case-studies/`)
