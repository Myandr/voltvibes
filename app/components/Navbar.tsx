'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Equal, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/liquid-glass-button';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Dienstleistungen', href: '/dienstleistungen' },
  { label: 'Reparaturen', href: '/reparaturen' },
  { label: 'Filialen', href: '/filialen' },
  { label: 'Team', href: '/das-team' },
  { label: 'News', href: '/news-and-events' },
];

function CartIcon({ isLight }: { isLight: boolean }) {
  const { totalQuantity } = useCart();
  return (
    <Link
      href="/shop/warenkorb"
      aria-label="Warenkorb"
      className="relative flex items-center justify-center"
    >
      <ShoppingBag
        size={20}
        className={cn(
          'transition-colors duration-150',
          isLight ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'
        )}
      />
      {totalQuantity > 0 && (
        <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-[#5CC987] text-[#0C1523] text-[10px] font-bold flex items-center justify-center leading-none">
          {totalQuantity > 9 ? '9+' : totalQuantity}
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isLight = isScrolled || pathname !== '/';

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header>
      <nav
        data-state={menuOpen ? 'active' : undefined}
        className="fixed left-0 w-full z-50 px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-white/90 max-w-4xl rounded-2xl border border-gray-200/80 backdrop-blur-md shadow-sm lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-3">

            {/* ── Logo + hamburger row ── */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="VoltVibes Home"
                className="flex items-center"
              >
                <Image
                  src="/images/logo1.png"
                  alt="VoltVibes"
                  height={36}
                  width={140}
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                  priority
                />
              </Link>

              <div className="flex items-center gap-4 lg:hidden">
                <CartIcon isLight={isLight} />
                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                  aria-expanded={menuOpen}
                  className={cn('relative z-20 -m-2.5 -mr-1 cursor-pointer p-2.5', isLight ? 'text-gray-800' : 'text-white')}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {menuOpen ? (
                      <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex">
                        <X size={22} />
                      </motion.span>
                    ) : (
                      <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex">
                        <Equal size={22} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* ── Desktop: centered nav links ── */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn('block duration-150 font-[450] tracking-[0.01em]', isLight ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white')}
                      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Desktop: right side (cart + CTA) ── */}
            <div
              className={cn(
                'mb-6 hidden w-full flex-wrap items-center justify-end space-y-8',
                'rounded-3xl border border-white/10 bg-black p-6 shadow-2xl shadow-black/40',
                'md:flex-nowrap',
                'lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0',
                'lg:rounded-none lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none',
                menuOpen && 'block'
              )}
            >
              {/* Mobile-only nav links */}
              <div className="lg:hidden w-full">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={menuOpen ? { x: -16, opacity: 0 } : false}
                      animate={menuOpen ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.04 + i * 0.055, duration: 0.28 }}
                    >
                      <Link
                        href={link.href}
                        onClick={close}
                        className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-150"
                        style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", fontSize: '1rem', fontWeight: 450 }}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Desktop cart icon */}
              <div className="hidden lg:flex items-center">
                <CartIcon isLight={isLight} />
              </div>

              {/* CTA buttons */}
              <div className="flex w-full flex-col gap-2 sm:flex-row md:w-fit">
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    'rounded-full bg-white text-[#0C1523] hover:bg-white/90 font-medium px-6 text-sm',
                    isLight && 'lg:hidden'
                  )}
                >
                  <Link href="/kontakt" onClick={close}>Kontakt</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    'rounded-full font-medium bg-[#0C1523] text-white hover:bg-[#0C1523]/90 px-6 text-sm',
                    isLight ? 'hidden lg:inline-flex' : 'hidden'
                  )}
                >
                  <Link href="/kontakt" onClick={close}>Kontakt</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}

