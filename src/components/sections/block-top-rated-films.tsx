import { GenresDictionary, getTopRatedList } from '@/api';

import { PAGES } from '@/constants';

import { listMoviesPreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from './section-list-preview';

interface BlockTopRatedFilmsProps {
  genres: GenresDictionary;
}

export async function BlockTopRatedFilms({ genres }: BlockTopRatedFilmsProps) {
  const topRatedListMovies = await getTopRatedList(genres);

  return (
    <SectionListPreview
      title="Top Rated Films"
      subtitle="The highest rated movies of all time"
      link={PAGES.discover}
      type="movie"
      items={listMoviesPreviewAdapter(topRatedListMovies.results)}
    />
  );
}
