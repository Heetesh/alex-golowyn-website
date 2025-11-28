# Alex Golowyn Business Website

## Nuxt v4 project important details

Project is not SSR but a SPA website.

## Setup

```bash
    yarn
```

## Dev

```bash
    yarn dev
```

## Build

```bash
    yarn build
```

Make sure to set preset in nuxt.config.ts
Preset is by default netlify static with no routes
Config already contains prerender routes to generate only an index.html, 202.html & 404.html -> Fully SPA as static website

Build generates a netlify static folder to /dist
