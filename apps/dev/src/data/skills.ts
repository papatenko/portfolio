/**
 * SKILLS — edit categories/skills here. `icon` is a simple-icons slug
 * (https://simpleicons.org). Icons load from the jsDelivr CDN; if a slug
 * has no icon, a terminal-style fallback chip renders instead.
 */
export interface Skill {
  name: string;
  icon?: string; // simple-icons slug
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
      { name: 'Go', icon: 'go' },
      { name: 'SQL', icon: 'postgresql' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'C++', icon: 'cplusplus' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Vue / Nuxt', icon: 'vuedotjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Socket.IO', icon: 'socketdotio' },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Proxmox', icon: 'proxmox' },
      { name: 'Azure' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Server & Network Admin' },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'Agent Deployment' },
      { name: 'Claude', icon: 'claude' },
      { name: 'Hermes' },
      { name: 'MCP Servers' },
      { name: 'AI Automations' },
      { name: 'JSON Schema Workflows', icon: 'json' },
    ],
  },
];
