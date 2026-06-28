"use client";

import { useState } from "react";
import type { CodeSnippet } from "@/lib/data";
import SnippetCard from "./SnippetCard";

type Props = {
  snippets: CodeSnippet[];
};

export default function SnippetSearch({ snippets }: Props) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredSnippets = normalizedQuery
    ? snippets.filter((snippet) => {
        const haystack = [
          snippet.title,
          snippet.description,
          snippet.language,
          snippet.tags.join(" "),
          snippet.code,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : snippets;

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="mb-3 block font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
          Search snippets
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by hook, pattern, tag, or code"
          className="w-full rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--cyan)] focus:ring-2 focus:ring-[rgba(34,212,253,0.16)]"
        />
      </label>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          {filteredSnippets.length}{" "}
          {filteredSnippets.length === 1 ? "snippet" : "snippets"}
          {normalizedQuery ? ` matching "${query.trim()}"` : ""}
        </p>
        {normalizedQuery ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-sm font-medium text-[var(--cyan)] transition-colors hover:text-white"
          >
            Clear
          </button>
        ) : null}
      </div>

      {filteredSnippets.length > 0 ? (
        <section className="grid gap-6">
          {filteredSnippets.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </section>
      ) : (
        <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] px-5 py-8 text-sm text-[var(--muted)]">
          No snippets match that search.
        </div>
      )}
    </div>
  );
}
