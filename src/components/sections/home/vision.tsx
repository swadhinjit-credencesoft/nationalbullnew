'use client';

import { visionIntro, visionPoints } from '@/data/home';
import { getIcon } from '@/lib/icons';
import { Reveal } from '@/components/motion';

export default function VisionSection() {
  return (
    <section className="growth-section dark" id="vision">
      <div className="container-wide">
        <Reveal>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
            <span className="eyebrow" style={{ color: '#52c5b6', background: 'rgba(82, 197, 182, 0.12)', borderColor: 'rgba(82, 197, 182, 0.3)' }}>
              Our Vision
            </span>
            <h2 className="section-title" style={{ color: 'white', margin: '.55rem 0 1.2rem', letterSpacing: '0em' }}>
              To Make Investing More Informed, Accessible &amp; Trustworthy
            </h2>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,.85)', fontFamily: 'Open Sans, sans-serif' }}>
              {visionIntro}
            </p>
          </div>
        </Reveal>
        <div
          className="stack-col"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(3, 1fr)',
            marginTop: '3.2rem',
          }}
        >
          {visionPoints.map((point, i) => {
            const PointIcon = getIcon(point.icon);
            return (
              <Reveal key={point.title} delay={i * 0.12}>
                <div
                  className="prem-card dark-card"
                  style={{
                    background: 'rgba(255,255,255,.06)',
                    border: '1px solid rgba(82, 197, 182, 0.25)',
                    borderRadius: 8,
                    padding: '2rem 2rem 2.1rem',
                    height: '100%',
                    boxShadow: '0 18px 40px rgba(0,0,0,.25)',
                  }}
                >
                  <div className="mission-icon" style={{ background: 'rgba(82, 197, 182, 0.15)', color: '#52c5b6' }}>
                    <PointIcon size={22} strokeWidth={1.7} />
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.2rem', margin: '1rem 0 .7rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}>
                    {point.title}
                  </h3>
                  <p className="body-copy" style={{ color: 'rgba(255,255,255,.8)', margin: 0, fontFamily: 'Open Sans, sans-serif', fontSize: '.92rem' }}>
                    {point.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
