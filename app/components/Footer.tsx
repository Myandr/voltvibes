'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
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
        {/* Nav + columns row */}
        <div className="footer-nav-row">
          {/* Nav links */}
          <div className="footer-nav-links">
            {[
              { label: 'Über uns',         href: '/das-team'         },
              { label: 'Dienstleistungen', href: '/dienstleistungen'  },
              { label: 'Reparaturen',      href: '/reparaturen'       },
              { label: 'Das Team',         href: '/das-team'          },
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
              <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                Sortiment
              </span>
              {[
                { label: 'E-Scooter',                  href: '/shop' },
                { label: 'Stunt Scooter',              href: '/shop' },
                { label: 'Elektromobile für Senioren', href: '/shop' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.82rem', color: '#555', textDecoration: 'none', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#888'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555'; }}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Social + Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                Social Media
              </span>
              {[
                { label: 'Instagram', href: 'https://instagram.com/voltvibes_dorsten', external: true  },
                { label: 'Filialen',  href: '/filialen',                               external: false },
                { label: 'Kontakt',   href: '/kontakt',                                external: false },
              ].map(({ label, href, external }) =>
                external ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.82rem', color: '#555', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#888'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555'; }}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.82rem', color: '#555', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#888'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555'; }}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Big headline + watermark */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Image
              src="/images/logo1.png"
              alt="VoltVibes"
              height={28}
              width={110}
              style={{ height: '28px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.5 }}
            />
            <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.78rem', color: '#444' }}>
              ©2026 VoltVibes Dorsten. Alle Rechte vorbehalten.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'AGB',                  href: '/agb'         },
              { label: 'Widerruf',             href: '/widerruf'    },
              { label: 'Datenschutz',          href: '/datenschutz' },
              { label: 'Impressum',            href: '/impressum'   },
              { label: 'Cookie-Einstellungen', href: '/cookies'     },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.78rem', color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
