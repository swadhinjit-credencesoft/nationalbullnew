'use client';

import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  crumb: string;
  description?: string;
  image?: string;
}

// Shared hero/page-header used by the inner pages (services, about, team, contact).
export default function PageHeader({ title, crumb, description, image }: PageHeaderProps) {
  return (
    <section className="hero page-header" style={{ minHeight: 'auto', padding: '140px 0 50px' }}>
      {image && <img src={image} alt="" className="hero-image" />}
      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <p
          className="body-copy"
          style={{ color: 'rgba(255,255,255,.6)', fontSize: '.78rem', marginBottom: '.6rem' }}
        >
          <Link href="/" style={{ color: 'rgba(255,255,255,.8)', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ margin: '0 .4rem' }}>&gt;</span>
          <span style={{ color: 'var(--orange)' }}>{crumb}</span>
        </p>
        <h1 className="section-title" style={{ color: 'white' }}>
          {title}
        </h1>
        {description && (
          <p className="body-copy" style={{ color: 'rgba(255,255,255,.85)', marginTop: '.75rem', maxWidth: 640 }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
