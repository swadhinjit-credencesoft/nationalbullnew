'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ShieldCheck, Award, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides, heroImages } from '@/data/home';

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = heroSlides[slide];

  return (
    <section className="hero" id="home">
      {/* Background image with crossfade */}
      <AnimatePresence>
        <motion.img
          key={`img-${slide}`}
          src={heroImages[slide % heroImages.length]}
          alt="National Bulls Investment Services"
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Decorative ring */}
      <div className="hero-ring" aria-hidden="true" />

      {/* Main content */}
      <div className="container-wide hero-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow label */}
            <span className="hero-eyebrow">{current.eyebrow}</span>

            {/* Main headline */}
            <h1>
              {current.heading}
              {current.highlight && (
                <>
                  {' '}
                  <span>{current.highlight}</span>
                </>
              )}
            </h1>

            {/* Body copy */}
            <p className="hero-body">{current.copy}</p>

            {/* Tagline */}
            {current.tagline && (
              <p className="hero-tagline">{current.tagline}</p>
            )}

            {/* CTA buttons & Trust badging */}
            <div className="hero-actions">
              <Link className="hero-btn-primary" href="/contact">
                Contact Us <ArrowRight size={15} />
              </Link>
              <Link className="hero-btn-ghost" href="/services">
                Explore Services
              </Link>
            </div>

            {/* Floating Trust Metrics in Hero */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.2rem',
                marginTop: '3.2rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(0, 242, 254, 0.15)',
                    color: '#00f2fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(0, 242, 254, 0.4)',
                  }}
                >
                  <Award size={16} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#ffffff', fontSize: '.88rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>
                    20+ Years Experience
                  </strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '.74rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Trusted in Kharghar since 2004
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(37, 99, 235, 0.2)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(56, 189, 248, 0.4)',
                  }}
                >
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#ffffff', fontSize: '.88rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>
                    SEBI &amp; AMFI Reg.
                  </strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '.74rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Franchise of Progressive Share Brokers
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(245, 158, 11, 0.18)',
                    color: '#fbbf24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(245, 158, 11, 0.4)',
                  }}
                >
                  <TrendingUp size={16} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#ffffff', fontSize: '.88rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>
                    Multi-Asset Access
                  </strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '.74rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Equity, F&amp;O, Mutual Funds, IPO
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.a
        href="#partners"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: 'max(24px, calc((100% - 1240px) / 2))',
          display: 'flex',
          alignItems: 'center',
          gap: '.55rem',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '.74rem',
          fontWeight: 800,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          padding: '.5rem 1.1rem',
          borderRadius: '999px',
          border: '1.5px solid rgba(0, 242, 254, 0.4)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 242, 254, 0.25)',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <ChevronDown size={15} color="#00f2fe" />
        </motion.div>
      </motion.a>

      {/* Slide navigation dots */}
      <div className="hero-slide-dots" role="tablist" aria-label="Hero Slides">
        {heroSlides.map((_, i) => (
          <i
            key={i}
            role="tab"
            tabIndex={0}
            aria-label={`Slide ${i + 1}`}
            aria-selected={slide === i}
            className={slide === i ? 'active' : ''}
            onClick={() => setSlide(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSlide(i);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}

