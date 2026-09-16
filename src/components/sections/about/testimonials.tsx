'use client';

import { testimonials } from '@/data/about';

export default function TestimonialsSection() {
  return (
    <section className="guide-section">
      <div className="container-wide">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title" style={{ marginTop: '.5rem' }}>
            What People Say About Us
          </h2>
          <p className="body-copy" style={{ maxWidth: 600, margin: '1rem auto 0' }}>
            We help you see the world differently, discover opportunities you may never have imagined
            and achieve results that bridge what is with what can be.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 6px 24px rgba(0,0,0,.06)' }}
            >
              <p className="body-copy" style={{ fontStyle: 'italic', fontSize: '.9rem', marginBottom: '1.5rem' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <strong style={{ color: 'var(--navy)', fontSize: '.9rem' }}>{t.name}</strong>
                <span className="body-copy" style={{ display: 'block', fontSize: '.78rem', color: 'var(--orange)' }}>
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
