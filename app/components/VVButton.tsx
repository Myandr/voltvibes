'use client';

import { ArrowUpRight } from 'lucide-react';

interface VVButtonProps {
  href: string;
  children: React.ReactNode;
  /** 'light' = white bg + dark icon  |  'dark' = dark bg + white icon  |  'blue' = brand blue bg + dark icon */
  variant?: 'light' | 'dark' | 'blue';
  className?: string;
  target?: string;
  rel?: string;
}

export default function VVButton({ href, children, variant = 'light', className = '', target, rel }: VVButtonProps) {
  const bg    = variant === 'light' ? '#fff'     : variant === 'blue' ? '#5CC987' : '#0e0e0e';
  const text  = variant === 'light' ? '#0C1523'  : '#fff';
  const iconBg= variant === 'light' ? '#0C1523'  : variant === 'blue' ? '#fff' : '#fff';
  const iconFg= variant === 'dark' ? '#0C1523' : variant === 'blue' ? '#0C1523' : '#fff';

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group relative inline-flex items-center rounded-full h-12 p-1 ps-6 pe-14 overflow-hidden cursor-pointer w-fit transition-[padding] duration-500 hover:ps-14 hover:pe-6 no-underline ${className}`}
      style={{
        background:    bg,
        color:         text,
        fontFamily:    "'DM Sans', 'Helvetica Neue', sans-serif",
        fontSize:      '0.875rem',
        fontWeight:     500,
        letterSpacing: '0.04em',
        whiteSpace:    'nowrap',
        textDecoration: 'none',
      }}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45"
        style={{ background: iconBg, color: iconFg }}
      >
        <ArrowUpRight size={16} />
      </div>
    </a>
  );
}
