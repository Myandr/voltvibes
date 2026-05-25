'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Angebote', href: '#inventory' },
  { label: 'Service', href: '#services' },
  { label: 'Modelle', href: '#models' },
  { label: 'Über uns', href: '#about' },
  { label: 'Blog', href: '#blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease',
          background: scrolled ? 'rgba(255, 255, 255, 0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: nav links (desktop only) */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link"
                  data-scrolled={scrolled ? 'true' : 'false'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile: hamburger button */}
          <button
            className="hamburger-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
            style={{ color: scrolled ? '#111' : '#fff' }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Center: Logo */}
          <a href="/" className="logo-link">
            <SlashIcon color={scrolled ? '#111' : '#fff'} />
            <span
              style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                fontWeight: 600,
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
                color: scrolled ? '#111' : '#fff',
                transition: 'color 0.35s ease',
              }}
            >
              VoltVibes
            </span>
          </a>

          {/* Right: CTAs (desktop) + single CTA (mobile) */}
          <div className="nav-cta-group">
            <style>{`
              .nav-btn {
                font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
                font-size: 0.8rem;
                font-weight: 500;
                letter-spacing: 0.04em;
                text-decoration: none;
                padding: 0.45rem 1.1rem;
                border-radius: 999px;
                white-space: nowrap;
                display: inline-flex;
                align-items: center;
                color: #0C1523;
                background: #fff;
                transition: background 0.3s ease, transform 0.3s ease;
              }
              .nav-btn:hover {
                background: rgba(255,255,255,0.88);
                transform: translateY(-2px);
              }
              .nav-btn-outline {
                background: transparent;
                color: #fff;
                border: 1px solid rgba(255,255,255,0.35);
              }
              .nav-btn-outline:hover {
                background: rgba(255,255,255,0.1);
                transform: translateY(-2px);
              }

              /* Desktop nav links */
              .nav-links-desktop {
                display: flex;
                align-items: center;
                gap: 2rem;
                list-style: none;
                margin: 0;
                padding: 0;
              }
              .nav-link {
                font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
                font-size: 0.875rem;
                font-weight: 450;
                text-decoration: none;
                letter-spacing: 0.01em;
                transition: color 0.35s ease;
              }
              .nav-link[data-scrolled="false"] { color: #fff; }
              .nav-link[data-scrolled="true"] { color: #333; }
              .nav-link:hover { opacity: 0.7; }

              /* Logo */
              .logo-link {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                text-decoration: none;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
              }

              /* CTA group */
              .nav-cta-group {
                display: flex;
                align-items: center;
                gap: 0.75rem;
              }
              .nav-btn-login-mobile { display: none; }

              /* Hamburger */
              .hamburger-btn {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.25rem;
                align-items: center;
                justify-content: center;
                transition: color 0.35s ease;
              }

              @media (max-width: 768px) {
                .nav-links-desktop { display: none; }
                .hamburger-btn { display: flex; }
                .nav-btn-login { display: none; }
                .nav-btn-login-mobile { display: inline-flex; }
              }
            `}</style>
            <a href="#login" className="nav-btn nav-btn-login">Händler-Login</a>
            <a href="#contact" className="nav-btn">Termin vereinbaren</a>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 55,
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 60,
                width: 'min(320px, 85vw)',
                background: '#0C1523',
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflowY: 'auto',
              }}
            >
              {/* Drawer header */}
              <div
                style={{
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 1.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <a href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  <SlashIcon color="#fff" />
                  <span style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: '1.05rem', color: '#fff' }}>
                    VoltVibes
                  </span>
                </a>
                <button
                  onClick={closeMenu}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '0.25rem', display: 'flex' }}
                  aria-label="Schließen"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav style={{ padding: '1.5rem 0', flex: 1 }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        style={{
                          display: 'block',
                          padding: '0.85rem 1.5rem',
                          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                          fontSize: '1rem',
                          fontWeight: 450,
                          color: 'rgba(255,255,255,0.82)',
                          textDecoration: 'none',
                          letterSpacing: '0.01em',
                          transition: 'color 0.2s ease, background 0.2s ease',
                          borderRadius: '0 999px 999px 0',
                          marginRight: '1rem',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = '#fff';
                          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.82)';
                          (e.currentTarget as HTMLElement).style.background = 'transparent';
                        }}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Drawer footer CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                style={{
                  padding: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <a
                  href="#contact"
                  onClick={closeMenu}
                  style={{
                    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '999px',
                    textAlign: 'center',
                    color: '#0C1523',
                    background: '#fff',
                    transition: 'background 0.2s ease',
                  }}
                >
                  Termin vereinbaren
                </a>
                <a
                  href="#login"
                  onClick={closeMenu}
                  style={{
                    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '999px',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  Händler-Login
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SlashIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="4" height="16" rx="1.5" fill={color} transform="skewX(-8)" />
      <rect x="10" y="3" width="4" height="16" rx="1.5" fill={color} transform="skewX(-8)" />
    </svg>
  );
}
