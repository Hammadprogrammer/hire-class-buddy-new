# Project checks

- `npm run build` runs the Next.js production build and the `next-sitemap` postbuild step. The deployable static site is generated in `out/`; do not edit generated output to fix source problems.
- `node verify-export.mjs "<reference-export-directory>"` compares a reference export against local `out/`. Run the build first. The comparison checks case-sensitive HTML paths, page text, metadata, external URLs, links, images, form attributes, public assets, hosting configuration, sitemaps, and CSS rules excluding generated font faces. Sitemap timestamps are ignored. Compiled JS/font byte matches are informational, not browser or API tests.
- `npm run lint` runs ESLint. The baseline has existing `prefer-const` and `react/no-unescaped-entities` errors in container components, plus image and unused-import warnings. Use targeted ESLint checks to distinguish new issues from that baseline.
- Deployment is to a case-sensitive Hostinger filesystem. Keep the refund page route lowercase (`app/refund-policy`) to match navigation, canonical URLs, and the sitemap.
