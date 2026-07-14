# Phase 5: Hero Section Liquid Ether Background Integration - Research

## Overview
This research addresses the integration of the ReactBits `LiquidEther` WebGL component into the Hero section of the portfolio. We analyze the accessibility implications, fallback mechanisms, bundle size/loading performance, and verification paths.

## Key Findings

### 1. Reduced Motion Accessibility
- **Current State**: The hook `src/hooks/useReducedMotion.ts` has been temporarily hardcoded to `return false;`. This disables the ability to respect user/system preferences for reduced motion, which violates success criteria from prior phases:
  - "prefers-reduced-motion is respected globally" (Phase 1 success criteria #12)
  - "prefers-reduced-motion fully tested with all animations disabled gracefully" (Phase 3 success criteria #9)
- **Solution**: Revert `src/hooks/useReducedMotion.ts` to its original media-query listener implementation so it dynamically detects system preferences.

### 2. Performance & Lazy Loading
- **Current State**: `LiquidEther` is statically imported inside `HeroSection.tsx`. This causes Vite/Rollup to bundle Three.js and the complex WebGL script into the main initial bundle.
- **Solution**: Code-split `LiquidEther` using `React.lazy()` and `React.Suspense` in `HeroSection.tsx`. A fallback placeholder div (styled with a matching theme color or simple gradient) will display while Three.js/WebGL is loading, resulting in a much faster initial First Contentful Paint (FCP).

### 3. Mobile Device Optimization
- **Problem**: WebGL shader simulations are GPU-intensive and can cause stuttering, high battery drain, or crashes on low-end and mobile devices.
- **Solution**: Detect screen size or mobile devices. If screen width is `< 768px` (mobile/tablet), we should fall back to a CSS-only static gradient to keep the page fluid and performant, which aligns with the "Mobile Animation Overload" pitfall prevention rules.

### 4. Implementation Details & fallbacks
- We will combine the mobile-device check and the `reducedMotion` hook check:
  - Render a clean, stylized static CSS radial gradient if `reducedMotion` is true OR the viewport width is `< 768px`.
  - Otherwise, render `LiquidEther` lazily inside a Suspense wrapper.

## Verification Plan

### Automated Build Check
- Run `cmd /c npm run build` to ensure no linting/TypeScript compile issues are introduced.

### Manual Verification
- Test in responsive modes (mobile, tablet, desktop) to verify that `LiquidEther` is not loaded/rendered on mobile viewports (< 768px).
- Toggle `prefers-reduced-motion` in browser developer tools (Rendering -> Emulate CSS media feature prefers-reduced-motion: reduce) to ensure the WebGL canvas disappears and fallback gradient renders instead.
