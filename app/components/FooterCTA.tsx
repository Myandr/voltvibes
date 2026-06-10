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

export default function FooterCTA() {
  const headline = useFadeIn(0);
  const para     = useFadeIn(180);
  const bottom   = useFadeIn(320);

  return (
    <section style={{ width: '100%', background: '#0a0a0a', position: 'relative', overflow: 'hidden', minHeight: '620px', display: 'flex', flexDirection: 'column' }}>

      {/* Background image — right side */}
      <div className="footer-cta-bg">
        <Image src="/images/gallery-1.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.1) 100%)' }} />
      </div>

      {/* Bottom dark fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)', zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4rem 3rem', boxSizing: 'border-box', maxWidth: '1280px', width: '100%', margin: '0 auto', minHeight: '620px' }}>

        {/* Headline */}
        <h2
          ref={headline.ref}
          style={{
            fontFamily: 'var(--font-geist-sans), sans-serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            fontWeight: 300, lineHeight: 1.15, color: '#fff', margin: 0, maxWidth: '520px', letterSpacing: '-0.01em',
            opacity: headline.visible ? 1 : 0,
            transform: headline.visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          Besuche uns in der{' '}
          <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', color: '#5CC987', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>Essener Str. 24,</em>{' '}
          Dorsten
        </h2>

        {/* Paragraph */}
        <p
          ref={para.ref}
          style={{
            fontFamily: 'var(--font-geist-sans), sans-serif',
            fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0, maxWidth: '420px',
            opacity: para.visible ? 1 : 0,
            transform: para.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          Mo–Fr 12–18 Uhr · Sa 10:30–14 Uhr. Wir verkaufen, reparieren und beraten rund um E-Scooter, Stunt Scooter und Elektromobile für Senioren — mitten in der Dorstener Innenstadt.
        </p>

        {/* Bottom row */}
        <div
          ref={bottom.ref}
          className="footer-cta-bottom"
          style={{
            opacity: bottom.visible ? 1 : 0,
            transform: bottom.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/logo1.png"
              alt="VoltVibes"
              height={52}
              width={200}
              style={{ height: '52px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <a href="tel:+4923629747100" style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>+49 2362 9747100</a>
            <a href="mailto:info@voltvibes-dorsten.de" style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>info@voltvibes-dorsten.de</a>
            <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>Dorsten — Deutschland</span>
          </div>
        </div>
      </div>
    </section>
  );
}
