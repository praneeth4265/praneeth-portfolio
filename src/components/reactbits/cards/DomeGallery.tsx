import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import { Sparkles } from 'lucide-react';

export type ImageItem = string | {
  src?: string;
  alt?: string;
  title?: string;
  category?: string;
  level?: number;
  highlighted?: boolean;
  icon?: React.ReactNode;
};

export type DomeGalleryProps = {
  images?: ImageItem[];
  fit?: number;
  fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
  minRadius?: number;
  maxRadius?: number;
  padFactor?: number;
  overlayBlurColor?: string;
  maxVerticalRotationDeg?: number;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  segments?: number;
  dragDampening?: number;
  openedImageWidth?: string;
  openedImageHeight?: string;
  imageBorderRadius?: string;
  openedImageBorderRadius?: string;
  grayscale?: boolean;
};

type ItemDef = {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  level?: number;
  highlighted?: boolean;
  icon?: React.ReactNode;
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
};

const DEFAULT_IMAGES: ImageItem[] = [
  {
    alt: 'Full Stack Development',
    title: 'Full Stack Development (React, Next.js, Node, Tailwind)',
    category: 'Technical & CS',
    level: 94,
    highlighted: true
  },
  {
    alt: 'Performance Marketing',
    title: 'Omnichannel Performance Ads (Google, Meta, LinkedIn)',
    category: 'Marketing Strategy',
    level: 96,
    highlighted: true
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 14,
  dragSensitivity: 22,
  enlargeTransitionMs: 350,
  segments: 35
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool: ImageItem[], _seg: number): ItemDef[] {
  // MATHEMATICALLY EXACT NON-OVERLAPPING 3D SPHERE GRID:
  // Since --rot-y and --rot-x equal half of --item-width / --item-height (`(360deg / segments) / 2`),
  // a card with sizeX = 2.4 and sizeY = 1.5 spans exactly 4.8 units of offset-x and 3.0 units of offset-y.
  // By stepping xCols every 6.0 units across 12 orbital columns around the 360 deg sphere,
  // we guarantee a clean 1.2 unit (34px+) horizontal gap between every column.
  // By placing vertical tiles at [-4.2, 0, 4.2] (even columns) and [-2.1, 2.1] (odd columns),
  // we guarantee a 1.2 unit vertical gap between tiles in the same column and massive diagonal clearance!
  const numCols = 12; // 12 * 6.0 = 72 units (~360 degrees on the 35-segment sphere)
  const xCols = Array.from({ length: numCols }, (_, i) => -33 + i * 6.0);
  const evenYs = [-4.2, 0, 4.2];
  const oddYs = [-2.1, 2.1];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2.4, sizeY: 1.5 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '', title: '', category: '', level: 0, highlighted: false }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      `[DomeGallery] Provided item count (${pool.length}) exceeds available tiles (${totalSlots}). Some items will wrap.`
    );
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') {
      return { src: image, alt: 'Skill', title: 'Capability', category: 'General', level: 90, highlighted: false };
    }
    return {
      src: image.src || '',
      alt: image.alt || 'Engineered for high conversion and architectural excellence.',
      title: image.title || image.alt || 'Skill Capability',
      category: image.category || 'General',
      level: image.level || 90,
      highlighted: image.highlighted || false,
      icon: image.icon
    };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].title === usedImages[i - 1].title) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].title !== usedImages[i].title) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src || '',
    alt: usedImages[i].alt,
    title: usedImages[i].title,
    category: usedImages[i].category,
    level: usedImages[i].level,
    highlighted: usedImages[i].highlighted,
    icon: usedImages[i].icon
  }));
}

