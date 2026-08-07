# CIAA Website

Bright, high-energy site for CIAA athletic mentorship and heavenly culture training in Atlanta.

## Stack

- Vite + React + TypeScript
- Homepage structure inspired by [Samsung US](https://www.samsung.com/us/): sticky nav, hero carousel, horizontal promo rails, multi-column footer

## Project structure

```
src/
  App.tsx
  main.tsx
  components/
    layout/               # Nav, Footer
    sections/             # Hero, rails, connect, etc.
    ui/                   # Shared Rail carousel
    index.ts
  data/
    content.ts
  styles/
    global.css
public/
  favicon.svg
  images/
    brand/
    programs/
    gallery/
```

## Run locally

```bash
npm install
npm run dev
```

## Customize

- Copy and offerings: `src/data/content.ts`
- Visual system: `src/styles/global.css`
- Photos: `public/images/`
