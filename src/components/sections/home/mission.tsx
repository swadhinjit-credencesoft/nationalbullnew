'use client';

import { Landmark } from 'lucide-react';
import { missionIntro, missionItems } from '@/data/home';
import { getIcon } from '@/lib/icons';
import { Reveal } from '@/components/motion';

export default function MissionSection() {
  return (
    <section className="growth-section light" id="mission">
      <div className="container-wide">
        <Reveal>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
            <span className="eyebrow">Our Mission</span>
            <h2 className="section-title" style={{ margin: '.55rem 0 1.2rem' }}>
              Empowering Clients with Confidence
            </h2>
            <p className="body-copy">{missionIntro}</p>
          </div>
        </Reveal>
        <div
          className="stack-col"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: '1fr 1fr',
            marginTop: '3.2rem',
          }}
        >
          {missionItems.map((item, i) => {
            const ItemIcon = getIcon(item.icon, Landmark);
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="mission-card">
                  <div className="mission-icon">
                    <ItemIcon size={22} strokeWidth={1.7} />
                  </div>
                  <h3
                    style={{ color: '#0d1b3e', fontSize: '1.2rem', margin: '1rem 0 .7rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="body-copy" style={{ margin: 0, fontSize: '.92rem', lineHeight: 1.7 }}>
                    {item.copy}
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
