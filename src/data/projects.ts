/**
 * FEATURED PROJECTS — edit this array to add/remove/reorder projects.
 * Each project can link to a case study (slug must match a file in
 * src/content/case-studies/). `repo` in "owner/name" form enables the
 * automatic GitHub star count at build time; `stars` is the fallback.
 * Screenshots go in public/images/projects/ (1200x675 recommended).
 */
export interface Project {
  title: string;
  slug: string; // case-study slug, or '' for none
  description: string;
  outcome: string; // one-line business/user outcome
  image: string; // path under public/, e.g. /images/projects/momenta.png
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
      'Slack-first AI assistant that streamlines LinkedIn content creation across multiple clients — text, image, and video generation with per-client knowledge that improves over time.',
    outcome:
      'Cut multi-client LinkedIn content production from hours to minutes per post.',
    image: '/images/projects/momenta-os.svg',
    tech: ['AI Agents', 'Slack API', 'JSON Schema', 'MCP', 'Google Drive API', 'Canva API'],
    // Private/commercial — no public repo.
  },
  {
    title: 'Rock Paper Scissors Tournament',
    slug: 'rps-tournament',
    description:
      'Real-time competitive rock-paper-scissors tournament platform with a retro arcade theme, run live on the Cy-Fair campus.',
    outcome: 'Hosted live campus tournaments with real-time multiplayer brackets.',
    image: '/images/projects/rps-tournament.svg',
    tech: ['TypeScript', 'React', 'Node.js', 'Socket.IO'],
    repo: 'devaine/RPS-Tournament',
    repoUrl: 'https://github.com/devaine/RPS-Tournament',
    demoUrl: 'https://rps.papatenko.org/',
    stars: 2,
  },
  {
    title: 'Homelab',
    slug: 'homelab',
    description:
      'Proxmox-based home infrastructure running Nextcloud, Immich, and this portfolio — with rsync + Backrest backup strategies, reverse proxying, and full operational documentation.',
    outcome: 'Self-hosted cloud storage and photo backup for a fraction of SaaS cost.',
    image: '/images/projects/homelab.svg',
    tech: ['Proxmox', 'Docker', 'Linux', 'Nginx', 'Backrest', 'Networking'],
    repo: 'papatenko/homelab',
    repoUrl: 'https://github.com/papatenko/homelab',
  },
  {
    title: 'Schematic Spelunker',
    slug: 'schematic-spelunker',
    description:
      'Hackathon-built AI chatbot that parses machinery schematics so technicians can make informed decisions about their unique equipment.',
    outcome: 'Turned dense schematic PDFs into conversational, searchable answers.',
    image: '/images/projects/schematic-spelunker.svg',
    tech: ['Python', 'LLMs', 'RAG', 'Document Parsing'],
    demoUrl: 'https://devpost.com/software/schematic-spelunker',
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
    title: 'papatenko/my-odin-projects',
    url: 'https://github.com/papatenko/my-odin-projects',
    note: 'Vanilla web-dev fundamentals — The Odin Project curriculum.',
  },
  {
    title: 'papatenko/point-of-sale-system',
    url: 'https://github.com/papatenko/point-of-sale-system',
    note: 'JavaScript point-of-sale system experiment.',
  },
];
