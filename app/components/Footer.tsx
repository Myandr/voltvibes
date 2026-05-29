'use client';

import Link from 'next/link';
import { useState } from 'react';

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#111', borderRadius: '20px 20px 0 0', width: '100%', maxWidth: '680px',
          maxHeight: '80vh', overflowY: 'auto', padding: '2rem',
          fontFamily: 'var(--font-geist-sans), sans-serif',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{title}</h2>
          <button
            onClick={onClose}
            style={{ background: '#222', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            ×
          </button>
        </div>
        <div style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.7 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

const datenschutzContent = (
  <>
    <p><strong style={{ color: '#fff' }}>Verantwortlicher:</strong> VoltVibes Dorsten, Lippestraße 34, 46282 Dorsten<br/>E-Mail: info@voltvibes-dorsten.de · Tel.: 02362 9747100</p>
    <p><strong style={{ color: '#fff' }}>Erhebung von Daten:</strong> Beim Besuch unserer Website werden automatisch Daten erhoben (IP-Adresse, Browser, Betriebssystem, Referrer). Diese Daten werden ausschließlich zur Sicherstellung des Betriebs verwendet.</p>
    <p><strong style={{ color: '#fff' }}>Kontaktformular:</strong> Daten, die du über das Kontaktformular übermittelst, werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht an Dritte weitergegeben.</p>
    <p><strong style={{ color: '#fff' }}>Newsletter:</strong> Mit der Eingabe deiner E-Mail-Adresse erklärst du dich einverstanden, gelegentlich E-Mails von VoltVibes Dorsten zu erhalten. Du kannst dich jederzeit abmelden.</p>
    <p><strong style={{ color: '#fff' }}>Cookies:</strong> Unsere Website verwendet technisch notwendige Cookies. Eine Einwilligung ist nicht erforderlich.</p>
    <p><strong style={{ color: '#fff' }}>Deine Rechte:</strong> Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung. Wende dich dazu an info@voltvibes-dorsten.de.</p>
  </>
);

const impressumContent = (
  <>
    <p><strong style={{ color: '#fff' }}>Angaben gemäß § 5 TMG</strong></p>
    <p>VoltVibes Dorsten<br/>Inhaber: Markus Kremer<br/>Lippestraße 34<br/>46282 Dorsten</p>
    <p><strong style={{ color: '#fff' }}>Kontakt:</strong><br/>Telefon: 02362 9747100<br/>E-Mail: info@voltvibes-dorsten.de</p>
    <p><strong style={{ color: '#fff' }}>Haftungsausschluss:</strong> Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr.</p>
    <p><strong style={{ color: '#fff' }}>Urheberrecht:</strong> Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.</p>
  </>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [modal, setModal] = useState<'datenschutz' | 'impressum' | null>(null);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  return (
    <>
      {modal === 'datenschutz' && (
        <Modal title="Datenschutzerklärung" onClose={() => setModal(null)}>
          {datenschutzContent}
        </Modal>
      )}
      {modal === 'impressum' && (
        <Modal title="Impressum" onClose={() => setModal(null)}>
          {impressumContent}
        </Modal>
      )}

      <footer
        style={{
          width: '100%',
          background: '#080808',
          padding: '3.5rem clamp(1rem, 5vw, 3rem) 2.5rem',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          {/* Email input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #333',
              paddingBottom: '1rem',
              maxWidth: '420px',
            }}
          >
            {subscribed ? (
              <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.95rem', color: '#8BBDE8' }}>
                ✓ Danke! Du bist jetzt dabei.
              </span>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '0.5rem' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.com"
                  required
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '1.1rem',
                    color: '#fff',
                    letterSpacing: '0.01em',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#2a2a2a',
                    border: 'none',
                    borderRadius: '6px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#3a3a3a'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#2a2a2a'; }}
                >
                  <span style={{ color: '#fff', fontSize: '1rem', lineHeight: 1 }}>→</span>
                </button>
              </form>
            )}
          </div>

          {/* Nav + columns row */}
          <div className="footer-nav-row">
            {/* Nav links */}
            <div className="footer-nav-links">
              {[
                { label: 'Über uns',          href: '/das-team'       },
                { label: 'Dienstleistungen',  href: '/dienstleistungen' },
                { label: 'Reparaturen',        href: '/reparaturen'    },
                { label: 'Das Team',           href: '/das-team'       },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.9rem',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right columns */}
            <div className="footer-columns">
              {/* Sortiment */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.85rem',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  Sortiment
                </span>
                {[
                  { label: 'E-Scooter',                    href: '/shop' },
                  { label: 'Stunt Scooter',                href: '/shop' },
                  { label: 'Elektromobile für Senioren',   href: '/shop' },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    style={{
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontSize: '0.82rem',
                      color: '#555',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#888'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555'; }}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Social + Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.85rem',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  Social Media
                </span>
                {[
                  { label: 'Instagram', href: 'https://instagram.com/voltvibes_dorsten', external: true },
                  { label: 'Filialen',  href: '/filialen',  external: false },
                  { label: 'Kontakt',   href: '/kontakt',   external: false },
                ].map(({ label, href, external }) => (
                  external ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.82rem',
                        color: '#555',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#888'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555'; }}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      key={label}
                      href={href}
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontSize: '0.82rem',
                        color: '#555',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#888'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555'; }}
                    >
                      {label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Big headline + watermark area */}
          <div style={{ position: 'relative' }}>
            <h2
              style={{
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 300,
                color: '#fff',
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                maxWidth: '560px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Bleib verbunden mit VoltVibes
            </h2>

            {/* Watermark text */}
            <div
              style={{
                position: 'absolute',
                right: '-2rem',
                bottom: '-1.5rem',
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(6rem, 18vw, 16rem)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.04)',
                letterSpacing: '0.05em',
                userSelect: 'none',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              VOLTVIBES
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom-bar">
            <span
              style={{
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontSize: '0.78rem',
                color: '#444',
              }}
            >
              ©2026 VoltVibes Dorsten. Alle Rechte vorbehalten.
            </span>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {(['Datenschutz', 'Impressum'] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setModal(item === 'Datenschutz' ? 'datenschutz' : 'impressum')}
                  style={{
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.78rem',
                    color: '#fff',
                    background: 'none',
                    border: 'none',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
