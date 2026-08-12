import { getPopularTVSeriesList } from '@/api';

import { PAGES } from '@/constants';

import { listTVSeriesPreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from './section-list-preview';

export async function BlockPopularTVShows() {
  const popularTVSeries = await getPopularTVSeriesList();

  return (
    <SectionListPreview
      title="Popular TV Shows"
      subtitle="The most-watched series right now"
      link={PAGES.tvShows}
      type="movie"
      items={listTVSeriesPreviewAdapter(popularTVSeries)}
    />
  );
}
