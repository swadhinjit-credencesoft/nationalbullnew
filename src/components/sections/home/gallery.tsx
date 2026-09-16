'use client';

import { galleryShots } from '@/data/home';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function GallerySection() {
  return (
    <section className="intro-section" style={{ paddingTop: '6rem' }}>
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Our Gallery</span>
            <h2 className="section-title" style={{ marginTop: '.55rem' }}>
              A Glimpse Into National Bulls
            </h2>
          </div>
        </Reveal>
        <Stagger className="gallery-grid">
          {galleryShots.map((g) => (
            <StaggerItem key={g.src} className="gallery-item">
              <img src={g.src} alt={g.label} loading="lazy" />
              <span className="gallery-caption">{g.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <div className="franchise-strip">
            <div>
              <small>A trusted franchise of</small>
              <strong>Progressive Share Brokers Pvt Ltd</strong>
              <p>Member of NSE, BSE, MCX, NCDEX &amp; CDSL</p>
            </div>
            <img src="/images/psbpl-horizontal.jpeg" alt="Progressive Share Brokers" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
