"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#code-snippets", label: "Snippets" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 130)
          current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
		<nav
			className={clsx(
				'fixed inset-x-0 top-0 z-50 border-b px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8',
				scrolled
					? 'border-[var(--border)] bg-[rgba(8,11,20,0.84)] backdrop-blur-xl'
					: 'border-transparent bg-transparent',
			)}>
			<div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4'>
				<Link
					href='#hero'
					className='font-[var(--font-display)] text-base font-extrabold tracking-[-0.02em] text-white transition-colors hover:text-[var(--cyan)] sm:text-lg flex items-center gap-1'>
					<Image
						alt='logo'
						width={40}
						height={30}
						src='/GHE_logo.png'
					/>
					G<span className='text-[var(--violet)]'>.</span>Evangelista
				</Link>

				<div className='flex items-center gap-3 sm:gap-4'>
					<ul className='hidden items-center gap-6 md:flex'>
						{links.map(({ href, label }) => (
							<li key={href} className='flex'>
								<a
									href={href}
									className={clsx(
										'text-sm font-medium tracking-[0.03em] transition-colors hover:text-[var(--cyan)]',
										active === href.slice(1)
											? 'text-[var(--cyan)]'
											: 'text-[var(--muted)]',
									)}>
									{label}
								</a>
							</li>
						))}
					</ul>

					<a
						href='#contact'
						className='inline-flex items-center justify-center rounded-full border border-[var(--violet)] px-4 py-2 text-sm font-medium text-[var(--violet)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--violet)] hover:text-white'>
						Contact
					</a>
				</div>
			</div>
		</nav>
  );
}
