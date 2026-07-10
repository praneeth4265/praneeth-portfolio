# Pitfalls Research — React Portfolio with Animation-Heavy Stack

## Critical Pitfalls

### 1. Animation Performance Death Spiral
**Warning signs:** Janky scrolling, dropped frames, high CPU/GPU usage on mid-range devices.
**Prevention:**
- Lazy-load 3D backgrounds (Galaxy, Particles) — don't initialize until the section is near viewport.
- Use `will-change: transform` sparingly and only on actively animating elements.
- Prefer CSS transforms over layout-triggering properties (top, left, width, height).
- Profile with Chrome DevTools Performance tab before shipping.
- Set a performance budget: no animation should cause frame drops below 30fps on a 2020 mid-range phone.
**Phase mapping:** Address in Phase 1 (foundation) with lazy loading patterns, validate in final phase.

### 2. Three.js Bundle Bloat
**Warning signs:** Bundle size > 500KB, slow initial load, three.js importing unused modules.
**Prevention:**
- Import only what you need: `import { Canvas } from '@react-three/fiber'` — never `import * as THREE`.
- Use React.lazy() + Suspense for 3D background components.
- Consider using 2D Canvas/CSS alternatives for simpler backgrounds (Aurora can be pure CSS gradients).
- Tree-shake aggressively with Vite's Rollup config.
**Phase mapping:** Foundation phase — set up code splitting from day one.

### 3. reactbits Copy-Paste Drift
**Warning signs:** Components break after updates, inconsistent patterns across copied components.
**Prevention:**
- Copy reactbits components into a dedicated `components/reactbits/` directory.
- Adapt each component to use your project's Tailwind classes and TypeScript types.
- Document which reactbits version each component was copied from.
- Don't try to keep them in sync with upstream — treat them as owned code after copy.
**Phase mapping:** Animation wrapper phase — establish the pattern early.

### 4. Mobile Animation Overload
**Warning signs:** Site is unusable on phones, battery drain, laggy touch interactions.
**Prevention:**
- Disable or simplify 3D backgrounds on mobile (< 768px).
- Replace heavy text animations with simpler fade-ins on small screens.
- Disable custom cursor (BlobCursor/CursorTrail) on touch devices — they're meaningless.
- Test on real devices, not just browser DevTools responsive mode.
**Phase mapping:** Every phase — test mobile after each section build.

### 5. Scroll Jacking / Hijacking
**Warning signs:** Users lose control of scrolling, unexpected behaviors, accessibility issues.
**Prevention:**
- Never override native scroll behavior entirely.
- ScrollReveal should enhance, not block scrolling.
- ScrollStack must allow natural scroll-through.
- Always provide keyboard navigation alternatives.
**Phase mapping:** Address when building scroll-linked sections.

### 6. Dark/Light Section Transition Jarring
**Warning signs:** Harsh color jumps between sections, text readability issues at boundaries.
**Prevention:**
- Use gradient transitions between dark and light sections (not hard cuts).
- Ensure sufficient contrast ratios (WCAG AA minimum) in both themes.
- Test all text colors against both dark and light backgrounds.
**Phase mapping:** Layout/foundation phase — build SectionWrapper with smooth transitions.

### 7. Data-Content Mismatch
**Warning signs:** PLACEHOLDER tags showing in production, broken layouts with no content.
**Prevention:**
- TypeScript interfaces for all data shapes — catch missing fields at compile time.
- Fallback values for every PLACEHOLDER field.
- Visual regression testing with both placeholder and real content lengths.
**Phase mapping:** Data layer phase — validate data contracts early.

### 8. Route Transition + Scroll Position
**Warning signs:** Navigating to project detail and back loses scroll position, animations replay.
**Prevention:**
- Use `scrollRestoration: 'manual'` in React Router.
- Save/restore scroll position for the home page.
- Don't replay entrance animations on back-navigation.
**Phase mapping:** Routing phase — implement alongside navigation.

## Domain-Specific Warnings

- **Portfolio Overanimation**: The biggest sin in portfolio design is animations that delay access to content. Every animation should have a purpose. If you can't articulate why an animation exists in one sentence, remove it.
- **Content-First**: The best portfolios make content king. Don't let the tech distract from the work being shown. Animations should frame content, not overshadow it.
- **Recruiter Attention Span**: Average recruiter spends 6-10 seconds on a portfolio. The hero must communicate identity + CTA within 3 seconds, not after a 5-second loading animation.

---
*Research date: 2026-07-10*
