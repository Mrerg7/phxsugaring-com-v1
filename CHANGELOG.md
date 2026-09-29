# Changelog

## [1.1.0] — 2026-09-29

### FEAT: Optimization improvements

- Fixed `_headers` incorrectly applying `noindex` to the home page
- Removed fabricated Product `aggregateRating` / review schema (Google spam risk)
- Expanded Schema.org graph: Product attributes, Organization, BreadcrumbList, offer shipping details
- SEO meta: title format `[Domain] | Premium Domain for Sale | [Brand]`, keyword meta, hreflang, product OG tags
- CRO: above-the-fold asking price panel, Buy Now / Make Offer / Contact Agent CTAs, trust bar, social proof, exit-intent capture
- Mobile: hamburger nav, 48px targets, theme toggle (light/dark)
- Performance: dropped Font Awesome + Google Fonts CDNs; inline SVG icons; image `srcset` + quality params; HTML compression
- Worker: security headers (HSTS/CSP/COOP), www→apex HTTPS redirect, trailing-slash canonicalization, cache policies
- Content/DA: `/guides/` hub with valuation, Phoenix market, and escrow buying articles + footer internal links
- Analytics hooks: `dataLayer` CTA click events (ready for GTM/Zaraz)
- Docs: README deploy workflow for Cloudflare Workers free plan

## [1.0.0] — 2026-07-02

- Initial Astro + Cloudflare Worker domain sales landing page
