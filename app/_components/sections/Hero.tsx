"use client";

import { useEffect, useRef } from "react";
import { PERSON } from "@/lib/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let stars: { x: number; y: number; r: number; phase: number; speed: number }[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars = Array.from({ length: 170 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.003 + 0.001,
      }));
    };

    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        const alpha = (Math.sin(t * s.speed + s.phase) * 0.4 + 0.6) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,210,255,${alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pt-32"
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-7xl items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex animate-[fade-up_0.7s_ease_0.2s_both] font-[var(--font-mono)] text-[0.78rem] uppercase tracking-[0.18em] text-[var(--cyan)] sm:mb-6">
            {PERSON.available ? "// Available for new opportunities" : "// Currently unavailable"}
          </p>

          <h1 className="mb-6 animate-[fade-up_0.7s_ease_0.4s_both] font-[var(--font-display)] text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Gustavo<br />
            <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--cyan)] bg-clip-text text-transparent">
              Evangelista
            </span>
          </h1>

          <p className="mb-8 max-w-2xl animate-[fade-up_0.7s_ease_0.6s_both] text-base leading-7 text-[var(--muted)] sm:text-lg">
            {PERSON.tagline}
          </p>

          <div className="flex flex-col gap-3 animate-[fade-up_0.7s_ease_0.8s_both] sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--violet)] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(124,92,252,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(124,92,252,0.55)]"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-8 py-3.5 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-4 hidden animate-[fade-up_0.7s_ease_1.1s_both] items-center gap-3 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)] sm:left-6 sm:flex lg:left-8"
      >
        <span className="h-px w-10 bg-gradient-to-r from-[var(--violet)] to-transparent" />
        Scroll to explore
      </div>
    </section>
  );
}
