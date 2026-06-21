import Link from "next/link";
import Reveal from "../ui/Reveal";
import PostCard from "../blog/PostCard";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts().slice(0, 3);
  const revealDelays = ["delay-[0ms]", "delay-[80ms]", "delay-[160ms]"];

  return (
    <section id="blog" className="bg-[var(--surface)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
                Writing
              </p>
              <h2 className="font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Notes from building, shipping, and learning.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
            >
              View all posts
            </Link>
          </div>
          <p className="mb-10 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-[1.05rem]">
            I publish short, practical notes on frontend engineering, product thinking, and the workflows that help me ship better work.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delayClassName={revealDelays[i]}>
              <PostCard post={post} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
