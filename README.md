# National Bulls — Investment Services Website

Production-grade Next.js (App Router) project for **National Bulls Investment Services**.
The site is configured as a **Static Export** (`output: 'export'`), so `npm run build`
produces a self-contained `out/` folder of plain HTML/CSS/JS that can be deployed to any
static host or served by nginx.

---

## Project Structure

```
staah-clone/
├── src/
│   ├── app/                     # Next.js App Router (routes = pages)
│   │   ├── layout.tsx           # Root layout (fonts, header, footer, metadata)
│   │   ├── page.tsx             # Home page  (/)
│   │   ├── about/page.tsx       # About page (/about)
│   │   ├── contact/page.tsx     # Contact page (/contact)
│   │   ├── services/page.tsx    # Services page (/services)
│   │   ├── team/page.tsx        # Team page (/team)
│   │   └── globals.css          # Global styles + FULL responsive breakpoint system
│   ├── components/
│   │   ├── header.tsx           # Top strip (RTL marquee) + main nav + mobile menu
│   │   ├── footer.tsx           # Footer (responsive 3→2→1 column grid)
│   │   ├── error-boundary.tsx   # Client error boundary
│   │   ├── motion.tsx           # Reveal / Stagger / AnimatedNumber helpers
│   │   └── ui/                  # shadcn-style UI primitives (button, card, tabs, ...)
│   ├── hooks/                   # Custom hooks (use-mobile, use-toast)
│   ├── lib/utils.ts             # Shared utilities (cn, etc.)
│   └── store.ts                 # Redux store (if used)
├── public/                      # Static assets (served at site root)
│   ├── images/                  # Photos & logos
│   ├── favicon.svg
│   └── robots.txt
├── out/                         # OUTPUT of `npm run build` (static export — gitignored)
├── node_modules/                # Dependencies (gitignored)
├── next.config.ts               # output:'export', unoptimized images
├── package.json                 # Scripts & dependencies
├── tsconfig.json                # TypeScript config, @/* -> ./src/*
├── postcss.config.mjs
├── Dockerfile                   # Multi-stage build -> nginx static server
├── nginx.conf                   # nginx config for serving out/
├── .gitignore
├── .dockerignore
├── .env.example
└── README.md
```

---

## Scripts

| Command              | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| `npm run dev`        | Start the development server (http://localhost:3000)           |
| `npm run build`      | Type-check + static export. **Outputs the `out/` folder.**     |
| `npm run typecheck`  | TypeScript check only (`tsc --noEmit`)                         |
| `npm start`          | Run the server-mode build (`next start`)                       |

> `npm run build` runs `next build` which, with `output: 'export'`, writes the final
> static site into **`out/`** — this is what you deploy.

---

## Building the production static site

```bash
npm install
npm run build
```

The deployable site is now in **`out/`**:

```
out/
├── index.html
├── about.html
├── contact.html
├── services.html
├── team.html
├── 404.html
├── robots.txt
├── favicon.svg
└── images/  _next/
```

Upload the entire `out/` folder to any static host (Hostinger/cPanel, Netlify, Vercel,
S3/CloudFront, nginx/apache, etc.). There is **no Node server** required in production.

---

## Deployment options

### 1. Static hosting (simplest)
Copy the contents of `out/` to your web root.

- **Shared hosting / cPanel:** upload `out/` contents to `public_html/`. The `.html`
  files map exactly to routes (`about.html` = `/about`).
- **Netlify / Vercel:** point the build command to `npm run build` and the publish
  directory to `out`.

### 2. Docker + nginx (self-hosted VPS)
A multi-stage `Dockerfile` builds the site and serves it with nginx using `nginx.conf`
(handles `.html` route fallback, gzip, and long-term asset caching).

```bash
docker build -t nationalbullls-site .
docker run -d -p 80:80 --name nationalbulls nationalbullls-site
```

### 3. Node server mode (advanced)
If you ever need server features (middleware, server actions, API routes), remove
`output: 'export'` from `next.config.ts`, then:
```bash
npm run build   # -> .next
npm start       # -> serves on :3000  (uses `next start`)
```

---

## Environment variables

Copy `.env.example` to `.env` if needed. This is a static export, so:
- Only `NEXT_PUBLIC_*` variables are available, and they are **inlined at build time**.
- Never store secrets in `NEXT_PUBLIC_*` and never commit a real `.env`.

---

## Notes / Maintenance

- **Responsive system** lives entirely in `src/app/globals.css` as a breakpoint ladder:
  `≤1320 / ≤1180 / ≤950 / ≤900 (tablet) / ≤760 (mobile) / ≤560 / ≤440`.
- **Header top strip** is a CSS marquee scrolling **right-to-left**
  (`.marquee-track` → `@keyframes marquee-rtl`).
- Keep new images under `public/images/` and reference them as `/images/<file>`.
- After editing, run `npm run typecheck` and `npm run build` to confirm the export still passes.
```
