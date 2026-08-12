import { GenresDictionary, getTopRatedList } from '@/api';

import { TOP_RATE_COUNT } from '@/constants/common.constant';

import { topRatedMoviesAdapter } from '@/utils/adapters';

import { SectionTopRatedMovies } from '../sections';

interface BlockTopRatedBannerProps {
  genres: GenresDictionary;
}

export async function BlockTopRatedBanner({ genres }: BlockTopRatedBannerProps) {
  const topRatedMovies = await getTopRatedList(genres, {
    topSize: TOP_RATE_COUNT,
  });

  return <SectionTopRatedMovies movies={topRatedMoviesAdapter(topRatedMovies.results)} />;
}
