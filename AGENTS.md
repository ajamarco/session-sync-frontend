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
- Global client state: Redux Toolkit (`@reduxjs/toolkit`) with `react-redux`. See "State management" below.
- Icons: `lucide-react`. Import icons by name (`import { Menu, User } from "lucide-react"`), size via the `size` prop, colour via Tailwind `text-*` classes. Do not add another icon library.
- Dates: `dayjs` for date maths and formatting. Calendar UI: `react-day-picker` (v10), used **unstyled** and styled entirely through its `classNames` prop with theme tokens; do not import its `style.css`.
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

- `src/app/layout.tsx`: root layout, renders `<Navbar />` above `{children}`, both inside `<StoreProvider>`. Metadata title is "SessionSync".
- `src/app/page.tsx`: landing page; only composes section components in order (Hero, Problem, Features, HowItWorks, Audience, Pricing, Comparison, CallToAction) followed by `Footer`.
- `src/components/Navbar.tsx`: sticky top bar with three sections. Left: logo placeholder text "my logo" (real logo TBD). Centre: Dashboard (`/dashboard`) and Classes (`/classes`). Right: lucide `User` avatar plus "Login / Register" (`/login`) or "Logout". Reads `selectIsLoggedIn` from the Redux auth slice (**mock only, no real auth yet**); Logout dispatches `loggedOut()`. Below the `md` breakpoint the centre links collapse into a hamburger menu. It is a Client Component because of the menu `useState` and the Redux hooks.
- `src/components/landing/*.tsx`: one file per landing section, so the layout is easy to reorder or replace. Content (copy, plans, rows) sits in hoisted module-level constant arrays at the top of each file. `#features` and `#pricing` are anchor ids with `scroll-mt-16` to clear the sticky navbar.
- `src/app/classes/page.tsx`: `/classes` route; only renders `<Classes />`.
- `src/components/classes/Classes.tsx`: classes page content. A single-column list of `ClassCard`s built from a hoisted **mock** `classes` array (id, title, subtitle). The container uses `mx-auto w-full max-w-7xl px-4 sm:px-6` so it lines up with the navbar; `w-full` is required because the body is a flex column and `mx-auto` alone would shrink the container to its content.
- `src/components/classes/ClassCard.tsx`: full-width horizontal card (stacks on mobile). Left: placeholder instructor avatar (same lucide `User` in a `bg-foreground/10` circle as the navbar), then title above subtitle. Right (`sm:w-1/5`): primary "Book" link to `/classes/[id]/book` with a text-style "+ details" button below it.
- `src/components/classes/ClassDetailsButton.tsx`: Client Component holding the "+ details" button and a native `<dialog>` (right-hand drawer below `sm`, centred modal from `sm` up). The details content is a placeholder.
- `src/app/classes/[id]/book/page.tsx`: `/classes/[id]/book` route; only renders `<Booking />`. It does not read `params` yet. In Next 16 `params` is a Promise, so type it with `PageProps<"/classes/[id]/book">` and `await params` once it is needed.
- `src/components/classes/Booking.tsx`: booking page (Server Component). A "Back to classes" link (lucide `ArrowLeft`) to `/classes`, `<h1>Booking</h1>`, then a three-step accordion built from a hoisted `steps` array: "Choose date & time", "Payment", "Confirmation". For now step 1 is always open and steps 2 and 3 are always disabled. Step progression is not implemented.
- `src/components/booking/BookingStep.tsx`: one accordion section (`step`, `title`, `isOpen`, `isDisabled`, `children`). It has a numbered circle and title header, and renders the body only when open. Disabled steps are dimmed (`opacity-50`). The header is not clickable yet; when progression is added, make it a `<button aria-expanded>` and set `disabled` on that button for locked steps (`aria-disabled` is not valid on `<section>`).
- `src/components/booking/ChooseDateTime.tsx`: content of step 1. A Client Component that loads `Calendar` via `next/dynamic` with `ssr: false` and a skeleton placeholder. The calendar is client-only on purpose: "today" depends on the user's timezone, so server (UTC) prerendering could mismatch on hydration. Next 16 only allows `ssr: false` inside Client Components.
- `src/components/calendar/`: reusable date and time-slot picker, ported from an earlier app.
  - `Calendar.tsx` (client) composes the parts and holds the react-day-picker `classNames` map.
    - Layout: one borderless panel, with the month on the left and the times on the right, split by a divider. It stacks below `md`.
    - Before a day is picked, the right side shows an empty state ("Pick a day to see available times.").
    - Month header: the caption is on the left and the arrows are grouped on the right (the default nav, absolutely positioned).
    - Day styling: today gets a primary ring, the selected day is filled, and every control has a primary `focus-visible` outline. Day state is styled through the cell's `data-selected`, `data-disabled` and `data-today` attributes. The prev/next buttons use `aria-disabled`, not `disabled`.
    - Size: cells are 40px below `sm` and 44px from `sm` up, so the month fits at 375px.
    - Motion: the times panel is keyed by date and fades in through `starting:` (`@starting-style`), only with `motion-safe`.
  - `CalendarMonth.tsx` wraps `DayPicker`.
  - `CalendarSlots.tsx` shows the date heading and the user's timezone (from `Intl`; safe because the calendar is client-only). The slots are grouped into "Morning" and "Afternoon". Its optional `bookedSlots` prop is reserved for backend availability.
  - `useCalendar.ts` holds the selected date and slot state and accepts an `onSelectTimeSlot(date, slot)` callback.
  - `utils.ts` provides `getDateRange` (today to +6 months, computed per call), `isWeekend`, `getTimeSlots` (mock 9:00 to 17:00, 30-minute steps) and `getDateKey`.
  - Weekends and dates outside the range are disabled. Availability is **mock**.
