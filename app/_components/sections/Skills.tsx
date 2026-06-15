"use client";

import { useEffect, useRef } from "react";
import { SKILLS } from "@/lib/data";
import Reveal from "../ui/Reveal";

export default function Skills() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const mouse = { x: -999, y: -999 };

    type Node = (typeof SKILLS)[0] & {
      ox: number; oy: number; x: number; y: number; phase: number;
    };
    let nodes: Node[] = [];

    const layout = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      nodes = SKILLS.map((tech, i) => {
        const angle = (i / SKILLS.length) * Math.PI * 2 + Math.PI * 0.15;
        const radius = Math.min(W, H) * 0.34 + (i % 3) * 22;
        const ox = W / 2 + Math.cos(angle) * radius;
        const oy = H / 2 + Math.sin(angle) * radius;
        return { ...tech, ox, oy, x: ox, y: oy, phase: Math.random() * Math.PI * 2 };
      });
    };

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      layout();
    };

    let t = 0;
    const draw = () => {
      t++;
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      nodes.forEach((n) => {
        n.x = n.ox + Math.sin(t * 0.0008 + n.phase) * 8;
        n.y = n.oy + Math.cos(t * 0.001  + n.phase) * 6;
      });

      // connections
      nodes.forEach((a, i) => {
        nodes.forEach((b, j) => {
          if (j <= i) return;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 140) return;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124,92,252,${(1 - d / 140) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // nodes
      nodes.forEach((n) => {
        const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        const hovered = dist < 60;
        const radius  = hovered ? 8 : 5;
        const glowR   = hovered ? 18 : 5;

        // glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR * 3);
        grad.addColorStop(0, n.color + "55");
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowBlur  = glowR;
        ctx.shadowColor = n.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // label
        if (hovered) {
          ctx.font = `bold 13px 'Inter', sans-serif`;
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(n.name, n.x, n.y - 16);
        } else {
          ctx.font = `11px 'Inter', sans-serif`;
          ctx.fillStyle = "rgba(180,190,210,0.65)";
          ctx.textAlign = "center";
          ctx.fillText(n.name, n.x, n.y + 18);
        }
      });

      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -999; mouse.y = -999; };
    const onTouchMove  = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };

    canvas.addEventListener("mousemove",  onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove",  onTouchMove, { passive: false });
    window.addEventListener("resize",     resize);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove",  onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove",  onTouchMove);
      window.removeEventListener("resize",     resize);
    };
  }, []);

  return (
    <section id="skills" className="bg-[var(--ink)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
            Tech Stack
          </p>
          <h2 className="mb-4 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Skills &amp; Tools
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
            Hover the constellation to explore my stack — each node is a technology I work with daily.
          </p>
        </Reveal>

        <Reveal delayClassName="delay-[100ms]">
          <canvas
            ref={canvasRef}
            className="block h-[360px] w-full cursor-crosshair rounded-2xl border border-[var(--border)] bg-[var(--surface)] sm:h-[420px] lg:h-[480px]"
          />
          <p className="mt-3 text-center font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.1em] text-[var(--muted)]">
            ✦ Hover or tap to interact
          </p>
        </Reveal>
      </div>
    </section>
  );
}
