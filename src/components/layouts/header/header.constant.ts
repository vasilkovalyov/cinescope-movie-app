import { PAGES } from '@/constants';

import { NavigationLink } from './header.type';

export const HEADER_NAVIGATION: NavigationLink[] = [
  {
    name: 'Movies',
    href: { pathname: PAGES.movies },
  },
  {
    name: 'TV Shows',
    href: { pathname: PAGES.tvShows },
  },
  {
    name: 'People',
    href: { pathname: PAGES.people },
  },
  {
    name: 'Search',
    href: { pathname: PAGES.search },
  },
];
