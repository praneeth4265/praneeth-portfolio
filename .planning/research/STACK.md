# Stack Research — React Portfolio with reactbits.dev

## Recommended Stack (2025)

### Core Framework
- **Vite 6.x** — Near-instant HMR, optimized builds, SPA-first. No SSR overhead needed.
- **React 19.x** — Functional components, hooks, Suspense for lazy loading.
- **React Router 7.x** — Client-side routing for hybrid scroll + detail page navigation.

### Styling
- **Tailwind CSS 4.x** — Utility-first, responsive design, dark mode support via class strategy.
- **tailwind-merge + clsx** — Clean conditional class management without string concatenation hell.

### Animation Layer
- **reactbits.dev** (copy-paste/CLI model) — Primary source for:
  - Backgrounds: Aurora, Particles, Galaxy, Ballpit, LiquidChrome
  - Text Animations: RotatingText, ScrollReveal, ScrambledText, TrueFocus, DecryptedText, TextCursor, TextPressure, Shuffle, TextType, BlurText, SplitText
  - Animations: Antigravity, CursorTrail, BlobCursor
  - Components: LineSidebar, ScrollStack, BubbleMenu, MagicBento, PillNav, TiltedCard, GooeyNav
- **Framer Motion (motion) 12.x** — Fallback physics-based animation engine. Import from `motion/react`. Spring physics, `useScroll`, `useTransform`, `whileInView`, `AnimatePresence`.
- **GSAP 3.x** — Required peer dependency for some reactbits components (ScrollReveal uses GSAP under the hood).

### Peer Dependencies (reactbits)
- **three + @react-three/fiber + @react-three/drei** — Required for 3D backgrounds (Galaxy, Particles, some Aurora variants).
- **matter-js** — Required for physics-based components (Ballpit).
- **gsap** — Required for scroll-triggered text animations.

### Development Tools
- **ESLint + Prettier** — Code quality and formatting.
- **TypeScript** — Type safety for props, data structures, and animation configs.

### What NOT to Use
- **Next.js** — Overkill. No SSR/SEO needed; adds complexity without benefit.
- **Styled Components / Emotion** — Tailwind is faster, more maintainable, and better for utility-driven responsive design.
- **CSS-in-JS at runtime** — Performance penalty during animations.
- **jQuery or legacy animation libs** — Framer Motion + GSAP cover everything.

## Confidence Levels

| Choice | Confidence | Notes |
|--------|-----------|-------|
| Vite + React | ★★★★★ | Industry standard for SPAs in 2025 |
| Tailwind CSS | ★★★★★ | Dominant utility framework |
| reactbits.dev | ★★★★☆ | Copy-paste model is flexible but requires manual integration |
| Framer Motion | ★★★★★ | Best React animation library, spring physics |
| GSAP | ★★★★☆ | Required dependency, well-tested |
| three.js ecosystem | ★★★★☆ | Heavy but necessary for 3D backgrounds |
| TypeScript | ★★★★★ | Essential for maintainability |

---
*Research date: 2026-07-10*
