# John Soliz — Portfolio

A responsive portfolio for John Soliz, an Information Technology student at Liberty University focused on Data Networking & Security.

**Website:** https://johnmsz.vercel.app

## Selected projects

- [NetScope](https://github.com/trap-jo7/netscope): Go network diagnostics and an isolated DNS/TCP/HTTP incident lab.
- [Pitchside / EPL Predictor](https://github.com/trap-jo7/epl-predictor): Premier League ML pipeline and an interactive tactics website.
- [Resonant](https://github.com/trap-jo7/resonant): Experimental music similarity search using audio embeddings and pgvector.
- [Cage Atlas](https://github.com/trap-jo7/cage-atlas): Exploratory fighter style comparisons and scouting.
- [Saturday Gridiron](https://github.com/trap-jo7/saturday-gridiron): Original pixel football game with local career progression.
- [JMS Photo Gallery](https://github.com/trap-jo7/JMSPhotoGallery): Interactive albums with browser-local photo persistence.

The project cards include category filters, repository links, and expandable build notes. Only the photo gallery is labeled as a live website. Project illustrations are conceptual, not product screenshots or live telemetry.

## Development

Use the Node.js version supported by the pinned Next.js release and the package manager declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm exec tsc --noEmit
pnpm build
```

The existing Vercel integration deploys updates to `main`.

## Updating content

- `components/portfolio.tsx`: profile links, six projects, categories, background, and experience.
- `app/globals.css`: responsive layouts, colors, typography, and conceptual project illustrations.
- `app/layout.tsx`: page metadata and social descriptions.
- `public/john-soliz-resume.pdf`: downloadable resume, refreshed from the November 2026 copy.
- `public/icon.svg`: portfolio favicon.

Google Fonts supplies DM Sans and Manrope, with system font fallbacks. The page supports keyboard navigation, reduced motion preferences, a skip link, semantic sections, and a mobile navigation menu.

[LinkedIn](https://www.linkedin.com/in/john-soliz-867421301) · [GitHub](https://github.com/trap-jo7)
