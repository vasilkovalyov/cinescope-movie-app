import { getPopularMovieDetails, getTopTrendingMovies } from '@/api';

import { SectionHomeHero, SectionTopTrandingMovies } from '@/components/sections';

import { popularMovieAdapter, topTrendingMoviesAdapter } from '@/utils/adapters';

export default async function Home() {
  const popularMovie = await getPopularMovieDetails({
    includes: ['credits', 'videos'],
  });

  const topTrendingMovies = await getTopTrendingMovies({
    topSize: 5,
  });

  return (
    <>
      <SectionHomeHero {...popularMovieAdapter(popularMovie)} />
      <SectionTopTrandingMovies items={topTrendingMoviesAdapter(topTrendingMovies)} />
    </>
  );
}
