'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, MessageSquare, Twitter, Newspaper, ArrowRight, CheckCircle, ExternalLink, ThumbsUp, Repeat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { googleReviews, bseTweets, cafemutualArticles } from '@/data/testimonials';

export default function TestimonialsView() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'tweets' | 'articles'>('reviews');

  return (
    <section className="technology-section" style={{ padding: '4.5rem 0 6rem' }}>
      <div className="container-wide">
        {/* Intro */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 3rem' }}>
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>
            Client Stories &amp; Media Recognition
          </span>
          <h2 className="section-title" style={{ marginTop: '.4rem', marginBottom: '.75rem' }}>
            Trusted by Thousands. Recognized by Industry.
          </h2>
          <p className="body-copy" style={{ lineHeight: 1.65 }}>
            Discover what our long-term investors say about our service, view industry recognitions on BSE, and read our thought leadership articles on Cafemutual.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <button
            type="button"
            className={`segment-tab${activeTab === 'reviews' ? ' active' : ''}`}
            onClick={() => setActiveTab('reviews')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              background: activeTab === 'reviews' ? 'var(--orange)' : 'white',
              color: activeTab === 'reviews' ? 'white' : 'var(--navy)',
              border: activeTab === 'reviews' ? '1px solid var(--orange)' : '1px solid rgba(20,41,92,.12)',
              padding: '.75rem 1.4rem',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '.82rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,.04)',
            }}
          >
            <Star size={16} fill={activeTab === 'reviews' ? 'white' : 'var(--orange)'} stroke={activeTab === 'reviews' ? 'white' : 'var(--orange)'} />
            Google Reviews ({googleReviews.length})
          </button>

          <button
            type="button"
            className={`segment-tab${activeTab === 'tweets' ? ' active' : ''}`}
            onClick={() => setActiveTab('tweets')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              background: activeTab === 'tweets' ? 'var(--orange)' : 'white',
              color: activeTab === 'tweets' ? 'white' : 'var(--navy)',
              border: activeTab === 'tweets' ? '1px solid var(--orange)' : '1px solid rgba(20,41,92,.12)',
              padding: '.75rem 1.4rem',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '.82rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,.04)',
            }}
          >
            <Twitter size={16} />
            BSE Tweets ({bseTweets.length})
          </button>

          <button
            type="button"
            className={`segment-tab${activeTab === 'articles' ? ' active' : ''}`}
            onClick={() => setActiveTab('articles')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              background: activeTab === 'articles' ? 'var(--orange)' : 'white',
              color: activeTab === 'articles' ? 'white' : 'var(--navy)',
              border: activeTab === 'articles' ? '1px solid var(--orange)' : '1px solid rgba(20,41,92,.12)',
              padding: '.75rem 1.4rem',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '.82rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,.04)',
            }}
          >
            <Newspaper size={16} />
            Cafemutual Writeups ({cafemutualArticles.length})
          </button>
        </div>

        {/* Tab 1: Google Reviews */}
        {activeTab === 'reviews' && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Google Rating Banner */}
            <div
              style={{
                background: 'white',
                borderRadius: 16,
                padding: 'clamp(1.4rem, 4vw, 1.75rem)',
                boxShadow: '0 8px 30px rgba(16,34,56,.06)',
                border: '1px solid rgba(20,41,92,.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div
                  style={{
                    background: '#e8f0fe',
                    color: '#1a73e8',
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                  }}
                >
                  G
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                    <strong style={{ fontSize: '1.4rem', color: 'var(--navy)' }}>5.0</strong>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#fbbc04" stroke="#fbbc04" />
                      ))}
                    </div>
                  </div>
                  <span style={{ fontSize: '.84rem', color: '#64748b' }}>
                    Based on 100+ verified client ratings &amp; reviews on Google
                  </span>
                </div>
              </div>
              <div style={{ fontSize: '.85rem', color: 'var(--navy)', fontWeight: 700 }}>
                ⭐ 100% Recommended in Kharghar &amp; Navi Mumbai
              </div>
            </div>

            {/* Reviews Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '1.5rem',
              }}
            >
              {googleReviews.map((r, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    borderRadius: 14,
                    padding: 'clamp(1.4rem, 4vw, 1.8rem)',
                    boxShadow: '0 6px 24px rgba(16,34,56,.05)',
                    border: '1px solid rgba(20,41,92,.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Header: Avatar, Name, Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                        <div
                          style={{
                            width: 42,
                            height: 42,
                            borderRadius: '50%',
                            background: 'var(--navy)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '.9rem',
                            fontWeight: 800,
                          }}
                        >
                          {r.avatarInitials}
                        </div>
                        <div>
                          <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.95rem' }}>
                            {r.name}
                          </strong>
                          <span style={{ fontSize: '.74rem', color: '#64748b' }}>{r.location}</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '.72rem', color: '#94a3b8' }}>{r.date}</span>
                    </div>

                    {/* Star Row */}
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '.75rem' }}>
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} size={14} fill="#fbbc04" stroke="#fbbc04" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p
                      className="body-copy"
                      style={{
                        fontSize: '.88rem',
                        lineHeight: 1.6,
                        color: '#334155',
                        marginBottom: '1rem',
                      }}
                    >
                      &ldquo;{r.review}&rdquo;
                    </p>
                  </div>

                  {/* Badge */}
                  <div
                    style={{
                      background: '#f8fafc',
                      padding: '.4rem .75rem',
                      borderRadius: 6,
                      fontSize: '.72rem',
                      fontWeight: 700,
                      color: 'var(--orange)',
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                    }}
                  >
                    ✓ {r.service}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 2: BSE Tweets */}
        {activeTab === 'tweets' && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: '1.5rem',
              }}
            >
              {bseTweets.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    borderRadius: 16,
                    padding: 'clamp(1.4rem, 4vw, 1.75rem)',
                    boxShadow: '0 6px 24px rgba(16,34,56,.06)',
                    border: '1px solid rgba(20,41,92,.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Tweet Author header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            background: '#00529b',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 900,
                            fontSize: '.85rem',
                          }}
                        >
                          {t.avatar}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                            <strong style={{ color: 'var(--navy)', fontSize: '.92rem' }}>{t.username}</strong>
                            <CheckCircle size={14} fill="#1d9bf0" stroke="white" />
                          </div>
                          <span style={{ fontSize: '.76rem', color: '#64748b' }}>@{t.handle}</span>
                        </div>
                      </div>
                      <Twitter size={18} style={{ color: '#1d9bf0' }} />
                    </div>

                    {/* Tweet body */}
                    <p
                      className="body-copy"
                      style={{
                        fontSize: '.92rem',
                        lineHeight: 1.6,
                        color: '#1e293b',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {t.content}
                    </p>
                  </div>

                  {/* Tweet Footer: Stats & Date */}
                  <div
                    style={{
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '.76rem',
                      color: '#64748b',
                    }}
                  >
                    <span>{t.date}</span>
                    <div style={{ display: 'flex', gap: '1.2rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                        <Repeat size={13} /> {t.retweets}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                        <ThumbsUp size={13} /> {t.likes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 3: Cafemutual Writeups */}
        {activeTab === 'articles' && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '2rem',
              }}
            >
              {cafemutualArticles.map((art, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    borderRadius: 16,
                    padding: 'clamp(1.6rem, 4.5vw, 2.2rem)',
                    boxShadow: '0 8px 30px rgba(16,34,56,.06)',
                    border: '1px solid rgba(20,41,92,.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span
                        style={{
                          background: '#fff3ea',
                          color: 'var(--orange)',
                          fontSize: '.72rem',
                          fontWeight: 800,
                          padding: '.35rem .75rem',
                          borderRadius: 6,
                          textTransform: 'uppercase',
                          letterSpacing: '.06em',
                        }}
                      >
                        {art.category}
                      </span>
                      <span style={{ fontSize: '.76rem', color: '#64748b' }}>{art.readTime}</span>
                    </div>

                    <h3
                      style={{
                        color: 'var(--navy)',
                        fontSize: '1.25rem',
                        lineHeight: 1.35,
                        margin: '0 0 1rem',
                        fontFamily: 'var(--app-font-serif)',
                      }}
                    >
                      {art.title}
                    </h3>

                    <p
                      className="body-copy"
                      style={{
                        fontSize: '.9rem',
                        lineHeight: 1.65,
                        color: '#475569',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {art.excerpt}
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <strong style={{ display: 'block', color: 'var(--navy)', fontSize: '.84rem' }}>
                        {art.author}
                      </strong>
                      <span style={{ fontSize: '.74rem', color: '#94a3b8' }}>{art.date}</span>
                    </div>
                    <span
                      style={{
                        color: 'var(--orange)',
                        fontSize: '.78rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.3rem',
                      }}
                    >
                      Cafemutual Feature <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <div className="contact-row" style={{ marginTop: '4rem' }}>
          <p>Join over 10,000+ investors building wealth with National Bulls.</p>
          <Link className="solid-button" href="/contact">
            Start Your Journey <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
