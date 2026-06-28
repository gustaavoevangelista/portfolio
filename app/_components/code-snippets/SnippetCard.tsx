import type { CodeSnippet } from "@/lib/data";

type Props = {
  snippet: CodeSnippet;
  compact?: boolean;
};

export default function SnippetCard({ snippet, compact = false }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)] hover:shadow-[0_8px_40px_rgba(34,212,253,0.14)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[rgba(8,11,20,0.5)] px-5 py-3">
        <span className="font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-[var(--cyan)]">
          {snippet.language}
        </span>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(34,212,253,0.2)] bg-[var(--cyan-lo)] px-3 py-1 font-[var(--font-mono)] text-[0.68rem] tracking-[0.06em] text-[var(--cyan)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 font-[var(--font-display)] text-xl font-bold text-white">
          {snippet.title}
        </h3>
        <p className="mb-5 text-sm leading-7 text-[var(--muted)]">
          {snippet.description}
        </p>

        <pre
          className={`mt-auto overflow-auto rounded-xl border border-[var(--border)] bg-[var(--ink)] p-4 text-xs leading-6 text-[var(--text)] ${
            compact ? "max-h-52" : "max-h-[28rem]"
          }`}
        >
          <code>{snippet.code}</code>
        </pre>
      </div>
    </article>
  );
}
