# Papatenko — Creative Portfolio

The fun half of the brand: video editing, thumbnails, logos, and posters. Same banner palette as [justinkondratenko.dev](https://justinkondratenko.dev), turned up — sticker cards, hard shadows, heavy grain, springy animations, and the banana cursor. Intended to replace the React app currently at papatenko.org.

## Editing content

Everything lives in **`src/data/content.ts`**:

- `videos` — client video cards. Add the YouTube `videoId`; the thumbnail loads automatically from YouTube and the player embeds on click (no API keys, no heavy iframes on page load).
- `art` — gallery pieces. Drop the image in `public/art/`, add an entry with `kind` (`thumbnail` | `poster` | `logo`), `year`, and a `tilt` (the sticker rotation). The filter chips pick up kinds automatically.
- `site` — tagline, marquee words, socials, email, link back to the dev site.

Curated to the 6–10 most recent pieces on purpose. The full 2017+ archive stays in [papatenko/portfolio](https://github.com/papatenko/portfolio).

## Run / deploy

```bash
npm install
npm run dev     # localhost:4321
npm run build   # static → dist/

docker compose up -d --build   # homelab: serves on :8086
```

Point the existing papatenko.org reverse-proxy entry at this container instead of the old React app.
