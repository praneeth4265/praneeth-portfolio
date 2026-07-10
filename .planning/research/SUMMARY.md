# Project Research Summary

## Key Findings

### Stack
**Vite 6 + React 19 + Tailwind CSS 4** is the definitive 2025 stack for SPA portfolios. reactbits.dev uses a **copy-paste/CLI model** (not a traditional npm package) — components are copied into the project and owned as source code. This is ideal: full control, no version lock-in, customizable to match our TypeScript + Tailwind setup. Framer Motion (`motion/react` v12) provides the spring-physics fallback layer. Three.js ecosystem (`@react-three/fiber`, `@react-three/drei`) is required for 3D backgrounds but must be code-split to avoid bundle bloat. GSAP is a peer dependency for some reactbits text animations.

### Table Stakes
Every portfolio needs: identity visible in < 3 seconds, persistent navigation, responsive design, project showcase with detail views, clear contact CTA. These are non-negotiable. Missing any one causes immediate bounce.

### Differentiators (Our Edge)
The "cognitive compulsion" approach — scroll-linked narrative, custom cursors, 3D animated backgrounds, physics-based micro-interactions, dark/light section rhythm — creates a portfolio that *feels* like a product demo, not a resume page. The data-driven content system (all projects from TS data files) makes it a reusable framework, not a one-off site.

### Watch Out For
1. **Performance budget is critical** — Three.js + GSAP + Framer Motion + reactbits is a LOT of JavaScript. Code splitting and lazy loading are not optional; they're survival requirements.
2. **Mobile must be a first-class citizen** — Disable/simplify 3D backgrounds and custom cursors on touch devices. Replace heavy animations with tasteful fades.
3. **Animation ≠ Content** — Recruiters spend 6-10 seconds on a portfolio. The hero must communicate identity within 3 seconds. Animations frame content; they never delay it.
4. **reactbits copy-paste requires adaptation** — Copied components need TypeScript types, Tailwind integration, and documentation of source version. Treat as owned code.

## Implications for Roadmap

### Phase Structure Recommendation
1. **Foundation** — Vite project setup, Tailwind config, React Router, data layer, global styles, code splitting patterns.
2. **Layout + Core Sections** — Navigation (PillNav/GooeyNav), SectionWrapper (dark/light), Hero with background, About, all scroll infrastructure.
3. **Content Sections + Interactivity** — Projects (MagicBento + TiltedCard), Skills, Experience, Blog, Testimonials, Contact CTA, custom cursor, detail pages with route transitions.

### Critical Path
- Data layer must be built first (all sections consume it).
- Animation wrapper components (`components/reactbits/`) must be established before any section uses them.
- 3D backgrounds are the highest-risk item (three.js dependency, performance) — build with fallback CSS animations from day one.
- Mobile responsiveness must be validated per-section, not deferred to a "responsive phase."

### Risk Mitigation
- Set a hard bundle size budget (< 300KB initial, < 1MB total with lazy chunks).
- Every 3D component gets a 2D CSS fallback that activates on mobile or when `prefers-reduced-motion` is set.
- TypeScript interfaces for data files catch content mismatches at compile time.

## Sources
- reactbits.dev documentation and component library
- npm ecosystem research (three.js, framer-motion, gsap, tailwindcss)
- Industry best practices for React portfolio architecture (2025)

---
*Synthesized: 2026-07-10*
