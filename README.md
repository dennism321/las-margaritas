# Las Margaritas — Milford, CT

Website for Las Margaritas Mexican Restaurant, 501 New Haven Ave, Milford, CT.

**Live site:** https://dennism321.github.io/las-margaritas/

Built with React, Vite and Tailwind CSS. The build pre-renders the page to
static HTML so phones show the full page before any JavaScript loads.

## Editing

- Page content lives in `src/components/` (one file per section).
- Photos are in `public/images/` (compressed WebP). Full-size originals are in
  `originals/`.
- Pushing to `main` rebuilds and publishes the site automatically
  (see `.github/workflows/deploy.yml`).

## Commands

```bash
npm install        # once
npm run dev        # local preview while editing
npm run build      # production build into dist/
```

`npm run build` also creates `dist/preview-offline.html`: the whole page in one
file with photos built in, for opening or emailing anywhere. It's bigger and
slower than the live site, so use it for previews only. It's published at
https://dennism321.github.io/las-margaritas/preview-offline.html.
