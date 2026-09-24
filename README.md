# Las Margaritas — Milford, CT

Website for Las Margaritas Mexican Restaurant, 501 New Haven Ave, Milford, CT.

**Live site:** https://dennism321.github.io/las-margaritas/

Built with React, Vite and Tailwind CSS. The build pre-renders the page to
static HTML so phones show the full page before any JavaScript loads.

## Editing

- Page content lives in `src/components/` (one file per section).
- Photos are in `public/images/` (compressed WebP). Card photos also have a
  720px-wide `-720` copy for phones (used through `src/components/Photo.tsx`).
  Full-size originals are in `originals/`.
- Fonts are self-hosted and trimmed; see `public/fonts/README.md`.
- Pushing to `main` rebuilds and publishes the site automatically
  (see `.github/workflows/deploy.yml`).

## Checking load speed on a phone

Open the site with `?timing` at the end of the address
(https://dennism321.github.io/las-margaritas/?timing). A box appears after the
page loads showing how long each step took on that device. Visitors never see it.

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
