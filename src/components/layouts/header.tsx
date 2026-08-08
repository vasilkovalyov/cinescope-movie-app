import Link from 'next/link';

import { Logo } from '../ui/logo';

interface HeaderNavigationProps {
  name: string;
  href: string;
}

const HEADER_NAVIGATION: HeaderNavigationProps[] = [
  {
    name: 'Movies',
    href: '/movies',
  },
  {
    name: 'TV Shows',
    href: '/tv-shows',
  },
  {
    name: 'People',
    href: '/people',
  },
  {
    name: 'Search',
    href: '/search',
  },
];

export function Header() {
  return (
    <header className="py-[14px]">
      <div className="container">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="ml-[20px] hidden md:block">
            <ul className="flex gap-[4px]">
              {HEADER_NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-[16px] py-[8px] rounded-[8px] hover:text-light hover:bg-accent-bg-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
