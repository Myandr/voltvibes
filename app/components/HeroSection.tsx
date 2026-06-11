'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BlurTextEffect } from './BlurTextEffect';
import VVButton from './VVButton';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const textStyle = {
    fontFamily: 'var(--font-bebas), sans-serif',
    fontSize: 'clamp(3rem, 7vw, 8.5rem)',
    letterSpacing: '0.02em',
    color: '#fff',
  } as const;

  const italicStyle = {
    fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif',
    fontSize: 'clamp(2.7rem, 6.6vw, 8rem)',
    color: '#5CC987',
    fontStyle: 'italic',
    fontWeight: 400,
    letterSpacing: '0.01em',
  } as const;

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100dvh',
      minHeight: '640px',
      background: '#ffffff',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Background image */}
      <Image
        src="/images/hb.png"
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        priority
        aria-hidden
      />

      {/* Scooter overlay — above all text, below button */}
      <Image
        src="/images/scooter-hero.png"
        alt="Electric Scooter"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 15 }}
        priority
      />

      {/* Stamp keyframes */}
      <style>{`
        @keyframes stampIn {
          0%   { opacity: 0; transform: rotate(-12deg) scale(1.7); }
          60%  { opacity: 1; transform: rotate(-12deg) scale(0.9); }
          80%  { transform: rotate(-12deg) scale(1.06); }
          100% { opacity: 1; transform: rotate(-12deg) scale(1); }
        }
        .vv-stamp {
          transform: rotate(-12deg) scale(1);
          transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
        }
        .vv-stamp:hover {
          transform: rotate(348deg) scale(1.12) !important;
          box-shadow: 0 10px 44px rgba(92,201,135,0.8) !important;
        }
      `}</style>

      {/* ── TEXT BLOCK — centered in section ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '64px',
      }}>
        <div style={{ lineHeight: 0.88, transform: 'translateY(-5%)' }}>
          <div>
            <span style={textStyle}><BlurTextEffect delay={0.0}>VoltVibes </BlurTextEffect></span>
            <em style={italicStyle}><BlurTextEffect delay={0.15}>Dorsten</BlurTextEffect></em>
          </div>
          <div>
            <span style={textStyle}><BlurTextEffect delay={0.28}>Dein Scooter</BlurTextEffect></span>
          </div>

          <div style={{ height: 'clamp(4rem, 15vh, 12rem)' }} />

          <div>
            <span style={textStyle}><BlurTextEffect delay={0.44}>vom </BlurTextEffect></span>
            <em style={italicStyle}><BlurTextEffect delay={0.56}>besten Laden</BlurTextEffect></em>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(10px, 1.4vw, 20px)' }}>
            <span style={textStyle}><BlurTextEffect delay={0.72}>in Dorsten</BlurTextEffect></span>
            <Link
              href="/filialen"
              className="vv-stamp"
              aria-label="Neu eröffnet in Göttingen – zur Filialseite"
              style={{
                position: 'relative',
                zIndex: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: 'clamp(96px, 10.5vw, 128px)',
                height: 'clamp(96px, 10.5vw, 128px)',
                borderRadius: '50%',
                background: '#5CC987',
                border: '2.5px dashed rgba(12,21,35,0.5)',
                outline: '3px solid rgba(12,21,35,0.15)',
                outlineOffset: '5px',
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: '0 4px 22px rgba(92,201,135,0.4)',
                animation: mounted ? 'stampIn 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.3s both' : 'none',
                opacity: mounted ? undefined : 0,
                gap: '2px',
              }}
            >
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1rem, 1.6vw, 1.55rem)', color: '#0C1523', letterSpacing: '0.04em', lineHeight: 1 }}>JETZT</span>
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(0.88rem, 1.3vw, 1.3rem)', color: '#0C1523', letterSpacing: '0.04em', lineHeight: 1 }}>NEU IN</span>
              <div style={{ width: '58%', height: '1.5px', background: 'rgba(12,21,35,0.4)', borderRadius: '1px', margin: '2px 0' }} />
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(0.9rem, 1.4vw, 1.35rem)', color: '#0C1523', letterSpacing: '0.03em', lineHeight: 1 }}>GÖTTINGEN</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Buttons — above scooter image */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(2rem, 4vw, 4rem)',
        left: 0, right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.75rem',
        zIndex: 20,
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.6s ease 1s',
      }}>
        <VVButton href="#services" variant="light">Jetzt entdecken</VVButton>

        {/* Instagram button */}
        <a
          href="https://instagram.com/voltvibes_dorsten"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.25s ease, background 0.25s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#0C1523" strokeWidth="1.8"/>
            <circle cx="12" cy="12" r="4.5" stroke="#0C1523" strokeWidth="1.8"/>
            <circle cx="17.5" cy="6.5" r="1.1" fill="#0C1523"/>
          </svg>
        </a>

        {/* TikTok button */}
        <a
          href="https://tiktok.com/@voltvibes_dorsten"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.25s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#0C1523" aria-hidden>
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
          </svg>
        </a>
      </div>

      {/* Location — middle left (desktop only) */}
      <div className="hidden md:flex" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 'clamp(1.5rem, 4vw, 3rem)', zIndex: 20, alignItems: 'center', gap: '0.45rem', opacity: mounted ? 0.68 : 0, transition: 'opacity 0.9s ease 0.9s' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", fontSize: '0.76rem', color: '#fff', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
          Dorsten, NRW
        </span>
      </div>

      {/* Hours — middle right (desktop only) */}
      <div className="hidden md:flex" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 'clamp(1.5rem, 4vw, 3rem)', zIndex: 20, alignItems: 'center', gap: '0.45rem', opacity: mounted ? 0.68 : 0, transition: 'opacity 0.9s ease 0.9s' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", fontSize: '0.76rem', color: '#fff', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
          Mo. – Sa. geöffnet
        </span>
      </div>

    </section>
  );
}
