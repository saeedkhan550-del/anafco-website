# ANAFCO Technologies — Website

Premium SaaS marketing site for ANAFCO Technologies. Dark-first design (wondermakers-inspired) with a light-mode toggle, built with Next.js, Tailwind CSS and Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Stack

- **Next.js 14** (App Router, static export-ready)
- **Tailwind CSS** with semantic CSS-variable design tokens (dark/light)
- **Framer Motion** for scroll reveals, counters, magnetic CTAs, marquee
- **next-themes** for persisted dark/light toggle
- **Inter** (body) + **Space Grotesk** (display) via `next/font`

## Editing content

All copy, services, industries, case studies, testimonials, FAQs and tech
stack live in [`lib/content.js`](lib/content.js). Update that one file — no
component edits needed.

## Design tokens

Colors, spacing and type scale are defined in:
- [`app/globals.css`](app/globals.css) — CSS variables for light/dark palettes
- [`tailwind.config.js`](tailwind.config.js) — semantic color names, fluid type scale

Accent color: electric lime `#C6F24E` (dark) / lime-600 (light), secondary violet `#7C5CFC`.

## Structure

```
app/
  layout.js        # fonts, metadata, ThemeProvider
  page.js          # homepage section assembly
  globals.css      # design tokens + base styles
components/
  navbar.jsx       # sticky nav, scroll progress, mobile drawer
  footer.jsx
  theme-toggle.jsx
  icons.jsx        # inline SVG icon set (no icon dependency)
  ui.jsx           # Reveal, Stagger, Counter, Magnetic, SectionHeader
  sections/        # hero, trusted-by, services, solutions, industries,
                   # process, tech-stack, case-studies, testimonials, faq, cta
lib/
  content.js       # all editable site content
```

## Sections

Hero · Trusted By · Services · Featured Solutions · Industries · Process ·
Tech Stack · Portfolio/Case Studies · Testimonials · FAQ · Contact CTA · Footer

> Content is realistic placeholder data — replace client names, metrics,
> testimonials and the contact form handler before going live. The CTA form
> currently prevents default; wire it to your backend / email service.
# anafco-website
