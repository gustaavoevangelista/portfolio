import { EXPERIENCE } from "@/lib/data";
import Reveal from "../ui/Reveal";

export default function Experience() {
  const revealDelays = ["delay-[0ms]", "delay-[100ms]", "delay-[200ms]"];

  return (
    <section id="experience" className="bg-[var(--ink)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
            Career
          </p>
          <h2 className="mb-4 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Work Experience
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
            My professional journey
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[var(--violet)] via-[var(--cyan)] to-transparent" />

          {EXPERIENCE.map((item, i) => (
            <Reveal key={i} delayClassName={revealDelays[i]}>
              <div className="relative mb-10 pl-6 sm:mb-12 sm:pl-8">
                {/* Dot */}
                <div className="absolute left-[-0.375rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--violet)] shadow-[0_0_12px_var(--violet)]" />

                <p className="mb-1 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.12em] text-[var(--cyan)]">
                  {item.period}
                </p>
                <p className="mb-1 font-[var(--font-display)] text-xl font-bold text-white">
                  {item.role}
                </p>
                <p className="mb-3 text-sm text-[var(--muted)]">
                  {item.company} · {item.type}
                </p>
                <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.925rem]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
