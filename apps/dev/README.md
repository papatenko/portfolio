# Justin Kondratenko — Developer Portfolio

Grainy white/gold/pink-red portfolio (matching the LinkedIn banner) built with **Astro** — static output, zero database. Light theme by default with a warm-gray dark mode (toggle in the nav, follows OS preference, persists in localStorage). Content lives in plain TypeScript/Markdown files; GitHub star counts are pulled automatically at build time.

**Git branches**: `main` is this design; `v1-purple` preserves the original purple dark-only version.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site → dist/
npm run preview   # preview the build
```

## Editing content (the only files you touch day-to-day)

| What | File |
|---|---|
| Name, roles (typing effect), intro, email, socials, availability | `src/data/site.ts` |
| Featured projects + open-source list | `src/data/projects.ts` |
| Skills icon grid | `src/data/skills.ts` |
| Experience timeline | `src/data/experience.ts` |
| Case-study pages | `src/content/case-studies/*.md` |
| Project screenshots | `public/images/projects/` — overwrite the placeholder PNGs with real screenshots (16:9) |
| Resume | `public/resume.pdf` (already in place) |
| Theme colors (light + dark) | CSS variables at the top of `src/styles/global.css` |

Full instructions with examples: **[docs/EDITING-CONTENT.md](docs/EDITING-CONTENT.md)**.

Search the codebase for `TODO:` — those mark placeholders (exact job titles/dates, metrics) that need your real data.

### What updates automatically

- **GitHub star counts** — fetched from the GitHub API at every build (`src/lib/github.ts`), with static fallbacks. Rebuild = refresh.
- **GitHub contribution graph** — live `<img>` from ghchart.rshah.org, always current.
- **Sitemap-ready SEO** — canonical URLs, Open Graph, JSON-LD Person schema generated from `site.ts`.

Everything else (LinkedIn data, project write-ups) has no reliable public API, so it's deliberately file-based.

## Contact form (5-minute setup)

1. Create a free key at [web3forms.com](https://web3forms.com) (submissions go to your email; no backend).
2. In `src/data/site.ts` set:
   ```ts
   contactFormEndpoint: 'https://api.web3forms.com/submit',
   contactFormAccessKey: 'YOUR-KEY',
   ```
Until then the form falls back to a `mailto:` submit.

## Deploying

### Homelab (Docker / Proxmox)

```bash
docker compose up -d --build   # serves on :8085
```

Point your existing reverse proxy (Nginx/Caddy/Traefik) at the container for TLS. To redeploy after editing content: `docker compose up -d --build` again.

### Netlify / Vercel

Push to GitHub → import the repo. Both auto-detect Astro (`netlify.toml` included; Vercel needs no config). Every push rebuilds — which also refreshes GitHub star counts.

Tip: add a scheduled rebuild (Netlify build hook + cron, or GitHub Action on a schedule) if you want star counts fresh without pushing.

## Architecture

```text
src/
├── data/            ← ALL editable content (site, projects, skills, experience)
├── content/
│   └── case-studies/ ← markdown case studies → /case-studies/<slug>
├── components/      ← Nav, Hero, About, Skills, Projects, ProjectCard,
│                       OpenSource, ExperienceTimeline, Contact, Footer, SocialLinks
├── layouts/Base.astro ← <head>, SEO, fonts, scroll-reveal script
├── lib/github.ts    ← build-time star fetch (never fails the build)
├── pages/
│   ├── index.astro
│   ├── 404.astro
│   └── case-studies/[slug].astro
└── styles/global.css ← design tokens — retheme the site from :root vars
```

Implementation notes:

- **Zero client-side framework.** Typing effect, hamburger menu, scroll reveal, and form submit are ~60 lines of vanilla JS total. Lighthouse-friendly.
- **Accessibility**: semantic sections + landmarks, skip link, `:focus-visible` styles, `aria-expanded` hamburger, `prefers-reduced-motion` honored everywhere.
- **Images**: plain `<img>` with width/height + lazy loading. If you add heavy PNG screenshots, switch to Astro's `<Image />` component (`astro:assets`) for automatic optimization.
- **Case-study routing**: files in `src/content/case-studies/` are validated against a schema (`src/content.config.ts`) — typos fail the build loudly instead of shipping broken pages.
