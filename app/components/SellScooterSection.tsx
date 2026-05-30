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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Problem schildern',
    desc: 'Schreib uns kurz, was nicht funktioniert — per Nachricht oder Anruf.',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Diagnose & Angebot',
    desc: 'Wir schauen es uns an und geben dir einen fairen Kostenvoranschlag.',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Reparatur & Abholung',
    desc: 'Nach der Reparatur ist dein Scooter wieder einsatzbereit.',
  },
];

export default function SellScooterSection() {
  const { ref: headRef, visible: headVisible } = useFadeIn(0);
  const { ref: formRef, visible: formVisible } = useFadeIn(200);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const loadTime = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nachricht: message,
          source: 'reparatur',
          _hp: honeypot,
          _t: loadTime.current,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError('Fehler beim Senden. Bitte ruf uns direkt an.');
    } finally {
      setLoading(false);
    }
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
          .sell-form textarea {
            font-size: 1rem !important;
          }
          .sell-form button {
            width: 100% !important;
            padding: 0.85rem 1rem !important;
            font-size: 0.9rem !important;
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
        id="reparatur"
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
              Dein Scooter{' '}
              <em
                style={{
                  fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif',
                  color: '#8BBDE8',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                ist kaputt?
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '420px',
                marginInline: 'auto',
              }}
            >
              Schreib uns dein Problem oder ruf direkt an — wir helfen dir schnell und unkompliziert.
            </p>
          </div>

          {/* Contact area */}
          <div
            ref={formRef}
            className="sell-form-wrapper"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '3.5rem',
            }}
          >
            {sent ? (
              <div
                style={{
                  background: '#fff',
                  borderRadius: '16px',
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
                Nachricht erhalten — wir melden uns bei dir!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="sell-form"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '1rem',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                  width: '100%',
                  maxWidth: '460px',
                }}
              >
                {/* Honeypot — für Bots sichtbar, für Menschen unsichtbar */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Beschreibe dein Problem kurz…"
                  required
                  rows={4}
                  style={{
                    border: '1px solid #e8e8e8',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.875rem',
                    color: '#0e0e0e',
                    background: '#fafafa',
                    resize: 'none',
                    outline: 'none',
                    lineHeight: 1.5,
                  }}
                />
                {error && (
                  <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.78rem', color: '#e53e3e', margin: 0 }}>
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: '#0C1523',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0.75rem 1.35rem',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: loading ? 'default' : 'pointer',
                    letterSpacing: '0.02em',
                    transition: 'background 0.2s ease',
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = '#1e3352'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0C1523'; }}
                >
                  {loading ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </form>
            )}

            <a
              href="tel:+4923629747100"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: '#0e0e0e',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(6px)',
                borderRadius: '50px',
                padding: '0.6rem 1.2rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.85)'; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Jetzt anrufen
            </a>
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
