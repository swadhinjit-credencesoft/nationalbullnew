'use client';

import { principles } from '@/data/about';
import { getIcon } from '@/lib/icons';

export default function AboutPrinciples() {
  return (
    <section className="growth-section">
      <div className="container-wide">
        <div className="growth-grid" style={{ gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>
              What Defines Us
            </span>
            <h2 className="section-title" style={{ color: 'white', marginTop: '.5rem' }}>
              Built on Experience. Driven by Trust.
            </h2>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,.7)', marginTop: '1rem' }}>
              For over two decades, National Bulls has stood by its clients with consistent
              service, transparent processes and a genuine commitment to long-term relationships.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {principles.map((p) => {
                const Icon = getIcon(p.icon);
                return (
                  <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: 'var(--orange)' }}>
                    <Icon size={18} />
                    <span style={{ fontSize: '.75rem', fontWeight: 800, letterSpacing: '.1em' }}>
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="growth-visual" style={{ position: 'relative', minHeight: 250 }}>
              <div
                className="growth-panel"
                style={{
                  position: 'relative',
                  right: 'auto',
                  top: 'auto',
                  transform: 'rotate(-2deg)',
                  width: '100%',
                }}
              >
                <span>Our Commitment</span>
                <strong>20+ Years</strong>
                <small>Same location. Same founder team. Trusted by thousands of clients across India and overseas.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
