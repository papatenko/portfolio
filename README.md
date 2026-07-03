# papatenko/portfolio — monorepo

Both halves of the brand in one Turborepo:

| App | Path | Deploys to |
|---|---|---|
| **dev** — developer/AI portfolio | `apps/dev` | [justinkondratenko.dev](https://justinkondratenko.dev) via Netlify (`netlify.toml` at repo root) |
| **creative** — Papatenko art & video | `apps/creative` | papatenko.org (homelab Docker, or a second Netlify project) |

## Commands (repo root)

```bash
npm install              # installs everything (workspaces)
npm run dev              # run both apps (turbo)
npm run build            # build both
npm run build:dev        # build just the dev site
npm run build:creative   # build just the creative site
```

Each app also works standalone: `cd apps/dev && npm run dev`.

## Editing content

- Dev site: `apps/dev/src/data/*.ts` + `apps/dev/src/content/case-studies/` — full guide in `apps/dev/docs/EDITING-CONTENT.md`
- Creative site: everything lives in `apps/creative/src/data/content.ts`

## Deploying

- **Dev → Netlify**: the root `netlify.toml` builds `apps/dev` with `turbo --filter=dev`. Link this repo to the `justinkondratenko` Netlify project and every push deploys.
- **Creative → homelab**: `cd apps/creative && docker compose up -d --build` (port 8086), or create a second Netlify project with base directory `apps/creative`.
