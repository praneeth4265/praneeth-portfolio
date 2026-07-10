# Compulsion Portfolio

## What This Is

A high-end React portfolio website for a Digital Marketer with a Computer Science Engineering UG and Digital Marketing PG. The site is engineered for "cognitive compulsion" — every animation, layout decision, and interaction is designed to guide the user's attention, maximize engagement, and leave a lasting impression. It serves as both a professional portfolio and a living proof-of-craft for dual audiences: potential employers and freelance clients.

## Core Value

The portfolio must feel like an *experience*, not a webpage — visitors should be unable to look away, compelled to scroll deeper, and leave remembering the person behind it.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section with dramatic entrance animation (Aurora/Galaxy background, ScrambledText + DecryptedText name reveal)
- [ ] About Me section with bio, personal narrative, and scroll-linked reveals
- [ ] Projects section — dynamic, data-driven case study showcase (Magic Bento grid + Tilted Cards)
- [ ] Individual project detail pages with route transitions
- [ ] Skills / Tech stack visualization with interactive elements
- [ ] Experience / Timeline section with scroll-triggered animations
- [ ] Blog / Writing section with post previews
- [ ] Testimonials / Social proof section
- [ ] Contact / CTA section engineered for maximum conversion
- [ ] Dark/light section alternation for contrast-driven visual rhythm
- [ ] Full reactbits.dev component integration (Aurora, Particles, Galaxy, Ballpit, LiquidChrome, RotatingText, ScrollReveal, ScrambledText, TrueFocus, DecryptedText, TextCursor, TextPressure, Shuffle, TextType, BlurText, SplitText, Antigravity, CursorTrail, BlobCursor, LineSidebar, ScrollStack, BubbleMenu, MagicBento, PillNav, TiltedCard, GooeyNav)
- [ ] Framer-motion fallbacks for any reactbits components with unavailable APIs
- [ ] Strictly generic PLACEHOLDER tags for all personal content
- [ ] Data-driven project system — add/remove projects via data files
- [ ] Separation of animation logic/wrappers from core UI rendering
- [ ] Hybrid navigation — scrolling hero + separate project detail pages
- [ ] Responsive design across all viewport sizes
- [ ] Custom cursor interactions (BlobCursor / CursorTrail)

### Out of Scope

- SSR / SSG / SEO optimization — user shares links directly, no organic search needed
- CMS integration — content managed via local data files, not a headless CMS
- Authentication / user accounts — static portfolio, no login required
- E-commerce / payment features — not a transactional site
- Backend API — fully client-side application
- Dark/light mode toggle — using alternating sections by design, not user-switchable theme

## Context

- **Professional identity**: Digital Marketer with CS Engineering background — the portfolio must communicate both technical credibility and marketing savvy
- **Audience**: Dual — hiring managers/recruiters AND freelance clients/brands
- **Content types**: Campaign results with ROI metrics, creative work (ad designs, brand identities), strategy + execution documentation, technical marketing (SEO audits, analytics dashboards, automation workflows)
- **Aesthetic**: Ultra-modern, dark-mode-dominant with light section alternation, neon/tech-savvy accents, clean typography
- **Component library**: `reactbits.dev` as primary source for backgrounds, text animations, animations, and UI components
- **Animation philosophy**: Every animation serves a cognitive purpose — drawing attention to CTAs, providing state feedback, easing cognitive load during transitions. No decoration-only motion.
- **Psychological UI principles**: Fitts's Law (CTA sizing/placement), Hick's Law (reducing choice overload), Von Restorff effect (making key elements stand out)

## Constraints

- **Stack**: Vite + React (functional components, hooks) — chosen for speed, lightweight builds, and SPA suitability
- **Styling**: Tailwind CSS or CSS Modules for responsive, maintainable styling
- **Animation**: reactbits.dev components as primary; framer-motion (spring physics, not linear tweens) as fallback
- **Content**: All personal text, images, and links wrapped in PLACEHOLDER tags (e.g., `<PLACEHOLDER_USER_NAME>`)
- **Architecture**: Strict separation of presentation and data; animation wrappers separate from core UI components
- **Performance**: Animations must not degrade performance — lazy loading, code splitting, and efficient re-renders required

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Vite + React over Next.js | No SSR/SEO needed; Vite is faster for SPA development and smaller bundles | — Pending |
| reactbits.dev as primary component library | User requirement — provides high-end, pre-built animation components that match the premium aesthetic | — Pending |
| Dark/light section alternation over toggle | Creates visual rhythm and contrast-driven cognitive breaks; serves the "engineered compulsion" goal better than user-controlled theming | — Pending |
| Dynamic data-file-driven projects | Allows easy addition/removal of projects without code changes; scales with career growth | — Pending |
| Hybrid navigation (scroll + detail pages) | Scroll provides narrative flow for first impression; detail pages allow deep project exploration | — Pending |
| PLACEHOLDER tag system | Enables reuse as a template; cleanly separates content from structure | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-10 after initialization*
