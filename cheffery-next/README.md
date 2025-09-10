## Cheffery Next

Production-ready Next.js 14 App Router site with Tailwind + shadcn/ui, giscus forum, Resend email, GA4, and JSON-driven content.

### Quickstart

1) Install deps

```bash
pnpm i
```

2) Environment

```bash
cp .env.example .env
```
Fill values:
- RESEND_API_KEY
- GA_MEASUREMENT_ID or NEXT_PUBLIC_GA_MEASUREMENT_ID
- NEXT_PUBLIC_GISCUS_* (optional for forum)
- NEXT_PUBLIC_SITE_URL

3) Dev

```bash
pnpm dev
```

4) Content
- Edit JSON under `/content/*.json`
- Drop images into `/public/gallery` and logos into `/public/logos`

5) Forum (Giscus)
- Create a GitHub Discussion repo and get repo, repoId, category, categoryId
- Set env vars NEXT_PUBLIC_GISCUS_*

6) Email (Resend)
- Set RESEND_API_KEY (or it will log to console)

7) Deploy
- Deploy to Vercel. Ensure env vars are set. Add `NEXT_PUBLIC_SITE_URL`.

### Scripts
- `pnpm dev` — dev server on 3000
- `pnpm build` — production build
- `pnpm start` — start production server
- `pnpm test` — run unit tests


