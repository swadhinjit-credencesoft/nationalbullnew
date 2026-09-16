// Contact page data.

export interface ContactCard {
  title: string;
  icon: string;
  phones: string[];
  emails: string[];
}

export const contactCards: ContactCard[] = [
  {
    title: 'Call N Trade',
    icon: 'Phone',
    phones: ['7303340500', '9322324252', '9967964012', '022 35952947'],
    emails: [],
  },
  {
    title: 'Support Related Queries',
    icon: 'MessageSquare',
    phones: ['9322324252', '9967964012'],
    emails: [],
  },
  {
    title: 'Trading Account Opening',
    icon: 'Phone',
    phones: ['9322324252', '9324344454'],
    emails: ['care@nationalbulls.com'],
  },
  {
    title: 'Mutual Fund Related Queries',
    icon: 'Phone',
    phones: ['9699387744', '9324058401'],
    emails: ['care@nationalbulls.com'],
  },
  {
    title: 'Insurance Related Queries',
    icon: 'Phone',
    phones: ['9699886261', '9324058401'],
    emails: ['care@nationalbulls.com'],
  },
];

export const contactInfo = {
  address:
    'National Bulls Investment Services, Office No 9, 1st Floor, Bhoomi Tower, Opp ITM, Sector 4, Kharghar - 410 210, Navi Mumbai, Maharashtra, INDIA',
  phones: '7303340500 / 9322324252 / 9324344454 / 02235952947',
  email: 'care@nationalbulls.com',
  image: '/images/contact-image.png',
};

export const mapEmbedSrc =
  'https://maps.google.com/maps?q=national%20bulls&t=m&z=10&output=embed&iwloc=near';
