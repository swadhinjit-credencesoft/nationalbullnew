'use client';

import { partners } from '@/data/home';
import { howWeWork } from '@/data/regulatory';
import { Reveal, fadeIn } from '@/components/motion';
import { ShieldCheck, Handshake, Building2 } from 'lucide-react';

export default function PartnersSection() {
  return (
    <section className="intro-section" id="partners" style={{ padding: '4.5rem 0 5rem' }}>
      <div className="container-wide">
        <Reveal variant={fadeIn}>
          <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto 3rem' }}>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>
              {howWeWork.eyebrow}
            </span>
            <h2 className="section-title" style={{ marginTop: '.45rem', marginBottom: '1.2rem' }}>
              {howWeWork.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
              {howWeWork.paragraphs.map((p, i) => (
                <p key={i} className="body-copy" style={{ margin: 0, lineHeight: 1.7, fontSize: '.95rem' }}>
                  {p}
                </p>
              ))}
            </div>

            <div
              style={{
                display: 'inline-block',
                background: 'white',
                padding: '.65rem 1.4rem',
                borderRadius: '4px',
                border: '1.5px solid rgba(29, 72, 189, 0.3)',
                color: '#1d48bd',
                fontWeight: 700,
                fontSize: '.85rem',
                letterSpacing: '.04em',
                marginTop: '1.5rem',
                boxShadow: '0 4px 16px rgba(29, 72, 189, 0.08)',
                fontFamily: 'Open Sans, sans-serif',
              }}
            >
              {howWeWork.tagline}
            </div>
          </div>
        </Reveal>

        {/* Partner Logos Marquee */}
        <div className="partner-marquee" aria-hidden="true">
          <div className="partner-marquee-track">
            {[...partners, ...partners].map((src, index) => (
              <img
                key={index}
                src={`/images/${src}`}
                alt="Partner Fund House"
                style={{
                  height: 46,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(15%)',
                  flex: '0 0 auto',
                  opacity: 0.9,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
