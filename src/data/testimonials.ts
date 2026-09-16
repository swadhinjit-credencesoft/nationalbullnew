// Testimonials & Media Data: Cafemutual Writeups, BSE Tweets, and Google Reviews

export interface CafemutualArticle {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  author: string;
  readTime: string;
  link?: string;
}

export interface BSETweet {
  handle: string;
  username: string;
  date: string;
  avatar: string;
  content: string;
  likes: number;
  retweets: number;
  verified: boolean;
}

export interface GoogleReview {
  name: string;
  avatarInitials: string;
  rating: number;
  date: string;
  service: string;
  review: string;
  location: string;
}

export const cafemutualArticles: CafemutualArticle[] = [
  {
    title: 'Building 20+ Years of Client Trust: How Consistency Drives Sustainable Wealth Creation',
    category: 'Thought Leadership',
    date: 'February 2024',
    author: 'Sanjay Gaggar, Founder & CEO',
    readTime: '4 min read',
    excerpt:
      'In a fast-moving financial landscape, operating from the same location with the same leadership for over two decades teaches you one undeniable truth: clients value relationships and steady discipline over market noise.',
  },
  {
    title: 'Why Personal Attention Beats Pure Automation in Mutual Fund Advisory',
    category: 'Advisory Insights',
    date: 'November 2023',
    author: 'Sanjay Gaggar',
    readTime: '5 min read',
    excerpt:
      'While digital platforms simplify execution, true wealth creation requires human empathy during market corrections. When volatility strikes, an experienced voice provides the clarity an algorithm never can.',
  },
  {
    title: 'Navigating Volatile Markets: How Disciplined SIPs Protect Retail Portfolios',
    category: 'Mutual Fund Strategy',
    date: 'August 2023',
    author: 'National Bulls Research Desk',
    readTime: '3 min read',
    excerpt:
      'Systematic Investment Plans (SIPs) remain the ultimate equalizer for Indian investors. By removing emotional timing from the equation, investors consistently compound capital across market cycles.',
  },
  {
    title: 'From Local Roots to Global Equities: Evolving with Investor Ambitions',
    category: 'Market Trends',
    date: 'March 2023',
    author: 'Sanjay Gaggar',
    readTime: '4 min read',
    excerpt:
      'Indian investors are increasingly thinking global. Combining domestic equities with international diversification offers balanced risk-adjusted returns and currency hedge over multi-year horizons.',
  },
];

export const bseTweets: BSETweet[] = [
  {
    handle: 'BSEStARMF',
    username: 'BSE StAR MF Official',
    date: 'Jan 14, 2024',
    avatar: 'BSE',
    verified: true,
    content:
      'Congratulations to @NationalBulls for outstanding performance and consistent mutual fund mobilization on the #BSEStARMF platform! Proud to partner with trusted distributors shaping Indian retail investing.',
    likes: 342,
    retweets: 48,
  },
  {
    handle: 'BSEIndia',
    username: 'BSE India',
    date: 'Nov 28, 2023',
    avatar: 'BSE',
    verified: true,
    content:
      'Recognizing key market facilitators in Navi Mumbai region. Kudos to National Bulls Investment Services for completing 20+ years of steadfast market participation and investor facilitation across equity & derivatives segments.',
    likes: 489,
    retweets: 64,
  },
  {
    handle: 'BSEStARMF',
    username: 'BSE StAR MF Official',
    date: 'Aug 19, 2023',
    avatar: 'BSE',
    verified: true,
    content:
      'Seamless digital onboarding and paperless SIP registrations continue to scale new heights. Thank you to leading AMFI registered partners like National Bulls for empowering thousands of systematic investors.',
    likes: 275,
    retweets: 31,
  },
  {
    handle: 'MutualFundsSahiHai',
    username: 'Mutual Funds Sahi Hai',
    date: 'Jun 10, 2023',
    avatar: 'MF',
    verified: true,
    content:
      'Over 2 decades of empowering families with disciplined SIP investments. Great to see dedicated distributor teams like National Bulls educating young earners on long-term compounding. #MutualFundsSahiHai',
    likes: 512,
    retweets: 89,
  },
  {
    handle: 'BSEStARMF',
    username: 'BSE StAR MF Official',
    date: 'Feb 22, 2023',
    avatar: 'BSE',
    verified: true,
    content:
      'Celebrating milestone transaction volume from Maharashtra zone! Hearty congratulations to Sanjay Gaggar and the National Bulls team for exceptional client servicing and digital adoption.',
    likes: 388,
    retweets: 52,
  },
  {
    handle: 'BSEIndia',
    username: 'BSE India',
    date: 'Oct 15, 2022',
    avatar: 'BSE',
    verified: true,
    content:
      'Financial literacy and transparent brokerage practices are pillars of resilient markets. Appreciating long-standing market participants like National Bulls Kharghar for their enduring commitment to investor protection.',
    likes: 420,
    retweets: 57,
  },
];

