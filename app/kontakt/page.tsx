'use client';

import { useState } from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const contactInfo = [
  {
    label: 'Telefon',
    value: '+49 2362 9747100',
    href: 'tel:+4923629747100',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+49 151 2202936',
    href: 'https://wa.me/4915122029036',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.514 5.818L0 24l6.335-1.482A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/>
      </svg>
    ),
  },
  {
    label: 'E-Mail',
    value: 'info@voltvibes-dorsten.de',
    href: 'mailto:info@voltvibes-dorsten.de',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Adresse',
    value: 'Lippestraße 34, 46282 Dorsten',
    href: 'https://maps.google.com/?q=Lippestra%C3%9Fe+34,+46282+Dorsten',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function KontaktPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSent(true);
  }

  return (
    <main className="flex flex-col flex-1">
      <PageHero
        eyebrow="Wir freuen uns von dir zu hören"
        title="Kontakt"
        titleAccent="aufnehmen"
        subtitle="Besuche uns in der Lippestraße 34, ruf an oder schreib uns — wir antworten schnell."
      />

      <section style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                    color: '#0e0e0e',
                    margin: '0 0 0.5rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  Erreich uns{' '}
                  <em style={{ fontFamily: 'Georgia, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400 }}>
                    direkt
                  </em>
                </h2>
                <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: '#888', margin: 0, lineHeight: 1.65 }}>
                  Mo–Fr 12–18 Uhr · Sa 10:30–14 Uhr
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {contactInfo.map(({ label, value, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      background: '#f5f5f5',
                      borderRadius: '12px',
                      padding: '1.1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      textDecoration: 'none',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#ebebeb'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#f5f5f5'; }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#0C1523',
                        color: '#8BBDE8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#aaa', display: 'block' }}>
                        {label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#0e0e0e' }}>
                        {value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div
                style={{
                  background: '#0C1523',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.07em', textTransform: 'uppercase', margin: 0 }}>
                  Öffnungszeiten
                </h3>
                {[
                  { days: 'Mo – Fr', time: '12:00 – 18:00 Uhr' },
                  { days: 'Samstag', time: '10:30 – 14:00 Uhr' },
                  { days: 'Sonntag', time: 'Geschlossen' },
                ].map(({ days, time }) => (
                  <div key={days} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>{days}</span>
                    <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                    color: '#0e0e0e',
                    margin: '0 0 0.5rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  Schreib uns eine{' '}
                  <em style={{ fontFamily: 'Georgia, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400 }}>
                    Nachricht
                  </em>
                </h2>
                <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: '#888', margin: 0 }}>
                  Wir melden uns schnellstmöglich bei dir.
                </p>
              </div>

              {sent ? (
                <div
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '16px',
                    padding: '3rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: '#0C1523',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8BBDE8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#0e0e0e', margin: 0 }}>
                    Nachricht gesendet!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.875rem', color: '#888', margin: 0 }}>
                    Wir melden uns bald bei dir.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label
                      htmlFor="name"
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#555',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Dein Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Max Mustermann"
                      required
                      style={{
                        background: '#f5f5f5',
                        border: '1.5px solid transparent',
                        borderRadius: '10px',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.9rem',
                        color: '#0e0e0e',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#8BBDE8'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label
                      htmlFor="message"
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#555',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Deine Nachricht
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ich brauche Hilfe mit meinem E-Scooter..."
                      required
                      rows={5}
                      style={{
                        background: '#f5f5f5',
                        border: '1.5px solid transparent',
                        borderRadius: '10px',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.9rem',
                        color: '#0e0e0e',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#8BBDE8'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#0C1523',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '0.9rem 2rem',
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#1e3352'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0C1523'; }}
                  >
                    Nachricht senden →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
