<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# SessionSync frontend: project guide

Everything below is project-specific and maintained by us (outside the auto-managed block above). Update it when conventions change.

## What we are building

SessionSync is an all-in-one **white-label platform for professional video sessions** (booking, payments, built-in video, auto recording, email/SMS notifications) for tutors, consultants and coaches. Source of truth for product facts, pricing and positioning: `../SessionSync_PitchDeck.pdf` (repo root). The landing page is customer-facing, so investor content (market size, financials, go-to-market, the ask) is deliberately left out.

Repo layout: `frontend/` (this Next.js app), `backend/` (empty so far). The parent folder is not a git repo; `frontend/` has its own `.git` created by `create-next-app`.

## Stack and versions

- Next.js 16 (App Router, `src/` dir), React 19, TypeScript, Tailwind CSS v4, ESLint, npm.
- Import alias: `@/*` maps to `src/*`.
- Icons: `lucide-react`. Import icons by name (`import { Menu, User } from "lucide-react"`), size via the `size` prop, colour via Tailwind `text-*` classes. Do not add another icon library.
- Tailwind v4 is configured in CSS (no `tailwind.config.*`). Use v4 syntax, e.g. `bg-linear-to-br` rather than `bg-gradient-to-br`.
- Fonts: Geist is loaded in `src/app/layout.tsx`, but typography is **deliberately undecided**; do not introduce custom fonts or a type scale until agreed.

## Theme and colours (important)

All brand colours live in **`src/app/theme.css`** (imported by `src/app/globals.css`). It has light values in `:root`, dark values in a `prefers-color-scheme: dark` block, and an `@theme inline` block that exposes them as Tailwind utilities. To rebrand, edit only that file.

| Token                                           | Utilities                                                                  | Use for                                                                    |
| ----------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `background` / `foreground`                     | `bg-background`, `text-foreground`                                         | page background, main text                                                 |
| `surface`                                       | `bg-surface`                                                               | alternate section background                                               |
| `muted`                                         | `text-muted`                                                               | secondary text and icons                                                   |
| `border`                                        | `border-border`                                                            | card and divider borders                                                   |
| `primary`, `primary-foreground`, `primary-soft` | `bg-primary`, `text-primary-foreground`, `bg-primary-soft`, `text-primary` | buttons, links, highlights, text on primary, tinted icon/badge backgrounds |
| `brand-from`, `brand-to`, `on-brand`            | `from-brand-from to-brand-to`, `text-on-brand`                             | gradient banners and text on them                                          |
| `danger`                                        | `text-danger`, `bg-danger/10`                                              | recording/error states                                                     |

Rules:

- Never hardcode hex values or Tailwind palette colours (`indigo-600`, `white`, `red-500`, ...) in components. Use the tokens above; opacity modifiers are fine (`bg-primary/20`).
- Faded `foreground` (`bg-foreground/5`, `hover:bg-foreground/10`, `border-foreground/20`) is acceptable for neutral hover and outline states.
- If you need a new colour role, add it to `theme.css` (light, dark, and `@theme inline`) first, then use the utility, and add a row to the table above.
- Current look: indigo/violet accent, rounded-2xl bordered cards, soft gradient blur behind the hero, hover lift on cards, `max-w-7xl` containers with `px-4 sm:px-6`.

## Code structure

- `src/app/layout.tsx`: root layout, renders `<Navbar />` above `{children}`. Metadata title is "SessionSync".
- `src/app/page.tsx`: landing page; only composes section components in order (Hero, Problem, Features, HowItWorks, Audience, Pricing, Comparison, CallToAction) followed by `Footer`.
- `src/components/Navbar.tsx`: sticky top bar with three sections. Left: logo placeholder text "my logo" (real logo TBD). Centre: Dashboard (`/dashboard`) and Classes (`/classes`). Right: lucide `User` avatar plus "Login / Register" (`/login`) or "Logout". Takes an `isLoggedIn` prop (default `false`, **mock only, no real auth yet**; Logout does nothing). Below the `md` breakpoint the centre links collapse into a hamburger menu. It is a Client Component only because of the menu `useState`.
- `src/components/landing/*.tsx`: one file per landing section, so the layout is easy to reorder or replace. Content (copy, plans, rows) sits in hoisted module-level constant arrays at the top of each file. `#features` and `#pricing` are anchor ids with `scroll-mt-16` to clear the sticky navbar.
- `src/app/classes/page.tsx`: `/classes` route; only renders `<Classes />`.
- `src/components/classes/Classes.tsx`: classes page content. `<h1>Classes</h1>` plus a single-column list of `ClassCard`s built from a hoisted **mock** `classes` array (title, subtitle). The container uses `mx-auto w-full max-w-7xl px-4 sm:px-6` so it lines up with the navbar; `w-full` is required because the body is a flex column and `mx-auto` alone would shrink the container to its content.
- `src/components/classes/ClassCard.tsx`: full-width horizontal card (stacks on mobile). Left: placeholder instructor avatar (same lucide `User` in a `bg-foreground/10` circle as the navbar), then title above subtitle. Right (`sm:w-1/5`): primary "Book" button with a text-style "+ details" button below it. Both buttons are **inert** (no booking/details routes or backend yet).
- The landing page is a **placeholder**; the final design has not been agreed. Copy not taken from the deck (hero headline, "how it works" steps, "Maria Lopez" mock card) is our own wording.

## Conventions

- Default to **Server Components**. Add `"use client"` only where state, effects or browser APIs are needed, and keep that boundary as small as possible.
- Declare React components as **arrow-function constants**, not with the `function` keyword: `const Navbar = ({ isLoggedIn = false }: NavbarProps) => { ... };` followed by `export default Navbar;`. This applies to all new components, including pages and layouts (`const Page = () => ...; export default Page;`). Existing `function` components are not being refactored; convert one only when you are already editing it substantially.
- Use `next/link` for internal navigation; plain `<a>` only for anchors and `mailto:`.
- Keep components mobile-first and responsive (check ~375px width; no horizontal page scroll; wide tables scroll inside an `overflow-x-auto` wrapper). Support light and dark mode through the theme tokens.
- Match the surrounding code style (double quotes, semicolons, 2-space indent, Tailwind classes inline, no CSS modules).
- Follow the performance rules in `.agents/skills/vercel-react-best-practices/` (see its `SKILL.md`), e.g. avoid barrel-file imports, hoist static JSX/data, fetch in parallel on the server.
- Not built yet: `/login` and `/dashboard` routes (links to them 404), real class data, booking and class details, authentication, the backend, tests.

## Commands (run from `frontend/`)

- `npm run dev`: dev server at http://localhost:3000
- `npm run lint`: ESLint
- `npm run build`: production build; run lint and build before declaring work done.
- `npm install` currently reports 5 high-severity audit findings that have not been investigated.
