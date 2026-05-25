'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BlurTextEffect } from './BlurTextEffect';

const features = [
  { id: 'motor',      num: '01', title: 'Schnelle Reparatur',       desc: 'Platte Reifen, Bremsen, Akkus — wir reparieren alle Scooter-Modelle schnell und zuverlässig.', img: '/images/gallery-3.jpg',                              imgPos: 'center center' },
  { id: 'stability',  num: '02', title: 'Große Auswahl',            desc: 'Helme, Schutzausrüstung, Ersatzteile, Zubehör — alles was du brauchst, direkt vor Ort.',        img: '/images/1779538765056-image_generation-google.png',  imgPos: 'center top'    },
  { id: 'visibility', num: '03', title: 'Persönliche Beratung',     desc: 'Unser junges, enthusiastisches Team berät dich kompetent — von Dorsten bis Göttingen.',          img: '/images/gallery-4.jpg',                              imgPos: 'center center' },
];

const defaultFlex: Record<string, number> = { motor: 1.5, stability: 1, visibility: 1, shop: 0.55 };
const hoveredFlex: Record<string, Record<string, number>> = {
  motor:      { motor: 1.5, stability: 1.0, visibility: 1.0, shop: 0.55 },
  stability:  { motor: 1.0, stability: 1.5, visibility: 1.0, shop: 0.55 },
  visibility: { motor: 1.0, stability: 1.0, visibility: 1.5, shop: 0.55 },
};

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

export default function FeaturesSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const getFlex = (id: string) => (!hovered || !hoveredFlex[hovered]) ? defaultFlex[id] : hoveredFlex[hovered][id];

  const cards = useFadeIn(150);

  return (
    <section
      style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', zIndex: 1 }}>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            lineHeight: 1.05,
            color: '#0e0e0e',
            margin: 0,
            letterSpacing: '0.01em',
            maxWidth: '520px',
          }}
        >
          <BlurTextEffect scrollTrigger>Was uns in </BlurTextEffect>
          <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
            <BlurTextEffect scrollTrigger delay={0.16}>Dorsten</BlurTextEffect>
          </em>
          <BlurTextEffect scrollTrigger delay={0.28}> besonders macht</BlurTextEffect>
        </h2>

        {/* Cards row */}
        <div
          ref={cards.ref}
          className="features-row"
          style={{
            opacity: cards.visible ? 1 : 0,
            transform: cards.visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {features.map(({ id, num, title, desc, img, imgPos }) => {
            const isHovered = hovered === id;
            return (
              <div
                key={id}
                className="feature-card"
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flex: getFlex(id), minWidth: 0, background: '#f5f5f5', borderRadius: '16px',
                  padding: '1.75rem', boxSizing: 'border-box', display: 'flex',
                  flexDirection: 'column', justifyContent: 'space-between',
                  overflow: 'hidden', cursor: 'default', position: 'relative',
                  transition: 'flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.8rem', color: '#888', background: '#ebebeb', borderRadius: '999px', padding: '0.3rem 0.75rem', fontWeight: 500 }}>
                    {num}
                  </span>
                  <div style={{
                    width: isHovered ? '120px' : '88px',
                    height: isHovered ? '120px' : '88px',
                    borderRadius: '14px', overflow: 'hidden', flexShrink: 0, position: 'relative',
                    transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}>
                    <Image
                      src={img} alt="" fill
                      style={{
                        objectFit: 'cover', objectPosition: imgPos,
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ height: '1px', background: '#ddd' }} />
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <h3 style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: 'clamp(1rem, 1.6vw, 1.35rem)', fontWeight: 700, color: '#0e0e0e', margin: '0 0 0.4rem 0', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {title}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.8rem', color: '#888', margin: 0, lineHeight: 1.5, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {desc}
                      </p>
                    </div>

                    {/* Round arrow button */}
                    <div style={{
                      flexShrink: 0,
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: '#0e0e0e', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(8px)',
                      transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      cursor: 'pointer',
                      pointerEvents: isHovered ? 'auto' : 'none',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 14L14 4M14 4H7M14 4V11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Shop Now card */}
          <div
            className="feature-shop"
            style={{
              flex: getFlex('shop'), minWidth: 0, background: '#f5f5f5', borderRadius: '16px',
              boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', transition: 'flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden',
            }}
          >
            {[{ top: '1.25rem', left: '1.25rem' }, { top: '1.25rem', right: '1.25rem' }, { bottom: '1.25rem', left: '1.25rem' }, { bottom: '1.25rem', right: '1.25rem' }].map((pos, i) => (
              <div key={i} style={{ position: 'absolute', width: '5px', height: '5px', borderRadius: '50%', background: '#bbb', ...pos }} />
            ))}
            <a href="#inventory" style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.85rem', fontWeight: 500, color: '#333', textDecoration: 'none', background: '#ebebeb', borderRadius: '999px', padding: '0.6rem 1.25rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Shop Now <span style={{ fontSize: '0.9rem' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
