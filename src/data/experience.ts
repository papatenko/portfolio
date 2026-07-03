/**
 * EXPERIENCE TIMELINE — newest first. Edit freely; dates are plain strings.
 * TODO items are placeholders — replace with exact titles/dates from LinkedIn.
 */
export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string; // 'Present' for current
  description: string;
  tech: string[];
  url?: string;
}

export const experience: Experience[] = [
  {
    company: 'Momenta', // TODO: confirm company name
    role: 'AI Automation Engineer', // TODO: confirm exact title
    start: '2025', // TODO: exact start date
    end: 'Present',
    description:
      'Building Momenta OS, a Slack-first AI assistant for multi-client LinkedIn content operations: research pipelines that reverse-engineer client brand voice, JSON-schema automation workflows, MCP server integrations, and branded asset generation via Google Drive and Canva endpoints.',
    tech: ['AI Agents', 'Slack API', 'MCP', 'JSON Schema', 'Google Drive API', 'Canva API'],
  },
  {
    company: 'Freelance / Self-employed',
    role: 'Web Developer & Server Administrator',
    start: '2022', // TODO: adjust
    end: 'Present',
    description:
      'Design, build, and host websites and services end-to-end on self-managed Linux infrastructure — React/TypeScript frontends, Node backends, Dockerized deployments, reverse proxying, backups, and operational documentation for teams.',
    tech: ['React', 'TypeScript', 'Node.js', 'Docker', 'Linux', 'Nginx'],
  },
  {
    company: 'University of Houston',
    role: 'B.S. Computer Science (in progress)',
    start: '2022', // TODO: adjust
    end: 'Present',
    description:
      'Coursework in machine learning, database systems, and algorithms. Built hackathon projects including an AI schematic-parsing chatbot and an AI flight-search assistant.',
    tech: ['Machine Learning', 'Databases', 'Algorithms', 'Python', 'Java'],
    url: 'https://www.uh.edu/',
  },
];
