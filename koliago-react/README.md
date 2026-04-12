# Koliago — React (Vite)

This is the Koliago landing page migrated from static HTML to **React 19** with **Vite**.

## Run locally

```bash
cd koliago-react
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Output is in `dist/`. Deploy that folder; keep `public/` assets (images, `downloads/`, `manifest.webmanifest`) served from the site root.

## What moved

- **Styles:** `src/styles/general.css`, `style.css`, `queries.css` (copied from the original `css/` folder).
- **Assets:** `public/img/`, `public/downloads/`, `public/manifest.webmanifest`.
- **Sections:** Header, hero, how-it-works, discount banner, footer, Android download modal — wired like the original `javascript/script.js` (smooth in-page links, sticky header, mobile nav, Google Play modal).

The original static site remains in the parent folder if you still need it for reference.
