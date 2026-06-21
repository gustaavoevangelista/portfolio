"use client";

import { PERSON } from "@/lib/data";
import Reveal from "../ui/Reveal";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--surface)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Photo placeholder */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative flex aspect-[4/5] w-full items-center justify-center gap-3 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(135deg,#1a1f35,#0f1320)] p-6 text-center font-[var(--font-mono)] text-sm text-[var(--muted)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(124,92,252,0.13),transparent_65%)]" />
              <span className="relative text-7xl opacity-25 sm:text-8xl">👨‍💻</span>
              <Image src='/foto-perfil.webp' alt='Profile photo' width={200} height={300} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 right-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 font-[var(--font-mono)] text-xs shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:-bottom-6 sm:-right-6 sm:px-5 sm:py-4">
              <span className="mb-1 block font-[var(--font-display)] text-3xl font-extrabold leading-none text-[var(--violet)]">
                {PERSON.yearsExperience}+
              </span>
              <span className="text-[var(--muted)]">Years of experience</span>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delayClassName="delay-[150ms]">
          <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
            About me
          </p>
          <h2 className="mb-6 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Building polished interfaces<br />with AI-native workflows.
          </h2>
          {PERSON.bio.map((p, i) => (
            <p key={i} className="mb-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--violet)] px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              LinkedIn ↗
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-7 py-3 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
            >
              Hire me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
