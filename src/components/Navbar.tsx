'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Next.js 13+ app router
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 170);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="sticky top-4 z-50 flex w-full justify-center">
      <div
        className={`flex items-center gap-6 rounded-full px-8 py-3 transition-all duration-200 ease-in-out
                    ${scrolled ? 'bg-white/80 shadow-lg backdrop-blur-md' : 'bg-transparent shadow-none'}
                  `}
      >
        <Link
          href="/"
          className={`font-semibold px-4 py-1 rounded-full transition text-brandgreen font-title
    ${pathname === '/' ? 'bg-neutral-100 shadow-inner' : 'bg-transparent  hover:text-neutral-900'}`}
        >
          Work{' '}
          <span className="text-xs bg-white px-2 py-1 rounded ml-2 border border-neutral-200 text-neutral-500">
            /
          </span>
        </Link>

        <Link
          href="/about"
          className={`font-semibold px-4 py-1 rounded-full transition  text-brandgreen font-title
          ${pathname === '/about' ? 'bg-neutral-100 shadow-inner text-neutral-700' : 'bg-transparent text-neutral-600 hover:text-neutral-900'}`}
        >
          About
        </Link>

        <Link
          href="/play"
          className={`font-semibold px-4 py-1 rounded-full transition text-brandgreen font-title
          ${pathname === '/play' ? 'bg-neutral-100 shadow-inner text-neutral-700' : 'bg-transparent text-neutral-600 hover:text-neutral-900'}`}
        >
          Play
        </Link>

        <Link
          href="/notes"
          className={`font-semibold px-4 py-1 rounded-full transition text-brandgreen font-title
          ${pathname === '/notes' ? 'bg-neutral-100 shadow-inner text-neutral-700' : 'bg-transparent text-neutral-600 hover:text-neutral-900'}`}
        >
          Notes
        </Link>

        <Link
          href="/contact"
          className={`font-semibold px-4 py-1 rounded-full transition text-brandgreen font-title
          ${pathname === '/contact' ? 'bg-neutral-100 shadow-inner text-neutral-700' : 'bg-transparent text-neutral-600 hover:text-neutral-900'}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
