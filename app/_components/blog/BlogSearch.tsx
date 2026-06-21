"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import type { BlogPostMeta } from "@/lib/blog-types";

type Props = {
  posts: BlogPostMeta[];
};

export default function BlogSearch({ posts }: Props) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredPosts = normalizedQuery
    ? posts.filter((post) => {
        const haystack = [
          post.title,
          post.description,
          post.tags.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : posts;

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="mb-3 block font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
          Search posts
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, topic, or tag"
          className="w-full rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--cyan)] focus:ring-2 focus:ring-[rgba(34,212,253,0.16)]"
        />
      </label>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
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

      {filteredPosts.length > 0 ? (
        <section className="grid gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] px-5 py-8 text-sm text-[var(--muted)]">
          No posts match that search.
        </div>
      )}
    </div>
  );
}
