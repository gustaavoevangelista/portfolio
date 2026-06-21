import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Gustavo Evangelista`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="mt-12 scroll-mt-24 font-[var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-white"
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className="mt-8 scroll-mt-24 font-[var(--font-display)] text-xl font-bold tracking-[-0.02em] text-white"
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="leading-8 text-[var(--muted)]" />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul {...props} className="my-6 list-disc space-y-2 pl-6 text-[var(--muted)]" />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol {...props} className="my-6 list-decimal space-y-2 pl-6 text-[var(--muted)]" />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li {...props} className="leading-8" />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="my-8 border-l-2 border-[var(--cyan)] bg-[rgba(34,212,253,0.06)] px-5 py-4 text-[var(--text)]"
    />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      {...props}
      className="text-[var(--cyan)] underline decoration-[rgba(34,212,253,0.35)] underline-offset-4 transition-colors hover:decoration-[var(--cyan)]"
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="my-8 overflow-x-auto rounded-[1rem] border border-[var(--border)] bg-[#070b14] p-5 text-sm text-[var(--text)]"
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      {...props}
      className="rounded bg-[rgba(124,92,252,0.12)] px-1.5 py-0.5 font-[var(--font-mono)] text-[0.92em] text-[var(--text)]"
    />
  ),
};

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
    },
    components: mdxComponents,
  });

  return (
    <article>
      <div className="mb-8">
        <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
          Article
        </p>
        <h1 className="max-w-3xl font-[var(--font-display)] text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <time>{formatPostDate(post.date)}</time>
          <span>{post.readingTime}</span>
        </div>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-[1.05rem]">
          {post.description}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
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

      <div className="space-y-6">
        {content}
      </div>

      <div className="mt-12 flex flex-wrap gap-3 border-t border-[var(--border)] pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
        >
          Back to blog
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full bg-[var(--violet)] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
        >
          Start a project
        </Link>
      </div>
    </article>
  );
}
