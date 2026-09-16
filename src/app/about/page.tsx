'use client';

import PageHeader from '@/components/sections/page-header';
import AboutIntro from '@/components/sections/about/about-intro';
import FounderSection from '@/components/sections/about/founder';
import MetricsSection from '@/components/sections/about/metrics';
import WhatWeDo from '@/components/sections/about/what-we-do';
import AboutPrinciples from '@/components/sections/about/about-principles';
import TestimonialsSection from '@/components/sections/about/testimonials';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumb="About Us" image="/images/page-header-bg.jpg" />
      <AboutIntro />
      <FounderSection />
      <MetricsSection />
      <WhatWeDo />
      <AboutPrinciples />
      <TestimonialsSection />
    </>
  );
}
