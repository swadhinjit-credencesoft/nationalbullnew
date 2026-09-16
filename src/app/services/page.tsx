'use client';

import PageHeader from '@/components/sections/page-header';
import ServicesView from '@/components/sections/services/services-view';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        crumb="Our Services"
        description="Exclusive Brokerage Services — Access Markets. Trade with Confidence. One Relationship for Multiple Financial Products."
        image="/images/page-header-bg.jpg"
      />
      <ServicesView />
    </>
  );
}
