'use client';

import { BlurTextEffect } from './BlurTextEffect';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  titleAfter?: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, titleAccent, titleAfter, subtitle }: PageHeroProps) {
  return (
    <section
      style={{
        width: '100%',
        background: '#0C1523',
        padding: 'clamp(7rem, 14vw, 10rem) 2rem clamp(4rem, 8vw, 6rem)',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(139,189,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,189,232,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        {eyebrow && (
          <span
            style={{
              fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </span>
        )}

        <h1
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: '#fff',
            margin: 0,
          }}
        >
          <BlurTextEffect delay={0}>{title}</BlurTextEffect>
          {titleAccent && (
            <>
              {' '}
              <em
                style={{
                  fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif',
                  fontSize: 'clamp(2.8rem, 6.6vw, 6.1rem)',
                  color: '#8BBDE8',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}
              >
                <BlurTextEffect delay={0.18}>{titleAccent}</BlurTextEffect>
              </em>
            </>
          )}
          {titleAfter && (
            <><>{' '}</><BlurTextEffect delay={0.32}>{titleAfter}</BlurTextEffect></>
          )}
        </h1>

        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-geist-sans), sans-serif',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '480px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
