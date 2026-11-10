# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install
npm run dev       # Vite dev server (binds to LAN via server.host: true), usually http://localhost:5173
npm run build     # outputs dist/ — a single inlined index.html plus public/ assets
npm run preview   # serves the build at http://localhost:4173
npm run sitemap   # node sitemap.js — crawls jdszekeres.is-a.dev and rewrites src/assets/sitemap.xml
```

There is no test runner and no linter configured. `jsdom` is only a dependency of `sitemap.js`.

## Architecture

A one-page Vue 3 (`<script setup>`) portfolio, deployed as a static site to jackson.canyoncrest.academy. There is no router and no store.

- **Single-file build.** `vite-plugin-singlefile` inlines all JS/CSS into one `index.html` (Terser, target `es2015`). Don't add code-splitting or dynamic imports expecting separate chunks; they get inlined. Anything in `public/` is copied alongside as a separate file.
- **[src/App.vue](src/App.vue) is the whole page.** The hero, About/Skills, Experience, Select Projects and All Projects sections are all written inline in its template, with most styles in its scoped `<style>`. Skills and jobs are hard-coded `<Skill>` / `<JobTile>` / `<BigProject>` tags in the template, not data-driven. Experience is grouped into Work & Internships / Leadership / Coursework lists (newest first); add a new `<JobTile>` to the matching group. Components in [src/components/](src/components/) are small presentational pieces.
- **The gallery is data-driven.** [src/data/projects.js](src/data/projects.js) exports an array of `{name, skills, categories, link, image, description, repo?}`. `categories` is a space-separated tag string: `c` (CS), `a` (aviation), `3` (3D printing), `g` (geography), `fav`. [src/composables/useProjects.js](src/composables/useProjects.js) filters on those tags and paginates 12 at a time.
  - `useProjects` calls `projectsData.reverse()`, which mutates the array in place, so the newest entries should be appended to the end of `projects.js`.
  - The filter buttons in App.vue use ids matching the tag (`c`, `a`, `3`, `g`, `fav`), and `filterProjects` toggles the `selected` class by `document.getElementById`. Keep the ids and the tag list in `useProjects.js` in sync if you add a category.
- **Hero pixelation intro.** App.vue defines an SVG `#pixelate-filter` (`feMorphology#morphology`) and animates its `radius` down with nested `setTimeout`s, then removes the filter element. This is deliberate: SVG `<animate>` doesn't work with Vue here (see the comment in the file). Currently nothing applies `filter: url(#pixelate-filter)` to the hero image (commit `486abce` dropped it), so the effect is inert.
- **Inline scripts in [index.html](index.html).** The text-scramble `Messenger` (targets `#c`) and the rainbow-fill `updateBackground` loop (targets `#3`) live as plain `<script>`s in index.html, outside Vue, and act on the filter buttons by id.
- **Theme tokens.** [src/assets/main.css](src/assets/main.css) defines the colour tokens plus `--font-sans` (Roboto) and `--font-mono` (Fira Code), built on a synthwave palette: indigo `#34308F` background (fading to `--indigo-deep`), with `--pink` `#F2527D`, `--orchid` `#D97BAD`, `--amber` `#F29A2E` and `--orange` `#F28444` as accents. There is one theme for both colour schemes. Use the role tokens (`--text`, `--text-muted`, `--accent`, `--title-accent`) rather than hard-coded colours. Amber and the text colours clear WCAG AA (4.5:1) for normal text; pink is only 3.2:1, so use it only for large or bold titles, glows and borders. `h4` and `code` are mono site-wide. Keep component `<style>` blocks `scoped`: an unscoped `p`/`a`/`h4` rule restyles the whole page. The hero (`.hero-*` classes in App.vue) is a full-bleed photo with a dark gradient overlay; its text is always white, independent of colour scheme.
- **Images are mostly remote.** Project and company images come from `jdszekeres.github.io/...` and `raw.githubusercontent.com`, not from this repo. Only a few files live in `public/`.

## Leftovers

- `src/assets/Hack.js` and `src/assets/print.js` are copies of the inline scripts in index.html and aren't imported anywhere. `components/pixelArray.vue`, `components/imagelink.vue` and `components/glassPanel.vue` are unused.
- index.html loads `css-scroll-snap-polyfill` from `bundle.run` at runtime. [src/assets/main.css](src/assets/main.css) holds the global styles.
