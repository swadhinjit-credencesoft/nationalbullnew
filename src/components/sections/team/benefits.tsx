'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Users, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    title: 'Personal Attention',
    desc: 'Direct interaction with dedicated dealing and mutual fund specialists.',
    icon: Users,
  },
  {
    title: 'Responsive Service',
    desc: 'Prompt order execution, fast query resolution, and proactive portfolio updates.',
    icon: Sparkles,
  },
  {
    title: 'Experienced People',
    desc: 'Decades of market wisdom through bull and bear market cycles since 2004.',
    icon: Shield,
  },
  {
    title: 'Long-term Relationships',
    desc: 'Valuing generational trust and client success over short-term transactions.',
    icon: HeartHandshake,
  },
];

export default function TeamBenefits() {
  return (
    <section className="growth-section" style={{ padding: '5.5rem 0' }}>
      <div className="container-wide">
        <div className="growth-grid" style={{ gap: '3.5rem', alignItems: 'center' }}>
          <div className="growth-copy">
            <span className="eyebrow" style={{ color: 'var(--yellow)' }}>
              Our Driving Force
            </span>
            <h2
              style={{
                color: 'white',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                lineHeight: 1.15,
                marginTop: '.5rem',
              }}
            >
              Young Energy. Experienced Leadership. One Common Purpose.
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,.82)',
                marginTop: '1.2rem',
                fontSize: '1.05rem',
                lineHeight: 1.65,
                maxWidth: 480,
              }}
            >
              To serve our clients with professionalism, integrity and a commitment to excellence.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link className="solid-button" href="/contact">
                Connect with Our Team <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.2rem',
            }}
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  style={{
                    background: 'rgba(255,255,255,.08)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 12,
                    padding: '1.5rem',
                    border: '1px solid rgba(255,255,255,.12)',
                    borderLeft: '4px solid var(--orange)',
                  }}
                >
                  <Icon size={22} style={{ color: 'var(--yellow)', marginBottom: '.6rem' }} />
                  <h4 style={{ color: 'white', fontSize: '.95rem', margin: '0 0 .35rem', fontWeight: 800 }}>
                    {pillar.title}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.78rem', margin: 0, lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
