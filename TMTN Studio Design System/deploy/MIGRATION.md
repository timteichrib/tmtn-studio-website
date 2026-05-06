# Deployment — pushing the redesign to GitHub

This `deploy/` folder is a **drop-in replacement** for the three files in your `timteichrib/tmtn-studio-website` repo. Vanilla HTML/CSS/JS, no build step, no React. Same shape as today's repo — Netlify/Vercel/GitHub Pages will deploy it as-is.

## What's in the bundle

```
deploy/
├── index.html              ← replaces repo's index.html
├── styles.css              ← replaces repo's styles.css (tokens inlined)
├── script.js               ← replaces repo's script.js (demo + contact preserved)
└── assets/
    └── favicon.svg         ← new — referenced from index.html
```

## Recommended workflow

Two destinations as you asked:

### 1. `main` branch — production (efficient, vanilla)

```bash
# in your local clone of tmtn-studio-website
git checkout main
git pull

# replace the three root files with the deploy/ versions, add favicon
cp /path/to/downloaded/deploy/index.html  ./index.html
cp /path/to/downloaded/deploy/styles.css  ./styles.css
cp /path/to/downloaded/deploy/script.js   ./script.js
mkdir -p assets
cp /path/to/downloaded/deploy/assets/favicon.svg ./assets/favicon.svg

git add .
git commit -m "Redesign: Werkstatt direction (paper + ink + clay)"
git push origin main
```

That's it for production.

### 2. `design-system` branch — full reference for future remodeling

Push the entire design-system project (this whole folder) onto a branch in the same repo, so you have everything — JSX components, tokens, preview cards, README — versioned alongside the live site.

```bash
# from your local clone of tmtn-studio-website
git checkout -b design-system

# download the whole project from this conversation (use the download button)
# unzip it into a sibling folder, then:
cp -R /path/to/downloaded/tmtn-studio-design-system/* ./

git add .
git commit -m "Add design system reference (Werkstatt direction)"
git push -u origin design-system
```

Now you have:
- `main` → live, lean, vanilla site (what visitors see)
- `design-system` → full design system, JSX components, tokens — your single source of truth for any future redesign or remodel

## Sanity check before pushing

Open `deploy/index.html` directly in a browser (double-click). It should render exactly the same as the version in this project's preview.

## Caveats

- The `deploy/index.html` references the existing `assets/favicon.svg`. If you don't want a favicon, remove the `<link rel="icon">` line at the top of `index.html`.
- Fonts load from Google Fonts CDN (Fraunces + Inter + JetBrains Mono). Same approach as your current site.
- The Werkstatt-aligned demo previews in `script.js` use the new color palette (warm/modern/seriös). Old visitors who bookmarked specific demo states will see the new look — fine for a redesign launch.
