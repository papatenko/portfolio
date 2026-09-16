/**
 * FEATURED PROJECTS — edit this array to add/remove/reorder projects.
 * Each project can link to a case study (slug must match a file in
 * src/content/case-studies/). `repo` in "owner/name" form enables the
 * automatic GitHub star count at build time; `stars` is the fallback.
 *
 * SCREENSHOTS: overwrite the generated placeholder PNGs in
 * public/images/projects/ with real screenshots (1200x675 / 16:9 best).
 *
 * `metaDescription` is the per-project <meta name="description"> used on the
 * case-study page; it falls back to the case study's own summary.
 *
 * NO CLIENT OR PARTNER NAMES. Client work is described by mechanism, not by
 * company, product, or project name. This is a standing constraint, not a
 * placeholder.
 */
export interface Project {
  title: string;
  slug: string; // case-study slug, or '' for none
  description: string;
  outcome: string; // one-line business/user outcome
  image: string; // path under public/, e.g. /images/projects/momenta-os.png
  tech: string[];
  repo?: string; // GitHub "owner/name" — enables live star count
  repoUrl?: string;
  demoUrl?: string;
  stars?: number; // fallback if the GitHub API is unreachable at build
  metaDescription?: string;
  status?: string; // e.g. 'In progress' — shown as a badge on the card
}

