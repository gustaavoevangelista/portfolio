import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "../_components/blog/PostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Gustavo Evangelista",
  description: "Notes on frontend engineering, AI-assisted workflows, and shipping products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-12">
        <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
          Blog
        </p>
        <h1 className="max-w-3xl font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
          Practical notes on building modern frontend products.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
          I keep these posts short and useful: what I learned, what I changed, and the tradeoffs that mattered.
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

      <section className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
