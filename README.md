# Cinematic Portfolio for GitHub Pages

Premium static portfolio for a videographer and video editor, adapted for `GitHub Pages`.

## What changed

`GitHub Pages` only serves static files, so the previous server architecture had to be removed:

- no `Prisma`
- no `Auth.js`
- no `Server Actions`
- no admin panel
- no SQLite/PostgreSQL
- no Nginx/PM2/VPS setup

The site now ships as a static `Next.js` export with a premium cinematic UI and external video embeds.

## Stack

- `Next.js 15`
- `React 19`
- `TypeScript`
- `TailwindCSS`
- `Framer Motion` only for the modal
- lightweight shadcn-style primitives

## Content management

All editable content lives in [src/content/site-data.ts](/Users/pavelabramcuk/Desktop/Портфолио%20саи%CC%86%D1%82/src/content/site-data.ts).

That file stores:

- brand info
- categories
- projects
- services
- testimonials

To add a project, append an object with:

- `title`
- `description`
- `thumbnail`
- `videoUrl`
- `platform`
- `category`

Supported platforms:

- `youtube`
- `instagram`

## Contact form

Because GitHub Pages has no backend:

- default fallback is `mailto:`
- optional external form endpoint via `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

## Environment variables

```env
NEXT_PUBLIC_SITE_URL="https://username.github.io/repository-name"
NEXT_PUBLIC_BASE_PATH="/repository-name"
CONTACT_EMAIL="hello@your-domain.com"
NEXT_PUBLIC_FORMSPREE_ENDPOINT=""
```

For a custom root domain, keep `NEXT_PUBLIC_BASE_PATH` empty.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static export is generated into `out/`.

## GitHub Pages deploy

The workflow is already included at [.github/workflows/deploy.yml](/Users/pavelabramcuk/Desktop/Портфолио%20саи%CC%86%D1%82/.github/workflows/deploy.yml).

### Repository setup

1. Push the project to GitHub.
2. Open `Settings > Pages`.
3. Set the source to `GitHub Actions`.

### Recommended Actions variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BASE_PATH`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

## Why this is better for Pages

- zero server memory usage
- zero database maintenance
- zero auth/session overhead
- videos still lazy-load only on demand
- extremely cheap to host

## Main tradeoff

There is no browser admin panel anymore. Content is updated by editing `src/content/site-data.ts` and pushing to GitHub.
