'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, FileText, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { serviceTabs, allServices, servicesIntro, type ServiceItem } from '@/data/services';
import { authorisedPersonEquity, amfiMFDDetails } from '@/data/regulatory';
import { getIcon } from '@/lib/icons';
import RegulatoryDisclosureModal from '@/components/regulatory/disclosure-modal';

export default function ServicesView() {
  const [activeTab, setActiveTab] = useState('Equities');
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);

  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (id) {
      const match = serviceTabs.find((t) => t.id === id);
      if (match) setActiveTab(match.label);
    }
  }, []);

  function selectTab(label: string) {
    setActiveTab(label);
    const match = serviceTabs.find((t) => t.label === label);
    if (match && window.history) {
      window.history.replaceState(null, '', `#${match.id}`);
    }
  }

  const activeService = allServices.find((s) => s.label === activeTab) || allServices[0];
  const IconComponent = getIcon(activeService.icon);

  return (
    <>
      <section className="technology-section" style={{ padding: '4.5rem 0 6rem' }}>
        <div className="container-wide">
          {/* Intro banner */}
          <div style={{ maxWidth: 840, margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>
              {servicesIntro.eyebrow}
            </span>
            <h2 className="section-title" style={{ marginTop: '.4rem', marginBottom: '.75rem' }}>
              {servicesIntro.title}
            </h2>
            <p
              style={{
                color: 'var(--navy)',
                fontSize: '1.05rem',
                fontWeight: 700,
                lineHeight: 1.4,
                marginBottom: '1rem',
              }}
            >
              {servicesIntro.subtitle}
            </p>
            <p className="body-copy" style={{ lineHeight: 1.7 }}>
              {servicesIntro.description}
            </p>
          </div>

          {/* Tab Pills */}
          <div
            className="segment-tabs"
            style={{
              display: 'flex',
              gap: '.6rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                id={tab.id}
                type="button"
                className={`segment-tab${activeTab === tab.label ? ' active' : ''}`}
                style={{
                  background: activeTab === tab.label ? '#1d48bd' : 'white',
                  color: activeTab === tab.label ? 'white' : '#0d1b3e',
                  border: activeTab === tab.label ? '1.5px solid #1d48bd' : '1px solid #dde3f0',
                  padding: '.65rem 1.4rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '.82rem',
                  cursor: 'pointer',
                  transition: 'all .2s ease',
                  fontFamily: 'Open Sans, sans-serif',
                  textTransform: 'uppercase',
                }}
                onClick={() => selectTab(tab.label)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Service Card */}
          {activeService && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(16,34,56,.08)',
                border: '1px solid rgba(20,41,92,.07)',
                overflow: 'hidden',
                maxWidth: 1020,
                margin: '0 auto',
              }}
            >
<div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    alignItems: 'stretch',
                  }}
                >
                {/* Image side */}
                <div style={{ position: 'relative', minHeight: 'clamp(240px, 45vw, 340px)', background: 'var(--navy)' }}>
                  <img
                    src={activeService.img}
                    alt={activeService.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(0deg, rgba(10,25,42,.85) 0%, rgba(10,25,42,.3) 60%, transparent 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '2rem',
                      left: '2rem',
                      right: '2rem',
                      color: 'white',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '.5rem',
                        background: '#1d48bd',
                        padding: '.4rem .85rem',
                        borderRadius: 4,
                        fontSize: '.75rem',
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        marginBottom: '.75rem',
                        fontFamily: 'Open Sans, sans-serif',
                      }}
                    >
                      <IconComponent size={16} />
                      {activeService.title}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Prata, Georgia, serif',
                        fontSize: '1.5rem',
                        margin: 0,
                        lineHeight: 1.2,
                        fontWeight: 400,
                      }}
                    >
                      {activeService.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Content side */}
                <div style={{ padding: '2.5rem 2.2rem', display: 'flex', flexDirection: 'column' }}>
                  <p
                    className="body-copy"
                    style={{
                      fontSize: '.95rem',
                      lineHeight: 1.7,
                      color: '#4a5878',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {activeService.description}
                  </p>

                  <h4
                    style={{
                      color: '#0d1b3e',
                      fontSize: '.95rem',
                      fontWeight: 700,
                      letterSpacing: '.04em',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                      fontFamily: 'Open Sans, sans-serif',
                    }}
                  >
                    {activeService.includeTitle}
                  </h4>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                      gap: '.65rem .9rem',
                    }}
                  >
                    {activeService.points.map((point, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '.55rem',
                          fontSize: '.88rem',
                          color: '#0d1b3e',
                          fontWeight: 600,
                          fontFamily: 'Open Sans, sans-serif',
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          style={{ color: '#1d48bd', marginTop: 2, flexShrink: 0 }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Equities Special: Authorised Person Block & Disclosure Link */}
                  {activeService.id === 'equity' && (
                    <div
                      style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: 10,
                        padding: '1.2rem',
                        marginTop: '1.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
                        <ShieldCheck size={18} style={{ color: 'var(--orange)' }} />
                        <strong style={{ color: 'var(--navy)', fontSize: '.88rem' }}>
                          {authorisedPersonEquity.title}
                        </strong>
                      </div>
                      <p style={{ fontSize: '.8rem', color: '#475569', margin: '0 0 .8rem', lineHeight: 1.55 }}>
                        {authorisedPersonEquity.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsDisclosureOpen(true)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--orange)',
                          fontWeight: 800,
                          fontSize: '.78rem',
                          padding: 0,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '.4rem',
                          textDecoration: 'underline',
                        }}
                      >
                        <FileText size={13} />
                        View Regulatory Disclosure, Disclaimer &amp; Investor Safety
                      </button>
                    </div>
                  )}

                  {/* Mutual Funds Special: AMFI Registration Notice */}
                  {activeService.id === 'mutualfunds' && (
                    <div
                      style={{
                        background: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        borderRadius: 10,
                        padding: '1.2rem',
                        marginTop: '1.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
                        <ShieldCheck size={18} style={{ color: '#16a34a' }} />
                        <strong style={{ color: '#166534', fontSize: '.88rem' }}>
                          {amfiMFDDetails.title} (ARN-{amfiMFDDetails.arn})
                        </strong>
                      </div>
                      <p style={{ fontSize: '.8rem', color: '#15803d', margin: '0 0 .6rem', lineHeight: 1.55 }}>
                        {amfiMFDDetails.description}
                      </p>
                      <em style={{ fontSize: '.74rem', color: '#166534', display: 'block', fontWeight: 600 }}>
                        {amfiMFDDetails.disclaimer}
                      </em>
                    </div>
                  )}

                  {/* Tagline footer */}
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1.75rem',
                      borderTop: '1px solid rgba(20,41,92,.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                    }}
                  >
                    <p
                      style={{
                        color: 'var(--orange)',
                        fontWeight: 800,
                        fontSize: '.92rem',
                        fontStyle: 'italic',
                        margin: 0,
                      }}
                    >
                      &ldquo;{activeService.tagline}&rdquo;
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsDisclosureOpen(true)}
                      style={{
                        background: 'transparent',
                        border: '1px solid #cbd5e1',
                        borderRadius: 6,
                        padding: '.4rem .8rem',
                        fontSize: '.72rem',
                        fontWeight: 700,
                        color: '#64748b',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '.35rem',
                      }}
                    >
                      <Scale size={12} /> Regulatory Disclosure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom CTA Row */}
          <div className="contact-row" style={{ marginTop: '4rem' }}>
            <p>Ready to trade, invest and grow with a trusted partner?</p>
            <Link className="solid-button" href="/contact">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Regulatory Disclosure Modal */}
      <RegulatoryDisclosureModal
        isOpen={isDisclosureOpen}
        onClose={() => setIsDisclosureOpen(false)}
      />
    </>
  );
}
