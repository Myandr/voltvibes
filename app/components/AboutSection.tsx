'use client';

import { useEffect, useRef, useState } from 'react';

const green = '#5CC987';

// Word-level scroll reveal
const words = [
  { text: 'VoltVibes', green: true },
  { text: 'Dorsten' },
  { text: 'ist' },
  { text: 'dein' },
  { text: 'Fachgeschäft', green: true },
  { text: 'in' },
  { text: 'der' },
  { text: 'Innenstadt' },
  { text: 'für' },
  { text: 'E-Scooter,' },
  { text: 'Stunt' },
  { text: 'Scooter' },
  { text: 'und' },
  { text: 'Reparaturen.' },
  { text: 'Wir' },
  { text: 'bringen' },
  { text: 'deinen' },
  { text: 'Roller', green: true },
  { text: 'schnell' },
  { text: 'und' },
  { text: 'zuverlässig' },
  { text: 'wieder' },
  { text: 'in' },
  { text: 'Fahrt.' },
];

// Stats config: target numeric value + display format
const stats = [
  { label: 'Zufriedene Kunden',   target: 98,  decimals: 0, suffix: '%'  },
  { label: 'Reparaturen pro Jahr', target: 500, decimals: 0, suffix: '+'  },
  { label: 'Standorte',           target: 2,   decimals: 0, suffix: ''   },
];

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      // start revealing when top hits 80% of viewport, finish at 20%
      const start = winH * 0.85;
      const end   = winH * 0.1;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { ref, progress };
}

function useCountUp(target: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    const raf = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (t < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, decimals]);

  return value;
}

function StatCard({ label, target, decimals, suffix, i }: {
  label: string; target: number; decimals: number; suffix: string; i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const value = useCountUp(target, decimals, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stat-card-${i}`}
      style={{
        padding: '2rem 2rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '2rem',
      }}
    >
      <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '0.8rem', color: '#999', letterSpacing: '0.01em' }}>
        {label}
      </span>
      <div
        className="stat-number"
        style={{
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
          lineHeight: 1,
          letterSpacing: '0.01em',
          background: 'linear-gradient(to right, #111111 0%, #5CC987 30%, #5CC987 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}{suffix}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, progress } = useScrollReveal();
  const revealAt = (i: number) => progress >= i / words.length;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
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
          gap: '4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Paragraph with word-by-word reveal */}
        <p
          style={{
            fontFamily: 'var(--font-geist-sans), sans-serif',
            fontSize: 'clamp(1.75rem, 3.2vw, 3rem)',
            lineHeight: '1.25',
            margin: 0,
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          {words.map((w, i) => (
            <span
              key={i}
              style={{
                color: revealAt(i) ? (w.green ? green : '#111') : '#ddd',
                transition: 'color 0.35s ease',
                marginRight: '0.28em',
                display: 'inline-block',
              }}
            >
              {w.text}
            </span>
          ))}
        </p>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
