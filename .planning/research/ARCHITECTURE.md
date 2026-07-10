# Architecture Research — React Portfolio

## Component Architecture

```
┌─────────────────────────────────────────────────┐
│                   App Shell                      │
│  ┌─────────────┐  ┌──────────────────────────┐  │
│  │  Navigation  │  │      Route Container      │  │
│  │  (PillNav /  │  │  ┌────────────────────┐  │  │
│  │  GooeyNav)   │  │  │   ScrollContainer   │  │  │
│  │             │  │  │  ┌──────────────┐  │  │  │
│  │  LineSidebar│  │  │  │  Hero Section  │  │  │  │
│  │  (scroll    │  │  │  │  (Aurora bg)   │  │  │  │
│  │  indicator) │  │  │  ├──────────────┤  │  │  │
│  │             │  │  │  │  About        │  │  │  │
│  │             │  │  │  ├──────────────┤  │  │  │
│  │             │  │  │  │  Projects     │  │  │  │
│  │             │  │  │  │  (MagicBento) │  │  │  │
│  │             │  │  │  ├──────────────┤  │  │  │
│  │             │  │  │  │  Skills       │  │  │  │
│  │             │  │  │  ├──────────────┤  │  │  │
│  │             │  │  │  │  Experience   │  │  │  │
│  │             │  │  │  ├──────────────┤  │  │  │
│  │             │  │  │  │  Blog         │  │  │  │
│  │             │  │  │  ├──────────────┤  │  │  │
│  │             │  │  │  │  Testimonials │  │  │  │
│  │             │  │  │  ├──────────────┤  │  │  │
│  │             │  │  │  │  Contact/CTA  │  │  │  │
│  │             │  │  │  └──────────────┘  │  │  │
│  └─────────────┘  │  └────────────────────┘  │  │
│                    │                          │  │
│  ┌─────────────┐  │  ┌────────────────────┐  │  │
│  │ BubbleMenu  │  │  │  Project Detail    │  │  │
│  │ (floating   │  │  │  (separate route)  │  │  │
│  │  action)    │  │  └────────────────────┘  │  │
│  └─────────────┘  └──────────────────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │  Global Overlays                          │   │
│  │  • BlobCursor / CursorTrail               │   │
│  │  • Page transition (AnimatePresence)       │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

## File Structure

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Router + global providers
│
├── data/                       # DATA LAYER (strict separation)
│   ├── projects.ts             # Project case studies
│   ├── skills.ts               # Tech stack & skills
│   ├── experience.ts           # Work timeline
│   ├── testimonials.ts         # Social proof
│   ├── blog.ts                 # Blog posts
│   ├── navigation.ts           # Nav items & routes
│   └── site-config.ts          # Global site metadata, social links
│
├── components/                 # PRESENTATION LAYER
│   ├── layout/                 # Structural components
│   │   ├── Navigation.tsx      # PillNav + GooeyNav wrapper
│   │   ├── LineSidebar.tsx     # Scroll progress indicator
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx  # AnimatePresence route wrapper
│   │
│   ├── sections/               # Page sections (scrollable)
│   │   ├── HeroSection.tsx     # Aurora/Galaxy bg + name reveal
│   │   ├── AboutSection.tsx    # Bio with scroll reveals
│   │   ├── ProjectsSection.tsx # MagicBento grid
│   │   ├── SkillsSection.tsx   # Interactive skill visualization
│   │   ├── ExperienceSection.tsx # Timeline
│   │   ├── BlogSection.tsx     # Post previews
│   │   ├── TestimonialsSection.tsx # Social proof
│   │   └── ContactSection.tsx  # CTA + contact form
│   │
│   ├── ui/                     # Reusable atomic components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionWrapper.tsx  # Dark/light alternation
│   │   └── Container.tsx
│   │
│   └── reactbits/              # ANIMATION WRAPPER LAYER
│       ├── backgrounds/        # Aurora, Particles, Galaxy, Ballpit, LiquidChrome
│       ├── text/               # RotatingText, ScrambledText, DecryptedText, etc.
│       ├── animations/         # Antigravity, CursorTrail, BlobCursor
│       └── interactive/        # ScrollStack, BubbleMenu, MagicBento, TiltedCard
│
├── pages/                      # Route-level components
│   ├── HomePage.tsx            # Main scroll experience
│   └── ProjectDetailPage.tsx   # Individual project pages
│
├── hooks/                      # Custom React hooks
│   ├── useScrollProgress.ts
│   ├── useInView.ts
│   ├── useReducedMotion.ts
│   └── useActiveSection.ts
│
├── styles/                     # Global styles
│   └── index.css               # Tailwind directives + custom properties
│
└── utils/                      # Helper utilities
    ├── constants.ts
    └── animation-variants.ts   # Shared framer-motion variants
```

## Data Flow

```
Data Files (projects.ts, skills.ts, ...)
    ↓
Page Components (HomePage, ProjectDetailPage)
    ↓
Section Components (HeroSection, ProjectsSection, ...)
    ↓
UI Components (Button, Card, ...) + Animation Wrappers (reactbits/)
    ↓
DOM
```

## Build Order (Dependencies)

1. **Foundation** — Vite project, Tailwind, routing, data files, global styles
2. **Layout Shell** — Navigation (PillNav/GooeyNav), LineSidebar, PageTransition, SectionWrapper
3. **Animation Wrappers** — reactbits components copied/adapted into `components/reactbits/`
4. **Sections** — Hero → About → Projects → Skills → Experience → Blog → Testimonials → Contact
5. **Detail Pages** — ProjectDetailPage with route transitions
6. **Global Overlays** — BlobCursor, CursorTrail
7. **Polish** — Responsive tuning, performance optimization, prefers-reduced-motion

## Key Architecture Decisions

- **Copy-paste reactbits** into `components/reactbits/` rather than npm dependency — ensures full control, no version breakage, and ability to customize
- **Animation wrappers separate from UI** — reactbits components wrap content; they don't contain business logic
- **SectionWrapper handles dark/light alternation** — Single component controls theme per-section, not scattered CSS
- **Config-driven navigation** — Nav items defined in `data/navigation.ts`, not hardcoded in JSX

---
*Research date: 2026-07-10*
