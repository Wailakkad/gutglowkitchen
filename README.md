# Gut Glow Kitchen

Anti-inflammatory meal prep, gut health improvement, blood sugar balance, and intermittent fasting health blog & recipe hub — built with **Next.js (App Router)** + **React 19** + **Tailwind CSS v4**.

## Routes

| URL | Page |
|---|---|
| `/` | Home |
| `/blog` | Blog & recipe index (search via `?q=`) |
| `/blog/[slug]` | Single article (SSG, JSON-LD schema) |
| `/category/[slug]` | Category pages |
| `/products` | Amazon affiliate product hub |
| `/about`, `/contact` | Info pages |
| `/privacy`, `/terms`, `/affiliate-disclosure` | Legal pages |

## Run locally

1. `npm install`
2. `npm run dev` → http://localhost:3000
3. `npm run build` → static pre-render production build
4. `npm run start` → serve production build