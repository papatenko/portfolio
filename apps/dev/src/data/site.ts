/**
 * SITE-WIDE SETTINGS — edit this file to change your name, roles,
 * social links, email, and hero copy. Everything here flows into the UI.
 *
 * Shared values (title, employer, dates, location, degree, graduation date,
 * email) are fixed by the resume/portfolio/LinkedIn consistency contract.
 * Changing one here means changing it on the resumes and LinkedIn too.
 */
export const site = {
  name: 'Justin Kondratenko',
  firstName: 'Justin',
  domain: 'https://justinkondratenko.dev',
  email: 'justinkondratenko@proton.me',
  location: 'Katy, Texas',
  // Roles cycled by the hero typing animation — self-descriptors, not job titles.
  roles: [
    'Full-Stack Developer',
    'AI Systems & Automation',
    'Homelab & Server Admin',
    'UI/UX Designer',
  ],
  intro:
    'I build AI systems that take work off people\'s plates, the web apps around them, and the self-hosted infrastructure they run on. Right now that means an agent operating system a marketing agency runs its content on, a usage-based billing platform on Azure, and a five-host estate at home I treat like production.',
  currentRole: {
    title: 'AI Systems and Marketing Intern',
    company: 'Momenta Fire',
    companyUrl: '', // leave empty to render as plain text — see report note
    location: 'Tomball, TX',
    start: 'May 2026',
  },
  /**
   * Hero metric row. Every figure here is traceable — do not add one that
   * isn't. Source: Phase 0 corrected copy deck, 2026-09-14.
   */
  metrics: [
    { value: '54', label: 'client sites audited' },
    { value: '60+', label: 'agent skills shipped' },
    { value: '20+', label: 'self-hosted stacks' },
    { value: '99%+', label: 'uptime' },
  ],
  /** Shown under the hero CTA. Mirrors the LinkedIn "open to work" settings. */
  availabilityLine:
    'Graduating May 2027 · based in Katy, TX · open to hybrid and on-site roles.',
  funFact:
    'My entire portfolio, photo backups, and cloud storage run on a Proxmox homelab in my house.',
  /** Sign-off line in the footer. */
  footerLine: "I don't know what I'm doing, but I'm doing it.",
  yearsExperience: 4, // building since late 2022 (Incarnate Editors)
  resumePath: '/resume.pdf',
  responseTime: 'I usually reply within 24–48 hours.',
  availability:
    'Open to full-time roles, freelance builds (find me on Upwork), and consulting on AI automation or self-hosted infrastructure.',
  social: {
    github: 'https://github.com/papatenko',
    linkedin: 'https://www.linkedin.com/in/justinkondratenko/',
    upwork: 'https://www.upwork.com/freelancers/~01e832daf1053cb695',
    twitter: '', // leave empty to hide
    instagram: 'https://www.instagram.com/papatenk0/',
    devpost: 'https://devpost.com/jkcondor13',
    gitlab: 'https://gitlab.com/papatenko',
  },
  githubUsername: 'papatenko',
  /**
   * Contact form: create a free form at https://web3forms.com (or formspree.io),
   * paste the access key / endpoint here. Submissions arrive at your email.
   * Leave empty to show the mailto fallback only.
   */
  contactFormEndpoint: '', // e.g. 'https://api.web3forms.com/submit'
  contactFormAccessKey: '', // Web3Forms access key
};
