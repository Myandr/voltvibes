'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BlurTextEffect } from './BlurTextEffect';

const posts = [
  { id: 1, tag: 'Ratgeber',     title: 'E-Scooter kaufen in Dorsten — worauf du achten solltest',       img: '/images/1779488754826-image_generation-google.png', imgPos: 'center center', href: '/news-and-events/e-scooter-kaufen-dorsten' },
  { id: 2, tag: 'Reparatur',    title: 'Die häufigsten Scooter-Defekte und wie wir sie beheben',         img: '/images/gallery-2.jpg',                              imgPos: 'center center', href: '/news-and-events/stunt-scooter-kinder'      },
  { id: 3, tag: 'Stunt Scooter',title: 'Stunt Scooter für Einsteiger: Welches Modell passt zu dir?',    img: '/images/gallery-3.jpg',                              imgPos: 'center center', href: '/news-and-events/stunt-scooter-kinder'      },
];

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

export default function BlogSection() {
  const card1 = useFadeIn(100);
  const card2    = useFadeIn(220);
  const card3    = useFadeIn(340);
  const cardRefs = [card1, card2, card3];

  return (
    <section style={{ width: '100%', background: '#fff', padding: '6rem 2rem', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, gap: '3rem' }}>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            lineHeight: 1, color: '#0e0e0e', margin: 0, letterSpacing: '0.01em', textAlign: 'center',
          }}
        >
          <BlurTextEffect scrollTrigger>Aktuelles aus </BlurTextEffect>
          <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
            <BlurTextEffect scrollTrigger delay={0.22}>Dorsten</BlurTextEffect>
          </em>
        </h2>

        {/* Cards */}
        <div className="blog-grid">
          {posts.map(({ id, tag, title, img, imgPos, href }, idx) => {
            const { ref, visible } = cardRefs[idx];
            return (
              <Link
                key={id}
                href={href}
                ref={ref as React.Ref<HTMLAnchorElement>}
                className="blog-card"
                style={{
                  position: 'relative', borderRadius: '18px', overflow: 'hidden', cursor: 'pointer',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.97)',
                  transition: 'opacity 0.65s ease, transform 0.65s ease',
                  textDecoration: 'none', display: 'block',
                }}
              >
                <Image src={img} alt={title} fill style={{ objectFit: 'cover', objectPosition: imgPos, transition: 'transform 0.4s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 45%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.72rem', fontWeight: 500, color: '#111', background: '#fff', borderRadius: '999px', padding: '0.3rem 0.85rem', width: 'fit-content' }}>
                    {tag}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>
                    {title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
