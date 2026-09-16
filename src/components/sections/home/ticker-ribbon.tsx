'use client';

import { KineticScrollTicker } from '@/components/motion';

const tickerItemsRow1 = [
  'Equities & Derivatives',
  'Mutual Funds Distributor',
  '20+ Years Trusted in Kharghar',
  'IIT Bombay Alumni Led',
  'Comprehensive Wealth Solutions',
  'SEBI & AMFI Registered',
];

const tickerItemsRow2 = [
  'NSE • BSE • MCX • NCDEX • CDSL',
  'Franchise of Progressive Share Brokers',
  'Dedicated Dealing & Advisory Support',
  'IPOs & Primary Market Access',
  'Relationship-Driven Brokerage',
];

export default function TickerRibbonSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #02040f 0%, #050d24 50%, #08112c 100%)',
        padding: '2.5rem 0',
        borderTop: '1px solid rgba(0, 242, 254, 0.2)',
        borderBottom: '1px solid rgba(37, 99, 235, 0.25)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Background glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          width: '350px',
          height: '150px',
          background: 'radial-gradient(ellipse, rgba(0, 242, 254, 0.25) 0%, transparent 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          transform: 'translate(50%, -50%)',
          width: '350px',
          height: '150px',
          background: 'radial-gradient(ellipse, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
        {/* Row 1 - Neon Cyan Glow, Left to Right */}
        <div style={{ color: '#ffffff' }}>
          <KineticScrollTicker items={tickerItemsRow1} speed={32} />
        </div>

        {/* Row 2 - Electric Royal Blue & Cyan, Right to Left */}
        <div style={{ color: '#38bdf8', opacity: 0.9 }}>
          <KineticScrollTicker items={tickerItemsRow2} speed={36} reverse={true} />
        </div>
      </div>
    </section>
  );
}
