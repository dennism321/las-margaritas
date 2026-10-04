# Las Margaritas — Milford, CT

Website for Las Margaritas Mexican Restaurant & Cantina, 501 New Haven Ave,
Milford, CT.

**Live site:** https://dennism321.github.io/las-margaritas/

Built with React, Vite and Tailwind CSS.

## Editing

- Page sections live in `src/components/`.
- Hours, address, phone and map links are in `src/data/info.ts`; the menu is in
  `src/data/menu.ts`. Hours match https://lasmargaritas203.com.
- The logo and storefront photo are in `public/images/`; full-size originals are
  in `originals/`. Use a new filename when replacing an image — GitHub Pages can
  keep serving the old file under the same name for a while.
- The hero video and food photos load from Pexels (free stock media).
- Pushing to `main` rebuilds and publishes the site automatically
  (see `.github/workflows/deploy.yml`).

## Commands

```bash
npm install        # once
npm run dev        # local preview while editing
npm run build      # production build into dist/
```
