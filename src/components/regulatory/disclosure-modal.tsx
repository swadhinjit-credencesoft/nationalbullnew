'use client';

import { useEffect } from 'react';
import { X, ShieldAlert, FileText, CheckCircle2, AlertTriangle, Scale, Building } from 'lucide-react';
import { regulatoryDisclosure, amfiMFDDetails, authorisedPersonEquity } from '@/data/regulatory';

interface DisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegulatoryDisclosureModal({ isOpen, onClose }: DisclosureModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="regulatory-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 1.5rem)',
        background: 'rgba(10, 25, 42, 0.82)',
        backdropFilter: 'blur(6px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          maxWidth: '860px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(20, 41, 92, 0.12)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            background: 'var(--navy)',
            color: 'white',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '4px solid var(--orange)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div
              style={{
                background: 'rgba(229, 36, 46, 0.2)',
                color: 'var(--yellow)',
                padding: '.5rem',
                borderRadius: 8,
              }}
            >
              <Scale size={24} />
            </div>
            <div>
              <h2 id="regulatory-title" style={{ margin: 0, fontSize: '1.25rem', color: 'white' }}>
                {regulatoryDisclosure.title}
              </h2>
              <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.7)' }}>
                Authorised Person &amp; Statutory Regulatory Disclosures
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'rgba(255,255,255,.12)',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              transition: 'background .2s',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div
          style={{
            padding: 'clamp(1.25rem, 4vw, 2rem)',
            overflowY: 'auto',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            fontSize: '.9rem',
            color: '#334155',
            lineHeight: 1.65,
          }}
        >
          {/* Authorised Person Disclosure */}
          <div
            style={{
              background: '#f8fafc',
              borderLeft: '4px solid var(--orange)',
              padding: '1.2rem 1.5rem',
              borderRadius: '0 8px 8px 0',
            }}
          >
            <h3 style={{ color: 'var(--navy)', fontSize: '1.05rem', margin: '0 0 .5rem', fontWeight: 800 }}>
              {authorisedPersonEquity.title}
            </h3>
            <p style={{ margin: 0, fontSize: '.88rem' }}>
              {regulatoryDisclosure.authorisedPersonStatement}
            </p>
          </div>

          {/* Important Investor Information */}
          <div>
            <h4
              style={{
                color: 'var(--navy)',
                fontSize: '1rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                marginBottom: '.85rem',
              }}
            >
              <AlertTriangle size={18} style={{ color: 'var(--orange)' }} />
              Important Investor Information
            </h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {regulatoryDisclosure.importantInfo.map((info, idx) => (
                <li key={idx} style={{ fontSize: '.86rem' }}>
                  {info}
                </li>
              ))}
            </ul>
          </div>

          {/* Authorised Person Relationship */}
          <div>
            <h4 style={{ color: 'var(--navy)', fontSize: '1rem', fontWeight: 800, marginBottom: '.5rem' }}>
              Authorised Person Relationship &amp; Fund Safety
            </h4>
            <p style={{ fontSize: '.86rem', margin: 0 }}>
              {regulatoryDisclosure.authorisedPersonRelationship}
            </p>
          </div>

          {/* Investor Safety Precautions */}
          <div
            style={{
              background: '#fff9f0',
              border: '1px solid #fed7aa',
              borderRadius: 12,
              padding: '1.4rem',
            }}
          >
            <h4
              style={{
                color: '#9a3412',
                fontSize: '.98rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                margin: '0 0 .8rem',
              }}
            >
              <ShieldAlert size={18} />
              Investor Safety Precautions (NSE &amp; SEBI Guidance)
            </h4>
            <ul
              style={{
                padding: 0,
                listStyle: 'none',
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '.6rem .9rem',
              }}
            >
              {regulatoryDisclosure.investorSafety.map((precaution, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '.5rem',
                    fontSize: '.82rem',
                    color: '#7c2d12',
                  }}
                >
                  <CheckCircle2 size={15} style={{ color: '#ea580c', flexShrink: 0, marginTop: 2 }} />
                  <span>{precaution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Grievance Redressal & Investor Charter */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#f1f5f9', borderRadius: 10, padding: '1.2rem' }}>
              <h5 style={{ color: 'var(--navy)', fontSize: '.9rem', fontWeight: 800, margin: '0 0 .4rem' }}>
                Grievance Redressal
              </h5>
              <p style={{ fontSize: '.8rem', margin: 0, color: '#475569' }}>
                {regulatoryDisclosure.grievanceRedressal}
              </p>
            </div>

            <div style={{ background: '#f1f5f9', borderRadius: 10, padding: '1.2rem' }}>
              <h5 style={{ color: 'var(--navy)', fontSize: '.9rem', fontWeight: 800, margin: '0 0 .4rem' }}>
                Investor Charter for Stock Brokers
              </h5>
              <p style={{ fontSize: '.8rem', margin: 0, color: '#475569' }}>
                {regulatoryDisclosure.investorCharter}
              </p>
            </div>
          </div>

          {/* AMFI MFD Disclosure */}
          <div
            style={{
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: 10,
              padding: '1.2rem',
            }}
          >
            <h5 style={{ color: '#166534', fontSize: '.9rem', fontWeight: 800, margin: '0 0 .35rem' }}>
              {amfiMFDDetails.title} (ARN-{amfiMFDDetails.arn})
            </h5>
            <p style={{ fontSize: '.8rem', margin: '0 0 .4rem', color: '#15803d' }}>
              {amfiMFDDetails.description}
            </p>
            <em style={{ fontSize: '.76rem', color: '#166534', display: 'block', fontWeight: 700 }}>
              {amfiMFDDetails.disclaimer}
            </em>
          </div>

          {/* Regulatory Registration Table */}
          <div>
            <h4 style={{ color: 'var(--navy)', fontSize: '.98rem', fontWeight: 800, marginBottom: '.75rem' }}>
              Official Regulatory Registration Details
            </h4>
            <div
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: 10,
                overflowX: 'auto',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
                <tbody>
                  {regulatoryDisclosure.regulatoryDetails.map((detail, idx) => (
                    <tr
                      key={idx}
                      style={{
                        background: idx % 2 === 0 ? '#f8fafc' : 'white',
                        borderBottom: idx < regulatoryDisclosure.regulatoryDetails.length - 1 ? '1px solid #e2e8f0' : 'none',
                      }}
                    >
                      <td style={{ padding: '.65rem 1rem', fontWeight: 700, color: 'var(--navy)', width: '40%' }}>
                        {detail.label}
                      </td>
                      <td style={{ padding: '.65rem 1rem', color: '#334155' }}>
                        {detail.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'var(--navy)',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              padding: '.6rem 1.6rem',
              fontWeight: 700,
              fontSize: '.82rem',
              cursor: 'pointer',
            }}
          >
            Close Disclosure
          </button>
        </div>
      </div>
    </div>
  );
}