function computeItemBaseRotation(offsetX: number, offsetY: number, sizeX: number, sizeY: number, segments: number) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export const DomeGallery: React.FC<DomeGalleryProps> = ({
  images = DEFAULT_IMAGES,
  fit = 0.60,
  fitBasis = 'auto',
  minRadius = 650,
  maxRadius = Infinity,
  padFactor = 0.2,
  overlayBlurColor = '#0A0908',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '460px',
  openedImageHeight = '500px',
  imageBorderRadius = '20px',
  openedImageBorderRadius = '28px',
  grayscale = false
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const focusedElRef = useRef<HTMLElement | null>(null);
  const originalTilePositionRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const cancelTapRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const pointerTypeRef = useRef<'mouse' | 'pen' | 'touch'>('mouse');
  const tapTargetRef = useRef<HTMLElement | null>(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  const lockedRadiusRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis: number;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.4;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement;
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedImageWidth && openedImageHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = `position: absolute; width: ${openedImageWidth}; height: ${openedImageHeight}; visibility: hidden;`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = `${centeredLeft}px`;
          enlargedOverlay.style.top = `${centeredTop}px`;
        } else {
          enlargedOverlay.style.left = `${frameR.left - mainR.left}px`;
          enlargedOverlay.style.top = `${frameR.top - mainR.top}px`;
          enlargedOverlay.style.width = `${frameR.width}px`;
          enlargedOverlay.style.height = `${frameR.height}px`;
        }
      }
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();

        const evt = event as PointerEvent;
        pointerTypeRef.current = (evt.pointerType as any) || 'mouse';
        if (pointerTypeRef.current === 'touch') evt.preventDefault();
        if (pointerTypeRef.current === 'touch') lockScroll();
        draggingRef.current = true;
        cancelTapRef.current = false;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
        const el = evt.target as HTMLElement;
        const imgEl = el.closest('.item__image') as HTMLElement;
        tapTargetRef.current = imgEl;
      },
      onDrag: ({ event, movement: [mx, my], last, velocity: [vx, vy], direction: [dx, dy] }) => {
        if (focusedElRef.current) return;
        if (!draggingRef.current) return;
        if (!startPosRef.current) return;

        const evt = event as PointerEvent;
        if (pointerTypeRef.current === 'touch') evt.preventDefault();

        const dist = Math.hypot(evt.clientX - startPosRef.current.x, evt.clientY - startPosRef.current.y);
        if (dist > 5) {
          movedRef.current = true;
          cancelTapRef.current = true;
        }

        const nextX = clamp(
          startRotRef.current.x - my / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(startRotRef.current.y + mx / dragSensitivity);

        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);

        if (last) {
          draggingRef.current = false;
          lastDragEndAt.current = performance.now();
          if (pointerTypeRef.current === 'touch') unlockScroll();
          if (movedRef.current) {
            startInertia(vx * dx, vy * dy);
          }
        }
      }
    },
    {
      target: mainRef,
      drag: {
        pointer: { capture: false },
        filterTaps: true,
        threshold: 3
      }
    }
  );

  const close = () => {
    const el = focusedElRef.current;
    if (!el) return;
    const parent = el.parentElement as HTMLElement;
    const overlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement;
    const scrim = scrimRef.current;
    if (!overlay || !scrim) return;

    scrim.style.opacity = '0';
    scrim.style.pointerEvents = 'none';

    const refDiv = parent.querySelector('.item__image--reference') as HTMLElement;
    const originalPos = originalTilePositionRef.current;

    if (!originalPos || !refDiv) {
      overlay.remove();
      if (refDiv) refDiv.remove();
      el.style.visibility = '';
      (el.style as any).zIndex = 0;
      focusedElRef.current = null;
      rootRef.current?.removeAttribute('data-enlarging');
      openingRef.current = false;
      return;
    }

    const currentRect = overlay.getBoundingClientRect();
    const rootRect = rootRef.current!.getBoundingClientRect();

    const originalPosRelativeToRoot = {
      left: originalPos.left - rootRect.left,
      top: originalPos.top - rootRect.top,
      width: originalPos.width,
      height: originalPos.height
    };

    const overlayRelativeToRoot = {
      left: currentRect.left - rootRect.left,
      top: currentRect.top - rootRect.top,
      width: currentRect.width,
      height: currentRect.height
    };

    const animatingOverlay = document.createElement('div');
    animatingOverlay.className = 'enlarge-closing';
    animatingOverlay.style.cssText = overlay.style.cssText;
    animatingOverlay.style.left = `${overlayRelativeToRoot.left}px`;
    animatingOverlay.style.top = `${overlayRelativeToRoot.top}px`;
    animatingOverlay.style.width = `${overlayRelativeToRoot.width}px`;
    animatingOverlay.style.height = `${overlayRelativeToRoot.height}px`;
    animatingOverlay.style.transition = `all ${enlargeTransitionMs}ms ease-out`;
    animatingOverlay.style.transform = 'none';
    animatingOverlay.style.pointerEvents = 'none';
    animatingOverlay.style.margin = '0';
    animatingOverlay.innerHTML = overlay.innerHTML;

    overlay.remove();
    rootRef.current!.appendChild(animatingOverlay);

    void animatingOverlay.getBoundingClientRect();

    requestAnimationFrame(() => {
      animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
      animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
      animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
      animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
      animatingOverlay.style.opacity = '0';
    });

    const cleanup = () => {
      animatingOverlay.remove();
      originalTilePositionRef.current = null;

      if (refDiv) refDiv.remove();
      parent.style.transition = 'none';
      el.style.transition = 'none';

      parent.style.setProperty('--rot-y-delta', `0deg`);
      parent.style.setProperty('--rot-x-delta', `0deg`);

      requestAnimationFrame(() => {
        el.style.visibility = '';
        el.style.opacity = '0';
        (el.style as any).zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');

        requestAnimationFrame(() => {
          parent.style.transition = '';
          el.style.transition = 'opacity 300ms ease-out';

          requestAnimationFrame(() => {
            el.style.opacity = '1';
            setTimeout(() => {
              el.style.transition = '';
              el.style.opacity = '';
              openingRef.current = false;
              if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true') {
                document.body.classList.remove('dg-scroll-lock');
              }
            }, 300);
          });
        });
      });
    };

    animatingOverlay.addEventListener('transitionend', cleanup, {
      once: true
    });
  };

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;
    const onClick = () => close();
    scrim.addEventListener('click', onClick);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      scrim.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, openedImageBorderRadius, grayscale]);

  const openItemFromElement = (el: HTMLElement) => {
    if (openingRef.current) return;
    openingRef.current = true;
    openStartedAtRef.current = performance.now();
    lockScroll();
    const parent = el.parentElement as HTMLElement;
    focusedElRef.current = el;
    el.setAttribute('data-focused', 'true');
    const offsetX = getDataNumber(parent, 'offsetX', 0);
    const offsetY = getDataNumber(parent, 'offsetY', 0);
    const sizeX = getDataNumber(parent, 'sizeX', 2.4);
    const sizeY = getDataNumber(parent, 'sizeY', 1.5);
    const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
    const parentY = normalizeAngle(parentRot.rotateY);
    const globalY = normalizeAngle(rotationRef.current.y);
    let rotY = -(parentY + globalY) % 360;
    if (rotY < -180) rotY += 360;
    const rotX = -parentRot.rotateX - rotationRef.current.x;
    parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
    parent.style.setProperty('--rot-x-delta', `${rotX}deg`);
    const refDiv = document.createElement('div');
    refDiv.className = 'item__image item__image--reference opacity-0';
    refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
    parent.appendChild(refDiv);

    void refDiv.offsetHeight;

    const tileR = refDiv.getBoundingClientRect();
    const mainR = mainRef.current?.getBoundingClientRect();
    const frameR = frameRef.current?.getBoundingClientRect();

    if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
      openingRef.current = false;
      focusedElRef.current = null;
      parent.removeChild(refDiv);
      unlockScroll();
      return;
    }

    originalTilePositionRef.current = {
      left: tileR.left,
      top: tileR.top,
      width: tileR.width,
      height: tileR.height
    };
    el.style.visibility = 'hidden';
    (el.style as any).zIndex = 0;
    const overlay = document.createElement('div');
    overlay.className = 'enlarge';
    overlay.style.cssText = `position:absolute; left:${frameR.left - mainR.left}px; top:${frameR.top - mainR.top}px; width:${frameR.width}px; height:${frameR.height}px; opacity:0; z-index:30; will-change:transform,opacity; transform-origin:top left; transition:transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease; border-radius:${openedImageBorderRadius}; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.95); background: linear-gradient(145deg, #1A1816 0%, #0A0908 100%); border: 2px solid #E8A020; padding: 32px; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;`;
    
    const iconHtml = parent.querySelector('.icon-container')?.innerHTML || '<svg class="w-8 h-8 text-[#E8A020]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>';
    const rawTitle = parent.dataset.title || 'Capability';
    const rawCategory = parent.dataset.category || 'Capability';
    const rawLevel = parent.dataset.level || '94';
    const rawAlt = parent.dataset.alt || 'Engineered for high conversion and architectural excellence.';

    overlay.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-14 h-14 rounded-2xl bg-[#E8A020]/20 border border-[#E8A020]/40 flex items-center justify-center text-[#E8A020]">
              ${iconHtml}
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#E8A020] font-mono block">${rawCategory}</span>
              <span class="text-[11px] text-[#A8A59E] font-mono">CORE DISCIPLINE</span>
            </div>
          </div>
          <div class="text-right">
            <span class="text-2xl font-black font-mono text-[#E8A020] block">${rawLevel}%</span>
            <span class="text-[10px] uppercase font-mono text-[#FAFAF6]/70">MASTERY RATING</span>
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl font-black text-[#FAFAF6] mb-4 tracking-tight leading-snug">${rawTitle}</h3>
        <p class="text-xs sm:text-sm text-[#DEDBD4] leading-relaxed font-sans mb-6">${rawAlt}</p>
      </div>

      <div>
        <div class="w-full bg-[#1F1D1A] h-2.5 rounded-full overflow-hidden mb-5 border border-[#DEDBD4]/10">
          <div class="bg-gradient-to-r from-[#E8A020] to-[#FAFAF6] h-full rounded-full transition-all duration-1000" style="width: ${rawLevel}%;"></div>
        </div>
        <div class="pt-4 border-t border-[#DEDBD4]/20 flex justify-between items-center text-xs font-mono text-[#A8A59E]">
          <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#E8A020] animate-pulse"></span> VERIFIED CAPABILITY</span>
          <span class="text-[#E8A020] font-bold hover:underline">TAP OVERLAY TO CLOSE ×</span>
        </div>
      </div>
    `;

    overlay.addEventListener('click', close);
    viewerRef.current!.appendChild(overlay);
    const tx0 = tileR.left - frameR.left;
    const ty0 = tileR.top - frameR.top;
    const sx0 = tileR.width / frameR.width;
    const sy0 = tileR.height / frameR.height;

    const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1;
    const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1;

    overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${validSx0}, ${validSy0})`;
    setTimeout(() => {
      if (!overlay.parentElement) return;
      overlay.style.opacity = '1';
      overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
      rootRef.current?.setAttribute('data-enlarging', 'true');
    }, 16);
    const wantsResize = openedImageWidth || openedImageHeight;
    if (wantsResize) {
      const onFirstEnd = (ev: TransitionEvent) => {
        if (ev.propertyName !== 'transform') return;
        overlay.removeEventListener('transitionend', onFirstEnd);
        const prevTransition = overlay.style.transition;
        overlay.style.transition = 'none';
        const tempWidth = openedImageWidth || `${frameR.width}px`;
        const tempHeight = openedImageHeight || `${frameR.height}px`;
        overlay.style.width = tempWidth;
        overlay.style.height = tempHeight;
        const newRect = overlay.getBoundingClientRect();
        overlay.style.width = frameR.width + 'px';
        overlay.style.height = frameR.height + 'px';
        void overlay.offsetWidth;
        overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`;
        const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
        const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
        requestAnimationFrame(() => {
          overlay.style.left = `${centeredLeft}px`;
          overlay.style.top = `${centeredTop}px`;
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;
        });
        const cleanupSecond = () => {
          overlay.removeEventListener('transitionend', cleanupSecond);
          overlay.style.transition = prevTransition;
        };
        overlay.addEventListener('transitionend', cleanupSecond, {
          once: true
        });
      };
      overlay.addEventListener('transitionend', onFirstEnd);
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
    };
  }, []);

  const cssStyles = `
    .sphere-root {
      --radius: 650px;
      --viewer-pad: 54px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    
    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    
    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg))) 
                 translateZ(var(--radius));
    }
    
    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important;
      pointer-events: all !important;
    }
    
    @media (max-aspect-ratio: 1/1) {
      .viewer-frame {
        height: auto !important;
        width: 100% !important;
      }
    }
    
    .item__image {
      position: absolute;
      inset: 8px;
      border-radius: var(--tile-radius, 20px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms, border-color 300ms, box-shadow 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .item__image--reference {
      position: absolute;
      inset: 8px;
      pointer-events: none;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div
        ref={rootRef}
        className="sphere-root relative w-full h-full"
        style={
          {
            ['--segments-x' as any]: segments,
            ['--segments-y' as any]: segments,
            ['--overlay-blur-color' as any]: overlayBlurColor,
            ['--tile-radius' as any]: imageBorderRadius,
            ['--enlarge-radius' as any]: openedImageBorderRadius,
            ['--image-filter' as any]: grayscale ? 'grayscale(1)' : 'none'
          } as React.CSSProperties
        }
      >
        <main
          ref={mainRef}
          className="absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent"
          style={{
            touchAction: 'none',
            WebkitUserSelect: 'none'
          }}
        >
          <div className="stage">
            <div ref={sphereRef} className="sphere">
              {items.map((it, i) => (
                <div
                  key={`${it.x},${it.y},${i}`}
                  className="sphere-item absolute m-auto"
                  data-title={it.title}
                  data-category={it.category}
                  data-level={it.level}
                  data-alt={it.alt}
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={
                    {
                      ['--offset-x' as any]: it.x,
                      ['--offset-y' as any]: it.y,
                      ['--item-size-x' as any]: it.sizeX,
                      ['--item-size-y' as any]: it.sizeY,
                      top: '-999px',
                      bottom: '-999px',
                      left: '-999px',
                      right: '-999px'
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="item__image absolute block overflow-hidden cursor-pointer bg-gradient-to-br from-[#1E1C1A] via-[#141210] to-[#0E0D0C] border border-[#DEDBD4]/25 hover:border-[#E8A020] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#E8A020]/10 group"
                    role="button"
                    tabIndex={0}
                    aria-label={it.alt || 'Open capability'}
                    onClick={e => {
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget as HTMLElement);
                    }}
                    onPointerUp={e => {
                      if ((e.nativeEvent as PointerEvent).pointerType !== 'touch') return;
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget as HTMLElement);
                    }}
                    style={{
                      inset: '8px',
                      borderRadius: `var(--tile-radius, ${imageBorderRadius})`,
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {/* Sleek Dark Capability Card with Icon */}
                    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
                      <div className="flex items-center justify-between">
                        <div className="icon-container w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E8A020]/15 border border-[#E8A020]/35 flex items-center justify-center text-[#E8A020] group-hover:scale-110 group-hover:bg-[#E8A020] group-hover:text-[#0A0908] transition-all duration-300 shadow-lg shadow-[#E8A020]/5">
                          {it.icon || <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />}
                        </div>
                        {it.level && (
                          <span className="text-[11px] font-black font-mono px-2.5 py-1 rounded-full bg-[#0A0908]/90 border border-[#DEDBD4]/20 text-[#FAFAF6] group-hover:border-[#E8A020]/50 transition-colors">
                            {it.level}%
                          </span>
                        )}
                      </div>

                      <div>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#E8A020] font-mono block mb-1">
                          {it.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-[#FAFAF6] line-clamp-2 leading-snug group-hover:text-[#E8A020] transition-colors">
                          {it.title || it.alt}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute inset-0 m-auto z-[3] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(235, 235, 235, 0) 65%, var(--overlay-blur-color, ${overlayBlurColor}) 100%)`
            }}
          />

          <div
            className="absolute inset-0 m-auto z-[3] pointer-events-none"
            style={{
              WebkitMaskImage: `radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, ${overlayBlurColor}) 90%)`,
              maskImage: `radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, ${overlayBlurColor}) 90%)`,
              backdropFilter: 'blur(3px)'
            }}
          />

          <div
            className="absolute left-0 right-0 top-0 h-[120px] z-[5] pointer-events-none rotate-180"
            style={{
              background: `linear-gradient(to bottom, transparent, var(--overlay-blur-color, ${overlayBlurColor}))`
            }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 h-[120px] z-[5] pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent, var(--overlay-blur-color, ${overlayBlurColor}))`
            }}
          />

          <div
            ref={viewerRef}
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
            style={{ padding: 'var(--viewer-pad)' }}
          >
            <div
              ref={scrimRef}
              className="scrim absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500"
              style={{
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)'
              }}
            />
            <div
              ref={frameRef}
              className="viewer-frame h-full aspect-square flex"
              style={{
                borderRadius: `var(--enlarge-radius, ${openedImageBorderRadius})`
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default DomeGallery;
