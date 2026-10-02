# Project checks

- `npm run build` runs the Next.js production build. The deployable static site is generated in `out/`; do not edit generated output to fix source problems.
- `public/sitemap.xml` is the single source for the supplied sitemap (do not keep a duplicate at the project root), and `public/robots.txt` advertises it. Next.js copies both into `out/`. Do not run the legacy `next-sitemap` config over the export: it would overwrite the supplied sitemap.
- `npm run verify:requirements` checks the built export against the supplied sitemap and verifies all listed pages' schema, Search Console tags, tracking IDs, and footer social links. Run the build first; this does not verify remote analytics ingestion or Google account access.
- `node verify-export.mjs "<reference-export-directory>"` compares a reference export against local `out/`. Run the build first. The comparison checks case-sensitive HTML paths, page text, metadata, external URLs, links, images, form attributes, public assets, hosting configuration, sitemaps, and CSS rules excluding generated font faces. Sitemap timestamps are ignored. Compiled JS/font byte matches are informational, not browser or API tests.
- `npm run lint` runs ESLint. The baseline has existing `prefer-const` and `react/no-unescaped-entities` errors in container components, plus image and unused-import warnings. Use targeted ESLint checks to distinguish new issues from that baseline.
- Use Next.js `Link` rather than raw `<a>` tags for links, preserving `target`, `rel`, and accessibility attributes; match the existing `prefetch={false}` convention.
- Deployment is to a case-sensitive Hostinger filesystem. Keep the refund page route lowercase (`app/refund-policy`) to match navigation, canonical URLs, and the sitemap.
