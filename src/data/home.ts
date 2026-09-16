// Home page data.

export const partners = [
  'partner-axis.png',
  'partner-sbi.png',
  'partner-hdfc.png',
  'partner-icici.png',
  'partner-kotak.png',
  'partner-nippon.png',
  'partner-uti.png',
  'partner-tata.png',
  'partner-lic.png',
  'partner-dsp.png',
  'partner-franklin.png',
  'partner-ppfas.png',
  'partner-samco.png',
  'partner-bnp.png',
  'partner-nippon.png',
];

export interface HeroSlide {
  eyebrow: string;
  heading: string;
  highlight?: string;
  copy: string;
  tagline?: string;
}

export const heroHeadline = {
  title: 'Your Financial Markets. One Trusted Platform.',
  subtitle:
    'Trade. Invest. Participate. Access a wide range of financial products backed by technology, transparency and dependable service.',
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Your Financial Markets. One Trusted Platform.',
    heading: 'You Work Hard for Your Money.',
    highlight: 'It’s Time to Make Your Money Work Harder for You.',
    copy: 'Explore the power of mutual funds and put your savings to work.',
    tagline: 'Mutual Funds Sahi Hai!',
  },
  {
    eyebrow: 'A Broker. A Wealth Partner. Why Choose?',
    heading: 'At National Bulls,',
    highlight: 'you get the best of both worlds.',
    copy: 'From Equities and Derivatives to Mutual Funds, IPOs, Insurance and Global Equities, access a comprehensive range of financial products and services through one trusted platform.',
    tagline: 'One Stop. Multiple Solutions. One Trusted Name.',
  },
  {
    eyebrow: 'Your approach. Your choice. Our support.',
    heading: 'Invest Your Way.',
    highlight: 'We’re Here to Support You.',
    copy: 'Whether you prefer to manage your investments independently, work with an advisor, or take a combination of both approaches, National Bulls is here to assist you with the right products, tools and market access.',
    tagline: 'Your approach. Your choice. Our support.',
  },
  {
    eyebrow: 'The National Bulls Promise',
    heading: 'Experience You Can Trust.',
    highlight: 'Markets You Can Access.',
    copy: 'For over two decades, National Bulls has been helping clients access India’s financial markets through a comprehensive range of products and services. Whether you are an experienced market participant or beginning your investment journey, we believe financial services should be simple, transparent, accessible and supported by people you can trust.',
    tagline: 'Experience You Can Trust. Markets You Can Access.',
  },
  {
    eyebrow: 'A Trusted Name in Kharghar',
    heading: 'Established. Experienced.',
    highlight: 'Trusted.',
    copy: 'With deep roots in Kharghar, Navi Mumbai, National Bulls combines extensive market experience with personalised service and modern market access. Our focus is simple: to build long-term relationships by delivering dependable service, transparent processes and a comprehensive financial-services experience.',
    tagline: 'Built on Experience. Driven by Trust.',
  },
];

export const heroImages = [
  '/images/hero-bg-1.jpg',
  '/images/hero-bg-2.jpg',
  '/images/hero-resort.jpg',
  '/images/page-header-bg.jpg',
  '/images/about-section.jpg',
];

export const quotes = [
  "We don't have to be smarter than the rest. We have to be more disciplined than the rest.",
  'If you are persistent you will get it. If you are consistent you will keep it.',
  'How many millionaires do you know who have become wealthy by investing in savings accounts?',
  'In the short run, a market is a voting machine, but in the long run, it is a weighing machine.',
  'An investment in knowledge pays the best interest.',
  "One of the very nice things about investing in the stock market is that you learn about all different aspects of the economy. It's your window into a very large world.",
];

export const quotesAuthors = [
  '',
  '',
  '',
  '— Benjamin Graham',
  '— Benjamin Franklin',
  '— Ron Chernow',
];

export const services = [
  {
    slug: 'equity',
    name: 'Equities',
    icon: 'TrendingUp',
    img: '/images/service-equity.png',
    copy: 'Trade and invest in listed companies through our equity brokerage services with efficient execution and dedicated dealing support.',
  },
  {
    slug: 'derivatives',
    name: 'Derivatives',
    icon: 'BarChart3',
    img: '/images/service-derivatives.png',
    copy: 'Access futures and options across indices and stocks with robust trading infrastructure and real-time market access.',
  },
  {
    slug: 'mutualfunds',
    name: 'Mutual Funds',
    icon: 'PieChart',
    img: '/images/service-mutual-fund.png',
    copy: 'Invest across mutual fund categories via SIPs, lump-sum investments, and switch facilities through a convenient platform.',
  },
  {
    slug: 'ipos',
    name: 'IPO Applications',
    icon: 'Rocket',
    img: '/images/service-ipo.png',
    copy: 'Participate in Initial Public Offerings with simple application processes, issue tracking, and allotment support.',
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    icon: 'Shield',
    img: '/images/service-insurance.png',
    copy: 'Comprehensive protection solutions including Life, Health, and General insurance alongside your investment portfolio.',
  },
  {
    slug: 'global',
    name: 'Global Equities',
    icon: 'Globe',
    img: '/images/hero-bg-2.jpg',
    copy: 'Expand market access with international equities and global mutual funds to invest in leading worldwide companies.',
  },
];

