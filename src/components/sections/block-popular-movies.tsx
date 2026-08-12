import { GenresDictionary, getPopularList } from '@/api';

import { PAGES } from '@/constants';

import { listMoviesPreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from './section-list-preview';

interface BlockPopularMoviesProps {
  genres: GenresDictionary;
}

export async function BlockPopularMovies({ genres }: BlockPopularMoviesProps) {
  const popularListMovies = await getPopularList(genres);

  return (
    <SectionListPreview
      title="Popular Movies"
      link={PAGES.discover}
      type="movie"
      items={listMoviesPreviewAdapter(popularListMovies.results)}
    />
  );
}
