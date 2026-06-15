import { PERSON } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--ink)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <span className="font-[var(--font-display)] text-base font-extrabold text-white">
          G<span className="text-[var(--violet)]">.</span>Evangelista
        </span>

        <span className="text-sm text-[var(--muted)]">
          © {year} Gustavo Evangelista. All rights reserved.
        </span>

        <div className="flex flex-wrap gap-4 text-sm">
        {[
          { label: "LinkedIn", href: PERSON.linkedin },
          { label: "GitHub",   href: PERSON.github },
          { label: "Email",    href: `mailto:${PERSON.email}` },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="text-[var(--muted)] transition-colors hover:text-[var(--cyan)]"
          >
            {label}
          </a>
        ))}
        </div>
      </div>
    </footer>
  );
}
