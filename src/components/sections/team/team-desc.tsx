'use client';

import { teamOverview, teamDepartments } from '@/data/team';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { getIcon } from '@/lib/icons';
import { Users, Shield, TrendingUp, Sparkles } from 'lucide-react';

export default function TeamDesc() {
  return (
    <section className="technology-section" style={{ padding: '5rem 0' }}>
      <div className="container-wide">
        {/* Team Philosophy Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="stack-col">
          <Reveal>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>
                {teamOverview.eyebrow}
              </span>
              <h2
                className="section-title"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)', marginTop: '.5rem', marginBottom: '1.2rem' }}
              >
                {teamOverview.title}
              </h2>
              <p className="body-copy" style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                {teamOverview.lead}
              </p>
              <p className="body-copy" style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {teamOverview.description2}
              </p>

              <div
                style={{
                  background: 'white',
                  borderRadius: 12,
                  padding: '1.5rem',
                  border: '1px solid rgba(20,41,92,.08)',
                  boxShadow: '0 8px 24px rgba(0,0,0,.04)',
                }}
              >
                <h4 style={{ color: 'var(--navy)', margin: '0 0 .5rem', fontSize: '1.05rem', fontWeight: 800 }}>
                  {teamOverview.leadershipTitle}
                </h4>
                <p className="body-copy" style={{ fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>
                  {teamOverview.leadershipCopy}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(16,34,56,.18)',
                }}
              >
                <img
                  src={teamOverview.img}
                  alt="National Bulls Team"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, rgba(10,25,42,.85) 0%, transparent 55%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    color: 'white',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--yellow)', marginBottom: '.3rem' }}>
                    {teamOverview.highlight}
                  </strong>
                  <p style={{ margin: 0, fontSize: '.84rem', opacity: .9 }}>
                    {teamOverview.tagline}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Team Members Grid by Department */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>
              Our Specialists
            </span>
            <h2 className="section-title" style={{ marginTop: '.4rem' }}>
              Meet Our Department Teams
            </h2>
            <p className="body-copy" style={{ maxWidth: 620, margin: '.8rem auto 0' }}>
              Dedicated, responsive professionals ready to support your trading, mutual fund investments, and insurance needs.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {teamDepartments.map((dept) => {
              const DeptIcon = getIcon(dept.icon, Users);
              return (
                <div
                  key={dept.name}
                  style={{
                    background: 'white',
                    borderRadius: 16,
                    padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 3.5vw, 2rem)',
                    boxShadow: '0 10px 32px rgba(16,34,56,.06)',
                    border: '1px solid rgba(20,41,92,.07)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '.8rem',
                      marginBottom: '1.8rem',
                      borderBottom: '2px solid #eef1f8',
                      paddingBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(29, 72, 189, 0.08)',
                        color: '#1d48bd',
                        borderRadius: 6,
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <DeptIcon size={22} />
                    </div>
                    <div>
                      <h3 style={{ margin: 0, color: '#0d1b3e', fontSize: '1.35rem', fontFamily: 'Prata, Georgia, serif', fontWeight: 400 }}>
                        {dept.name}
                      </h3>
                      <p className="body-copy" style={{ margin: 0, fontSize: '.84rem', color: '#4a5878' }}>
                        {dept.description}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                      gap: '1.5rem',
                    }}
                  >
                    {dept.members.map((member) => (
                      <div
                        key={member.name}
                        style={{
                          background: '#f4f6fb',
                          borderRadius: 8,
                          padding: '1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1.1rem',
                          border: '1px solid #dde3f0',
                          transition: 'transform .2s ease, box-shadow .2s ease',
                        }}
                      >
                        {/* Member Avatar with Initials */}
                        <div
                          style={{
                            width: 54,
                            height: 54,
                            borderRadius: '50%',
                            background: '#01006a',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            flexShrink: 0,
                            border: '2px solid #1d48bd',
                            fontFamily: 'Open Sans, sans-serif',
                          }}
                        >
                          {member.initials}
                        </div>

                        <div>
                          <h4 style={{ margin: 0, color: '#0d1b3e', fontSize: '1.05rem', fontWeight: 700, fontFamily: 'Open Sans, sans-serif' }}>
                            {member.name}
                          </h4>
                          <p
                            style={{
                              margin: '.25rem 0 0',
                              color: '#1d48bd',
                              fontSize: '.82rem',
                              fontWeight: 600,
                              lineHeight: 1.3,
                              fontFamily: 'Open Sans, sans-serif',
                            }}
                          >
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
