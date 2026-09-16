'use client';

import PageHeader from '@/components/sections/page-header';
import ContactCategories from '@/components/sections/contact/categories';
import ContactDetailsForm from '@/components/sections/contact/details-form';
import ContactMap from '@/components/sections/contact/map';

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" crumb="Contact Us" />
      <ContactCategories />
      <ContactDetailsForm />
      <ContactMap />
    </>
  );
}
