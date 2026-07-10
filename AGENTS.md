<!-- GSD:project-start source:PROJECT.md -->

## Project

**Compulsion Portfolio**

A high-end React portfolio website for a Digital Marketer with a Computer Science Engineering UG and Digital Marketing PG. The site is engineered for "cognitive compulsion" — every animation, layout decision, and interaction is designed to guide the user's attention, maximize engagement, and leave a lasting impression. It serves as both a professional portfolio and a living proof-of-craft for dual audiences: potential employers and freelance clients.

**Core Value:** The portfolio must feel like an *experience*, not a webpage — visitors should be unable to look away, compelled to scroll deeper, and leave remembering the person behind it.

### Constraints

- **Stack**: Vite + React (functional components, hooks) — chosen for speed, lightweight builds, and SPA suitability
- **Styling**: Tailwind CSS or CSS Modules for responsive, maintainable styling
- **Animation**: reactbits.dev components as primary; framer-motion (spring physics, not linear tweens) as fallback
- **Content**: All personal text, images, and links wrapped in PLACEHOLDER tags (e.g., `<PLACEHOLDER_USER_NAME>`)
- **Architecture**: Strict separation of presentation and data; animation wrappers separate from core UI components
- **Performance**: Animations must not degrade performance — lazy loading, code splitting, and efficient re-renders required

<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->

## Technology Stack

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
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.agents/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
