import type { Metadata } from "next";
import Link from "next/link";
import SnippetSearch from "../_components/code-snippets/SnippetSearch";
import { CODE_SNIPPETS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Code Snippets — Gustavo Evangelista",
  description: "Reusable React and TypeScript snippets for frontend engineering.",
};

export default function CodeSnippetsPage() {
  return (
    <div>
      <section className="mb-12">
        <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
          Code Snippets
        </p>
        <h1 className="max-w-3xl font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
          Small reusable patterns for everyday frontend work.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
          A compact library of hooks, utilities, and UI patterns I reach for when building React interfaces.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--violet)] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Work with me
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
          >
            Back home
          </Link>
        </div>
      </section>

      <SnippetSearch snippets={CODE_SNIPPETS} />
    </div>
  );
}
