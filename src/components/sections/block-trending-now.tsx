import { GenresDictionary, getTrendingList } from '@/api';

import { PAGES } from '@/constants';

import { listMoviesPreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from './section-list-preview';

interface BlockTrendingNowProps {
  genres: GenresDictionary;
}

export async function BlockTrendingNow({ genres }: BlockTrendingNowProps) {
  const trendingListMovies = await getTrendingList(genres);

  return (
    <SectionListPreview
      title="Trending Now"
      subtitle="What everyone is watching"
      link={PAGES.discover}
      type="movie"
      items={listMoviesPreviewAdapter(trendingListMovies.results)}
    />
  );
}
