export const PERSON = {
	name: 'Gustavo Evangelista',
	title: 'Frontend Software Engineer',
	tagline:
		'I build high-performing web applications with React, Next.js, TypeScript, and AI-native workflows.',
	bio: [
		"I'm a Frontend Software Engineer with 4 years of experience building intuitive, high-performing web applications.",
		'I use AI daily to move faster and ship better: agentic workflows, reusable skills, MCP-connected context, spec-driven development  and practical AI best practices help me go from idea to implementation with more clarity and less friction.',
	],
	linkedin: 'https://www.linkedin.com/in/gustaavoevangelista',
	github: 'https://github.com/gustaavoevangelista',
	email: 'gustavo.eng.henrique@gmail.com',
	yearsExperience: 4,
	available: true,
};

export const SKILLS = [
	{ name: 'React', color: '#61DAFB', group: 'framework' },
	{ name: 'Next.js', color: '#FFFFFF', group: 'framework' },
	{ name: 'TypeScript', color: '#3178C6', group: 'language' },
	{ name: 'Tailwind', color: '#38BDF8', group: 'style' },
	{ name: 'Shadcn/UI', color: '#E2E8F0', group: 'style' },
	{ name: 'Zustand', color: '#F97316', group: 'state' },
	{ name: 'Cypress', color: '#05C46B', group: 'testing' },
	{ name: 'Playwright', color: '#2D2D2D', group: 'testing' },
	{ name: 'Prisma', color: '#2D3748', group: 'backend' },
	{ name: 'MySQL', color: '#4479A1', group: 'backend' },
	{ name: 'Firebase', color: '#FFCA28', group: 'backend' },
	{ name: 'Axios', color: '#5A29E4', group: 'backend' },
	{ name: 'HTML / CSS', color: '#E34F26', group: 'style' },
	{ name: 'Git', color: '#F05032', group: 'tooling' },
	{ name: 'Figma', color: '#A259FF', group: 'design' },
	{ name: 'REST APIs', color: '#22D4FD', group: 'backend' },
	{ name: 'ASP.NET', color: '#512BD4', group: 'backend' },
	{ name: 'AWS', color: '#FF9900', group: 'cloud' },
	{ name: 'SQL Server', color: '#CC2927', group: 'backend' },
	{ name: 'CDN', color: '#00A3E0', group: 'infrastructure' },
	{ name: 'AI', color: '#FFD700', group: 'other' },
];

export const PROJECTS = [
	{
		id: 'entertours',
		emoji: '🗺️',
		gradient: 'from-[#11213a] to-[#0d3b3a]',
		name: 'Entertours',
		description:
			'An early-stage MVP for geolocation-based tours with role-based access, tour filtering, dashboard management, and booking flows.',
		tags: ['React', 'Next.js', 'TypeScript'],
		tagColor: ['cyan', 'violet', 'violet'] as const,
		demo: 'https://entertours-qe0sl8iho-gustaavoevangelistas-projects.vercel.app/',
		source: 'https://github.com/earthquake-algarve/entertours',
	},
];

export type CodeSnippet = {
	id: string;
	title: string;
	description: string;
	language: string;
	code: string;
	tags: string[];
};

