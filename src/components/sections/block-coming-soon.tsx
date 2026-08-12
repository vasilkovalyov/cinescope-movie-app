import { GenresDictionary, getUpcomingList } from '@/api';

import { PAGES } from '@/constants';

import { listMoviesPreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from './section-list-preview';

interface BlockComingSoonProps {
  genres: GenresDictionary;
}

export async function BlockComingSoon({ genres }: BlockComingSoonProps) {
  const upcomingListMovies = await getUpcomingList(genres);

  return (
    <SectionListPreview
      title="Coming Soon"
      subtitle="Upcoming releases to anticipate"
      link={PAGES.discover}
      type="movie"
      items={listMoviesPreviewAdapter(upcomingListMovies.results)}
    />
  );
}
