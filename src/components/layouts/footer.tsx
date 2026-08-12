import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '../common';
import { Separator } from '../ui';

interface FooterColNavigationProps {
  name: string;
  href: string;
}

interface FooterColProps {
  id: string;
  title: string;
  navigation: FooterColNavigationProps[];
}

const FOOTER_COLUMNS: FooterColProps[] = [
  {
    id: '1',
    title: 'Browse',
    navigation: [
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
    ],
  },
  {
    id: '2',
    title: 'Discover',
    navigation: [
      {
        name: 'Top Rated',
        href: '/top-rated',
      },
      {
        name: 'Trending',
        href: '/trending',
      },
      {
        name: 'Upcoming',
        href: '/upcoming',
      },
      {
        name: 'Now Playing',
        href: '/now-playing',
      },
    ],
  },
];

function FooterCol({ title, navigation }: FooterColProps) {
  return (
    <div className="grid gap-[16px]">
      <h4 className="font-base">{title}</h4>
      <ul className="grid gap-[10px]">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-primary-dark-text hover:text-primary">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-[20px] md:py-[64px]">
      <div className="container">
        <div className="grid gap-[40px]">
          <Separator />
          <div className="grid gap-[20px] md:gap-[40px] justify-between md:grid-cols-[278px_40%]">
            <div>
              <div className="mb-[16px]">
                <Logo size="small" />
              </div>
              <p>
                Discover, track, and explore the world of cinema. Powered by The Movie Database.
              </p>
            </div>
            <div className="grid gap-[20px] grid-cols-2 md:gap-[40px]">
              {FOOTER_COLUMNS.map(({ id, title, navigation }) => (
                <FooterCol key={id} title={title} navigation={navigation} id={id} />
              ))}
            </div>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row items-center justify-between gap-[16px]">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} CineScope. This product uses the TMDB API but is not
              endorsed or certified by TMDB.
            </p>
            <Image src="/images/tmbd.svg" alt="The Movie Database (TMDB) logo" width={92} height={12} />
          </div>
        </div>
      </div>
    </footer>
  );
}
