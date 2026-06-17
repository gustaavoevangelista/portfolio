import { PROJECTS } from "@/lib/data";
import Reveal from "../ui/Reveal";

export default function Projects() {
  const revealDelays = [
    "delay-[0ms]",
    "delay-[80ms]",
    "delay-[160ms]",
    "delay-[240ms]",
  ];

  return (
    <section id="projects" className="bg-[var(--surface)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
            Portfolio
          </p>
          <h2 className="mb-4 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Selected Projects
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
            A few things I&apos;ve built.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:gap-7">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delayClassName={revealDelays[i]}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: typeof PROJECTS[0] }) {
  const gradientClasses = {
    from: p.gradient.split(" ")[0],
    to: p.gradient.split(" ")[1],
  };

  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--violet)] hover:shadow-[0_8px_40px_rgba(124,92,252,0.18)]"
    >
      {/* Thumb */}
      <div
        className={`flex h-44 items-center justify-center bg-gradient-to-br ${gradientClasses.from} ${gradientClasses.to} text-6xl`}
      >
        {p.emoji}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {p.tags.map((tag, ti) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 font-[var(--font-mono)] text-[0.68rem] tracking-[0.06em] ${
                p.tagColor[ti] === "cyan"
                  ? "border-[rgba(34,212,253,0.2)] bg-[var(--cyan-lo)] text-[var(--cyan)]"
                  : "border-[rgba(124,92,252,0.2)] bg-[var(--violet-lo)] text-[var(--violet)]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mb-2 font-[var(--font-display)] text-xl font-bold text-white">
          {p.name}
        </p>
        <p className="flex-1 text-sm leading-7 text-[var(--muted)]">
          {p.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-5">
          {[
            { label: "↗ Live demo", href: p.demo },
            { label: "⌥ Source",   href: p.source },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--cyan)]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
