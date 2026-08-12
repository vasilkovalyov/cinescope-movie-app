import { Suspense } from 'react';

import { GenresApi } from '@/api';

import { SectionListPreviewLoader, SectionTopRatedMoviesLoader } from '@/components/sections';
import {
  BlockComingSoon,
  BlockEditorPickBanner,
  BlockHeroLarge,
  BlockNotablePeople,
  BlockNowPlaying,
  BlockPopularMovies,
  BlockPopularTVShows,
  BlockTopRatedBanner,
  BlockTopRatedFilms,
  BlockTopRatedSeries,
  BlockTrendingNow,
} from '@/components/server-blocks';

export default async function Home() {
  const [genresMoviesApi] = await Promise.all([GenresApi.create('movie')]);
  const genres = genresMoviesApi.allGenres;

  return (
    <>
      <BlockHeroLarge />
      <Suspense fallback={<SectionTopRatedMoviesLoader />}>
        <BlockTopRatedBanner genres={genres} />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockTrendingNow genres={genres} />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockPopularMovies genres={genres} />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockNowPlaying genres={genres} />
      </Suspense>
      <Suspense>
        <BlockEditorPickBanner genres={genres} />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockTopRatedFilms genres={genres} />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockComingSoon genres={genres} />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockPopularTVShows />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockTopRatedSeries />
      </Suspense>
      <Suspense fallback={<SectionListPreviewLoader />}>
        <BlockNotablePeople />
      </Suspense>
    </>
  );
}
