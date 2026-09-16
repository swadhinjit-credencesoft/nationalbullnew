'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Users } from 'lucide-react';
import { Reveal, scaleIn } from '@/components/motion';

const keyHighlights = [
  { icon: Award, text: 'Led by IIT Bombay Alumni & Certified Wealth Managers' },
  { icon: ShieldCheck, text: 'Operating from Kharghar with the same founder team for 20+ years' },
  { icon: Users, text: 'Personalised attention and direct dealing support for every investor' },
];

export default function AboutSection() {
  return (
    <section className="intro-section" id="about" style={{ padding: '6rem 0' }}>
      <div className="container-wide">
        <div
          className="stack-col about-grid"
          style={{ display: 'grid', gap: '4.5rem', gridTemplateColumns: '1fr 1.2fr', alignItems: 'center' }}
        >
          <Reveal variant={scaleIn}>
            <div className="about-media" style={{ border: '2px solid rgba(14, 34, 70, 0.08)' }}>
              <img src="/images/about-section.jpg" alt="About National Bulls" />
              <div className="about-badge">
                <strong>20+</strong>
                <span>Years of Trust</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>
                An Initiative by IIT &amp; IIM Alumni
              </span>
              <h2 className="section-title" style={{ margin: '.55rem 0 1.2rem' }}>
                20+ Years of Trust. Experience. Relationships.
              </h2>
              <p className="body-copy" style={{ lineHeight: 1.75, marginBottom: '1.5rem' }}>
                National Bulls is a comprehensive financial services provider offering a wide range of
                products across Equities, Derivatives, Mutual Funds, IPOs, Insurance and Global Equities.
                For over 20 years, we have operated from the same location under the leadership of the same
                founder team, delivering prompt assistance, personalised attention and dependable service.
              </p>

              {/* Highlights checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2rem' }}>
                {keyHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '.65rem' }}>
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: 'rgba(29, 72, 189, 0.1)',
                          color: '#1d48bd',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={14} />
                      </div>
                      <span style={{ fontSize: '.88rem', fontWeight: 600, color: '#0d1b3e' }}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div>
                <Link className="solid-button" href="/about">
                  Explore About Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
