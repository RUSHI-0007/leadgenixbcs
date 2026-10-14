# LEADGENIX BCS — B2B Lead Generation & ABM Website

Production-quality front-end demo website for **LEADGENIX BCS** (`leadgenixbcs.com`), a specialized B2B lead generation and account-based marketing company founded in 2026 serving technology OEMs, distributors, and channel partners across India.

The visual system has been completely restyled following the **static.app** design aesthetic: hand-drawn marker accents, organic brush-stroke backgrounds, torn section edges, realistic UI window mockups, strictly alternating single-accent sections, and tinted shadows.

---

## 🎨 Design System & Tokens

### Typography (Google Fonts via `next/font/google`)
- **Primary Font**: `Hanken Grotesk` (Headings `800` extra-bold with negative tracking, Body `400` / `500`)
- **Mono Font**: `JetBrains Mono` (Used strictly for small code-tag chips, window titles, and eyebrow labels)
- **Type Scale**:
  - **H1**: `clamp(48px, 6vw, 84px)` / line-height `1.02` / tracking `-0.04em` / weight `800`
  - **H2**: `clamp(36px, 4.2vw, 56px)` / line-height `1.05` / tracking `-0.035em` / weight `800`
  - **Body**: `19–20px` / line-height `1.55` (responsive mobile clamp `16–18px`)
  - **Small / Meta**: `13–15px`

### Color Palette (CSS Variables & Tailwind Tokens)
- **`--ink`**: `#16231D` (Text, heavy grotesk headings, dark solid buttons)
- **`--ink-soft`**: `#4A5851` (Subheadings, body text, secondary labels)
- **`--green`**: `#1E9E62` (Primary green accent)
- **`--green-tint`**: `#E6F6EE` (Soft green background tint)
- **`--indigo`**: `#4B55D8` (Alternating indigo accent)
- **`--indigo-tint`**: `#EEF0FF` (Soft indigo background tint)
- **`--highlight`**: `#FFE770` (Yellow highlighter marker)
- **`--paper`**: `#FFFFFF` (Surface white for cards and front window frames)
- **`--mist`**: `#F6F7FC` (Cool neutral alternate section background)
- **`--mint`**: `#F4FAF7` (Light mint result cards & closing CTA background)
- **`--line`**: `#E4E7EF` (Subtle 1px border dividers)

### Strict Single-Accent Rule
Each section uses **exactly ONE accent** (Green OR Indigo), never both:
- **Hero**: Green
- **Worked With Strip**: Neutral Ink
- **Stats**: Mist background with Green numerical units
- **Row A (Find the right accounts)**: Indigo
- **Row B (Events and webinars, filled)**: Green
- **Row C (Sales, handled)**: Indigo
- **Services Grid**: Indigo (with SegmentedTabs)
- **Results Strip**: Green (with Mint cards & highlighted metrics)
- **Process Timeline**: Indigo (01–04 steps & hand-drawn curved arrows)
- **FAQ**: Neutral Ink
- **Closing CTA**: Green (Mint background & Green BrushBg)

### Shapes & Shadows
- **Buttons**: `rounded-[10px]`, weight `700`, padding `16px 26px` (Hero `18px 30px`), tinted shadow: `0 10px 24px -8px rgba(accent, 0.45)`
- **Feature Cards**: `rounded-[16px]`, 1px `--line` border, tinted shadow: `0 12px 32px -14px rgba(75, 85, 216, 0.22)`
- **Window Mockups**: `rounded-[18px]`, subtle 1px border, 3 gray traffic-light dots (`#D3D8E2`, `#B0B7C6`, `#9BA3B5`), centered mono title, soft tinted elevation shadow: `0 24px 60px -15px rgba(22, 35, 29, 0.14)`

---

## 🧩 Signature Components

All core visual elements are isolated into reusable, accessible components:

1. **`<Scribble variant="underline|circle" tone="green|indigo|ink" />`**
   - Inline SVG with `feTurbulence` (baseFrequency `0.02`) + `feDisplacementMap` (scale `3`) for natural hand-wobble irregularity.
   - Smooth draw-on animation when scrolled into view (`stroke-dashoffset` ~700ms).
   - Fully respects `prefers-reduced-motion` (renders immediately static).
   - Strictly limited to max ONE scribble per heading, and circle variant at most once per page.

2. **`<Highlight>`**
   - Renders a yellow marker (`#FFE770`) behind key phrases and numerical metrics.
   - Uses a `-2deg` skewed pseudo-element with uneven border-radius and `mix-blend-mode: multiply` for an authentic felt-tip pen look.

