'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BlurTextEffect } from './BlurTextEffect';
import VVButton from './VVButton';

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

const fade = (visible: boolean, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

const stripes = [30, 50, 70].map((pct) => (
  <div key={pct} style={{ position: 'absolute' as const, top: 0, bottom: 0, left: `${pct}%`, width: '1px', background: '#e4e4e4', pointerEvents: 'none' as const, zIndex: 0 }} />
));

export default function RangeSection() {
  const header  = useFadeIn(0);
  const cell1   = useFadeIn(100);
  const cell2   = useFadeIn(200);
  const cell3   = useFadeIn(280);
  const cell4   = useFadeIn(360);

  return (
    <section style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

        {/* Header row */}
        <div className="range-header">
          <p ref={header.ref} style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.9rem', color: '#888', margin: 0, lineHeight: 1.6, maxWidth: '280px', ...fade(header.visible) }}>
            E-Scooter, Stunt Scooter und Elektromobile für Senioren — entdecke unser Sortiment in Dorsten.
          </p>
          <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', lineHeight: 1.05, color: '#0e0e0e', margin: 0, letterSpacing: '0.01em' }}>
            <BlurTextEffect scrollTrigger>Unser </BlurTextEffect>
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
              <BlurTextEffect scrollTrigger delay={0.12}>Sortiment</BlurTextEffect>
            </em>
            <BlurTextEffect scrollTrigger delay={0.24}> im Überblick</BlurTextEffect>
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="range-grid">

          {/* Row 1 Left — image */}
          <div ref={cell1.ref} className="range-cell-img" style={{ position: 'relative', overflow: 'hidden', borderRight: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', ...fade(cell1.visible) }}>
            <Image src="/images/1779538765056-image_generation-google.png" alt="VoltVibes Urban" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>

          {/* Row 1 Right — text */}
          <div ref={cell2.ref} className="range-cell-text" style={{ padding: '2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid #e8e8e8', background: '#fafafa', position: 'relative', overflow: 'hidden', ...fade(cell2.visible) }}>
            {stripes}
            <h3 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', color: '#0e0e0e', margin: 0, letterSpacing: '0.03em', position: 'relative', zIndex: 1 }}>E-SCOOTER</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: 1.6, maxWidth: '320px' }}>
                Neu und gebraucht — wir führen eine große Auswahl zugelassener E-Scooter für die Stadt. Probefahrten möglich.
              </p>
              <VVButton href="#inventory" variant="blue">Jetzt entdecken</VVButton>
            </div>
          </div>

          {/* Row 2 Left — text */}
          <div ref={cell3.ref} className="range-cell-text" style={{ padding: '2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid #e8e8e8', background: '#fafafa', position: 'relative', overflow: 'hidden', ...fade(cell3.visible) }}>
            {stripes}
            <h3 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', color: '#0e0e0e', margin: 0, letterSpacing: '0.03em', position: 'relative', zIndex: 1 }}>STUNT SCOOTER</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: 1.6, maxWidth: '320px' }}>
                Hochwertige Stunt Scooter von Core, Type-R, Panda und weiteren Top-Marken — inklusive Helme und Schutzausrüstung.
              </p>
              <VVButton href="#inventory" variant="blue">Jetzt entdecken</VVButton>
            </div>
          </div>

          {/* Row 2 Right — image */}
          <div ref={cell4.ref} className="range-cell-img" style={{ position: 'relative', overflow: 'hidden', ...fade(cell4.visible) }}>
            <Image src="/images/gallery-3.jpg" alt="VoltVibes Pro" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
