/**
 * EXPERIENCE TIMELINE — newest first. Edit freely; dates are plain strings.
 * Sourced from Justin's resume (Apr 2026 version).
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
    company: 'Momenta', // TODO: confirm company name + exact title
    role: 'AI Automation Engineer',
    start: '2025',
    end: 'Present',
    description:
      'Building Momenta OS, a Slack-first AI assistant for multi-client LinkedIn content operations: research pipelines that reverse-engineer client brand voice, JSON-schema automation workflows, MCP server integrations, and branded asset generation via Google Drive and Canva endpoints.',
    tech: ['AI Agents', 'Slack API', 'MCP', 'JSON Schema', 'Google Drive API', 'Canva API'],
  },
  {
    company: 'Incarnate Editors',
    role: 'Senior Front-End Engineer (Contract)',
    start: 'Dec 2022',
    end: 'Feb 2025',
    description:
      'Redesigned the mobile UI with TailwindCSS, driving a 20% increase in mobile traffic. Architected a 40+ node user-flow diagram to streamline navigation, and programmed a full-stack data-modeling application with React, Firebase, and Electron visualizing 100+ data entries.',
    tech: ['React', 'TailwindCSS', 'Firebase', 'Electron', 'Figma'],
  },
  {
    company: 'Lone Star College CyFair — Computer Science Club',
    role: 'President',
    start: 'May 2022',
    end: 'May 2025',
    description:
      'Led a 275+ member organization, growing membership 20% through targeted recruitment. Hosted Git, web-development, and computer-engineering workshops for 50+ students, and coordinated 4 inter-club competitions plus 3+ hackathon and VEX robotics runs.',
    tech: ['Leadership', 'Git', 'Web Development', 'Workshops'],
  },
  {
    company: 'University of Houston',
    role: 'B.S. Computer Science — Expected May 2027',
    start: '2025',
    end: 'Present',
    description:
      'Cumulative GPA 3.5/4.0. Coursework in machine learning, database systems, and algorithms. Hackathon builds include an AI schematic-parsing chatbot (React + Rust + Gemini) shipped in 24 hours.',
    tech: ['Machine Learning', 'Databases', 'Algorithms', 'Python', 'Java'],
    url: 'https://www.uh.edu/',
  },
];
