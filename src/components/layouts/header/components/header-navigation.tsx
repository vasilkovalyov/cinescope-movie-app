'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { UrlObject } from 'url';

import { PAGES } from '@/constants';

import { HEADER_NAVIGATION } from '../header.constant';

function isActive(pathname: string, href: UrlObject) {
  return href.pathname === PAGES.home ? true : pathname.startsWith(href.pathname ?? '');
}

export function HeaderNavigation() {
  const pagePathname = usePathname();

  return (
    <ul className="flex flex-col gap-[4px] md:flex-row">
      {HEADER_NAVIGATION.map(({ name, href }) => {
        const isActiveLink = isActive(pagePathname, href);

        return (
          <li key={name}>
            <Link
              href={href}
              className={clsx(
                'block px-[16px] py-[12px]  rounded-[8px]  text-base md:text-sm md:px-[16px] md:py-[8px]',
                {
                  'text-primary bg-primary/10 hover:text-primary bg-primary/10 hover:text-primary bg-primary/10':
                    isActiveLink,
                  'text-secondary-dark-text hover:text-light hover:bg-accent-bg-1': !isActiveLink,
                },
              )}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
