/**
 * FEATURED PROJECTS — edit this array to add/remove/reorder projects.
 * Each project can link to a case study (slug must match a file in
 * src/content/case-studies/). `repo` in "owner/name" form enables the
 * automatic GitHub star count at build time; `stars` is the fallback.
 *
 * SCREENSHOTS: overwrite the generated placeholder PNGs in
 * public/images/projects/ with real screenshots (1200x675 / 16:9 best).
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
}

export const projects: Project[] = [
  {
    title: 'Momenta OS',
    slug: 'momenta-os',
    description:
      "AI OS harness that syncs across the whole team's ChatGPT instances via a shared project/agent config — a knowledge vault of client context, brand voice docs, content rules, and feedback logs becomes the single source of truth every assistant loads from.",
    outcome:
      'One shared AI brain: consistent brand voice and client context for every teammate.',
    image: '/images/projects/momenta-os.png',
    tech: ['ChatGPT Agents', 'Knowledge Vault', 'Prompt Systems', 'Workflow Design', 'Feedback Loops'],
    // Private/commercial — no public repo.
  },
  {
    title: 'Shako Kabob — Foodtruck POS',
    slug: 'shako-kabob-pos',
    description:
      'Full-stack point-of-sale and ordering platform for a food truck: employee management, inventory tracking, and sales across 18+ SQL tables, with automated Docker deployments on Coolify.',
    outcome: 'Cut build times 50% via Docker layer caching; led a team of 4 to production.',
    image: '/images/projects/shako-kabob.png',
    tech: ['React', 'Vite', 'Node.js', 'MySQL', 'Docker', 'GitHub Actions', 'Turborepo'],
    repo: 'papatenko/point-of-sale-system',
    repoUrl: 'https://github.com/papatenko/point-of-sale-system',
  },
  {
    title: 'Rock Paper Scissors Tournament',
    slug: 'rps-tournament',
    description:
      'Real-time competitive rock-paper-scissors tournament platform with a retro arcade theme — designed in Figma (20+ frames), built with React, TypeScript, and Socket.IO, run live on campus.',
    outcome: '95+ Google Lighthouse score; hosted live tournaments with real-time brackets.',
    image: '/images/projects/rps-tournament.png',
    tech: ['TypeScript', 'React', 'Socket.IO', 'TailwindCSS', 'Figma'],
    repo: 'devaine/RPS-Tournament',
    repoUrl: 'https://github.com/devaine/RPS-Tournament',
    demoUrl: 'https://rps.papatenko.org/',
    stars: 2,
  },
  {
    title: 'Proxmox Homelab',
    slug: 'homelab',
    description:
      'VLAN-segmented home infrastructure on Proxmox: ZFS NAS with RAID and automated snapshots, Nextcloud, Immich, and an NGINX reverse proxy with SSL/TLS + Cloudflare serving 8+ websites.',
    outcome: 'Securely self-hosts 8+ public sites and services for a fraction of SaaS cost.',
    image: '/images/projects/homelab.png',
    tech: ['Proxmox', 'ZFS', 'VLANs', 'Docker', 'Nginx', 'Cloudflare', 'Backrest'],
    repo: 'papatenko/homelab',
    repoUrl: 'https://github.com/papatenko/homelab',
  },
  {
    title: 'Schematic Spelunker',
    slug: 'schematic-spelunker',
    description:
      'NotebookLM-style AI chatbot that parses machinery schematics — React frontend, Rust parsing engine, and Gemini API — built in 24 hours leading a team of 4.',
    outcome: 'Under 30s processing for 15+ concurrent PDF documents.',
    image: '/images/projects/schematic-spelunker.png',
    tech: ['React', 'Rust', 'Gemini API', 'RAG', 'Document Parsing'],
    // No live demo — hackathon project.
  },
  {
    title: 'Portfolio Platform',
    slug: '',
    description:
      'Self-hosted gallery of 50+ graphics and websites, parsed from JSON into a React frontend and deployed as an HTTPS SaaS on my own Linux servers with a GitHub Actions CI/CD pipeline.',
    outcome: '99% uptime, fully self-hosted end to end.',
    image: '/images/projects/portfolio-platform.png',
    tech: ['React', 'CI/CD', 'GitHub Actions', 'Linux', 'Nginx'],
    repo: 'papatenko/portfolio',
    repoUrl: 'https://github.com/papatenko/portfolio',
    demoUrl: 'https://papatenko.org/',
  },
];

/** Notable open-source contributions listed in the Open Source section. */
export const contributions = [
  {
    title: 'devaine/RPS-Tournament',
    url: 'https://github.com/devaine/RPS-Tournament',
    note: 'Core contributor — real-time tournament logic and retro UI.',
  },
  {
    title: 'papatenko/dotfiles',
    url: 'https://github.com/papatenko/dotfiles',
    note: 'Lua-based Neovim + shell configuration, kept in sync across machines.',
  },
  {
    title: 'papatenko/point-of-sale-system',
    url: 'https://github.com/papatenko/point-of-sale-system',
    note: 'Foodtruck POS — MySQL, Node, React, Turborepo monorepo.',
  },
  {
    title: 'papatenko/my-odin-projects',
    url: 'https://github.com/papatenko/my-odin-projects',
    note: 'Vanilla web-dev fundamentals — The Odin Project curriculum.',
  },
];
