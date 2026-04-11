export const meta = {
  name: "Your Name",
  handle: "cads01",
  title: "Full-Stack Engineer",
  location: "Lagos, Nigeria",
  available: true,
  availableFor: "Remote · Full-time",
  email: "hello@cads01.dev",
  github: "https://github.com/cads01",
  linkedin: "https://www.linkedin.com/in/adedolapo-adeniyi-820108402/",
  twitter: "https://twitter.com/adsam101",
  resume: "https://drive.google.com/file/d/11MiGBhRCZqCgetcWzpydHFBcKCOTp-xi/view?usp=drive_link",
};

export const stack = [
  { name: "React", role: "Frontend", icon: "⚛" },
  { name: "Vite", role: "Build tool", icon: "⚡" },
  { name: "Tailwind v4", role: "Styling", icon: "🎨" },
  { name: "Node.js", role: "Runtime", icon: "🟩" },
  { name: "Express", role: "Backend", icon: "🚂" },
  { name: "MongoDB", role: "Database", icon: "🍃" },
  { name: "JWT + RBAC", role: "Auth", icon: "🔑" },
  { name: "Cloudinary", role: "Media", icon: "☁" },
  { name: "Resend", role: "Email", icon: "📧" },
  { name: "Paystack", role: "Payments", icon: "💳" },
  { name: "Vercel", role: "Deploy FE", icon: "▲" },
  { name: "Render", role: "Deploy BE", icon: "🎯" },
  { name: "Cisco / MikroTik", role: "Networking", icon: "🌐" },
  { name: "Git / GitHub", role: "Version control", icon: "🐙" },
];

export const stats = [
  { number: "10+", label: "Years in tech" },
  { number: "3", label: "Disciplines mastered" },
  { number: "1", label: "SaaS live now" },
  { number: "∞", label: "Git commits" },
];

export const projects = [
  {
    tag: "Featured · SaaS · Live",
    name: "EventApp",
    desc: "A full-stack event management platform with ticketing, role-based dashboards, Paystack-powered payments, Cloudinary image uploads, and transactional emails via Resend. Built end-to-end: schema design through to CI/CD deployment on Vercel + Render.",
    pills: ["React + Vite", "Tailwind v4", "Node.js", "Express", "MongoDB Atlas", "JWT RBAC", "Paystack", "Cloudinary", "Resend"],
    github: "https://github.com/cads01/EVENT_APP",
    live: "#",
    featured: true,
  },
  {
    tag: "API · Auth",
    name: "Auth Service",
    desc: "Stateless JWT auth with refresh tokens, role permissions, and route-level middleware. Production-hardened and reusable across projects.",
    pills: ["Node.js", "JWT", "MongoDB"],
    github: "https://github.com/cads01/EVENT_APP",
    live: null,
    featured: false,
  },
  {
    tag: "Integration · Payments",
    name: "Payment Layer",
    desc: "Paystack webhook handler with idempotent event processing, ticket generation on payment confirmation, and receipt delivery via transactional email.",
    pills: ["Paystack", "Resend", "Express"],
    github: "https://github.com/cads01/EVENT_APP",
    live: null,
    featured: false,
  },
];

export const experience = [
  {
    period: "2024 – Present",
    role: "Founder & Full-Stack Engineer",
    company: "EventApp (Self-directed)",
    desc: "Architected and shipped an event management SaaS from zero. Designed the data model, built the REST API, wired payments and transactional emails, and deployed to production. Sole engineer across frontend, backend, and infrastructure.",
    tags: ["React", "Node.js", "MongoDB", "Paystack"],
  },
  {
    period: "2019 – Present",
    role: "Software Manager",
    company: "Open to Remote Opportunities",
    desc: "Managing software delivery lifecycles, cross-functional engineering teams, and technical roadmaps. Bridging product requirements and engineering execution — from scoping to post-release monitoring.",
    tags: ["Team Leadership", "Agile", "Product", "Remote"],
    highlight: true,
  },
  {
    period: "2019 – 2024",
    role: "Network Manager",
    company: "5 Years Experience",
    desc: "Led enterprise network infrastructure — design, deployment, and ongoing management of LAN/WAN environments. Responsible for uptime SLAs, security policies, VLAN segmentation, and routing protocols across multi-site deployments.",
    tags: ["Cisco", "MikroTik", "LAN/WAN", "VLAN", "BGP"],
  },
  {
    period: "2019 – 2024",
    role: "IT Support Engineer",
    company: "5 Years Experience",
    desc: "Tier 1–3 support across hardware, OS, and enterprise software. Built internal tooling for ticket triage, maintained Active Directory, and onboarded 100+ users across multiple departments.",
    tags: ["Windows Server", "Active Directory", "Helpdesk", "Hardware"],
  },
  {
    period: "2017 – 2019",
    role: "Full-Stack Developer",
    company: "Freelance / Contract",
    desc: "Delivered React + Node.js applications for clients across e-commerce, admin tooling, and content platforms. Integrated third-party APIs, managed deployments, and maintained production systems.",
    tags: ["React", "Node.js", "REST APIs", "Deployment"],
  },
];

export const marqueeItems = [
  "React", "Node.js", "MongoDB", "Express", "JWT Auth",
  "Cloudinary", "Paystack", "Resend", "Vercel", "Render",
  "Vite", "Tailwind v4", "REST APIs", "RBAC", "Networking",
  "IT Support", "Software Management", "Remote",
];
