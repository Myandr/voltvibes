'use client';

import Image from 'next/image';
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
    color: '#8BBDE8',
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
      background: '#0C1523',
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

      {/* ── TEXT BLOCK — centered in section ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '64px',
      }}>
        <div style={{ lineHeight: 0.88 }}>
          <div>
            <span style={textStyle}><BlurTextEffect delay={0.0}>VoltVibes </BlurTextEffect></span>
            <em style={italicStyle}><BlurTextEffect delay={0.15}>Dorsten</BlurTextEffect></em>
          </div>
          <div>
            <span style={textStyle}><BlurTextEffect delay={0.28}>Dein Scooter</BlurTextEffect></span>
          </div>

          <div style={{ height: 'clamp(4rem, 20vh, 12rem)' }} />

          <div>
            <span style={textStyle}><BlurTextEffect delay={0.44}>vom </BlurTextEffect></span>
            <em style={italicStyle}><BlurTextEffect delay={0.56}>besten Laden</BlurTextEffect></em>
          </div>
          <div>
            <span style={textStyle}><BlurTextEffect delay={0.72}>in Dorsten</BlurTextEffect></span>
          </div>
        </div>
      </div>

      {/* CTA Button — above scooter image */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(2rem, 4vw, 4rem)',
        left: 0, right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 20,
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.6s ease 1s',
      }}>
        <VVButton href="#services" variant="light">Jetzt entdecken</VVButton>
      </div>

      {/* Location — middle left */}
      <div style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 'clamp(1.5rem, 4vw, 3rem)',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '0.45rem',
        opacity: mounted ? 0.68 : 0,
        transition: 'opacity 0.9s ease 0.9s',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span style={{
          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
          fontSize: '0.76rem',
          color: '#fff',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
        }}>
          Dorsten, NRW
        </span>
      </div>

      {/* Hours — middle right */}
      <div style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: 'clamp(1.5rem, 4vw, 3rem)',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '0.45rem',
        opacity: mounted ? 0.68 : 0,
        transition: 'opacity 0.9s ease 0.9s',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span style={{
          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
          fontSize: '0.76rem',
          color: '#fff',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
        }}>
          Mo. – Sa. geöffnet
        </span>
      </div>

    </section>
  );
}
