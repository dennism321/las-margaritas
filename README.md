# Las Margaritas — Milford, CT

Website for Las Margaritas Mexican Restaurant & Cantina, 501 New Haven Ave,
Milford, CT.

**Live site:** https://dennism321.github.io/las-margaritas/

Built with React, Vite and Tailwind CSS. The build pre-renders the page to
static HTML so phones show the full page before any JavaScript loads.

## Editing

- Page sections live in `src/components/`.
- Hours, address, phone and map links are in `src/data/info.ts`; the menu is in
  `src/data/menu.ts`. Hours match https://lasmargaritas203.com.
- The logo and storefront photo are in `public/images/`; full-size originals are
  in `originals/`. Use a new filename when replacing an image — GitHub Pages can
  keep serving the old file under the same name for a while.
- The hero video lives in `public/media/`: re-encoded from Pexels clip 7772225
  as a 1280x720 version for wide screens and a 540x960 portrait crop for phones,
  with a still frame for each that shows until the video plays.
- Food photos load from Pexels (free stock media); phones request smaller sizes
  through `src/utils/pexels.ts`.
- Fonts are self-hosted and trimmed; see `public/fonts/README.md`.
- Pushing to `main` rebuilds and publishes the site automatically
  (see `.github/workflows/deploy.yml`).

## Commands

```bash
npm install        # once
npm run dev        # local preview while editing
npm run build      # production build into dist/
```
