# Noor's Digital World

A personal, character-driven portfolio for Noor (AI Data Analyst), guided by
the 3D mascot **Gil**. Built with React, Vite, Tailwind CSS and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Deploys to Vercel with zero config — just import the repo (framework preset:
Vite).

## Gil, the mascot

Gil is rendered as a real 3D model (`public/gil.glb`) using Google's
`<model-viewer>` web component (loaded via CDN script tag in `index.html`,
so there's nothing to install for it). It appears in the hero, the About
card and the Contact section, auto-rotating gently. This keeps Gil exactly
as you generated him — nothing was redrawn or redesigned.

**One thing to fix before you ship:** `gil.glb` is ~26 MB, which is too
heavy for a fast first load. Before deploying, compress it — the easiest
path is re-exporting at a lower resolution/texture size from Meshy, or
running it through [gltf.report](https://gltf.report) or `gltf-transform`
(`npx @gltf-transform/cli optimize public/gil.glb public/gil.glb`) to apply
Draco compression and shrink textures. Aim for well under 5 MB.

## What to edit

Everything content-related lives in `src/data/`, so you can restyle or
rewrite without touching components:

- `content.js` — name, bio, hero copy, stats, education, socials, sticker labels
- `skills.js` — skill categories + the hover reaction copy
- `experience.js` — timeline entries
- `projects.js` — project cards + full detail-overlay content

Replace `public/resume.pdf` with your real resume (a placeholder PDF is
included so the "View / Download resume" buttons work out of the box).

## Structure

```
src/
  components/   Navbar, Hero, GilModel, CustomCursor, About, Skills,
                Experience, Projects, ProjectModal, HowIThink, Resume,
                Contact, Footer, FloatingSticker, Section, Loader
  data/         all editable copy/content
  hooks/        useReducedMotion
public/
  gil.glb       Gil, the 3D mascot
  resume.pdf    placeholder — replace with the real one
```

## Notes

- Custom cursor auto-disables on touch devices.
- `prefers-reduced-motion` is respected globally (`src/index.css`).
- The design intentionally skips a top navbar in favor of a floating pill
  nav on desktop and a full-screen slide menu on mobile.
- This build was authored without a live npm/browser preview available in
  this environment — run `npm install && npm run dev` locally (or in
  CodeSandbox/StackBlitz) to check it visually before deploying, and open
  an issue-style note back to me if anything needs adjusting.
