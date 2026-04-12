# Koliago — landing page (React + Vite)

This repository is a **Vite + React** app you can clone, build, and deploy (GitHub Pages, Netlify, Vercel, etc.).

## Quick start

```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Static output is in **`dist/`**. Deploy that folder as the site root (most hosts run `npm run build` for you and publish `dist`).

### GitHub Pages (project site, e.g. `username.github.io/repo-name/`)

Set Vite’s base to your repo name so assets load correctly:

```js
// vite.config.js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

Rebuild, then upload **`dist`** contents to the `gh-pages` branch or use a GitHub Action that runs `npm ci && npm run build` and publishes `dist`.

---

## Legacy static site (HTML / CSS / JS)

The original **vanilla** version is preserved in **`legacy-static/`**:

- `legacy-static/index.html` — entry page  
- `legacy-static/css/`, `javascript/`, `img/`, `downloads/`, `manifest.webmanifest`

To preview it locally, open `legacy-static/index.html` in a browser or serve that folder with any static server (it is **not** part of the Vite build).

See **`legacy-static/README.md`** for details.

---

## Project layout

| Path | Purpose |
|------|--------|
| `src/` | React components and `main.jsx` |
| `src/styles/` | Global CSS (copied from the old `css/` tree) |
| `public/` | Static files served as `/` (images, APK zip, web manifest) |
| `legacy-static/` | Archived HTML/CSS/JS site for reference |
