// Team page data.

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  initials: string;
  photo?: string;
  experience?: string;
}

export const founder = {
  initials: 'SG',
  name: 'Sanjay Gaggar',
  role: 'Founder & CEO',
  organization: 'National Bulls Investment Services',
  img: '/images/sanjay-gaggar.jpeg',
  tagline: 'A Journey Built on Experience, Learning & Relationships',
  bio: [
    'Sanjay Gaggar, Founder & CEO of National Bulls Investment Services, Kharghar, Navi Mumbai, brings over 25 years of experience in equities and mutual fund investing, backed by a strong academic and corporate background.',
    'An engineer by qualification, Sanjay holds MTech. in Environmental Science & Engineering from IIT Bombay. Prior to establishing National Bulls, he spent over two decades in the corporate sector, working in Business Strategy roles with a leading Indian telecom company, across both B2B and B2C businesses. This experience has given him a strong foundation in strategic thinking, business management and understanding of evolving customer needs.',
    'His long-standing association with the financial markets has given him extensive exposure to equity markets, mutual funds, stock analysis and portfolio construction. Over the years, he has worked closely with numerous investors, helping them understand market opportunities and develop a disciplined approach towards investing.',
    'Recognising the importance of a holistic understanding of personal finance, Sanjay has also completed a Certified Wealth Manager course, adding structured knowledge of financial planning and wealth management principles to his extensive practical experience across equities and mutual funds.',
    'He is passionate about long-term wealth creation and financial awareness, particularly among the younger generation. His approach is shaped by years of practical market experience, continuous learning, extensive reading and an enduring interest in understanding businesses, markets and investment behaviour.',
    'With a combination of strong academic credentials, corporate experience, over two decades of market participation and a long-term commitment to customers, Sanjay continues to lead National Bulls with a focus on trust, professionalism, personal attention and enduring relationships.',
    'Beyond finance and business, Sanjay has a keen interest in cricket, philately and numismatics, and enjoys collecting stamps and coins.',
  ],
};

export const teamOverview = {
  eyebrow: 'Our Team',
  title: 'A Team Built on Experience, Expertise & Commitment',
  lead:
    'At National Bulls, we believe that people make the difference. Our dedicated team brings together experienced professionals and young, energetic talent with a shared commitment to delivering responsive, investor-friendly service and seamless financial solutions. Combining contemporary market knowledge with practical experience, our team strives to make every client interaction professional, efficient and personalised.',
  description2:
    'Our professionals bring diverse expertise, a strong understanding of financial markets and a commitment to maintaining the trust, goodwill and relationships that National Bulls has built over the years.',
  leadershipTitle: 'Experience That Stands the Test of Time',
  leadershipCopy:
    'At the leadership level, National Bulls has always placed strong emphasis on loyalty, integrity, competence and commitment. We have carefully built a management team that has remained steadfast through changing market cycles—from prolonged bull markets to challenging bearish phases. This continuity of leadership and experience gives our clients the confidence of dealing with a team that understands that markets may change, but our commitment to clients remains constant.',
  highlight: 'Young Energy. Experienced Leadership. One Common Purpose.',
  tagline: 'To serve our clients with professionalism, integrity and a commitment to excellence.',
  img: '/images/team-group.jpeg',
};

export const teamDepartments = [
  {
    name: 'Equities Team',
    icon: 'TrendingUp',
    description: 'Specialists in equity dealing, market execution, and stock trading operations.',
    members: [
      {
        name: 'Rajesh Mahanta',
        role: 'Equity Dealing & Execution',
        department: 'Equities Team',
        initials: 'RM',
      },
      {
        name: 'Kumod Karn',
        role: 'Equity Trading & Client Relations',
        department: 'Equities Team',
        initials: 'KK',
      },
      {
        name: 'Pravin Sonare',
        role: 'Equity Operations & Settlement',
        department: 'Equities Team',
        initials: 'PS',
      },
    ],
  },
  {
    name: 'Mutual Funds Team',
    icon: 'PieChart',
    description: 'Dedicated professionals for SIP transactions, portfolio reviews, and fund guidance.',
    members: [
      {
        name: 'Priti Gurav',
        role: 'MF Operations & Client Servicing',
        department: 'Mutual Funds Team',
        initials: 'PG',
      },
      {
        name: 'Jyoti Patel',
        role: 'MF Advisory & SIP Support',
        department: 'Mutual Funds Team',
        initials: 'JP',
      },
      {
        name: 'Nandini Gupta',
        role: 'MF Processing & Portfolio Tracking',
        department: 'Mutual Funds Team',
        initials: 'NG',
      },
      {
        name: 'Komal Shelar',
        role: 'MF Support & Investor Relations',
        department: 'Mutual Funds Team',
        initials: 'KS',
      },
    ],
  },
  {
    name: 'Insurance Team',
    icon: 'Shield',
    description: 'Expert guidance on Life, Health, and General Insurance protection solutions.',
    members: [
      {
        name: 'Arjun Parab',
        role: 'Insurance Advisory & Policy Servicing',
        department: 'Insurance Team',
        initials: 'AP',
      },
    ],
  },
];
