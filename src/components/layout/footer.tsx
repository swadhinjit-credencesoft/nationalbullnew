import Link from 'next/link';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <>
      <section className="footer-cta">
        <div className="container-wide">
          <div className="cta-content">
            <h2>Ready to Start Your <span>Investment Journey</span>?</h2>
            <Link href="/contact" className="solid-button">
              Contact Us
            </Link>
          </div>

          <div style={{ display: 'grid', gap: '2.5rem', marginTop: '3.5rem', position: 'relative', zIndex: 1 }} className="footer-instances" data-footer-grid>
            <div>
              <Link href="/" className="brand" style={{ color: 'white', textDecoration: 'none', display: 'inline-flex', gap: '.55rem', alignItems: 'center', marginBottom: '1rem' }}>
                <img src="/logo.png" alt="National Bulls Investment Services" style={{ height: 40, width: 'auto' }} />
              </Link>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.82rem', lineHeight: '1.65', marginTop: '.75rem' }}>
                AMFI Registered Mutual Funds Distributor.
              </p>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.82rem', lineHeight: '1.65', marginTop: '.25rem' }}>
                AMFI Registration No – {site.amfiReg}
              </p>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.82rem', lineHeight: '1.65', marginTop: '.25rem' }}>
                BSE AP Reg No – {site.bseReg}
              </p>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.82rem', lineHeight: '1.65', marginTop: '.25rem' }}>
                NSE AP Reg No – {site.nseReg}
              </p>
              <div style={{ display: 'flex', gap: '.75rem', marginTop: '1.25rem' }}>
                <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'rgba(255,255,255,.6)', fontSize: '.75rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href={site.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: 'rgba(255,255,255,.6)', fontSize: '.75rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'rgba(255,255,255,.6)', fontSize: '.75rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '.82rem', fontWeight: 800, letterSpacing: '.06em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>Visit Us</h4>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: '.82rem', lineHeight: '1.65', marginBottom: '1.2rem' }}>
                {site.name}, {site.addressShort}, Navi Mumbai, Maharashtra, INDIA
              </div>
              <iframe
                src="https://maps.google.com/maps?q=national%20bulls&t=m&z=10&output=embed&iwloc=near"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              <h4 style={{ color: 'white', fontSize: '.82rem', fontWeight: 800, letterSpacing: '.06em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>Contact Us</h4>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: '.82rem', lineHeight: '1.65', display: 'grid', gap: '1rem' }}>
                <div>
                  <strong style={{ color: 'rgba(255,255,255,.85)', fontSize: '.7rem', fontWeight: 800, letterSpacing: '.05em', display: 'block', marginBottom: '.2rem' }}>Have Any Questions?</strong>
                  {site.phones.join(' / ')}
                </div>
                <div>
                  <strong style={{ color: 'rgba(255,255,255,.85)', fontSize: '.7rem', fontWeight: 800, letterSpacing: '.05em', display: 'block', marginBottom: '.2rem' }}>Mail Us</strong>
                  {site.email}
                </div>
              </div>
            </div>
          </div>

          <div className="site-footer">
            <span>{site.name}</span>
            <span>Copyright &copy; 2022 {site.name}. All Rights Reserved.</span>
            <div className="footer-links" style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.45)' }}>
              <span>Progressive Share Brokers Pvt. Ltd: Member of NSE / BSE / MCX-sx / MCX – SEBI Regn. No : INZ000170639, CDSL – SEBI Regn. No : IN-DP-535-2020.</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,.45)', fontSize: '.6rem', marginTop: '1rem', position: 'relative', zIndex: 1 }}>
            Made with ❤ by CredenceSoft
          </div>
        </div>
      </section>
    </>
  );
}
