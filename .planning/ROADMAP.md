# Roadmap: Compulsion Portfolio

**Created:** 2026-07-10
**Milestone:** v1.0 — Launch-ready portfolio
**Granularity:** Coarse (3 phases)

## Status

| Phase | Name | Status |
|-------|------|--------|
| 1 | Foundation + Hero + Navigation | Complete |
| 2 | Content Sections + Interactivity | Not Started |
| 3 | Detail Pages + Global Polish | Not Started |

---

### Phase 1: Foundation + Hero + Navigation
**Goal:** Deliver a working single-page app with a jaw-dropping hero section, persistent animated navigation, and the complete data/animation architecture — the visitor can land, be wowed, and navigate.
**Mode:** mvp
**Success Criteria**:
1. Vite + React + Tailwind project boots and renders on localhost
2. Data layer files exist with TypeScript interfaces and PLACEHOLDER content
3. PillNav/GooeyNav navigation renders with smooth scroll to section anchors
4. LineSidebar scroll progress indicator tracks viewport position
5. Hero section displays with Aurora/Galaxy 3D animated background (CSS fallback on mobile)
6. Name reveals via ScrambledText/DecryptedText, role via RotatingText
7. Primary CTA button is visible and styled above the fold
8. SectionWrapper component alternates dark/light themes across sections
9. React Router configured with AnimatePresence page transitions
10. Site is responsive across mobile (360px), tablet (768px), and desktop (1440px+)
11. reactbits component wrappers are organized in `components/reactbits/` with animation logic separated from UI
12. `prefers-reduced-motion` is respected globally

**Requirements:** FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, HERO-01, HERO-02, HERO-03, HERO-04, HERO-05, ANIM-03, ANIM-04, DATA-01, DATA-02, DATA-03, DATA-04

---

### Phase 2: Content Sections + Interactivity
**Goal:** Build all remaining scrollable sections (About, Projects grid, Skills, Experience, Blog, Testimonials, Contact CTA) with their signature reactbits animations — the visitor can scroll through the complete narrative and interact with every section.
**Mode:** mvp
**Success Criteria**:
1. About section renders with ScrollReveal text, TrueFocus/BlurText key phrases, and photo placeholder
2. Projects section displays MagicBento grid of TiltedCard project cards from data file
3. Skills section shows interactive visualization with Antigravity floating tags
4. Experience timeline renders with SplitText/ScrollReveal scroll animations from data file
5. Blog section shows post previews with Shuffle/TextType entrance from data file
6. Testimonials display via ScrollStack with quotes from data file
7. Contact CTA section has TextPressure/DecryptedText headline, LiquidChrome/Ballpit background, and social links
8. CTA buttons follow Fitts's Law sizing and placement
9. BlobCursor/CursorTrail custom cursor active on desktop, disabled on touch devices
10. All sections have hover micro-interactions providing immediate visual feedback
11. All content sourced from TypeScript data files with PLACEHOLDER tags

**Requirements:** ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, PROJ-01, PROJ-02, PROJ-05, SKILL-01, SKILL-02, SKILL-03, EXP-01, EXP-02, EXP-03, BLOG-01, BLOG-02, BLOG-03, TEST-01, TEST-02, TEST-03, CTA-01, CTA-02, CTA-03, CTA-04, ANIM-01, ANIM-02, ANIM-05, DATA-01, DATA-02

---

### Phase 3: Detail Pages + Global Polish
**Goal:** Add project detail pages with route transitions and scroll restoration, then polish the entire site for production — performance optimization, responsive fine-tuning, and accessibility validation.
**Mode:** mvp
**Success Criteria**:
1. Project detail page renders with full case study content (metrics, creative, strategy, technical)
2. Clicking a project card navigates to detail page with animated route transition
3. Back navigation restores previous scroll position without replaying entrance animations
4. Bundle size is under 300KB initial load, under 1MB total with lazy chunks
5. No animation causes frame drops below 30fps on a 2020 mid-range device
6. All PLACEHOLDER tags are consistently named and documented
7. BubbleMenu floating action component is integrated for quick navigation
8. Site passes WCAG AA contrast ratios in both dark and light sections
9. `prefers-reduced-motion` fully tested with all animations disabled gracefully

**Requirements:** PROJ-03, PROJ-04, PROJ-06, ANIM-03

---

## Traceability Summary

| Requirement | Phase |
|-------------|-------|
| FOUND-01 | 1 |
| FOUND-02 | 1 |
| FOUND-03 | 1 |
| FOUND-04 | 1 |
| FOUND-05 | 1 |
| HERO-01 | 1 |
| HERO-02 | 1 |
| HERO-03 | 1 |
| HERO-04 | 1 |
| HERO-05 | 1 |
| ABOUT-01 | 2 |
| ABOUT-02 | 2 |
| ABOUT-03 | 2 |
| ABOUT-04 | 2 |
| PROJ-01 | 2 |
| PROJ-02 | 2 |
| PROJ-03 | 3 |
| PROJ-04 | 3 |
| PROJ-05 | 2 |
| PROJ-06 | 3 |
| SKILL-01 | 2 |
| SKILL-02 | 2 |
| SKILL-03 | 2 |
| EXP-01 | 2 |
| EXP-02 | 2 |
| EXP-03 | 2 |
| BLOG-01 | 2 |
| BLOG-02 | 2 |
| BLOG-03 | 2 |
| TEST-01 | 2 |
| TEST-02 | 2 |
| TEST-03 | 2 |
| CTA-01 | 2 |
| CTA-02 | 2 |
| CTA-03 | 2 |
| CTA-04 | 2 |
| ANIM-01 | 2 |
| ANIM-02 | 2 |
| ANIM-03 | 1, 3 |
| ANIM-04 | 1 |
| ANIM-05 | 2 |
| DATA-01 | 1, 2 |
| DATA-02 | 1, 2 |
| DATA-03 | 1 |
| DATA-04 | 1 |

**Coverage:** 37/37 requirements mapped ✓

---
*Roadmap created: 2026-07-10*
