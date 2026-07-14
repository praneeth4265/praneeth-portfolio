# Phase 5: Hero Section Liquid Ether Background Integration - Context

**Gathered:** 2026-07-14
**Status:** Ready for planning
**Source:** User request: "in hero section i want liquid ether background"

<domain>
## Phase Boundary
This phase handles the integration of the ReactBits LiquidEther WebGL component as the hero background of the portfolio. It ensures proper accessibility handling (restoring the `useReducedMotion` hook) and fallback mechanisms when reduced motion is requested.

</domain>

<decisions>
## Implementation Decisions

### Reduced Motion Hook Restoration
- Revert the debugging change in `src/hooks/useReducedMotion.ts` to properly detect the `(prefers-reduced-motion: reduce)` media query.

### LiquidEther Hero Background Integration
- Use the WebGL-based `LiquidEther` component for the Hero section when `prefers-reduced-motion` is false.
- Ensure the canvas is optimized, runs only when visible, and doesn't capture interactive pointer events intended for CTA buttons.

### Static CSS Fallback for Reduced Motion
- When `useReducedMotion` returns true, render a beautiful, static CSS gradient or a simplified static representation of the ether color palette (e.g., using `radial-gradient` or a subtle background mesh) to respect user accessibility preferences.

### Build and Performance Validation
- Verify that the three.js/WebGL component does not introduce TypeScript compile errors or bundling issues.
- Confirm the site builds cleanly via `cmd /c npm run build`.

</decisions>

<canonical_refs>
## Canonical References
- [HeroSection.tsx](file:///c:/Users/iiamp/Documents/Portfolio/src/components/sections/HeroSection.tsx) (Hero section component where background is integrated)
- [useReducedMotion.ts](file:///c:/Users/iiamp/Documents/Portfolio/src/hooks/useReducedMotion.ts) (Accessibility hook for motion preferences)
- [LiquidEther.tsx](file:///c:/Users/iiamp/Documents/Portfolio/src/components/reactbits/backgrounds/LiquidEther.tsx) (WebGL background component)
</canonical_refs>

<deferred>
## Deferred Ideas
- Interactive customizations to allow users to toggle the background type manually via a UI controls panel.
</deferred>
