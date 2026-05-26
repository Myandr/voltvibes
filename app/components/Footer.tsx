'use client';

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#080808',
        padding: '3.5rem 3rem 2.5rem',
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
          <input
            type="email"
            placeholder="deine@email.com"
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
            }}
          >
            <span style={{ color: '#fff', fontSize: '1rem', lineHeight: 1 }}>→</span>
          </button>
        </div>

        {/* Nav + columns row */}
        <div className="footer-nav-row">
          {/* Nav links */}
          <div className="footer-nav-links">
            {[
              { label: 'Über uns', href: '/das-team' },
              { label: 'Dienstleistungen', href: '/dienstleistungen' },
              { label: 'Reparaturen', href: '/reparaturen' },
              { label: 'Das Team', href: '/das-team' },
            ].map(({ label, href }) => (
              <a
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
              </a>
            ))}
          </div>

          {/* Right columns */}
          <div className="footer-columns">
            {/* Our solutions */}
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
                { label: 'E-Scooter', href: 'https://voltvibes-dorsten.com/shop/E-Scooter-c186896506/' },
                { label: 'Stunt Scooter', href: 'https://voltvibes-dorsten.com/shop/Stunt-Scooter-c190512799/' },
                { label: 'Elektromobile für Senioren', href: 'https://voltvibes-dorsten.com/shop/Elektromobil-fur-Senioren-c187103761/' },
              ].map(({ label, href }) => (
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
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Follow Us */}
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
                { label: 'Instagram', href: 'https://instagram.com/voltvibes_dorsten' },
                { label: 'Filialen', href: '/filialen' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-geist-sans), sans-serif',
                    fontSize: '0.82rem',
                    color: '#555',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </a>
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
            {['Datenschutz', 'Impressum'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-geist-sans), sans-serif',
                  fontSize: '0.78rem',
                  color: '#fff',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
