'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BlurTextEffect } from './BlurTextEffect';

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return { ref, visible };
}

function FadeCard({ children, delay, style, className }: { children: React.ReactNode; delay: number; style?: React.CSSProperties; className?: string }) {
  const { ref, visible } = useFadeIn(delay);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </div>
  );
}

export default function ServicesSection() {
  const { ref: headerRef, visible: headerVisible } = useFadeIn(0);

  return (
    <section
      style={{
        width: '100%',
        background: '#fff',
        padding: '6rem 2rem',
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
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1,
              color: '#0e0e0e',
              margin: 0,
              letterSpacing: '0.01em',
            }}
          >
            <BlurTextEffect scrollTrigger>Mehr als ein </BlurTextEffect>
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
              <BlurTextEffect scrollTrigger delay={0.18}>Scooter Shop</BlurTextEffect>
            </em>
          </h2>
          <p
            ref={headerRef}
            style={{
              fontFamily: 'var(--font-geist-sans), sans-serif',
              fontSize: '0.95rem',
              color: '#888',
              lineHeight: '1.6',
              margin: 0,
              maxWidth: '420px',
              marginInline: 'auto',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
            }}
          >
            Von der Reifenreparatur über Stunt Scooter bis zum Elektromobil — alles aus einer Hand in Dorsten.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Large card */}
          <FadeCard
            delay={100}
            className="bento-large"
            style={{
              gridRow: '1 / 3',
              gridColumn: '1 / 2',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              background: '#111',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2rem',
              boxSizing: 'border-box',
            }}
          >
            <Image src="/images/gallery-3.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 55%)', zIndex: 1 }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem' }}>
                Professionelle Reparatur
              </h3>
              <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.5 }}>
                Platte Reifen, Bremsen, Akkus — unser Team bringt deinen Scooter schnell und zuverlässig wieder in Fahrt.
              </p>
            </div>
          </FadeCard>

          {/* Small cards */}
          {[
            { title: 'Stunt Scooter',            row: '1', col: '2', img: '/images/1779538765056-image_generation-google.png', pos: 'center top', delay: 200 },
            { title: 'Ersatzteile & Zubehör',   row: '1', col: '3', img: '/images/gallery-1.jpg',  pos: 'center center', delay: 300 },
            { title: 'E-Scooter Verkauf',        row: '2', col: '2', img: '/images/gallery-2.jpg',  pos: 'center center', delay: 350 },
            { title: 'Seniorenmobilität',         row: '2', col: '3', img: '/images/gallery-4.jpg',  pos: 'center top',    delay: 450 },
          ].map(({ title, row, col, img, pos, delay }) => (
            <FadeCard
              key={title}
              delay={delay}
              className="bento-small"
              style={{
                gridRow: row,
                gridColumn: col,
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                background: '#111',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.5rem',
                boxSizing: 'border-box',
              }}
            >
              <Image src={img} alt="" fill style={{ objectFit: 'cover', objectPosition: pos }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.02) 55%)', zIndex: 1 }} />
              {/* Arrow button — top-right corner */}
              <div style={{
                position: 'absolute', top: '1rem', right: '1rem', zIndex: 3,
                width: '36px', height: '36px', borderRadius: '50%',
                background: '#0e0e0e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ position: 'relative', zIndex: 2, fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                {title}
              </h3>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  );
}
