'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/home';
import { Reveal } from '@/components/motion';

export default function PrinciplesSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="guide-section" id="principles">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Main Principles</span>
            <h2 className="section-title" style={{ marginTop: '.55rem' }}>
              Global Reach with Local Understanding
            </h2>
          </div>
        </Reveal>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={index} delay={index * 0.08}>
                <div
                  className={`faq-item ${open ? 'open' : ''}`}
                  style={{
                    background: 'white',
                    border: '1px solid var(--line)',
                    borderRadius: 10,
                    marginBottom: '1rem',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                    className="faq-toggle"
                  >
                    {faq.q}
                    <ChevronDown size={20} className="faq-chevron" />
                  </button>
                  <div className="faq-answer" style={{ padding: open ? '0 1.6rem 1.4rem' : '0 1.6rem' }}>
                    <p className="body-copy" style={{ margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
