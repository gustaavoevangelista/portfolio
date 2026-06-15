"use client";

import { useEffect, useRef, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  delayClassName?: string;
  className?: string;
}

export default function Reveal({ children, delayClassName, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.remove("opacity-0", "translate-y-6");
      el.classList.add("opacity-100", "translate-y-0");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-6");
          el.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "translate-y-6 opacity-0 transition-[opacity,transform] duration-700 ease-out will-change-transform",
        delayClassName,
        className
      )}
    >
      {children}
    </div>
  );
}
