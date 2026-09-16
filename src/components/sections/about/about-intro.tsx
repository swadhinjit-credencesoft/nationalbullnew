'use client';

import { aboutContactRows, aboutIntroParagraphs, aboutPromise } from '@/data/about';
import { getIcon } from '@/lib/icons';

export default function AboutIntro() {
  return (
    <section className="intro-section">
      <div className="container-wide">
        <div className="growth-grid" style={{ gap: '3rem' }}>
          <div>
            <span className="eyebrow">An Initiative by IIT &amp; IIM Alumni</span>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginTop: '.5rem' }}
            >
              20+ Years of Trust. Experience. Relationships.
            </h2>

            {aboutIntroParagraphs.map((para, i) => (
              <p key={i} className="body-copy" style={{ marginTop: i === 0 ? '1.2rem' : '.85rem' }}>
                {para}
              </p>
            ))}

            {/* Our Promise callout */}
            <div
              style={{
                background: '#01006a',
                borderRadius: '6px',
                padding: '1.4rem 1.6rem',
                marginTop: '1.8rem',
                color: 'white',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: '.68rem',
                  fontWeight: 700,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: '#52c5b6',
                  marginBottom: '.5rem',
                  fontFamily: 'Open Sans, sans-serif',
                }}
              >
                Our Promise
              </span>
              <p style={{ margin: 0, fontSize: '.95rem', fontWeight: 600, lineHeight: 1.5, fontFamily: 'Open Sans, sans-serif' }}>
                {aboutPromise}
              </p>
            </div>

            {/* Contact info rows */}
            <div
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                marginTop: '1.5rem',
                boxShadow: '0 6px 24px rgba(29, 72, 189, 0.06)',
                border: '1px solid #dde3f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {aboutContactRows.map((row) => {
                const Icon = getIcon(row.icon);
                return (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem' }}>
                    <Icon size={18} style={{ color: '#1d48bd', marginTop: 3, flexShrink: 0 }} />
                    <span className="body-copy" style={{ fontSize: '.88rem' }}>
                      {row.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <img
              src="/images/about-main.png"
              alt="National Bulls office"
              style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
