# Requirements: Compulsion Portfolio

**Defined:** 2026-07-10
**Core Value:** The portfolio must feel like an *experience*, not a webpage — visitors should be unable to look away, compelled to scroll deeper, and leave remembering the person behind it.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [x] **FOUND-01**: Visitor can load the site and see a styled, animated landing page within 3 seconds
- [x] **FOUND-02**: Visitor can navigate between all sections using a persistent animated navigation (PillNav/GooeyNav)
- [x] **FOUND-03**: Visitor sees scroll progress via LineSidebar indicator
- [x] **FOUND-04**: Visitor experiences smooth animated transitions between routes (AnimatePresence)
- [x] **FOUND-05**: Site renders responsively across mobile (360px), tablet (768px), and desktop (1440px+)

### Hero

- [x] **HERO-01**: Visitor sees a dramatic full-viewport hero with animated 3D background (Aurora or Galaxy)
- [x] **HERO-02**: Visitor sees name revealed via ScrambledText/DecryptedText animation within 2 seconds
- [x] **HERO-03**: Visitor sees role/title displayed via RotatingText or TextType animation
- [x] **HERO-04**: Visitor sees a clear primary CTA button above the fold
- [x] **HERO-05**: Hero background degrades gracefully to CSS animation on mobile/low-power devices

### About

- [x] **ABOUT-01**: Visitor can read a professional bio with personal narrative
- [x] **ABOUT-02**: Bio content reveals progressively via ScrollReveal as visitor scrolls
- [x] **ABOUT-03**: Section uses TrueFocus or BlurText to highlight key phrases
- [x] **ABOUT-04**: Visitor sees a photo/avatar placeholder

### Projects

- [x] **PROJ-01**: Visitor sees all projects displayed in a MagicBento grid layout
- [x] **PROJ-02**: Visitor can hover/interact with project cards showing TiltedCard 3D effect
- [ ] **PROJ-03**: Visitor can click a project card to navigate to a dedicated project detail page
- [ ] **PROJ-04**: Project detail page shows campaign metrics, creative samples, strategy narrative, and technical marketing details
- [x] **PROJ-05**: Projects are loaded dynamically from a TypeScript data file (add/remove without code changes)
- [ ] **PROJ-06**: Visitor can navigate back from project detail to home without losing scroll position

### Skills

- [x] **SKILL-01**: Visitor sees tech stack and marketing skills visualized interactively
- [x] **SKILL-02**: Skills data is loaded from a TypeScript data file
- [x] **SKILL-03**: Section uses Antigravity or physics-based floating animation for skill tags

### Experience

- [x] **EXP-01**: Visitor sees work history in a visual timeline format
- [x] **EXP-02**: Timeline entries animate on scroll using SplitText or ScrollReveal
- [x] **EXP-03**: Experience data is loaded from a TypeScript data file

### Blog

- [x] **BLOG-01**: Visitor sees blog post previews with title, excerpt, and date
- [x] **BLOG-02**: Blog posts are loaded from a TypeScript data file
- [x] **BLOG-03**: Post previews use Shuffle or TextType animation for entrance

### Testimonials

- [x] **TEST-01**: Visitor sees testimonial quotes with attribution
- [x] **TEST-02**: Testimonials are displayed via ScrollStack or carousel pattern
- [x] **TEST-03**: Testimonial data is loaded from a TypeScript data file

### Contact

- [x] **CTA-01**: Visitor sees a compelling contact CTA section with TextPressure or DecryptedText headline
- [x] **CTA-02**: Visitor can access email, LinkedIn, and social links with one click
- [x] **CTA-03**: CTA buttons are sized and positioned per Fitts's Law (large targets, easy reach)
- [x] **CTA-04**: Section uses LiquidChrome or Ballpit as ambient background

### Animation & UX

- [x] **ANIM-01**: Visitor sees a custom cursor (BlobCursor or CursorTrail) on desktop devices
- [x] **ANIM-02**: Custom cursor is disabled on touch devices
- [x] **ANIM-03**: All animations respect `prefers-reduced-motion` media query
- [x] **ANIM-04**: Sections alternate between dark and light themes for visual rhythm
- [x] **ANIM-05**: Hover interactions provide immediate visual feedback on all interactive elements

### Content Architecture

- [x] **DATA-01**: All personal text, images, and links use PLACEHOLDER tags (e.g., `PLACEHOLDER_USER_NAME`)
- [x] **DATA-02**: All section content is sourced from TypeScript data files in `src/data/`
- [x] **DATA-03**: Animation wrapper components are separated from core UI rendering in `components/reactbits/`
- [x] **DATA-04**: Site metadata and social links are configured via a `site-config.ts` file

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhanced Features

- **V2-01**: Blog post detail pages with full article rendering
- **V2-02**: Project filtering by category (campaigns, creative, technical)
- **V2-03**: Animated page loading screen with brand identity
- **V2-04**: Easter egg interactions for engaged visitors
- **V2-05**: Analytics integration for tracking visitor engagement

## Out of Scope

| Feature | Reason |
|---------|--------|
| SSR / SSG / SEO optimization | User shares links directly; no organic search needed |
| CMS integration | Content managed via local data files |
| Authentication / user accounts | Static portfolio, no login needed |
| E-commerce / payments | Not a transactional site |
| Backend API | Fully client-side application |
| User-switchable dark/light mode | Using alternating sections by design |
| Background music / auto-play audio | Universally disliked, unprofessional |
| Chatbot / AI assistant | Unnecessary for a portfolio |
| Infinite scroll for projects | Fixed grid is better for portfolio context |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| *(Populated during roadmap creation)* | | |

**Coverage:**
- v1 requirements: 37 total
- Mapped to phases: 0
- Unmapped: 37 ⚠️

---
*Requirements defined: 2026-07-10*
*Last updated: 2026-07-10 after initial definition*
