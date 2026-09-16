'use client';

import { aboutFeatures } from '@/data/about';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function WhatWeDo() {
  return (
    <section className="technology-section">
      <div className="container-wide">
        <div className="tech-heading">
          <Reveal>
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="section-title" style={{ marginTop: '.5rem' }}>
                A Complete Financial Solution Provider
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-copy">
              From Equities and Derivatives to Mutual Funds, IPOs, Insurance and Global Equities — we
              provide everything under one roof with personalised service and experienced guidance.
            </p>
          </Reveal>
        </div>

        <Stagger className="tech-feature-grid">
          {aboutFeatures.map((f) => (
            <StaggerItem key={f.title}>
              <article className="tech-feature">
                <img
                  src={f.img}
                  alt={f.alt}
                  style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 6, transition: 'transform .4s ease' }}
                  className="prem-zoom"
                />
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
