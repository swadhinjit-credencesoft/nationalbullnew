// Services page data.

export interface ServiceItem {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  includeTitle: string;
  points: string[];
  tagline: string;
  img: string;
  alt: string;
  icon: string;
}

export const servicesIntro = {
  eyebrow: 'Our Services',
  title: 'Exclusive Brokerage Services',
  subtitle: 'Access Markets. Trade with Confidence. One Relationship for Multiple Financial Products.',
  description:
    'We provide a comprehensive platform for accessing and transacting across a wide range of financial products. From Indian equities and derivatives to mutual funds, IPOs, insurance and global equities, our services are designed to offer clients seamless market access, efficient execution and dedicated service.',
};

export const serviceTabs = [
  { label: 'Equities', id: 'equity' },
  { label: 'Derivatives', id: 'derivatives' },
  { label: 'Mutual Funds', id: 'mutualfunds' },
  { label: 'IPO Applications', id: 'ipos' },
  { label: 'Insurance', id: 'insurance' },
  { label: 'Global Equities', id: 'global' },
];

export const allServices: ServiceItem[] = [
  {
    id: 'equity',
    label: 'Equities',
    title: 'Equities',
    subtitle: 'Seamless Access to Indian Equity Markets',
    description:
      'Trade and invest in listed companies through our equity brokerage services. Our platform provides convenient access to market opportunities along with efficient order execution and dedicated client support.',
    includeTitle: 'Our Equity Services Include:',
    points: [
      'Equity delivery transactions',
      'Intraday trading',
      'Buy and sell order execution',
      'Market and limit orders',
      'Portfolio and transaction tracking',
      'Market information and updates',
      'Dedicated dealing support',
    ],
    tagline: 'Your market access. Our execution.',
    img: '/images/service-equity.png',
    alt: 'Indian Equity Brokerage Services',
    icon: 'TrendingUp',
  },
  {
    id: 'derivatives',
    label: 'Derivatives',
    title: 'Derivatives',
    subtitle: 'Trade Futures & Options with Precision',
    description:
      'Access the derivatives segment through our robust trading infrastructure. Execute futures and options transactions with efficient order placement, real-time market access and dedicated support.',
    includeTitle: 'Our Derivatives Services Include:',
    points: [
      'Futures trading',
      'Options trading',
      'Index derivatives',
      'Stock derivatives',
      'Options order execution',
      'Real-time market access',
      'Dedicated dealing support',
    ],
    tagline: 'Built for active market participation.',
    img: '/images/service-derivatives.png',
    alt: 'Futures and Options Trading',
    icon: 'BarChart3',
  },
  {
    id: 'mutualfunds',
    label: 'Mutual Funds',
    title: 'Mutual Funds',
    subtitle: 'Invest Across a Wide Range of Mutual Fund Opportunities',
    description:
      'Access mutual fund investment options through a convenient and streamlined platform. We facilitate transactions across a broad range of mutual fund categories and investment formats.',
    includeTitle: 'Our Mutual Fund Services Include:',
    points: [
      'Mutual fund purchase and redemption',
      'SIP registration and transactions',
      'Lump-sum investments',
      'Switch facilities',
      'Portfolio and transaction tracking',
      'Online transaction support',
      'Access to multiple fund categories',
    ],
    tagline: 'Simple access to professionally managed investment products.',
    img: '/images/service-mutual-fund.png',
    alt: 'Mutual Funds Distribution',
    icon: 'PieChart',
  },
  {
    id: 'ipos',
    label: 'IPO Applications',
    title: 'IPO Applications',
    subtitle: 'Your Gateway to New Market Opportunities',
    description:
      'Participate in Initial Public Offerings through a simple and convenient application process. We facilitate IPO applications and provide clients with the necessary issue-related information and application support.',
    includeTitle: 'Our IPO Services Include:',
    points: [
      'IPO application facility',
      'Online application support',
      'IPO issue information',
      'Application status tracking',
      'Allotment status support',
      'Listing-related market information',
    ],
    tagline: 'Apply. Track. Participate.',
    img: '/images/service-ipo.png',
    alt: 'IPO Applications and Allotment',
    icon: 'Rocket',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    title: 'Insurance',
    subtitle: 'Protection Solutions Under One Roof',
    description:
      'Access a range of insurance products through our insurance distribution services. We facilitate insurance transactions and help clients access suitable products from available offerings.',
    includeTitle: 'Our Insurance Services Include:',
    points: [
      'Life insurance',
      'Health insurance',
      'General insurance',
      'Policy issuance support',
      'Policy renewal assistance',
      'Premium payment support',
      'Policy servicing assistance',
    ],
    tagline: 'Convenient access to insurance solutions alongside your investment requirements.',
    img: '/images/service-insurance.png',
    alt: 'Life, Health and General Insurance',
    icon: 'Shield',
  },
  {
    id: 'global',
    label: 'Global Equities',
    title: 'Global Equities',
    subtitle: 'Invest Beyond Indian Markets',
    description:
      'Expand your market access with global equity investing. Through our international investment offering, clients can access opportunities in leading global markets and internationally listed companies, subject to applicable regulations and eligibility.',
    includeTitle: 'Our Global Equity Services Include:',
    points: [
      'Access to international equities',
      'Global market transactions',
      'International stock investing',
      'Portfolio transaction tracking',
      'Global market information',
      'Dedicated support for international transactions',
    ],
    tagline: 'Indian roots. Global opportunities.',
    img: '/images/hero-bg-2.jpg',
    alt: 'Global Equity and International Stocks',
    icon: 'Globe',
  },
];
