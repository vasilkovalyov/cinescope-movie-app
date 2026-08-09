'use client';

import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { HeaderNavigation } from './header-navigation';

export function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        aria-label={`${isOpen ? 'Open' : 'Close'} menu`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-[24px]" /> : <Menu className="size-[24px]" />}
      </Button>
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="bg-navigation-mobile-bg py-[16px] px-[24px] absolute top-full inset-x-0"
        >
          <HeaderNavigation />
        </nav>
      )}
    </>
  );
}
