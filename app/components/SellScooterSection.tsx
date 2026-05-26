'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

function StepCard({
  num, icon, title, desc, delay,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  const { ref, visible } = useFadeIn(delay);
  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: '16px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-geist-sans), sans-serif',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#bbb',
        letterSpacing: '0.05em',
      }}>
        {num}
      </span>
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#f2f2f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#444',
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-geist-sans), sans-serif',
          fontSize: '0.95rem',
          fontWeight: 700,
          color: '#0e0e0e',
          margin: '0 0 0.35rem',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-geist-sans), sans-serif',
          fontSize: '0.82rem',
          color: '#777',
          margin: 0,
          lineHeight: 1.55,
        }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

const steps = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="9" y1="7" x2="15" y2="7"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
        <line x1="9" y1="15" x2="12" y2="15"/>
      </svg>
    ),
    title: 'Scooter-Daten teilen',
    desc: 'Teile uns deinen Scooter und ein paar wichtige Details mit.',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    title: 'Unser Angebot erhalten',
    desc: 'Wir prüfen deinen Scooter und schicken dir ein faires Angebot.',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16V4m0 0L3 8m4-4 4 4"/>
        <path d="M17 8v12m0 0 4-4m-4 4-4-4"/>
      </svg>
    ),
    title: 'Tausch abschließen',
    desc: 'Gib deinen Scooter ab und mach Platz für etwas Neues.',
  },
];

export default function SellScooterSection() {
  const { ref: headRef, visible: headVisible } = useFadeIn(0);
  const { ref: formRef, visible: formVisible } = useFadeIn(200);
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setSent(true);
  }

  return (
    <>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .sell-bg-img {
            object-fit: contain !important;
            object-position: center top !important;
          }
          .sell-fg-img {
            display: none !important;
          }
          .sell-overlay {
            background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%) !important;
          }
        }
        @media (max-width: 640px) {
          .sell-overlay {
            background: linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.25) 20%, rgba(255,255,255,0.02) 60%, rgba(255,255,255,0) 100%) !important;
          }
          .sell-section {
            padding: 5rem 1.25rem 4rem !important;
            min-height: unset !important;
          }
          .sell-heading {
            font-size: clamp(2rem, 10vw, 2.8rem) !important;
          }
          .sell-form-wrapper {
            margin-bottom: 2.5rem !important;
          }
          .sell-form {
            flex-direction: column !important;
            border-radius: 16px !important;
            padding: 1rem !important;
            gap: 0.75rem !important;
            align-items: stretch !important;
          }
          .sell-form input {
            width: 100% !important;
            font-size: 1rem !important;
          }
          .sell-form button {
            width: 100% !important;
            padding: 0.85rem 1rem !important;
            font-size: 0.9rem !important;
            border-radius: 12px !important;
            text-align: center !important;
          }
          .sell-steps {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .sell-section {
            padding: 6rem 1.5rem 4rem !important;
          }
          .sell-steps {
            grid-template-columns: 1fr 1fr !important;
          }
          .sell-steps > *:last-child {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>

      <section
        id="scooter-verkaufen"
        className="sell-section"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7rem 2rem 5rem',
          boxSizing: 'border-box',
          minHeight: '680px',
          background: '#fff',
        }}
      >
        {/* Background image */}
        <Image
          src="/images/scooter-palmen.png"
          alt=""
          fill
          className="sell-bg-img"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          aria-hidden
        />

        {/* Overlay — bleibt immer */}
        <div
          aria-hidden
          className="sell-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 10%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 100%)',
            zIndex: 1,
          }}
        />

        {/* Foreground image */}
        <Image
          src="/images/scooter-palmen-1.png"
          alt=""
          fill
          className="sell-fg-img"
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 2 }}
          aria-hidden
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            maxWidth: '820px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Heading + subtitle */}
          <div
            ref={headRef}
            style={{
              textAlign: 'center',
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.65s ease, transform 0.65s ease',
              marginBottom: '1.8rem',
              width: '100%',
            }}
          >
            <h2
              className="sell-heading"
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                lineHeight: 1.05,
                color: '#0e0e0e',
                margin: '0 0 0.75rem',
                letterSpacing: '0.01em',
              }}
            >
              Du möchtest deinen{' '}
              <em
                style={{
                  fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif',
                  color: '#8BBDE8',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Scooter verkaufen?
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '400px',
                marginInline: 'auto',
              }}
            >
              Teile uns deine Scooter-Details mit und erhalte unkompliziert ein faires Angebot.
            </p>
          </div>

          {/* Phone form */}
          <div
            ref={formRef}
            className="sell-form-wrapper"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3.5rem',
            }}
          >
            {sent ? (
              <div
                style={{
                  background: '#fff',
                  borderRadius: '50px',
                  padding: '0.95rem 2rem',
                  fontFamily: 'var(--font-geist-sans), sans-serif',
                  fontSize: '0.9rem',
                  color: '#0e0e0e',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.09)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8BBDE8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Wir melden uns bald bei dir!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="sell-form"
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  background: '#fff',
                  borderRadius: '50px',
                  padding: '0.4rem 0.4rem 0.4rem 1.2rem',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '460px',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="5" y="2" width="14" height="20" rx="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Deine Telefonnummer"
                  required
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.875rem',
                    color: '#0e0e0e',
                    background: 'transparent',
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#0C1523',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '0.7rem 1.35rem',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#1e3352'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0C1523'; }}
                >
                  Rückruf anfordern
                </button>
              </form>
            )}
          </div>

          {/* Step cards */}
          <div
            className="sell-steps"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              width: '100%',
            }}
          >
            {steps.map((step, i) => (
              <StepCard key={step.num} {...step} delay={300 + i * 120} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
