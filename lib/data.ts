export const PERSON = {
  name: "Gustavo Evangelista",
  title: "Frontend Software Engineer",
  tagline: "I craft fast, beautiful, accessible web experiences that people love to use.",
  bio: [
    "I'm a Frontend Engineer passionate about creating seamless digital products. I specialise in modern JavaScript frameworks, performance optimisation, and bridging the gap between design and engineering.",
    "When I'm not pushing pixels you'll find me exploring new tools, contributing to open-source, or obsessing over typography and motion design.",
  ],
  linkedin: "https://www.linkedin.com/in/gustaavoevangelista",
  github: "https://github.com/gustaavoevangelista",
  email: "gustavo.eng.henrique@gmail.com",
  yearsExperience: 4,
  available: true,
};

export const SKILLS = [
  { name: "React",       color: "#61DAFB", group: "framework" },
  { name: "TypeScript",  color: "#3178C6", group: "language" },
  { name: "JavaScript",  color: "#F7DF1E", group: "language" },
  { name: "Next.js",     color: "#FFFFFF", group: "framework" },
  { name: "Vue",         color: "#42b883", group: "framework" },
  { name: "CSS / SCSS",  color: "#CC6699", group: "style" },
  { name: "Tailwind",    color: "#38BDF8", group: "style" },
  { name: "Framer Motion", color: "#0055FF", group: "animation" },
  { name: "Vite",        color: "#646CFF", group: "tooling" },
  { name: "Webpack",     color: "#8DD6F9", group: "tooling" },
  { name: "Git",         color: "#F05032", group: "tooling" },
  { name: "Figma",       color: "#A259FF", group: "design" },
  { name: "Node.js",     color: "#83CD29", group: "backend" },
  { name: "GraphQL",     color: "#E10098", group: "backend" },
  { name: "REST API",    color: "#22D4FD", group: "backend" },
  { name: "Jest",        color: "#C21325", group: "testing" },
];

export const PROJECTS = [
  {
    id: "ecommerce",
    emoji: "🛒",
    gradient: "from-[#1a0b3b] to-[#0b1a3b]",
    name: "E-Commerce Platform",
    description:
      "A full-featured storefront with real-time inventory, cart management, and seamless checkout — built for performance and scale.",
    tags: ["React", "TypeScript", "Next.js"],
    tagColor: ["violet", "violet", "cyan"] as const,
    demo: "#",
    source: "#",
  },
  {
    id: "analytics",
    emoji: "📊",
    gradient: "from-[#0b2a1a] to-[#0b1a2a]",
    name: "Analytics Dashboard",
    description:
      "A data-viz platform with interactive charts, real-time updates, and customisable widget layouts for business intelligence.",
    tags: ["Vue 3", "D3.js", "TailwindCSS"],
    tagColor: ["violet", "cyan", "violet"] as const,
    demo: "#",
    source: "#",
  },
  {
    id: "design-system",
    emoji: "🎨",
    gradient: "from-[#2a1a0b] to-[#1a0b2a]",
    name: "Design System",
    description:
      "A component library used across multiple products, built accessibility-first with thorough Storybook documentation.",
    tags: ["React", "Framer Motion", "Figma API"],
    tagColor: ["violet", "violet", "cyan"] as const,
    demo: "#",
    source: "#",
  },
  {
    id: "ai-chat",
    emoji: "🤖",
    gradient: "from-[#0b1a2a] to-[#1a2a0b]",
    name: "AI Chat Interface",
    description:
      "A polished conversational UI with streaming responses, context memory, markdown rendering, and code highlighting.",
    tags: ["React", "OpenAI", "Node.js"],
    tagColor: ["violet", "cyan", "violet"] as const,
    demo: "#",
    source: "#",
  },
];

export const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "Your Current Company",
    type: "Full-time",
    description:
      "Lead development of the customer-facing product suite. Architected a micro-frontend system that reduced build times by 60%. Mentored junior engineers and drove TypeScript adoption across the team.",
  },
  {
    period: "2021 — 2023",
    role: "Frontend Developer",
    company: "Previous Company",
    type: "Full-time",
    description:
      "Delivered pixel-perfect React interfaces for SaaS clients across fintech and e-commerce verticals. Improved Core Web Vitals scores by 40% through targeted performance work.",
  },
  {
    period: "2020 — 2021",
    role: "Junior Frontend Developer",
    company: "First Company",
    type: "Full-time",
    description:
      "Built and maintained responsive marketing pages and internal dashboards. Developed skills in Vue.js, REST API integration, and cross-browser compatibility.",
  },
];
