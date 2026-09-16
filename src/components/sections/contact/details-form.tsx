'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { Reveal } from '@/components/motion';

const infoRows = [
  { icon: MapPin, title: 'Visit Our Office', value: contactInfo.address },
  { icon: Phone, title: 'Direct Dealing & Support', value: contactInfo.phones },
  { icon: Mail, title: 'Official Email Assistance', value: contactInfo.email },
];

export default function ContactDetailsForm() {
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <section className="intro-section" style={{ padding: '5.5rem 0' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'start' }} className="stack-col">
          {/* Left - contact details */}
          <Reveal>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>
                Direct Assistance
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.9rem)', marginTop: '.4rem', marginBottom: '1.2rem' }}>
                We Are Here to Assist You
              </h2>
              <p className="body-copy" style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
                Whether you have a query regarding equity trading, mutual fund SIPs, IPOs, or insurance solutions, our experienced team in Kharghar is ready to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {infoRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={row.title}
                      style={{
                        display: 'flex',
                        gap: '1.2rem',
                        alignItems: 'flex-start',
                        background: '#f8fafc',
                        padding: '1.4rem 1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(14, 34, 70, 0.06)',
                      }}
                    >
                      <div
                        style={{
                          background: '#fee2e2',
                          borderRadius: '10px',
                          width: '46px',
                          height: '46px',
                          minWidth: 46,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--orange)',
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3
                          style={{
                            color: 'var(--navy)',
                            fontSize: '.95rem',
                            fontWeight: 800,
                            margin: '0 0 .35rem',
                            letterSpacing: '.02em',
                          }}
                        >
                          {row.title}
                        </h3>
                        <p className="body-copy" style={{ margin: 0, fontSize: '.9rem', color: '#475569' }}>
                          {row.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Franchise Trust Badge */}
              <div
                style={{
                  marginTop: '2rem',
                  padding: '1.2rem 1.5rem',
                  background: 'var(--navy)',
                  color: 'white',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 12px 30px rgba(14, 34, 70, 0.18)',
                }}
              >
                <ShieldCheck size={28} style={{ color: 'var(--yellow)', flexShrink: 0 }} />
                <div style={{ fontSize: '.84rem', lineHeight: 1.5 }}>
                  <strong style={{ display: 'block', color: 'var(--yellow)' }}>
                    Authorised Person — Progressive Share Brokers Pvt. Ltd.
                  </strong>
                  <span>Operating from the same location in Kharghar for over 20 years.</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right - contact form */}
          <Reveal delay={0.15}>
            <div>
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: 'clamp(1.6rem, 5vw, 2.8rem) clamp(1.4rem, 4vw, 2.5rem)',
                  boxShadow: '0 16px 45px rgba(14, 34, 70, 0.08)',
                  border: '1px solid rgba(14, 34, 70, 0.08)',
                }}
              >
                <span className="eyebrow" style={{ color: 'var(--orange)' }}>
                  Quick Enquiry
                </span>
                <h3
                  style={{
                    color: 'var(--navy)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    marginTop: '.4rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div
                    style={{
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      borderRadius: '12px',
                      padding: '2.5rem 2rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: '#dcfce7',
                        color: '#16a34a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.2rem',
                      }}
                    >
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 style={{ color: '#166534', fontSize: '1.3rem', margin: '0 0 .5rem', fontWeight: 800 }}>
                      Message Received!
                    </h3>
                    <p style={{ color: '#15803d', fontSize: '.92rem', margin: 0, lineHeight: 1.6 }}>
                      Thank you for contacting National Bulls. Our client relationship team will get in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '.4rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                        Full Name <span style={{ color: 'var(--orange)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                        style={{
                          width: '100%',
                          padding: '.85rem 1rem',
                          borderRadius: '8px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '.9rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          transition: 'border-color .2s, box-shadow .2s',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--orange)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(229, 36, 46, 0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#cbd5e1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '.4rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                        Email Address <span style={{ color: 'var(--orange)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        required
                        style={{
                          width: '100%',
                          padding: '.85rem 1rem',
                          borderRadius: '8px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '.9rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          transition: 'border-color .2s, box-shadow .2s',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--orange)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(229, 36, 46, 0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#cbd5e1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '.4rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                        Phone Number <span style={{ color: 'var(--orange)' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        required
                        style={{
                          width: '100%',
                          padding: '.85rem 1rem',
                          borderRadius: '8px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '.9rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          transition: 'border-color .2s, box-shadow .2s',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--orange)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(229, 36, 46, 0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#cbd5e1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '.78rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '.4rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                        Your Message / Service Required
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you with your investments..."
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '.85rem 1rem',
                          borderRadius: '8px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '.9rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          transition: 'border-color .2s, box-shadow .2s',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--orange)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(229, 36, 46, 0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#cbd5e1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div style={{ marginTop: '.5rem' }}>
                      <button
                        type="submit"
                        className="solid-button"
                        style={{
                          width: '100%',
                          minHeight: '48px',
                          fontSize: '.82rem',
                          letterSpacing: '.08em',
                        }}
                      >
                        Submit Enquiry <Send size={15} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {toast && (
        <div className="toast-message">
          ✓ Thank you! Your enquiry has been sent to National Bulls.
        </div>
      )}
    </section>
  );
}
