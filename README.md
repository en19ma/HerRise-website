# HerRise Website

A polished, responsive, frontend-only website about girls' education, women's leadership, and community opportunity. Built with Next.js App Router, TypeScript, Framer Motion, Lucide icons, and a small Three.js/R3F decorative hero scene.

## Pages
- `/` — Home
- `/about` — Our story and values
- `/girls-education` — Girls' education
- `/womens-leadership` — Women's leadership
- `/articles` — Journal index
- `/articles/[slug]` — Five long-form articles

## Run locally
Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

## Images and typography
Photography and Google Fonts load from their hosted CDNs, so the website needs an internet connection for the full visual presentation. The images are illustrative Unsplash image URLs selected for the site; before public/organizational use, verify the licensing and replace them with properly licensed, consented, or organization-approved photography where appropriate. Update image URLs in `app/page.tsx`, the page components, and `content/articles.ts`.

## Scope
This is intentionally a frontend-only informational site. It has no authentication, database, contact form, donation processing, admin dashboard, or backend API.