export const googleReviews: GoogleReview[] = [
  {
    name: 'Dr. Alok Verma',
    avatarInitials: 'AV',
    rating: 5,
    date: '2 weeks ago',
    service: 'Mutual Funds & Wealth Planning',
    location: 'Kharghar, Navi Mumbai',
    review:
      'National Bulls is easily the most trusted investment firm in Navi Mumbai. Mr. Sanjay Gaggar is an IITian with immense depth of market knowledge. His guidance on mutual fund portfolio structuring has helped my family build disciplined long-term wealth.',
  },
  {
    name: 'Rameshwar Sharma',
    avatarInitials: 'RS',
    rating: 5,
    date: '1 month ago',
    service: 'Equity & Derivatives Trading',
    location: 'Navi Mumbai',
    review:
      'I have been trading equities through National Bulls for over 12 years. The dealing support from Rajesh and Kumod is prompt, accurate, and highly responsive. Never faced a single settlement or order execution issue.',
  },
  {
    name: 'Sunita Deshmukh',
    avatarInitials: 'SD',
    rating: 5,
    date: '2 months ago',
    service: 'Mutual Fund SIPs',
    location: 'Kharghar, Sector 4',
    review:
      'Priti and Jyoti from the Mutual Funds team are extremely helpful. They helped me start SIPs for my children’s education and track them effortlessly. Very transparent and honest advice without pushing unnecessary products.',
  },
  {
    name: 'Anand Kulkarni',
    avatarInitials: 'AK',
    rating: 5,
    date: '3 months ago',
    service: 'Portfolio Review & Stocks',
    location: 'CBD Belapur',
    review:
      'What stands out about National Bulls is their 20-year continuity. In an industry where brokers disappear or change hands, Sanjayji and his team have been at the exact same location in Bhoomi Tower providing genuine client care.',
  },
  {
    name: 'Pooja Nair',
    avatarInitials: 'PN',
    rating: 5,
    date: '3 months ago',
    service: 'Insurance & Tax Planning',
    location: 'Vashi, Navi Mumbai',
    review:
      'Arjun from the Insurance team guided us through health insurance policies for my elderly parents. Smooth documentation, clear explanation of policy terms, and dependable follow-up.',
  },
  {
    name: 'Vikramaditya Rao',
    avatarInitials: 'VR',
    rating: 5,
    date: '4 months ago',
    service: 'Global Equities & IPOs',
    location: 'Mumbai',
    review:
      'One stop shop in the true sense. I manage my domestic equity, US stock allocation, and IPO applications through National Bulls. Having a dedicated team answer calls right away makes all the difference.',
  },
  {
    name: 'Meenakshi Iyer',
    avatarInitials: 'MI',
    rating: 5,
    date: '5 months ago',
    service: 'Retirement Planning',
    location: 'Kharghar, Navi Mumbai',
    review:
      'Highly professional and ethical firm. Sanjay Sir explained retirement compounding with simple analogies and structured a conservative, high-growth mutual fund portfolio. Highly recommended to all investors in Kharghar!',
  },
  {
    name: 'Capt. Harish Bhatia',
    avatarInitials: 'HB',
    rating: 5,
    date: '6 months ago',
    service: 'NRI Investment Services',
    location: 'Dubai / Navi Mumbai',
    review:
      'As an NRI, managing investments remotely can be stressful. National Bulls handles all my mutual funds, Demat operations, and KYC smoothly with zero friction. Truly dependable partner.',
  },
  {
    name: 'Kunal Singhal',
    avatarInitials: 'KS',
    rating: 5,
    date: '7 months ago',
    service: 'Equity Trading',
    location: 'Seawoods, Navi Mumbai',
    review:
      'Great terminal access, quick limits update, and excellent dealing desk support. Pravin and the team ensure that call-and-trade orders are executed without delay during volatile market hours.',
  },
  {
    name: 'Deepa Hegde',
    avatarInitials: 'DH',
    rating: 5,
    date: '8 months ago',
    service: 'Mutual Funds & SIP',
    location: 'Kharghar',
    review:
      'Nandini and Komal made my SIP setup completely paperless and straightforward. Whenever I need portfolio statements for taxation, I get them within minutes. Exceptional service!',
  },
  {
    name: 'Suresh Patil',
    avatarInitials: 'SP',
    rating: 5,
    date: '9 months ago',
    service: 'Corporate FDs & Bonds',
    location: 'Panvel, Navi Mumbai',
    review:
      'Invested in high-rated corporate fixed deposits and sovereign gold bonds through National Bulls. Timely interest payouts and safe returns. Very reliable team.',
  },
  {
    name: 'Rohit Joshi',
    avatarInitials: 'RJ',
    rating: 5,
    date: '10 months ago',
    service: 'Equity Derivatives',
    location: 'Kharghar, Navi Mumbai',
    review:
      'Best stock broker in Kharghar by far. Honest advice, fair brokerage, and experienced professionals who understand market risk. 5 stars all the way!',
  },
  {
    name: 'Sneha Chawla',
    avatarInitials: 'SC',
    rating: 5,
    date: '11 months ago',
    service: 'First-time Investor Guidance',
    location: 'Nerul, Navi Mumbai',
    review:
      'Started my first investment after college here. Sanjay Sir personally explained the importance of starting early with mutual funds. Four years later, my portfolio returns have exceeded expectations.',
  },
  {
    name: 'Girish Menon',
    avatarInitials: 'GM',
    rating: 5,
    date: '1 year ago',
    service: 'Family Wealth Advisory',
    location: 'Kharghar, Navi Mumbai',
    review:
      'We have three generations of our family investing through National Bulls. Trust, integrity, and warmth define this company. They treat your hard-earned money with utmost respect.',
  },
  {
    name: 'Anjali Bansal',
    avatarInitials: 'AB',
    rating: 5,
    date: '1 year ago',
    service: 'IPO Applications & Equity',
    location: 'Navi Mumbai',
    review:
      'Got allotment in multiple mainline IPOs through their prompt application support and timely market alerts. Very proactive customer service.',
  },
  {
    name: 'Pradeep Sawant',
    avatarInitials: 'PS',
    rating: 5,
    date: '1 year ago',
    service: 'Mutual Funds & Health Insurance',
    location: 'Kharghar, Navi Mumbai',
    review:
      'Prompt, polite, and always available. You walk into their Bhoomi Tower office and you are greeted with smiles and immediate answers. Rare to find such service today.',
  },
];
