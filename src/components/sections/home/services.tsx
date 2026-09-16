'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/home';
import { getIcon } from '@/lib/icons';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function ServicesSection() {
  return (
    <section className="technology-section" id="services" style={{ padding: '6rem 0' }}>
      <div className="container-wide">
        <div className="tech-heading" style={{ marginBottom: '3.5rem' }}>
          <Reveal>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>
                Our Core Services
              </span>
              <h2 className="section-title" style={{ marginTop: '.4rem' }}>
                Exclusive Brokerage &amp; Wealth Solutions
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-copy" style={{ lineHeight: 1.7 }}>
              Access Indian equities, derivatives, mutual funds, IPOs, insurance, and global equities through one trusted, established platform.
            </p>
          </Reveal>
        </div>

        <Stagger className="tech-feature-grid">
          {services.map(({ name, copy, img, icon, slug }, index) => {
            const Icon = getIcon(icon);
            return (
              <StaggerItem key={name}>
                <Link
                  href={`/services#${slug}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                >
                  <article
                    className="tech-feature prem-card"
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                    }}
                  >
                    <span className="prem-num">{String(index + 1).padStart(2, '0')}</span>
                    <div className="service-thumb">
                      <img src={img} alt={name} loading="lazy" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginTop: '.2rem' }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 6,
                          background: 'rgba(29, 72, 189, 0.08)',
                          color: '#1d48bd',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0d1b3e', fontFamily: 'Outfit, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}>
                        {name}
                      </h3>
                    </div>
                    <p style={{ marginTop: '.8rem', color: '#475569', fontSize: '.88rem', lineHeight: 1.65, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {copy}
                    </p>
                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.4rem',
                        color: '#1d48bd',
                        fontSize: '.74rem',
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        fontFamily: 'Open Sans, sans-serif',
                      }}
                    >
                      Learn More <ArrowRight size={13} />
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal>
          <div className="contact-row" style={{ marginTop: '3.5rem' }}>
            <p style={{ color: 'var(--navy)', fontWeight: 800 }}>
              Need tailored guidance across multiple asset classes?
            </p>
            <Link className="solid-button" href="/services">
              Explore All Services <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