3. **`<BrushBg tone="green|indigo" shape="1|2|3" />`**
   - Large organic swoosh and ring vector shapes positioned behind section headings.
   - Renders at 40–60% opacity of the tint color, with contrast strictly exceeding WCAG AA standards.
   - Ultra-lightweight (under 3 KB per shape).

4. **`<TornEdge position="top|bottom" fill="..." />`**
   - Seamless SVG paper-tear divider edge (28–36px tall) used between section transitions.

5. **`<WindowFrame title="...">`**
   - Realistic app-window container with 3 macOS-style traffic-light dots and small centered gray title.
   - Used for the hero stacked campaign summary, Row A appointment status list, and Row C sales stepper.

6. **`<SegmentedTabs>`**
   - Pill-shaped track in tint color (`--indigo-tint`) with white active pill, subtle shadow, and smooth 200ms transitions.

7. **`<EdgeFadeMarquee>`**
   - Infinite auto-scrolling horizontal strip with CSS `mask-image` gradient fades on the left and right edges.
   - Pauses on user hover, automatically falls back to an accessible static scroll container when `prefers-reduced-motion` is detected.

8. **`<FloatingButton>`**
   - Fixed round 56px `--green` action button at the bottom-right corner with mail icon, linking directly to `/contact`.
   - Includes full accessibility `aria-label="Book a consultation"`.

9. **`<AnimatedCounter value={...} prefix="..." suffix="..." />`**
   - Smoothly counts up from 0 to target number when scrolled into view using Framer Motion with ease `[0.16, 1, 0.3, 1]`.
   - Used for the key performance stats (`10+ Years`, `$250M+`, `14%`, `6+ Industries`).
   - Automatically renders static final values when `prefers-reduced-motion` is active.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict mode, zero `any`)
