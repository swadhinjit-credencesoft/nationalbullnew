'use client';

import { founder } from '@/data/team';
import { Reveal, scaleIn } from '@/components/motion';
import { Award, GraduationCap, Briefcase, Heart } from 'lucide-react';

export default function TeamProfile() {
  return (
    <section className="intro-section" style={{ padding: '4.5rem 0 5rem' }}>
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="stack-col"
        >
          {/* Founder Photo & Quick Credential Card */}
          <Reveal variant={scaleIn}>
            <div style={{ position: 'sticky', top: '100px' }}>
              <div
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 16px 45px rgba(1,0,106,.08)',
                  border: '1px solid #dde3f0',
                }}
              >
                <div style={{ position: 'relative', height: 320, background: '#01006a' }}>
                  <img
                    src={founder.img}
                    alt={founder.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(0deg, rgba(1,0,106,.75) 0%, transparent 50%)',
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ margin: 0, color: '#0d1b3e', fontSize: '1.35rem', fontFamily: 'Prata, Georgia, serif', fontWeight: 400 }}>
                    {founder.name}
                  </h3>
                  <p
                    style={{
                      color: '#1d48bd',
                      fontWeight: 700,
                      fontSize: '.85rem',
                      margin: '.3rem 0 1rem',
                      fontFamily: 'Open Sans, sans-serif',
                    }}
                  >
                    {founder.role}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '.6rem',
                      fontSize: '.82rem',
                      color: '#4a5878',
                      borderTop: '1px solid #dde3f0',
                      paddingTop: '1rem',
                      fontFamily: 'Open Sans, sans-serif',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                      <GraduationCap size={15} style={{ color: '#1d48bd', flexShrink: 0 }} />
                      <span>MTech. — IIT Bombay</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                      <Award size={15} style={{ color: '#1d48bd', flexShrink: 0 }} />
                      <span>Certified Wealth Manager</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                      <Briefcase size={15} style={{ color: '#1d48bd', flexShrink: 0 }} />
                      <span>25+ Years Market Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Founder Bio Content */}
          <Reveal delay={0.12}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>
                Founder &amp; CEO
              </span>
              <h2
                className="section-title"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '.4rem', marginBottom: '1.2rem' }}
              >
                {founder.name}
              </h2>

              <div
                style={{
                  background: 'var(--cream)',
                  borderLeft: '4px solid var(--orange)',
                  padding: '1rem 1.4rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '1.5rem',
                }}
              >
                <p
                  style={{
                    color: 'var(--navy)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    margin: 0,
                  }}
                >
                  &ldquo;{founder.tagline}&rdquo;
                </p>
              </div>

              {founder.bio.map((para, i) => (
                <p
                  key={i}
                  className="body-copy"
                  style={{
                    marginTop: i === 0 ? 0 : '1rem',
                    lineHeight: 1.7,
                    fontSize: '.95rem',
                    color: '#334155',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
