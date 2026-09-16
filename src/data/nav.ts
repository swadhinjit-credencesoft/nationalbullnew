// Navigation data used by the header and footer.

export const serviceLinks = [
  { label: 'Equities', href: '/services#equity' },
  { label: 'Derivatives', href: '/services#derivatives' },
  { label: 'Mutual Funds', href: '/services#mutualfunds' },
  { label: 'IPO Applications', href: '/services#ipos' },
  { label: 'Insurance', href: '/services#insurance' },
  { label: 'Global Equities', href: '/services#global' },
] as const;

export const loginLinks = [
  { label: 'Equity Login', href: 'https://invest360web.progressiveshares.com/#/' },
  { label: 'MF / Mutual Fund Login', href: 'https://wealthelite.in/client-login' },
  { label: 'Global Equities Login', href: '/services#global' },
] as const;

export const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'OUR SERVICES', href: '/services' },
  { label: 'OUR TEAM', href: '/team' },
  { label: 'RESEARCH', href: 'https://progressiveshares.com/', external: true },
  { label: 'TESTIMONIALS', href: '/testimonials' },
  { label: 'CONTACT US', href: '/contact' },
] as const;

export const mobileNavLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'OUR SERVICES', href: '/services' },
  { label: 'OUR TEAM', href: '/team' },
  { label: 'RESEARCH', href: 'https://progressiveshares.com/', external: true },
  { label: 'TESTIMONIALS', href: '/testimonials' },
  { label: 'CONTACT US', href: '/contact' },
] as const;
