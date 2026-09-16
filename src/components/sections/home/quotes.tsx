'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quotes, quotesAuthors } from '@/data/home';
import { Reveal } from '@/components/motion';
import { Quote, Sparkles } from 'lucide-react';

export default function QuotesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="growth-section" id="quotes" style={{ padding: '6.5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient radial light */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(82, 197, 182, 0.2) 0%, rgba(29, 72, 189, 0.15) 40%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: '#52c5b6', background: 'rgba(82, 197, 182, 0.12)', borderColor: 'rgba(82, 197, 182, 0.3)', letterSpacing: '.14em' }}>
              <Sparkles size={14} style={{ marginRight: 6 }} /> Words of Wisdom
            </span>
            <h2 className="section-title" style={{ marginTop: '.45rem', color: 'white', letterSpacing: '0em' }}>
              Timeless Investment Philosophy
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            borderRadius: '8px',
            padding: '3rem 2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            position: 'relative',
          }}
        >
          <Quote
            size={42}
            style={{
              color: '#52c5b6',
              opacity: 0.7,
              margin: '0 auto 1.2rem',
              display: 'block',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(1.2rem, 2.8vw, 1.85rem)',
                  lineHeight: 1.45,
                  fontWeight: 400,
                  fontFamily: 'Prata, Georgia, serif',
                  minHeight: '5.5rem',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                }}
              >
                &ldquo;{quotes[index]}&rdquo;
              </p>
              {quotesAuthors[index] && (
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(82, 197, 182, 0.15)',
                    border: '1px solid rgba(82, 197, 182, 0.4)',
                    padding: '.4rem 1.2rem',
                    borderRadius: '4px',
                    color: '#52c5b6',
                    marginTop: '1.5rem',
                    fontWeight: 700,
                    fontSize: '.85rem',
                    letterSpacing: '.04em',
                    fontFamily: 'Open Sans, sans-serif',
                  }}
                >
                  {quotesAuthors[index]}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div style={{ display: 'flex', gap: '.6rem', marginTop: '2.2rem', justifyContent: 'center' }}>
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show quote ${i + 1}`}
                style={{
                  width: index === i ? '36px' : '10px',
                  height: '6px',
                  borderRadius: '999px',
                  border: 'none',
                  background: index === i ? '#52c5b6' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'width .28s ease, background .28s ease',
                  outline: 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
