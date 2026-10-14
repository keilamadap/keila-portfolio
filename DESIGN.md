# Design system — Keila Amada portfolio

## 1. Design direction — "The Working Edition"

The site is treated as a **small technical publication** rather than a developer portfolio.
Every page is an "edition": a masthead, a dateline, numbered sections (§ 01, § 02…),
folio-style page labels and running heads. Case studies read like long-form features.

The mix the brief asked for, translated into rules:

| Share | What it means in practice |
| --- | --- |
| **70% product / engineering** | Strict 12-column grid, generous whitespace, real hierarchy, content-first layouts, structured case studies (Context → Lessons). Nothing decorative competes with reading. |
| **20% retro editorial** | Serif display type with optical sizing, hairline rules, section numbers, mono "metadata" labels, a few small "window" frames that nod to early desktop UIs (title bar + filename) — never a literal OS imitation. |
| **10% feminine personality** | A wine accent instead of the usual blue, dusty-pink used *only* as a tint (text selection, placeholder highlights, stamp fills), italic serif emphasis, soft Fraunces curves, round rubber-stamp marks. |

Things deliberately avoided: gradients, neon, glow, glassmorphism, card grids for everything,
skill clouds, progress bars for skills, dark-by-default "hacker" look, heavy animation.

## 2. Color tokens

One accent, one tint, a warm neutral ramp. Plum / cherry were considered and left out:
two reds plus a purple would fight each other. Wine carries the identity alone.

| Token | Day edition | Night edition | Use |
| --- | --- | --- | --- |
| `--paper` | `#F3EEE4` | `#161312` | Page background |
| `--paper-2` | `#EAE3D6` | `#201B19` | Sunken surfaces, covers, code |
| `--ink` | `#1D1A18` | `#EEE7DC` | Headlines, body |
| `--ink-2` | `#4B4541` | `#BDB3A8` | Secondary text (graphite) |
| `--ink-3` | `#6B635E` | `#968C82` | Mono labels, metadata |
| `--rule` | ink @ 16% | ink @ 16% | Hairlines |
| `--accent` | `#7B1E2E` wine | `#E0959E` rose-wine | Links, emphasis, stamps |
| `--accent-ink` | `#F3EEE4` | `#161312` | Text on accent |
| `--blush` | `#E8D3CE` | `#3A2226` | Tint only: selection, placeholders |

All text pairs pass WCAG AA (body pairs pass AAA). Dark mode is a "night edition":
same structure, warm near-black paper, accent lifted to keep contrast.

## 3. Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display / headings | **Fraunces** (variable: `opsz`, `SOFT`) | Optical size 144 at display sizes, softened curves, italic for emphasis words. The main carrier of identity. |
| Body / UI | **Instrument Sans** | Neutral, slightly condensed, very legible at small sizes. |
| Technical details | **IBM Plex Mono** | Only labels, metadata, filenames, dates. Uppercase + tracking. Never paragraphs. |

Fluid scale (`clamp`): display 2.75 → 7rem · h1 2.5 → 5rem · h2 2 → 3.5rem ·
h3 1.375 → 1.75rem · body 1.0625rem/1.6 · small .875rem · label .6875rem (mono, +0.12em).

## 4. Spacing & layout

* 4px base unit (Tailwind default scale).
* Container: max 1240px, inline padding `clamp(1.25rem, 4vw, 3rem)`.
* Grid: 12 cols desktop · 6 tablet · 4 mobile (gaps 24 / 20 / 16px).
* Section rhythm: `clamp(4.5rem, 3rem + 6vw, 9rem)` block padding, separated by a full hairline + section label.
* Measure: long-form text capped at ~68ch.

### Mobile as its own layout
* Navigation becomes a full-screen **table of contents** with page numbers (below 1024px).
* Experience ledger rows become stacked entries with the period on top; details use native `<details>`.
* Numbers strip becomes a 2-column grid of large numerals.
* Hero places the portrait and the status window side by side under the headline.

## 5. Page structure

Navigation: **Experience | About | Contact**

* `/` — Hero · 01 Experience · 02 About (with a small "currently exploring" note) · 03 Events / Community · 04 Contact
* `/experience` — Numbers, every role in full, capabilities, education
* `/about` — Portrait, bio, languages, interests, events with photos, off-the-clock note
* `/colophon` — How the site is made: type, color, stack, principles

Case Studies and Writing are archived in `archive/` until there is real data to publish.
AI appears only in the hero status and the "currently exploring" note.

## 6. Reusable components

* **ui/** `Container`, `SectionHeading`, `MonoLabel`, `StatusBadge`, `Stamp`, `RetroWindow`, `ArrowLink`, `Reveal` (client), `RichText` (highlights `[placeholders]`)
* **layout/** `Header`, `SiteNav` (client), `Footer`, `ThemeToggle` (client), `ThemeScript`, `SocialLinks`, `SkipLink`
* **sections/** one file per home section (`Hero`, `Experience`, `ShortAbout`, `Community`, `Contact`)
* **features/** `EventItem`, `ExploringTicker` (client)

Client components are limited to: navigation (active state + mobile menu), theme toggle,
scroll reveal and the small "currently exploring" ticker. Everything else is a Server Component.

## 7. Motion

Motion (`motion/react`, `LazyMotion` + `domAnimation` to keep the bundle small):
12px reveal on scroll (once), a soft word transition in the hero status window,
1–2px hover lift on cards and arrow nudges on links (CSS). All motion respects
`prefers-reduced-motion`.
