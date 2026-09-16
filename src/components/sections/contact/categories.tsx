'use client';

import { Phone, Mail, Clock, MessageSquare, MapPin } from 'lucide-react';
import { contactCards } from '@/data/contact';
import { getIcon } from '@/lib/icons';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function ContactCategories() {
  return (
    <section className="technology-section" style={{ padding: '5.5rem 0' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 3.5rem' }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>
              Dedicated Channels
            </span>
            <h2 className="section-title" style={{ marginTop: '.4rem', marginBottom: '.8rem' }}>
              How To Reach Our Team
            </h2>
            <p className="body-copy" style={{ lineHeight: 1.7 }}>
              We are available for our clients across phone, SMS, WhatsApp, and email — ensuring prompt assistance for every trading and investment need.
            </p>
          </Reveal>
        </div>

        <Stagger className="tech-feature-grid">
          {contactCards.map((card) => {
            const Icon = getIcon(card.icon, Phone);
            return (
              <StaggerItem key={card.title}>
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '2.2rem 1.8rem',
                    boxShadow: '0 8px 24px rgba(14, 34, 70, 0.06)',
                    border: '1px solid rgba(14, 34, 70, 0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 18px 40px rgba(14, 34, 70, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(229, 36, 46, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(14, 34, 70, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(14, 34, 70, 0.08)';
                  }}
                >
                  <div
                    style={{
                      background: '#fee2e2',
                      borderRadius: '12px',
                      width: '52px',
                      height: '52px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.4rem',
                      color: 'var(--orange)',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3
                    style={{
                      color: 'var(--navy)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      letterSpacing: '.02em',
                      margin: '0 0 .9rem',
                    }}
                  >
                    {card.title}
                  </h3>
                  {card.phones.length > 0 && (
                    <div style={{ marginBottom: '.6rem', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                      {card.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s+/g, '')}`}
                          style={{
                            color: '#334155',
                            fontSize: '.86rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '.5rem',
                            textDecoration: 'none',
                            fontWeight: 600,
                            transition: 'color .2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
                        >
                          <Phone size={13} style={{ color: 'var(--orange)', flexShrink: 0 }} /> {p}
                        </a>
                      ))}
                    </div>
                  )}
                  {card.emails.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', marginTop: 'auto' }}>
                      {card.emails.map((em) => (
                        <a
                          key={em}
                          href={`mailto:${em}`}
                          style={{
                            color: '#334155',
                            fontSize: '.86rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '.5rem',
                            textDecoration: 'none',
                            fontWeight: 600,
                            transition: 'color .2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
                        >
                          <Mail size={13} style={{ color: 'var(--orange)', flexShrink: 0 }} /> {em}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
