import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'National Bulls Investment Services | Your Financial Markets. One Trusted Platform.',
  description:
    'Trade. Invest. Participate. Access a wide range of financial products backed by technology, transparency and dependable service. Oldest and Trusted Stock Brokers of Kharghar, Navi Mumbai.',
  keywords: [
    'stock broker',
    'mutual funds',
    'kharghar',
    'navi mumbai',
    'national bulls',
    'AMFI registered',
    'equity trading',
    'derivatives',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'National Bulls Investment Services',
    description:
      'Oldest and Trusted Stock Brokers of Kharghar, Navi Mumbai. AMFI Registered Mutual Funds Distributor.',
    type: 'website',
    siteName: 'National Bulls Investment Services',
    url: 'https://nationalbulls.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'National Bulls Investment Services',
    description:
      'Oldest and Trusted Stock Brokers of Kharghar, Navi Mumbai. AMFI Registered Mutual Funds Distributor.',
  },
  icons: {
    icon: '/favicon-192.png',
    apple: '/favicon-192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
