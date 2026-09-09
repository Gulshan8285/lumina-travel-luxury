"use client";

import { useEffect, useRef } from 'react';

export default function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawGrain = () => {
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const n = (Math.random() * 18) | 0; // very subtle grain intensity
        data[i]     = n;
        data[i + 1] = n;
        data[i + 2] = n;
        data[i + 3] = 22; // very low opacity = barely visible
      }
      ctx.putImageData(imageData, 0, 0);
      animFrameRef.current = requestAnimationFrame(drawGrain);
    };

    drawGrain();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9998,
        mixBlendMode: 'screen',
        opacity: 0.35,
      }}
      aria-hidden="true"
    />
  );
}
