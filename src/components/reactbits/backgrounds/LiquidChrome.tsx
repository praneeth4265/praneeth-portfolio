import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface LiquidChromeProps {
  className?: string;
  speed?: number;
  baseColor?: [number, number, number];
  interactive?: boolean;
}

export const LiquidChrome: React.FC<LiquidChromeProps> = ({
  className = '',
  speed = 0.5,
  baseColor = [250, 247, 241],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.015 * speed;
      const { width, height } = canvas;

      // Draw fluid metallic gradient blobs
      ctx.fillStyle = `rgb(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]})`;
      ctx.fillRect(0, 0, width, height);

      // Create shimmering metallic radial sweeps
      const cx1 = width * (0.3 + 0.2 * Math.sin(time));
      const cy1 = height * (0.4 + 0.3 * Math.cos(time * 0.8));
      const r1 = Math.max(width, height) * 0.6;

      const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
      grad1.addColorStop(0, 'rgba(172, 125, 67, 0.12)');
      grad1.addColorStop(0.5, 'rgba(220, 207, 174, 0.10)');
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const cx2 = width * (0.7 + 0.25 * Math.cos(time * 0.7));
      const cy2 = height * (0.6 + 0.25 * Math.sin(time * 0.9));
      const r2 = Math.max(width, height) * 0.7;

      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
      grad2.addColorStop(0, 'rgba(44, 74, 110, 0.09)');
      grad2.addColorStop(0.4, 'rgba(150, 112, 47, 0.08)');
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion, speed, baseColor]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {prefersReducedMotion ? (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#F5F4F0] via-[#FAFAF6] to-[#F5F4F0]" />
      ) : (
        <canvas ref={canvasRef} className="w-full h-full block" />
      )}
    </div>
  );
};
