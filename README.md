# Veer Makes Things

Personal website, writing archive, project notebook, and internet home for Veer.

**Live:** https://veermakesthings.com

## Stack

- Astro
- Markdown
- LaTeX via KaTeX
- TypeScript
- GitHub
- Cloudflare Pages
- `@astrojs/sitemap`

The site is intentionally static/content-first. Content lives in `src/content/`; Astro turns it into pages at build time.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL Astro prints.

Build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Adding writing

Create a Markdown file in:

```text
src/content/writing/
```

Example:

```md
---
title: "The Strange Mathematics of N-Queens"
description: "A short description."
pubDate: 2026-10-02
tags:
  - mathematics
  - combinatorics
type: mathematics
featured: true
---

Your article.

Inline math: $x^2 + y^2 = z^2$

Display math:

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$
```

## Content model

- `writing` = finished long-form work
- `notes` = short-form thinking
- `work` = projects, research, Breathe, software

Taxonomy belongs in frontmatter rather than forcing posts into rigid folders.

## Social feed

`src/data/social.ts` currently contains manually curated feed items.

This is intentional. Do not add platform APIs until there is a concrete need. Later, individual platform adapters can replace the data source without changing the site's visual feed.

## Design principle

The website is the canonical archive.

Social platforms are distribution.

The site should remain useful even if any external platform disappears.
