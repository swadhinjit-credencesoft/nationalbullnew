'use client';

import PageHeader from '@/components/sections/page-header';
import { Reveal } from '@/components/motion';
import { Building2, ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FranchisePage() {
  const benefits = [
    {
      title: 'Established Pedigree',
      desc: 'Associated with Progressive Share Brokers Pvt. Ltd., holding decades of market credibility and pan-India presence.',
      icon: Building2,
    },
    {
      title: 'Full Regulatory Standing',
      desc: 'NSE / BSE / MCX-sx / MCX Member with SEBI Regn. No : INZ000170639 and CDSL Depository Participant (IN-DP-535-2020).',
      icon: ShieldCheck,
    },
    {
      title: 'Advanced Trading Infrastructure',
      desc: 'Access to high-speed institutional dealing terminals (Invest360), mobile trading applications, and risk management systems.',
      icon: TrendingUp,
    },
    {
      title: 'Comprehensive Advisory & Support',
      desc: 'Direct access to institutional research, technical charts, daily market updates, and continuous backend operational support.',
      icon: Users,
    },
  ];

  return (
    <>
      <PageHeader
        title="Franchise & Institutional Association"
        crumb="Franchise"
        description="National Bulls operates as a premier Authorised Person franchise of Progressive Share Brokers Pvt. Ltd."
      />

      <section className="section-padding" style={{ background: '#02040f', color: '#ffffff' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Reveal>
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(29, 72, 189, 0.15) 0%, rgba(2, 4, 15, 0.9) 100%)',
                  border: '1px solid rgba(82, 197, 182, 0.3)',
                  borderRadius: '1.25rem',
                  padding: '2.5rem',
                  marginBottom: '3.5rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <Building2 size={32} color="#00f2fe" />
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
                    Progressive Share Brokers Association
                  </h2>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                  National Bulls Investment Services brings institutional-grade capital market access to retail and HNI investors in Navi Mumbai through its strong franchise association with <strong>Progressive Share Brokers Pvt. Ltd.</strong>
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                  <div>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>SEBI Registration</span>
                    <strong style={{ color: '#00f2fe', fontSize: '0.95rem' }}>INZ000170639</strong>
                  </div>
                  <div>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>CDSL DP Regn</span>
                    <strong style={{ color: '#00f2fe', fontSize: '0.95rem' }}>IN-DP-535-2020</strong>
                  </div>
                  <div>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>BSE AP Reg</span>
                    <strong style={{ color: '#00f2fe', fontSize: '0.95rem' }}>AP0106120150935</strong>
                  </div>
                  <div>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>NSE AP Reg</span>
                    <strong style={{ color: '#00f2fe', fontSize: '0.95rem' }}>AP0297010261</strong>
                  </div>
                </div>
              </div>
            </Reveal>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif', marginBottom: '2rem', textAlign: 'center' }}>
              Why Invest Through Our Franchise Network
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '1rem',
                        padding: '1.75rem',
                        height: '100%',
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '10px',
                          background: 'rgba(0, 242, 254, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <Icon size={24} color="#00f2fe" />
                      </div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
                        {b.title}
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.88rem', lineHeight: '1.65' }}>
                        {b.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" className="solid-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                Contact Our Franchise Office <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
