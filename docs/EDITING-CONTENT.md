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

## 7. Retheme

All colors, fonts, speeds, and radii are CSS variables at the top of `src/styles/global.css`. Change `--accent-strong` and the whole site follows.

## Remaining placeholders (search for `TODO:`)

- Exact job titles/dates in `src/data/experience.ts` and `site.ts` (LinkedIn couldn't be read automatically)
- Real metrics in `src/content/case-studies/momenta-os.md`
- Real screenshots to replace the generated SVG placeholders in `public/images/projects/`
- `public/resume.pdf`
- Architecture diagrams in case studies (export from Excalidraw → `public/images/case-studies/`)
