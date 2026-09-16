'use client';

import HeroSection from '@/components/sections/home/hero';
import TickerRibbonSection from '@/components/sections/home/ticker-ribbon';
import PartnersSection from '@/components/sections/home/partners';
import ScrollStatementSection from '@/components/sections/home/scroll-statement';
import ServicesSection from '@/components/sections/home/services';
import QuotesSection from '@/components/sections/home/quotes';
import AboutSection from '@/components/sections/home/about';
import MissionSection from '@/components/sections/home/mission';
import VisionSection from '@/components/sections/home/vision';
import GallerySection from '@/components/sections/home/gallery';
import PrinciplesSection from '@/components/sections/home/principles';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerRibbonSection />
      <PartnersSection />
      <ScrollStatementSection />
      <ServicesSection />
      <QuotesSection />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <GallerySection />
      <PrinciplesSection />
    </>
  );
}

