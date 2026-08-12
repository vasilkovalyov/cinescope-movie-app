'use client';

import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { HeaderNavigation } from './header-navigation';

const MOBILE_NAV_ID = 'mobile-navigation';

export function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
        aria-expanded={isOpen}
        aria-controls={MOBILE_NAV_ID}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-[24px]" />
        ) : (
          <Menu aria-hidden="true" className="size-[24px]" />
        )}
      </Button>
      {isOpen && (
        <nav
          id={MOBILE_NAV_ID}
          aria-label="Mobile navigation"
          className="bg-navigation-mobile-bg py-[16px] px-[24px] absolute top-full inset-x-0"
        >
          <HeaderNavigation />
        </nav>
      )}
    </>
  );
}
