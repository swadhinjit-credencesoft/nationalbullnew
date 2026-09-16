'use client';

import PageHeader from '@/components/sections/page-header';
import TestimonialsView from '@/components/sections/testimonials/testimonials-view';

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Testimonials & Media"
        crumb="Testimonials"
        description="Hear from our trusted clients, explore BSE official recognitions, and read our featured articles on Cafemutual."
        image="/images/page-header-bg.jpg"
      />
      <TestimonialsView />
    </>
  );
}