export const missionIntro =
  'To empower our clients with knowledge, quality financial services and thoughtful investment solutions that help them pursue their financial objectives with confidence.';

export const missionItems = [
  {
    title: 'Everything under one roof',
    icon: 'landmark',
    copy: 'From Equities, Derivatives, Mutual Funds and IPOs to Insurance, Bonds, NCDs, Corporate FDs and Global Equities \u2014 a complete One Stop Shop for every financial need.',
  },
  {
    title: 'Personal attention, always',
    icon: 'users',
    copy: 'We believe every client deserves personalised attention, responsive service and a relationship built on trust \u2014 supported by the same founder-led team since 2004.',
  },
  {
    title: 'Local trust, global reach',
    icon: 'globe',
    copy: 'With deep roots in Kharghar, Navi Mumbai, we combine extensive market experience with personalised service, modern market access and global equity exposure.',
  },
  {
    title: 'Regulated & transparent',
    icon: 'shield',
    copy: 'AMFI registered mutual fund distributor (138422) and a franchise of Progressive Share Brokers Pvt. Ltd., a member of NSE, BSE, MCX, NCDEX & CDSL.',
  },
];

export const visionIntro =
  'We aspire to become a trusted financial partner for individuals, families and businesses by combining professional expertise with integrity, technology and personalized service.';

export const visionPoints = [
  {
    icon: 'Rocket',
    title: 'Informed investing',
    copy: 'We aim to make investing more informed, accessible and trustworthy \u2014 helping every client navigate markets with confidence and clarity.',
  },
  {
    icon: 'Banknote',
    title: 'Beyond just markets',
    copy: 'From goals-based planning to insurance and corporate FDs, we help you frame your entire financial life \u2014 not just the trading day.',
  },
  {
    icon: 'Clock',
    title: 'Built to last generations',
    copy: 'We aim to turn clients into lifelong relationships, supporting families \u2014 not just individuals \u2014 through every stage of wealth creation.',
  },
];

export const faqs = [
  {
    q: 'Is National Bulls an AMFI registered distributor?',
    a: 'Yes. National Bulls is an AMFI Registered Mutual Fund Distributor with AMFI Registration No 138422, and a franchise of Progressive Share Brokers Pvt. Ltd., a member of NSE, BSE, MCX, NCDEX & CDSL. Our BSE AP Reg No is AP01096701100597 and NSE AP Reg No is AP0780001931.',
  },
  {
    q: 'How long has National Bulls been operating?',
    a: 'National Bulls started its stock broking business in November 2004. We have been operating from the same location in Kharghar, Navi Mumbai, and are managed by the same founder team since inception — over 18 years of continued trust.',
  },
  {
    q: 'Which financial products do you offer?',
    a: 'We are a complete One Stop Shop: Equities, Derivatives, Mutual Funds, Currency, Commodities, Insurance, IPOs, ETFs, Bonds, NCDs & Corporate FDs, plus Global Equities and International Mutual Funds.',
  },
  {
    q: 'Can I invest in global / US stocks through you?',
    a: 'Yes. We offer Global Equities and International Mutual Funds, letting you diversify beyond domestic markets into top global companies while benefiting from our professional guidance on global allocation.',
  },
  {
    q: 'What is the minimum needed to start a mutual fund SIP?',
    a: 'You can start a Systematic Investment Plan (SIP) with as little as Rs. 500 per month, or invest a lump sum of Rs. 5,000. Mutual funds offer a disciplined, low-cost and diversified way to build wealth over time.',
  },
  {
    q: 'How can I reach the support team?',
    a: 'Our dedicated team is ever ready to support our customers and resolve any query at any point of time. Call us on 7303340500 / 9324344454 / 9322324252 / 9324058401 or write to care@nationalbulls.com.',
  },
];

export const galleryShots = [
  { src: '/images/gallery-1.jpg', label: 'Client Servicing' },
  { src: '/images/hero-resort.jpg', label: 'Corporate Events' },
  { src: '/images/hero-bg-2.jpg', label: 'Market Insights' },
  { src: '/images/feature-3.jpg', label: 'Wealth Planning' },
  { src: '/images/about-main.png', label: 'Our Approach' },
  { src: '/images/about-section.jpg', label: 'Dedicated Team' },
];
