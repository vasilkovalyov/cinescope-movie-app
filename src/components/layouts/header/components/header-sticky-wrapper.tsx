'use client';

import { useEffect, useState } from 'react';

export function HeaderStickyWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      data-scrolled={scrolled}
      className="data-[scrolled=true]:fixed data-[scrolled=true]:bg-dark/[0.85] data-[scrolled=false]:absolute -inset-x-0 top-0 py-[16px] z-10"
    >
      {children}
    </div>
  );
}
