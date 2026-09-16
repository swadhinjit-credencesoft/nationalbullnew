'use client';

import PageHeader from '@/components/sections/page-header';
import TeamProfile from '@/components/sections/team/profile';
import TeamDesc from '@/components/sections/team/team-desc';
import TeamBenefits from '@/components/sections/team/benefits';

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        crumb="Our Team"
        description="A Team Built on Experience, Expertise & Commitment — Young Energy, Experienced Leadership, One Common Purpose."
        image="/images/page-header-bg.jpg"
      />
      <TeamProfile />
      <TeamDesc />
      <TeamBenefits />
    </>
  );
}
