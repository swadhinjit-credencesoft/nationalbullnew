'use client';

import PageHeader from '@/components/sections/page-header';
import { Reveal } from '@/components/motion';

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        crumb="Terms"
        description="Important regulatory and legal terms governing the use of National Bulls Investment Services."
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
                1. General Overview
              </h2>
              <p style={{ marginBottom: '1.75rem' }}>
                National Bulls Investment Services operates as an Authorised Person / Franchise of Progressive Share Brokers Pvt. Ltd. (Member of NSE, BSE, MCX, MCX-sx, CDSL). By accessing our website, tools, or physical dealing services, you agree to comply with all applicable terms, conditions, and regulatory mandates prescribed by SEBI, AMFI, and the respective exchanges.
              </p>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                2. Market Risk Disclosure
              </h2>
              <p style={{ marginBottom: '1.75rem' }}>
                Investments in securities market are subject to market risks. Read all scheme and offer documents carefully before investing. Past performance does not guarantee future results. Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
              </p>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                3. Regulatory Credentials
              </h2>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.75rem', display: 'grid', gap: '0.5rem' }}>
                <li>AMFI Registered Mutual Funds Distributor: <strong>ARN-188629</strong></li>
                <li>Progressive Share Brokers Pvt. Ltd. SEBI Regn. No: <strong>INZ000170639</strong></li>
                <li>CDSL Depository Participant: <strong>IN-DP-535-2020</strong></li>
                <li>BSE AP Registration: <strong>AP0106120150935</strong></li>
                <li>NSE AP Registration: <strong>AP0297010261</strong></li>
              </ul>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                4. Confidentiality & Security
              </h2>
              <p>
                We do not sell or share personal client financial details with unauthorized third parties. All transactional records and portfolio interactions are handled under strict compliance protocols.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
