/**
 * EXPERIENCE TIMELINE — newest first. Edit freely; dates are plain strings.
 *
 * Titles, employers, dates and locations here are shared values under the
 * resume/portfolio/LinkedIn consistency contract. Do not change one without
 * changing the resumes and LinkedIn to match.
 */
export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string; // 'Present' for current
  location?: string; // city, state — jobs only
  description: string;
  tech: string[];
  url?: string;
}

export const experience: Experience[] = [
  {
    company: 'Momenta Fire',
    role: 'AI Systems and Marketing Intern',
    start: 'May 2026',
    end: 'Present',
    location: 'Tomball, TX',
    description:
      'Built Momenta OS, an AI agent operating system on a governed Google Drive vault that keeps brand voice, client context, and content rules in sync across an 8-person agency team. Per-post content turnaround dropped from 45 minutes to under 10. Authored 60+ versioned agent skills that any supported AI harness can follow, audited GA4 and GTM coverage across 54 client WordPress sites, and wrote the company access governance standard defining 5 trust tiers. Currently building a usage-based billing platform on Azure.',
    tech: [
      'Agent Harnesses / MCP',
      'Agent Skills',
      'Google Drive API',
      'WordPress',
      'GA4 & GTM',
      'Azure',
      'Stripe',
    ],
  },
  {
    company: 'Incarnate Editors',
    role: 'Front-End Developer (Freelance)',
    start: 'Dec 2022',
    end: 'Feb 2025',
    location: 'Remote',
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
      'Hackathon builds include an AI schematic-parsing chatbot (React + Rust + Gemini) shipped in 24 hours.',
    tech: ['Machine Learning', 'Databases', 'Algorithms', 'Python', 'Java'],
    url: 'https://www.uh.edu/',
  },
];
