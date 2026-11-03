# Jackson Szekeres – Portfolio

A personal portfolio site that shows my computer science and engineering work: experience, featured projects, and a filterable gallery of more than 35 smaller builds.

<!-- TODO: add a screenshot or GIF of the site, e.g. docs/screenshot.png -->
<!-- ![Portfolio screenshot](docs/screenshot.png) -->

### **[Visit the live site: jackson.canyoncrest.academy](https://jackson.canyoncrest.academy)**

## Quick start

Open **[jackson.canyoncrest.academy](https://jackson.canyoncrest.academy)** in any browser. There's nothing to install.

## Features

- **Hero landing section**: a full-screen photo with frosted-glass panels for the title.
- **About & skills**: a short bio plus a grid of languages, frameworks, and platforms, each with its icon (Python, Swift, Flutter, React, AWS, Firebase, and more).
- **Past experience**: a timeline of internships, leadership roles, and classes, each with the organization's logo.
- **Select projects**: larger write-ups of my biggest work, including the *Window View* iOS app, my Eagle Scout project, a pending patent, and *Astrophotography Tools*.
- **Filterable project gallery**: filter by Computer Science, Aviation, 3D Printing, Geography, or My Favorites. Projects load 12 at a time with a "Load more" button.
- **Single-file build**: all the code and styles are inlined into one `index.html` that can be hosted on any static host.

## Running it locally

**Requirements:** Node.js 18 or newer (developed on Node 22) and npm. No environment variables or other system dependencies are needed.

```sh
git clone https://github.com/jdszekeres/portfolio-source.git
cd portfolio-source
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). The dev server also binds to your LAN address, so you can test on a phone on the same network.

To make a production build:

```sh
npm run build     # outputs dist/ (index.html + the images in public/)
npm run preview   # serves the build at http://localhost:4173
```

## How it works

The site is a single Vue 3 app ([src/App.vue](src/App.vue)) built from small presentational components: `GlassPanel`, `JobTile`, `BigProject`, `Project`, and `Skill`. Project data is kept separate from markup in [src/data/projects.js](src/data/projects.js), so adding a project means adding one object to an array. Each project lists its categories as space-separated tags (`"c g fav"`), and the [`useProjects`](src/composables/useProjects.js) composable filters on those tags and paginates the results. This keeps the gallery fast even as the list grows.

The build uses [`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile) to inline all JavaScript and CSS into one HTML file, minified with Terser and targeting ES2015. Because of that, deploying means copying `dist/` to a static host, with no JS or CSS chunk paths to break. Most images are loaded from my GitHub Pages site, so the build stays small.

## Credits

- [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/)
- [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile)
- [Tabler Icons](https://tabler.io/icons) for the skill icons
- [Google Fonts](https://fonts.google.com/) (Fira Code, Roboto)
- Flag images from [Flagpedia](https://flagpedia.net/) and emoji from [Slackmojis](https://slackmojis.com/)
