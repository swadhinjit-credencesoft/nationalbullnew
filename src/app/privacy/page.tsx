'use client';

import PageHeader from '@/components/sections/page-header';
import { Reveal } from '@/components/motion';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        crumb="Privacy"
        description="How National Bulls protects client confidentiality, security, and financial records."
      />

      <section className="section-padding" style={{ background: '#02040f', color: '#ffffff' }}>
        <div className="container-wide">
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '1.25rem',
              padding: '3rem 2.5rem',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <Reveal>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                1. Information Collection
              </h2>
              <p style={{ marginBottom: '1.75rem' }}>
                We collect personal information necessary to deliver equity broking, depository account servicing, mutual fund distribution, and portfolio management support. This includes KYC documentation (PAN, Aadhaar, Bank Details) as mandated by SEBI, AMFI, and statutory authorities.
              </p>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                2. Use of Information
              </h2>
              <p style={{ marginBottom: '1.75rem' }}>
                Client information is strictly used for order execution, KYC verification, portfolio statement generation, regulatory reporting, and essential client communication. We maintain zero-tolerance policies toward unsolicited third-party data sharing.
              </p>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                3. Data Security
              </h2>
              <p style={{ marginBottom: '1.75rem' }}>
                Our systems employ modern encryption protocols, authenticated access controls, and strict operational standards aligned with exchange-level security frameworks.
              </p>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                4. Contact for Privacy Inquiries
              </h2>
              <p>
                If you have questions regarding data handling or wish to update your records, reach out directly to our compliance desk at <strong>support@nationalbulls.com</strong> or call <strong>+91 73033 40500</strong>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
