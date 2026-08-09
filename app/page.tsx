import { getSingleTrendingMovie } from '@/api/get-single-trending-movie';

import { SectionHomeHero } from '@/components/sections';

import { trendingMovieAdapter } from '@/utils/adapters';

export default async function Home() {
  const data = await getSingleTrendingMovie({
    includes: ['credits', 'images', 'keywords', 'videos'],
  });

  return (
    <>
      <SectionHomeHero {...trendingMovieAdapter(data)} />
    </>
  );
}
