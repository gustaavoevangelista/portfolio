import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function CodeSnippetsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,92,252,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,212,253,0.08),transparent_30%)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(8,11,20,0.9)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-[var(--font-display)] text-base font-extrabold tracking-[-0.02em] text-white transition-colors hover:text-[var(--cyan)] sm:text-lg"
          >
            <Image alt="logo" width={32} height={24} src="/GHE_logo.png" />
            G<span className="text-[var(--violet)]">.</span>Evangelista
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/#code-snippets"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
            >
              Back to section
            </Link>
            <Link
              href="/"
              className="hidden rounded-full bg-[var(--violet)] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 sm:inline-flex"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {children}
      </main>
    </div>
  );
}
