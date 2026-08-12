import { GenresDictionary, getNowPlayingList } from '@/api';

import { PAGES } from '@/constants';

import { listMoviesPreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from './section-list-preview';

interface BlockNowPlayingProps {
  genres: GenresDictionary;
}

export async function BlockNowPlaying({ genres }: BlockNowPlayingProps) {
  const nowPlayingListMovies = await getNowPlayingList(genres);

  return (
    <SectionListPreview
      title="Now Playing"
      subtitle="In theatres this week"
      link={PAGES.discover}
      type="movie"
      items={listMoviesPreviewAdapter(nowPlayingListMovies.results)}
    />
  );
}
