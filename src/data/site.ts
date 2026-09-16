// Global site information shared across the whole project.
export const site = {
  name: 'National Bulls Investment Services',
  shortName: 'National Bulls',
  tagline: 'Your Partner in Finance',
  foundedText: 'over 18 years ago',
  addressLong:
    'National Bulls Investment Services, Office No 9, 1st Floor, Bhoomi Tower, Opp ITM, Sector 4, Kharghar - 410 210, Navi Mumbai, Maharashtra, INDIA',
  addressShort:
    'Office No 9, 1st Floor, Bhoomi Tower, Opp ITM, Sector 4, Kharghar - 410 210',
  phones: ['7303340500', '9324344454', '9322324252', '9324058401'],
  phoneMain: '7303340500',
  email: 'care@nationalbulls.com',
  // Regulation / membership
  amfiReg: '138422',
  bseReg: 'AP01096701100597',
  nseReg: 'AP0780001931',
  franchise:
    'Progressive Share Brokers Pvt. Ltd., a member of NSE, BSE, MCX, NCDEX & CDSL',
  startYear: 2004,
  // Social links
  socials: {
    facebook: 'https://www.facebook.com/nationalbulls/',
    twitter: 'https://twitter.com/NationalBulls/',
    instagram: 'https://www.instagram.com/national_bulls/',
  },
} as const;

export const contactDetails = {
  address: site.addressLong,
  phones: '7303340500 / 9322324252 / 9324344454 / 022 35952947',
  email: site.email,
} as const;