- **Styling**: Tailwind CSS + Custom CSS Variables in `app/globals.css`
- **Icons**: `lucide-react` (Bare line icons, stroke 1.5, 28px, no tinted background boxes)
- **Animations**: `framer-motion` (Subtle draw-on & tab fades only, respects `prefers-reduced-motion`)
- **Typography**: Google Fonts via `next/font/google` (`Hanken_Grotesk` + `JetBrains_Mono`)
- **Data Architecture**: Decoupled typed data layer (`/data/*.ts`) for zero hardcoded copy in layout files

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build & Lint for Production
```bash
# Check TypeScript and ESLint
npm run lint

# Compile optimized static bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```text
├── app/
│   ├── about/page.tsx          # About Us (Story, pull stat $250M+, Philosophy, Principles, Team)
│   ├── case-studies/page.tsx   # Case Studies (SegmentedTabs filter, mint result cards, window modal)
│   ├── contact/page.tsx        # Contact Us (52px inputs, muted "(required)", why choose checklist)
│   ├── services/page.tsx       # Services (SegmentedTabs, 8 cards with deliverables modal)
│   ├── globals.css             # Theme variables, typography, marker styles, mask fades
│   ├── icon.svg                # Clean vector brand favicon with green "x"
│   ├── layout.tsx              # Root layout (Hanken Grotesk, Header, Footer, FloatingButton)
│   ├── not-found.tsx           # Custom 404 error page in static.app style
│   └── page.tsx                # Home page (Hero, Marquee, Stats, Rows A-C, Services, Results, Process, FAQ, CTA)
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Wordmark "leadgenix bcs" with green "x", uppercase nav, mobile drawer
│   │   └── Footer.tsx          # Mist 3-column footer with wordmark and clean links
│   ├── sections/
│   │   ├── AlternatingRows.tsx  # Rows A, B, C (Alternating indigo/green with window & card mockups)
│   │   ├── CaseStudiesView.tsx  # Case studies tab filter and modal orchestration
│   │   ├── CaseStudyCard.tsx    # Mint result card with highlighted metric and outcome
│   │   ├── CaseStudyModal.tsx   # WindowFrame campaign detail modal with computed rates
│   │   ├── ContactForm.tsx      # White card consultation form with Indian mobile & business email checks
│   │   ├── CtaBand.tsx          # Light mint closing CTA with TornEdge and green BrushBg
│   │   ├── HeroVisual.tsx       # Overlapping dual WindowFrames (Dell CSG & Rubrik campaign summaries)
│   │   ├── HomeFaq.tsx          # 6 client doc questions with clean accordion
│   │   ├── HomeStats.tsx        # Mist background stats strip with TornEdge top and 72px numbers
│   │   ├── ProcessTimeline.tsx  # 4-step process with 01-04 numerals & hand-drawn curved arrows
│   │   ├── ResultsStrip.tsx     # EdgeFadeMarquee of 7 mint case study cards
│   │   ├── ServicesGrid.tsx     # Demand vs Automate SegmentedTabs + 8 service cards
│   │   └── ServicesPageView.tsx # Dedicated services page with interactive deliverables modal
│   └── ui/
│       ├── BrushBg.tsx          # Organic faint SVG brush shapes (shapes 1, 2, 3)
│       ├── Button.tsx           # Accessible button with 10px radius and tinted shadow
│       ├── Card.tsx             # 16px radius cards with line borders and tinted shadows
│       ├── EdgeFadeMarquee.tsx  # Edge-faded auto-scrolling marquee with pause on hover
│       ├── FloatingButton.tsx   # 56px round green consultation action button
│       ├── FormField.tsx        # 52px form fields with muted "(required)" and indigo focus ring
│       ├── Highlight.tsx        # Yellow highlighter felt-tip marker text wrapper
│       ├── LeadGenixLogo.tsx    # "leadgenix" (ink 800 with green "x") + "bcs" (gray 400)
│       ├── Modal.tsx            # Accessible dialog modal
│       ├── Scribble.tsx         # Hand-drawn animated underline or circle SVG
│       ├── SegmentedTabs.tsx    # Pill track with active white pill & shadow
│       ├── TornEdge.tsx         # SVG irregular torn paper edge section divider
│       └── WindowFrame.tsx      # Realistic desktop app window mockup with 3 dots & title bar
├── data/
│   ├── about.ts                # About page copy, $250M+ stat, operating principles, team
│   ├── case-studies.ts         # 7 real campaign case studies with raw figures & outcome copy
│   ├── contact.ts              # Contact copy, service dropdown options, checklist items
│   ├── faq.ts                  # Strictly the 6 approved FAQ items from the client brief
│   ├── home.ts                 # Hero copy, static stats, 8 client wordmarks
│   ├── navigation.ts           # Header nav links, footer items, and site metadata
│   └── services.ts             # 8 service definitions with key deliverables
├── lib/
│   ├── rates.ts                # computeRate(num, den) helper for accurate dynamically computed rates
│   ├── utils.ts                # clsx + twMerge utility
│   └── validation.ts           # Indian mobile and business email domain validation regex
└── tailwind.config.ts          # Custom tokens (ink, green, indigo, mist, mint, highlight, shadows)
```

---

## ✏️ How to Edit Content (`/data`)

All copy and numerical metrics are strictly decoupled from the UI components:

1. **Brand & Navigation**: Edit [`data/navigation.ts`](data/navigation.ts) for site name, header links, and footer links.
2. **Home Page**: Edit [`data/home.ts`](data/home.ts) to adjust hero copy, client strip wordmarks, or statistics.
3. **About Page**: Edit [`data/about.ts`](data/about.ts) for the company story, principles, and team entries.
4. **Services**: Edit [`data/services.ts`](data/services.ts) to update service descriptions and their key deliverables checklist.
5. **Case Studies & Computed Rates**: Edit [`data/case-studies.ts`](data/case-studies.ts).
   - **Important**: Percentages are **computed dynamically in code** via `computeRate(numerator, denominator)` in [`lib/rates.ts`](lib/rates.ts). Raw numbers (e.g. requirements identified, leads accepted, attendance) are supplied as numbers, ensuring mathematically exact rates without manual calculation errors.
6. **FAQ Accordion**: Edit [`data/faq.ts`](data/faq.ts) to update answers to the approved client questions.
7. **Contact Form Options**: Edit [`data/contact.ts`](data/contact.ts) for dropdown services and checklist bullet points.

---

## 🛡️ Form Validation & Security

The consultation form in [`components/sections/ContactForm.tsx`](components/sections/ContactForm.tsx) includes:
- **Official Business Email Check**: Rejects generic public domains (`gmail.com`, `yahoo.com`, `outlook.com`, etc.) with *"Please use your official business email."*
- **Indian Mobile Validation**: Accepts valid 10-digit mobile numbers starting with 6, 7, 8, or 9, with optional `+91` or `0` prefix.
- **Bot Protection**: Hidden honeypot input field (`name="honeypot"`) invisible to sighted users and screen readers.
- **Client Demo State**: Simulates network latency, logs the sanitized submission payload to `console.log`, and displays a clean confirmation state without leaving the page.
