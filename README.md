# Kristina Barrett — Portfolio

A single-page portfolio site. No build step, no dependencies, just `index.html`, `styles.css`, and `script.js`. Open `index.html` directly in a browser to preview, or deploy as-is to any static host.

## Design

Blueprint/drafting-sheet aesthetic: warm paper background with a faint grid, cyanotype blue (`#1560BD`) as the signature accent, IBM Plex Mono for headers/labels and IBM Plex Sans for body text. The project cards use hand-built SVG technical drawings that "draw themselves" on scroll (a stroke animation), echoing how a CAD line drawing gets built up stroke by stroke.

## What needs to be replaced before this goes live

1. **Project images** (`index.html`, inside each `.plate` div) — currently placeholder SVG technical drawings. Swap in real project photos, renders, or scanned drawings. Each is clearly marked in a comment.
2. **Resume link** — the "Download resume" button in the hero points to `/resume.pdf`, which doesn't exist yet. Add the actual resume file to this folder (or wherever it's hosted) and update the `href`.
3. **Contact form endpoint** — the form action points to a placeholder Formspree URL (`YOUR_FORM_ID`). Sign up at [formspree.io](https://formspree.io) (free tier is enough for a low-volume portfolio contact form) and swap in the real endpoint, or replace the form with a simple `mailto:` link if that's preferred.
4. **LinkedIn / Upwork links** — currently `#` placeholders in the Contact section, marked TODO. Add once those profiles are live.

## Deploying

Any static host works since there's no server/build step:

- **GitHub Pages**: push this repo to GitHub, then enable Pages in the repo settings (Settings → Pages → Deploy from branch → main).
- **Vercel / Netlify**: connect the repo, no build command needed, output directory is the repo root.

## Local preview

Just open `index.html` in a browser. For a local server instead (some browsers restrict certain features under `file://`):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
