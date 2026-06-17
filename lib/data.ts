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