export const projects: Project[] = [
  {
    title: 'Momenta OS',
    slug: 'momenta-os',
    description:
      'An AI agent operating system for a marketing agency, built on a governed Google Drive vault. Supported AI assistants load client context, brand voice, and content rules before writing. More than 60 versioned agent skills turn recurring work such as WordPress audits, SEO remediation, and Pressable MCP site updates into machine-readable runbooks.',
    outcome:
      'Per-post content turnaround dropped from 45 minutes to under 10 across an 8-person team.',
    image: '/images/projects/momenta-os.png',
    tech: ['Agent Harnesses', 'MCP', 'Agent Skills', 'Google Drive', 'WordPress', 'Governance'],
    metaDescription:
      'Momenta OS: an agent operating system on a governed Google Drive vault, with 60+ versioned agent skills and Pressable MCP site updates. Case study by Justin Kondratenko.',
    // Private/commercial — no public repo.
  },
  {
    title: 'Usage-Based Billing Platform',
    slug: '',
    status: 'In progress',
    description:
      'A usage-based billing platform that meters per-lead usage from a partner SaaS product and sends it to Stripe for invoicing. It uses integer-cent pricing calculated on the server, signed webhooks, event deduplication, and idempotent billing cycles. Auth.js sign-in adds per-login 2FA, login throttling, and fail-closed behavior. A GitHub Actions and Azure OIDC pipeline verifies, builds, migrates, and deploys to App Service and PostgreSQL Flexible Server. Azure Key Vault stores secrets under a system-assigned managed identity.',
    outcome: 'In progress. The build exists; deployment comes later.',
    image: '/images/projects/billing-platform.png',
    tech: ['TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Auth.js', 'Azure', 'GitHub Actions'],
    // Client work — no public repo, no demo, no names.
  },
  {
    title: 'Proxmox Homelab',
    slug: 'homelab',
    description:
      'A 5-host Proxmox and Docker estate running more than 20 container stacks under GitOps. It has centralized SSO, network-wide DNS filtering, and a Tailscale mesh for zero-trust remote access. Scheduled restic backups use daily, weekly, and monthly retention for host configs, service stacks, and Docker volumes. Completion hooks page when a run is missed.',
    outcome: 'Sustained 99%+ uptime across 8+ publicly reachable services.',
    image: '/images/projects/homelab.png',
    tech: ['Proxmox', 'Docker', 'GitOps', 'Tailscale', 'Nginx', 'restic', 'Linux'],
    metaDescription:
      'A 5-host Proxmox and Docker estate: 20+ container stacks under GitOps, centralized SSO, DNS filtering, a Tailscale mesh, and tested restic backups. Case study by Justin Kondratenko.',
    repo: 'papatenko/homelab',
    repoUrl: 'https://github.com/papatenko/homelab',
  },
  {
    title: 'Shako Kabob — Foodtruck POS',
    slug: 'shako-kabob-pos',
    description:
      'Full-stack point-of-sale and ordering platform for a food truck: employee management, inventory tracking, and sales across 18+ SQL tables, with automated Docker deployments on Coolify.',
    outcome: 'Cut build times 50% via Docker layer caching; led a team of 4 to production.',
    image: '/images/projects/shako-kabob.png',
    tech: ['React', 'Vite', 'Node.js', 'MySQL', 'Docker', 'GitHub Actions', 'Turborepo'],
    metaDescription:
      'A full-stack food-truck point-of-sale platform using React, Node, MySQL, and Docker on Coolify, built with a team of four. Case study by Justin Kondratenko.',
    repo: 'papatenko/point-of-sale-system',
    repoUrl: 'https://github.com/papatenko/point-of-sale-system',
    demoUrl: 'https://pos.papatenko.org/',
  },
  {
    title: 'Rock Paper Scissors Tournament',
    slug: 'rps-tournament',
    description:
      'Real-time competitive rock-paper-scissors tournament platform with a retro arcade theme. Designed in Figma with more than 20 frames, built with React, TypeScript, and Socket.IO, and run live on campus.',
    outcome: '95+ Google Lighthouse score; hosted live tournaments with real-time brackets.',
    image: '/images/projects/rps-tournament.png',
    tech: ['TypeScript', 'React', 'Socket.IO', 'TailwindCSS', 'Figma'],
    metaDescription:
      'A real-time multiplayer tournament platform in React, TypeScript, and Socket.IO, run live on campus. Case study by Justin Kondratenko.',
    repo: 'devaine/RPS-Tournament',
    repoUrl: 'https://github.com/devaine/RPS-Tournament',
    demoUrl: 'https://rps.papatenko.org/',
    stars: 2,
  },
  {
    title: 'Schematic Spelunker',
    slug: 'schematic-spelunker',
    description:
      'NotebookLM-style AI chatbot that parses machinery schematics. Built in 24 hours with a React frontend, Rust parsing engine, and Gemini API while leading a team of 4.',
    outcome: 'Under 30s processing for 15+ concurrent PDF documents.',
    image: '/images/projects/schematic-spelunker.png',
    tech: ['React', 'Rust', 'Gemini API', 'RAG', 'Document Parsing'],
    metaDescription:
      'A retrieval-augmented chatbot that parses machinery schematics with React, Rust, and the Gemini API. Built in 24 hours. Case study by Justin Kondratenko.',
    // No live demo — hackathon project.
  },
  {
    title: 'Portfolio Platform',
    slug: '',
    description:
      'Self-hosted gallery of more than 50 graphics and websites. JSON feeds a React frontend, which runs as an HTTPS service on my Linux servers through a GitHub Actions CI/CD pipeline.',
    outcome: '99% uptime, fully self-hosted end to end.',
    image: '/images/projects/portfolio-platform.png',
    tech: ['React', 'CI/CD', 'GitHub Actions', 'Linux', 'Nginx'],
    repo: 'papatenko/portfolio',
    repoUrl: 'https://github.com/papatenko/portfolio',
    demoUrl: 'https://old.papatenko.org/',
  },
];

/** Notable open-source contributions listed in the Open Source section. */
export const contributions = [
  {
    title: 'devaine/RPS-Tournament',
    url: 'https://github.com/devaine/RPS-Tournament',
    note: 'Core contributor: real-time tournament logic and retro UI.',
  },
  {
    title: 'papatenko/dotfiles',
    url: 'https://github.com/papatenko/dotfiles',
    note: 'Lua-based Neovim + shell configuration, kept in sync across machines.',
  },
  {
    title: 'papatenko/point-of-sale-system',
    url: 'https://github.com/papatenko/point-of-sale-system',
    note: 'Foodtruck POS: MySQL, Node, React, Turborepo monorepo.',
  },
  {
    title: 'papatenko/my-odin-projects',
    url: 'https://github.com/papatenko/my-odin-projects',
    note: 'Vanilla web development fundamentals from The Odin Project curriculum.',
  },
];
