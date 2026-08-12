import { getPopularMovieDetails } from '@/api';

import { popularMovieHomeHeroAdapter } from '@/utils/adapters';

import { SectionHeroLarge } from '../sections';

export async function BlockHomeHero() {
  const popularMovie = await getPopularMovieDetails({ includes: ['credits', 'videos'] });

  return <SectionHeroLarge {...popularMovieHomeHeroAdapter(popularMovie)} />;
}
