# Keila Amada — Portfolio

Product-minded Frontend Engineer portfolio. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion.
Design decisions are documented in [`DESIGN.md`](./DESIGN.md).

## Run it

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to your domain
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Deploys as-is to Vercel (or any Node host). Every page is statically generated.

## Where to edit content

Everything you'd want to change lives in `src/content/` — no layout code needed.

| What | File |
| --- | --- |
| Name, hero copy, about text, contact copy, email, CV path | `src/content/site.ts` |
| Navigation | `src/content/site.ts` → `navigation` |
| Roles + the numbers strip | `src/content/experience.ts` |
| Capabilities + education | `src/content/skills.ts` |
| Events, photos, "currently exploring" | `src/content/community.ts` |
| Photos | `src/assets/images/` (imported, so next/image optimizes them) |

### Placeholders

Anything written as `[Add …]` is a placeholder. The site renders it with a pink highlight so nothing
ships unnoticed. Search for `[Add` to find them all.

### Case Studies and Writing

Both were removed from the live site and kept in `archive/` (not built). When you have real data,
follow `archive/README.md` to bring them back — the structure and placeholders are ready.

### Adding an event

Drop the photo in `src/assets/images/events/`, import it at the top of `community.ts` and add an entry
(name, kind, location, date, photos, note, takeaway).

## Structure

```
src/
  app/            routes, metadata, sitemap, robots, OG image, icon
  components/
    ui/           primitives (SectionHeading, Stamp, RetroWindow, Reveal…)
    layout/       Header, SiteNav, Footer, ThemeToggle…
    sections/     home page sections
    features/     events, hero
  content/        all copy and data (typed)
  lib/            data access, metadata helpers, fonts, utils
  styles/         globals.css — design tokens + utilities
  types/          content types
  assets/         fonts (self-hosted, SIL OFL) and images
archive/          Case Studies + Writing, parked for later
```

## Notes

* Fonts (Fraunces, Instrument Sans, IBM Plex Mono) are self-hosted via `next/font/local` — no requests to Google.
* Dark mode ("Night edition") follows the OS by default; the toggle remembers the choice.
* Photo metadata (EXIF/GPS) was stripped from the event photos.
# keila-portfolio
