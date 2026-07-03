/**
 * SITE-WIDE SETTINGS — edit this file to change your name, roles,
 * social links, email, and hero copy. Everything here flows into the UI.
 */
export const site = {
  name: 'Justin Kondratenko',
  firstName: 'Justin',
  domain: 'https://justinkondratenko.dev',
  email: 'justinkondratenko@proton.me',
  location: 'Houston, Texas',
  // Roles cycled by the hero typing animation — reorder or edit freely.
  roles: [
    'Full-Stack Developer',
    'AI Automation Engineer',
    'UI/UX Designer',
    'Homelab & Server Admin',
  ],
  intro:
    'I design and build AI-powered automation systems, full-stack web apps, and the self-hosted infrastructure that runs them — from Figma mockups to production deploys. Currently focused on Momenta OS, a Slack-first AI assistant for LinkedIn content operations.',
  currentRole: {
    title: 'AI Automation Engineer', // TODO: confirm exact title
    company: 'Momenta',
    companyUrl: '#',
  },
  funFact:
    'My entire portfolio, photo backups, and cloud storage run on a Proxmox homelab in my house — "I don\'t know what I\'m doing, but I\'m doing it."',
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
