'use client';

import Link from 'next/link';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';
import { founder } from '@/data/about';

export default function FounderSection() {
  return (
    <section style={{ background: '#f8fafc', padding: '5.5rem 0' }}>
      <div className="container-wide" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ color: 'var(--orange)' }}>Leadership</span>
        <h2
          className="section-title"
          style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', marginTop: '.5rem', marginBottom: '2.5rem' }}
        >
          Meet Our Founder &amp; CEO
        </h2>
        <div
          style={{
            background: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            maxWidth: 480,
            width: '100%',
            margin: '0 auto',
            boxShadow: '0 16px 45px rgba(29, 72, 189, 0.08)',
            border: '1px solid #dde3f0',
          }}
        >
          <div style={{ position: 'relative', height: 280, background: '#01006a' }}>
            <img
              src="/images/sanjay-gaggar.jpeg"
              alt={founder.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(1, 0, 106, 0.8) 0%, transparent 60%)',
              }}
            />
          </div>
          <div style={{ padding: '2rem' }}>
            <h3 style={{ color: '#0d1b3e', fontSize: '1.45rem', margin: 0, fontFamily: 'Prata, Georgia, serif', fontWeight: 400 }}>
              {founder.name}
            </h3>
            <p
              style={{
                color: '#1d48bd',
                fontWeight: 700,
                marginTop: '.35rem',
                marginBottom: '1rem',
                fontSize: '.85rem',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
                fontFamily: 'Open Sans, sans-serif',
              }}
            >
              Founder &amp; CEO — 25+ Years Market Experience
            </p>
            <p className="body-copy" style={{ fontSize: '.92rem', lineHeight: 1.7, margin: '0 0 1.5rem', color: '#4a5878' }}>
              MTech. from IIT Bombay with extensive corporate strategy and wealth management expertise, leading National Bulls since inception.
            </p>
            <Link className="solid-button" href="/team" style={{ width: '100%', padding: '0 1rem' }}>
              Read Full Bio &amp; Team Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
