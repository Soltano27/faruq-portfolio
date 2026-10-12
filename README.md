# Faruq Sosanya — Portfolio (Next.js)

Next.js 15 (App Router, TypeScript). Fully responsive: the desktop nav collapses to a menu button below 860px.

## Run locally (one command per line, works in PowerShell)
npm install
npm run dev

Open http://localhost:3000

## Edit content
All text lives in `lib/content.ts` (profile, experience, projects, live sites, testimonials).
Full post texts live in `lib/posts.ts`.

Writing rules for any edit (keep the site credible):
- Every number must be one you can explain in an interview.
- No em dashes, no "It's not X, it's Y", no words like robust, seamless, leverage, pivotal.
- Past tense for finished work, present tense only for work you still do.

## Deploy
1. Push to GitHub and import into Vercel.
2. In Vercel > Settings > Environment Variables, add:
   NEXT_PUBLIC_SITE_URL = https://your-live-domain (no trailing slash)
   If unset, the site assumes https://faruq-ops.kite.space.
   This value is used for canonical links, the sitemap, social cards and structured data, so set it to the real domain.
3. Redeploy.

## Search and AI visibility (already built in)
- `/sitemap.xml` — every page and full-text post (generated from content).
- `/robots.txt` — open to search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others).
- `/llms.txt` — plain-text profile for AI assistants, generated from `lib/content.ts`, so it stays in sync.
- JSON-LD structured data: Person + WebSite on every page, BlogPosting on each post.
- Per-page titles, descriptions and canonical URLs; a 1200x630 social card (`app/opengraph-image.jpg`).

After deploying:
- Add the domain to Google Search Console and Bing Webmaster Tools, and submit `/sitemap.xml`.
- Put the site URL in your LinkedIn profile (Contact info > Website) and Featured section, and on your CV.

## Photos
Images are in `public/images/`. To show more than one photo on a portfolio card, add the file and list it in
that project's `images` array in `lib/content.ts` (two or three display side by side).
