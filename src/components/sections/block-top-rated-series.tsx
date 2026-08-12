import { getTopRatedTVSeriesList } from '@/api';

import { PAGES } from '@/constants';

import { listTVSeriesPreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from './section-list-preview';

export async function BlockTopRatedSeries() {
  const topRatedTVSeries = await getTopRatedTVSeriesList();

  return (
    <SectionListPreview
      title="Top Rated Series"
      link={PAGES.tvShows}
      type="movie"
      items={listTVSeriesPreviewAdapter(topRatedTVSeries)}
    />
  );
}
