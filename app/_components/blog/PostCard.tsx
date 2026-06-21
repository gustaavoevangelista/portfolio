import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

type Props = {
  post: BlogPostMeta;
  compact?: boolean;
};

export default function PostCard({ post, compact = false }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)] hover:shadow-[0_8px_40px_rgba(34,212,253,0.12)]"
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <span className="font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-[var(--cyan)]">
          Blog
        </span>
        <span className="font-[var(--font-mono)] text-[0.68rem] text-[var(--muted)]">
          {post.readingTime}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <span
              key={`${post.slug}-${tag}`}
              className={`rounded-full border px-3 py-1 font-[var(--font-mono)] text-[0.68rem] tracking-[0.06em] ${
                i % 2 === 0
                  ? "border-[rgba(34,212,253,0.2)] bg-[var(--cyan-lo)] text-[var(--cyan)]"
                  : "border-[rgba(124,92,252,0.2)] bg-[var(--violet-lo)] text-[var(--violet)]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-2 font-[var(--font-display)] text-xl font-bold leading-tight text-white">
          {post.title}
        </p>

        <p
          className={`mb-5 text-sm leading-7 text-[var(--muted)] ${
            compact ? "max-w-[32rem]" : ""
          }`}
        >
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
          <time className="text-sm text-[var(--muted)]">
            {formatPostDate(post.date)}
          </time>
          <span className="text-sm font-medium text-[var(--text)] transition-colors group-hover:text-[var(--cyan)]">
            Read article ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
