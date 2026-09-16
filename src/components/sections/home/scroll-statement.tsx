'use client';

import { ScrollTextReveal, Reveal } from '@/components/motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ScrollStatementSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #02040f 0%, #050d24 60%, #0a1638 100%)',
        padding: '7.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(37, 99, 235, 0.35) 0%, rgba(0, 242, 254, 0.15) 50%, transparent 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', marginBottom: '1.5rem' }}>
              <span
                style={{
                  color: '#00f2fe',
                  background: 'rgba(0, 242, 254, 0.12)',
                  border: '1.5px solid rgba(0, 242, 254, 0.35)',
                  padding: '.45rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '.75rem',
                  fontWeight: 800,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  fontFamily: 'Outfit, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem',
                }}
              >
                <Sparkles size={14} /> The National Bulls Standard
              </span>
            </div>
          </Reveal>

          {/* Cinematic Animated Scroll Reveal Text */}
          <div style={{ margin: '1rem 0 2.5rem' }}>
            <ScrollTextReveal
              text="For over two decades, National Bulls has bridged institutional market access with deeply personalised wealth management. We deliver transparent execution, relationship-driven guidance, and multi-asset opportunities across India's financial markets."
              highlightWords={['two', 'decades,', 'National', 'Bulls', 'institutional', 'market', 'access', 'personalised', 'wealth', 'transparent', 'execution,', 'multi-asset', 'financial', 'markets.']}
              highlightColor="#00f2fe"
              className="cinematic-statement-text"
            />
          </div>

          <Reveal delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <Link className="hero-btn-primary" href="/about">
                Discover Our Heritage <ArrowRight size={14} />
              </Link>
              <Link className="hero-btn-ghost" href="/services">
                Explore Products
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
