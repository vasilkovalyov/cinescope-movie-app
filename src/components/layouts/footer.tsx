import Link from 'next/link';

import { Logo } from '../ui/logo';

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
        <div className="grid gap-[20px] md:gap-[40px] justify-between md:grid-cols-[278px_40%]">
          <div>
            <div className="mb-[16px]">
              <Logo size="small" />
            </div>
            <p>Discover, track, and explore the world of cinema. Powered by The Movie Database.</p>
          </div>
          <div className="grid gap-[20px] md:gap-[40px] md:grid-cols-2">
            {FOOTER_COLUMNS.map(({ id, title, navigation }) => (
              <FooterCol key={id} title={title} navigation={navigation} id={id} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
