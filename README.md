# phxsugaring.com — Premium Domain for Sale

Static Astro site + Cloudflare Worker (assets binding) marketing **phxsugaring.com** for acquisition. Optimized for Core Web Vitals, SEO, conversion, and mobile — deployable on the **Cloudflare Workers & Pages free plan**.

## Live

- Production: https://phxsugaring.com/
- Contact: sales@desertrich.com

## Stack

- Astro 5 (static output)
- Tailwind CSS 3
- Cloudflare Worker serving `/dist` assets with security headers, www→apex 301, and cache policy
- Cloudflare Images for hero media

## Local development

```bash
npm install
npm run dev
```

App: [http://127.0.0.1:43123](http://127.0.0.1:43123)

```bash
npm run build
npm run preview
```

## Deploy (Cloudflare free plan)

1. `npm run build`
2. `npx wrangler deploy` (requires Cloudflare account auth)
3. Keep custom domains `phxsugaring.com` / `www.phxsugaring.com` on the Worker routes in `wrangler.toml`
4. Confirm HTTPS is active (Universal SSL on free plan)
5. Submit `https://phxsugaring.com/sitemap-index.xml` in Google Search Console

No paid Cloudflare products required (Workers paid limits stay within free tier for this static marketing site).

## Optimization checklist (shipped)

| Area | Implementation |
|------|----------------|
| Speed | Static HTML, compressed CSS/JS, CF Images with `srcset`, no Font Awesome CDN, no render-blocking Google Fonts |
| Security | HSTS, CSP, frame deny, nosniff via Worker |
| Schema | WebSite, WebPage, Product, Organization, BreadcrumbList |
| SEO | Title/meta CRO format, canonicals, robots.txt, XML sitemap, guide hub internal links |
| CRO | Above-fold price + Buy Now / Make Offer / Contact Agent, trust bar, social proof, exit-intent email capture |
| Mobile | 48px tap targets, collapsible nav, 16px base type, dark/light toggle |
| Content | `/guides/` valuation, market trends, escrow buying guide |

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on port 43123 |
| `npm run build` | Production static build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build + `wrangler deploy` |

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
