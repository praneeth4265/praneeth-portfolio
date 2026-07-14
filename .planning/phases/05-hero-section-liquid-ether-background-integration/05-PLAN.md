# Phase 5 Plan: Hero Section Liquid Ether Background Integration

This phase integrates the high-end `LiquidEther` WebGL background into the Hero section of the portfolio. It restores accessibility compliance by reverting modifications to the `useReducedMotion` hook, optimizes initial page performance via dynamic lazy loading, and implements a lightweight CSS fallback for mobile/tablet devices and reduced-motion states.

## User Review Required

> [!IMPORTANT]
> - **Accessibility Restoration**: We will revert `src/hooks/useReducedMotion.ts` so it actively listens to the system's reduced motion media query. Hardcoding it to `false` disables the system check globally, violating Phase 1 and Phase 3 accessibility requirements.
> - **Performance and Code Splitting**: `LiquidEther` (which depends on Three.js) is heavy. We propose lazy loading it inside a `React.Suspense` block so it does not block initial load times.
> - **Mobile Viewport Optimization**: We will disable the WebGL animation on mobile/tablet viewports (< 768px) and render a clean CSS radial gradient fallback to avoid performance lag and excessive battery drain.

## Open Questions

> [!NOTE]
> - **Fallback Design**: The default fallback is a soft radial gradient (`radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.08) 0%, rgba(221, 224, 240, 0.03) 50%, transparent 100%)`) over the site's default `#FAFAFF` background. Let us know if you prefer a different fallback color scheme.
> - **LiquidEther Parameters**: The current colors (`#4F46E5`, `#DDE0F0', '#1E1B4B', '#9089FC`) and configuration match the active brand palette. We will keep these parameters intact.

## Proposed Changes

### Configuration / Hooks

#### [MODIFY] [useReducedMotion.ts](file:///c:/Users/iiamp/Documents/Portfolio/src/hooks/useReducedMotion.ts)
- Restore stateful media-query listener for `(prefers-reduced-motion: reduce)`.

---

### UI Components

#### [MODIFY] [HeroSection.tsx](file:///c:/Users/iiamp/Documents/Portfolio/src/components/sections/HeroSection.tsx)
- Dynamically import `LiquidEther` using `React.lazy()`.
- Add local state/effect to detect viewport widths < 768px.
- Restructure background container to conditionally render a `Suspense`-wrapped `LiquidEther` component only on desktop viewports and when `reducedMotion` is inactive.
- Render a lightweight static CSS `radial-gradient` fallback when WebGL is bypassed.

## Verification Plan

### Automated Tests
- Run production build command to verify zero compilation or bundling errors:
  ```bash
  cmd /c npm run build
  ```

### Manual Verification
- **Reduced Motion**: Emulate `prefers-reduced-motion: reduce` in Chrome DevTools Rendering options. Verify that the `LiquidEther` canvas disappears and is replaced by the static gradient background.
- **Mobile Viewport**: Resize screen to mobile size (< 768px) and verify that the canvas is not rendered, and the static gradient fallback is shown instead.
- **Desktop Interactivity**: On desktop viewports (> 768px) and normal motion, verify that the `LiquidEther` background displays and responds dynamically to pointer movement.
