'use client';

import { MapPin, Navigation } from 'lucide-react';
import { mapEmbedSrc, contactInfo } from '@/data/contact';

export default function ContactMap() {
  return (
    <section style={{ padding: '0 0 5rem', background: '#f8fafc' }}>
      <div className="container-wide">
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 16px 45px rgba(14, 34, 70, 0.1)',
            border: '1px solid rgba(14, 34, 70, 0.08)',
          }}
        >
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="440"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            allowFullScreen
            title="National Bulls Office Location"
          />

          {/* Floating Location Overlay Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              background: 'rgba(14, 34, 70, 0.95)',
              backdropFilter: 'blur(12px)',
              color: 'white',
              padding: '1.2rem 1.6rem',
              borderRadius: '12px',
              maxWidth: '380px',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
              <MapPin size={18} style={{ color: 'var(--yellow)' }} />
              <strong style={{ color: 'var(--yellow)', fontSize: '.88rem' }}>
                National Bulls Office
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '.8rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
              Office No 9, 1st Floor, Bhoomi Tower, Opp ITM, Sector 4, Kharghar - 410 210, Navi Mumbai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
