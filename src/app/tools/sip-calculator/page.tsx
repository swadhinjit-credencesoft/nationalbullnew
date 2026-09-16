'use client';

import { useState, useMemo } from 'react';
import PageHeader from '@/components/sections/page-header';
import { Reveal } from '@/components/motion';
import { Calculator, TrendingUp, DollarSign, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SipCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedRate, setExpectedRate] = useState(12);
  const [years, setYears] = useState(10);

  const { totalInvested, estimatedReturns, totalWealth } = useMemo(() => {
    const monthlyRate = expectedRate / 12 / 100;
    const months = years * 12;
    const invested = monthlyInvestment * months;
    
    // Formula: P * [ ((1 + i)^n - 1) / i ] * (1 + i)
    let wealth = 0;
    if (monthlyRate > 0) {
      wealth = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    } else {
      wealth = invested;
    }

    const returns = wealth - invested;

    return {
      totalInvested: Math.round(invested),
      estimatedReturns: Math.round(returns),
      totalWealth: Math.round(wealth),
    };
  }, [monthlyInvestment, expectedRate, years]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <>
      <PageHeader
        title="SIP Wealth Calculator"
        crumb="SIP Calculator"
        description="Estimate the future value of your monthly Systematic Investment Plans over time."
      />

      <section className="section-padding" style={{ background: '#02040f', color: '#ffffff' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
              {/* Inputs */}
              <Reveal>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '1.25rem',
                    padding: '2.25rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Calculator size={22} color="#00f2fe" /> Investment Inputs
                  </h3>

                  {/* Monthly Investment Slider */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Monthly Investment</span>
                      <strong style={{ color: '#00f2fe', fontSize: '1.1rem', fontFamily: 'Outfit, sans-serif' }}>{formatCurrency(monthlyInvestment)}</strong>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={200000}
                      step={500}
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#00f2fe' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                      <span>₹500</span>
                      <span>₹2,00,000</span>
                    </div>
                  </div>

                  {/* Expected Rate Slider */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Expected Return Rate (p.a.)</span>
                      <strong style={{ color: '#00f2fe', fontSize: '1.1rem', fontFamily: 'Outfit, sans-serif' }}>{expectedRate}%</strong>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={0.5}
                      value={expectedRate}
                      onChange={(e) => setExpectedRate(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#00f2fe' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* Time Horizon Slider */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Time Period (Years)</span>
                      <strong style={{ color: '#00f2fe', fontSize: '1.1rem', fontFamily: 'Outfit, sans-serif' }}>{years} Years</strong>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={40}
                      step={1}
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#00f2fe' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                      <span>1 Yr</span>
                      <span>40 Yrs</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Output Summary */}
              <Reveal delay={0.15}>
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(29, 72, 189, 0.25) 0%, rgba(2, 4, 15, 0.95) 100%)',
                    border: '1.5px solid rgba(0, 242, 254, 0.35)',
                    borderRadius: '1.25rem',
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <TrendingUp size={22} color="#00f2fe" /> Wealth Projection
                    </h3>

                    <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2rem' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem 1.25rem', borderRadius: '0.75rem' }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>Invested Amount</span>
                        <span style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>{formatCurrency(totalInvested)}</span>
                      </div>

                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem 1.25rem', borderRadius: '0.75rem' }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>Est. Returns</span>
                        <span style={{ color: '#52c5b6', fontSize: '1.35rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>{formatCurrency(estimatedReturns)}</span>
                      </div>

                      <div style={{ background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.3)', padding: '1.25rem', borderRadius: '0.75rem' }}>
                        <span style={{ color: '#00f2fe', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem', fontWeight: 800 }}>Total Maturity Value</span>
                        <span style={{ color: '#ffffff', fontSize: '1.85rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif' }}>{formatCurrency(totalWealth)}</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="solid-button" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    Start Your SIP With National Bulls <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