- The landing page is a **placeholder**; the final design has not been agreed. Copy not taken from the deck (hero headline, "how it works" steps, "Maria Lopez" mock card) is our own wording.

## State management (Redux Toolkit)

- `src/lib/store.ts`: `makeStore()` factory (not a module-level singleton, so server requests never share state) plus the `AppStore`, `RootState` and `AppDispatch` types. Register every feature reducer in its `reducer` map.
- `src/lib/hooks.ts`: typed `useAppDispatch`, `useAppSelector`, `useAppStore`. Always use these, never the plain react-redux hooks.
- `src/app/StoreProvider.tsx`: Client Component that creates the store once (lazy `useState`) and renders `<Provider>`. Wraps the navbar and page content in the root layout.
- Features: one folder per feature, `src/lib/features/<name>/<name>Slice.ts`, built with `createSlice`. Name actions as past-tense events (`loggedIn`, `loggedOut`), declare selectors in the slice's `selectors` field, export actions and selectors by name and the reducer as default.
- Current slices: `auth` (`isLoggedIn`, `user`; mock, initial state logged out).
- **Planned: `booking` slice.** It will save the selected date and time slot so that the booking steps (payment, confirmation) can read them. Store the date as a `YYYY-MM-DD` string (`getDateKey`), not a `Date`, because Redux state must be serializable. Until then the selection lives in local state in `useCalendar`. The dispatch goes in the `onSelectTimeSlot` callback passed to `Calendar` from `ChooseDateTime`, which is also where opening the Payment step will be triggered.
- Only Client Components can read or dispatch to the store. Server Components fetch their data directly; put data in Redux only when it is client state shared across components. When the backend exists, consider RTK Query for server data rather than hand-written thunks.

## Conventions

- Default to **Server Components**. Add `"use client"` only where state, effects or browser APIs are needed, and keep that boundary as small as possible.
- Declare React components as **arrow-function constants**, not with the `function` keyword: `const ClassCard = ({ title, subtitle }: ClassCardProps) => { ... };` followed by `export default Navbar;`. This applies to all new components, including pages and layouts (`const Page = () => ...; export default Page;`). Existing `function` components are not being refactored; convert one only when you are already editing it substantially.
- Use `next/link` for internal navigation; plain `<a>` only for anchors and `mailto:`.
- Keep components mobile-first and responsive (check ~375px width; no horizontal page scroll; wide tables scroll inside an `overflow-x-auto` wrapper). Support light and dark mode through the theme tokens.
- Match the surrounding code style (double quotes, semicolons, 2-space indent, Tailwind classes inline, no CSS modules).
- Follow the performance rules in `.agents/skills/vercel-react-best-practices/` (see its `SKILL.md`), e.g. avoid barrel-file imports, hoist static JSX/data, fetch in parallel on the server.
- Not built yet: `/login` and `/dashboard` routes (links to them 404), real class data, the `booking` Redux slice, booking step progression, the Payment and Confirmation steps, real availability and booked slots, class details content, real authentication (the auth slice is a mock with no way to log in yet), the backend, tests.

## Commands (run from `frontend/`)

- `npm run dev`: dev server at http://localhost:3000
- `npm run lint`: ESLint
- `npm run build`: production build; run lint and build before declaring work done.
- `npm install` currently reports 5 high-severity audit findings that have not been investigated.