export const CODE_SNIPPETS: CodeSnippet[] = [
	{
		id: 'debounce-hook',
		title: 'Debounce hook',
		description:
			'Delay a changing value until the user stops typing, useful for search inputs and expensive filters.',
		language: 'TypeScript',
		tags: ['React', 'Hook', 'Performance'],
		code: `import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}`,
	},
	{
		id: 'click-outside-detector',
		title: 'Click Outside detector',
		description:
			'Close menus, popovers, and dialogs when the user clicks outside the referenced element.',
		language: 'TypeScript',
		tags: ['React', 'Hook', 'UI'],
		code: `import { RefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void
) {
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const element = ref.current;

      if (!element || element.contains(event.target as Node)) {
        return;
      }

      onClickOutside();
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [ref, onClickOutside]);
}`,
	},
	{
		id: 'previous-value-hook',
		title: 'Previous value hook',
		description:
			'Keep track of the previous render value when comparing state changes or triggering transitions.',
		language: 'TypeScript',
		tags: ['React', 'Hook', 'State'],
		code: `import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T) {
  const previousValueRef = useRef<T>();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}`,
	},
	{
		id: 'local-storage-hook',
		title: 'LocalStorage Hook',
		description:
			'Persist state in localStorage while keeping a familiar useState-style API.',
		language: 'TypeScript',
		tags: ['React', 'Hook', 'Storage'],
		code: `import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`,
	},
	{
		id: 'simple-fetch-hook',
		title: 'Simple Fetch hook',
		description:
			'Fetch JSON data with loading and error states while cancelling stale requests on cleanup.',
		language: 'TypeScript',
		tags: ['React', 'Hook', 'API'],
		code: `import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      try {
        setState((current) => ({ ...current, loading: true }));

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = (await response.json()) as T;
        setState({ data, error: null, loading: false });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setState({
          data: null,
          error: error instanceof Error ? error.message : "Unknown error",
          loading: false,
        });
      }
    }

    loadData();

    return () => controller.abort();
  }, [url]);

  return state;
}`,
	},
	{
		id: 'detect-mobile-hook',
		title: 'Detect Mobile hook',
		description:
			'Track whether the current viewport matches a mobile breakpoint and react to resize changes.',
		language: 'TypeScript',
		tags: ['React', 'Hook', 'Responsive'],
		code: `import { useEffect, useState } from "react";

export function useIsMobile(maxWidth = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: " + maxWidth + "px)");

    function updateMatch(event: MediaQueryList | MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    updateMatch(mediaQuery);
    mediaQuery.addEventListener("change", updateMatch);

    return () => {
      mediaQuery.removeEventListener("change", updateMatch);
    };
  }, [maxWidth]);

  return isMobile;
}`,
	},
	{
		id: 'scroll-to-top-button',
		title: 'Scroll to top button',
		description:
			'Show a fixed action button after the user scrolls down and smoothly return to the page top.',
		language: 'TypeScript',
		tags: ['React', 'Component', 'UX'],
		code: `import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to top
    </button>
  );
}`,
	},
	{
		id: 'use-interval-hook',
		title: 'Use Interval',
		description:
			'Run a callback on an interval without capturing stale state inside setInterval.',
		language: 'TypeScript',
		tags: ['React', 'Hook', 'Timer'],
		code: `import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | null) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }

    const intervalId = window.setInterval(() => {
      callbackRef.current();
    }, delay);

    return () => window.clearInterval(intervalId);
  }, [delay]);
}`,
	},
];

export const EXPERIENCE = [
	{
		period: '09/2025 — Present',
		role: 'Software Engineer',
		company: 'Craftable Software',
		type: 'Full-time',
		description:
			'Transitioning a legacy codebase for a major UK ski market player while owning most UI enhancements. I rely on AI-assisted workflows, agents, and MCP-connected context to move quickly through implementation and validation, while keeping the work polished, testable, and production-ready. Built A/B tests that revealed new product opportunities and helped increase online bookings by 15%.',
	},
	{
		period: '06/2023 — 08/2025',
		role: 'Software Engineer',
		company: 'Atos IT Services and Solutions',
		type: 'Full-time',
		description:
			'Developed a platform for 5k+ Portuguese public tenders, including forms with 400+ fields and 20k+ validations for EU compliance. Built reusable components that reduced development effort by 20% and maintained 100% frontend test coverage.',
	},
	// {
	//   period: "01/2022 — Present",
	//   role: "Software Engineer",
	//   company: "Entertours",
	//   type: "Ongoing",
	//   description:
	//     "Building an MVP for geolocation-based tours with 3 user roles and 15+ core features. Delivered a responsive UI with reusable components, route protection, secure access control, and end-to-end tested booking and admin flows.",
	// },
	{
		period: '01/2023 — 08/2023',
		role: 'Frontend Software Developer',
		company: 'Retink Media',
		type: 'Full-time',
		description:
			'Translated detailed designs into responsive production-ready UI for an AI content creation platform. Integrated internal and third-party REST APIs, reduced API calls by 15%, lowered re-renders by 20%, and maintained end-to-end test coverage across key flows.',
	},
];
