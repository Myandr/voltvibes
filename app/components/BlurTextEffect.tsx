'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
  scrollTrigger?: boolean;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({
  children,
  className = '',
  delay = 0,
  scrollTrigger = false,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLSpanElement>('span.char');
    gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });

    const animate = () => {
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.035,
        delay,
        clearProps: 'filter',
      });
    };

    if (!scrollTrigger) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [children, delay, scrollTrigger]);

  const words = children.split(' ');

  return (
    <span className={`inline-block ${className}`} ref={containerRef}>
      {words.map((word, wi) => (
        <React.Fragment key={wi}>
          <span className="inline-block" style={{ whiteSpace: 'nowrap' }}>
            {word.split('').map((char, ci) => (
              <span key={ci} className="char inline-block" style={{ whiteSpace: 'pre' }}>
                {char}
              </span>
            ))}
          </span>
          {wi < words.length - 1 && (
            <span className="char inline-block" style={{ whiteSpace: 'pre' }}>{' '}</span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};
