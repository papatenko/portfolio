/**
 * SKILLS — edit categories/skills here. `icon` is a Simple Icons slug
 * (https://simpleicons.org) or a local path under public/.
 * Missing icons use a terminal-style fallback.
 */
export interface Skill {
  name: string;
  icon?: string; // Simple Icons slug or local path
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
      { name: 'Azure', icon: '/icons/azure.svg' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Server & Network Admin', icon: '/icons/server-network.svg' },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'Agent Deployment', icon: '/icons/agent-deployment.svg' },
      { name: 'Claude', icon: 'claude' },
      { name: 'Hermes', icon: '/icons/hermes.svg' },
      { name: 'MCP Servers', icon: '/icons/mcp.svg' },
      { name: 'AI Automations', icon: '/icons/ai-automations.svg' },
      { name: 'JSON Schema Workflows', icon: 'json' },
    ],
  },
];
