'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight, ExternalLink, Phone, MapPin, LogIn } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { loginLinks, serviceLinks } from '@/data/nav';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top glowing scroll progress line */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #1d48bd 0%, #52c5b6 50%, #2855d4 100%)',
          zIndex: 9999,
          boxShadow: '0 0 12px rgba(82, 197, 182, 0.8), 0 0 4px rgba(29, 72, 189, 0.6)',
        }}
      />

      <div className="top-strip">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
              <span className="top-strip-address">
                <MapPin size={11} /> Office No 9, 1st Floor, Bhoomi Tower, Opp ITM, Sector 4, Kharghar - 410 210
              </span>
              <span className="top-strip-divider">|</span>
              <span className="top-strip-phones">
                Have any questions?
                <a href="tel:7303340500">7303340500</a> /
                <a href="tel:9324344454">9324344454</a> /
                <a href="tel:9322324252">9322324252</a> /
                <a href="tel:9324058401">9324058401</a>
              </span>
              <span className="top-strip-divider">|</span>
              <span className="top-strip-franchise">A franchise of</span>
            </div>
          ))}
        </div>
      </div>

      <nav className="main-nav">
        <Link href="/" className="brand">
          <img src="/logo.png" alt="National Bulls Investment Services" />
        </Link>

        <div className="desktop-nav">
          <Link href="/" className="nav-link">
            HOME
          </Link>
          <Link href="/about" className="nav-link">
            ABOUT US
          </Link>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="menu-button">
              OUR SERVICES <ChevronDown size={12} />
            </button>
            {dropdownOpen && (
              <div className="dropdown-panel">
                {serviceLinks.map((s) => (
                  <Link key={s.label} href={s.href}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/team" className="nav-link">
            OUR TEAM
          </Link>
          <a
            href="https://progressiveshares.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            RESEARCH
          </a>
          <a
            href="https://progressiveshares.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            DOWNLOADS
          </a>
          <Link href="/testimonials" className="nav-link">
            TESTIMONIALS
          </Link>
          <Link href="/contact" className="nav-link">
            CONTACT US
          </Link>
        </div>

        <div className="nav-actions">
          <div className="login-wrap" style={{ position: 'relative' }}>
            <button
              className="login-button"
              onClick={() => setLoginOpen(!loginOpen)}
              aria-expanded={loginOpen}
              aria-haspopup="true"
            >
              <LogIn size={13} /> ALL LOGIN <ChevronDown size={12} />
            </button>
            {loginOpen && (
              <div className="login-panel">
                {loginLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setLoginOpen(false)}
                  >
                    {l.label}
                    {l.href.startsWith('http') && <ExternalLink size={11} />}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-panel open">
          <Link href="/" className="nav-link" onClick={() => setMobileOpen(false)}>
            HOME
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setMobileOpen(false)}>
            ABOUT US
          </Link>
          <Link href="/services" className="nav-link" onClick={() => setMobileOpen(false)}>
            OUR SERVICES
          </Link>
          {serviceLinks.map((s) => (
            <Link key={s.label} href={s.href} className="nav-link" onClick={() => setMobileOpen(false)} style={{ paddingLeft: '1rem' }}>
              {s.label}
            </Link>
          ))}
          <Link href="/team" className="nav-link" onClick={() => setMobileOpen(false)}>
            OUR TEAM
          </Link>
          <a
            href="https://progressiveshares.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            RESEARCH
          </a>
          <a
            href="https://progressiveshares.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            DOWNLOADS
          </a>
          <Link href="/testimonials" className="nav-link" onClick={() => setMobileOpen(false)}>
            TESTIMONIALS
          </Link>
          <Link href="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>
            CONTACT US
          </Link>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: '.8rem', marginTop: '.4rem', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            <span className="nav-link" style={{ color: 'var(--yellow)', paddingBottom: 0 }}>ALL LOGIN</span>
            {loginLinks.map((l) => (
              <a
                key={l.label}
                className="nav-link"
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}
              >
                <LogIn size={11} /> {l.label}
                {l.href.startsWith('http') && <ExternalLink size={11} />}
              </a>
            ))}
            <a
              className="nav-link"
              href="tel:7303340500"
              onClick={() => setMobileOpen(false)}
              style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}
            >
              <Phone size={11} /> 7303340500
            </a>
          </div>
        </div>
      )}
    </>
  );
}
