# Ravi Personal Site

A premium minimal personal website for Ravi (丘宇), built with Next.js, TypeScript, Tailwind CSS, and static export for GitHub Pages.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export via `next build`

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Production build

For a plain static export:

```bash
npm run build
```

The static output is written to `out/`.

## GitHub Pages notes

- The app is configured for static export with `output: "export"`.
- In production, `BASE_PATH` can be set to the repository name, for example `/ravi-personal-site`.
- Set `NEXT_PUBLIC_SITE_URL` to the final public site URL so canonical URLs, sitemap entries, and social metadata are correct.
- Replace placeholder contact links and proof copy before launch.

## Deployment

- CI workflow: install, lint, build
- Pages workflow: builds with a repository base path and deploys the `out/` folder to GitHub Pages

If this repo is a project Pages site, enable GitHub Pages with the GitHub Actions source in repository settings.
