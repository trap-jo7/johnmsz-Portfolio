# John Soliz — Portfolio

A professional portfolio using documented resume and GitHub content. The primary projects are NetScope, EPL Predictor, and JMS Photo Gallery; additional GitHub repositories appear in a secondary list.

## Content

- `components/portfolio.tsx`: profile, education, project descriptions, experience, resume skills, and links.
- `app/globals.css`: approved white, navy, and blue theme; typography, spacing, responsive layouts, focus styles, and reduced motion.
- `public/john-soliz-resume.pdf`: the actual November 2026 resume.
- `DESIGN.md`: approved brand, section patterns, motion, and content evidence policy.
- `docs/`: complete standalone HTML/CSS portfolio with relative asset links, suitable for static hosting or GitHub Pages.

NetScope's contribution wording follows its repository authorship notes. The 15-trial result is a local-lab result. EPL Predictor's sample website data is distinguished from its model. No illustrative dashboards, invented statistics, proficiency ratings, or simulated product screenshots are used.

## Next.js development

Use the package manager declared in `package.json` and a Node.js release supported by the pinned Next.js version.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm exec tsc --noEmit
pnpm build
```

## Static hosting without Vercel

The committed `docs/` directory is self-contained and needs no JavaScript, framework runtime, or server. Deploy its contents on any static host, or configure GitHub Pages to publish `main` / `docs`.

To regenerate it after source changes:

```sh
pnpm build
node scripts/export-static.mjs
```

For the Sites deployment, `.openai/hosting.json` identifies the selected site and `scripts/package-site.mjs` copies `docs/` into `dist/`. The hosting archive contains that exact static document and its assets.

`vercel.json` keeps the existing deployment serving the committed static files, with no install or build step. This configuration is optional; the same `docs/` files work on other hosts.

## Professional profiles

[LinkedIn](https://www.linkedin.com/in/john-soliz-867421301) · [GitHub](https://github.com/trap-jo7)
