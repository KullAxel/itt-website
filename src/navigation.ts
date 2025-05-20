import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Our Services',
      links: [
        {
          text: 'Dedicated Technicians',
          href: getPermalink('/services/dedicated-technicians'),
        },
        {
          text: 'Hourly IT Support',
          href: getPermalink('/services/hourly-hire'),
        },
        {
          text: 'Emergency IT Support',
          href: getPermalink('/services/emergency-support'),
        },
        {
          text: 'Project-Based IT Support',
          href: getPermalink('/services/project-based-work'),
        },
        {
          text: 'IT Project Management',
          href: getPermalink('/services/project-management'),
        },
      ],
    },
    {
      text: 'Industries We Serve',
      href: getPermalink('/industries'),
    },
    {
      text: 'Why Choose ITT?',
      href: getPermalink('/why-itt'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Tech Insights Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Our Services', href: getPermalink('/services') },
        { text: 'Industries We Serve', href: getPermalink('/industries') },
        { text: 'Why Choose ITT?', href: getPermalink('/why-itt') },
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Tech Insights Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Get in Touch', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
        { text: 'Terms of Service', href: getPermalink('/terms-of-service') },
      ],
    },
  ],
  secondaryLinks: [
  ],
  socialLinks: [
  ],
  footNote: `
    © ${new Date().getFullYear()} IT Technicians. All Rights Reserved. <br />
    IT Technicians: Reliable, Dedicated On-Site IT Support, Nationwide.
  `,
};
