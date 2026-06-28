import { CODE_SNIPPETS } from "@/lib/data";
import Link from "next/link";
import SnippetCard from "../code-snippets/SnippetCard";
import Reveal from "../ui/Reveal";

export default function CodeSnippets() {
  const revealDelays = [
    "delay-[0ms]",
    "delay-[80ms]",
    "delay-[160ms]",
    "delay-[240ms]",
  ];

  return (
    <section id="code-snippets" className="bg-[var(--ink)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
                Code Library
              </p>
              <h2 className="font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Code Snippets
              </h2>
            </div>
            <Link
              href="/code-snippets"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
            >
              View all snippets
            </Link>
          </div>
          <p className="mb-10 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
            Practical implementation notes and reusable patterns from my day-to-day frontend work.
          </p>
        </Reveal>

        {CODE_SNIPPETS.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {CODE_SNIPPETS.slice(0, 2).map((snippet, i) => (
              <Reveal key={snippet.id} delayClassName={revealDelays[i % revealDelays.length]}>
                <SnippetCard snippet={snippet} compact />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delayClassName="delay-[100ms]">
            <div className="rounded-[1.25rem] border border-dashed border-[var(--border)] bg-[var(--card)] p-8 sm:p-10">
              <p className="font-[var(--font-display)] text-2xl font-bold text-white">
                Snippets coming soon.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-[0.95rem]">
                This space is ready for short examples, patterns, hooks, utilities, and UI implementation details.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
