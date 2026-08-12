import { Suspense } from 'react';

import { GenresApi, getPopularMovieDetails } from '@/api';

import {
  BlockComingSoon,
  BlockNotablePeople,
  BlockNowPlaying,
  BlockPopularMovies,
  BlockPopularTVShows,
  BlockTopRatedBanner,
  BlockTopRatedFilms,
  BlockTopRatedSeries,
  BlockTrendingNow,
  SectionEditorPickBanner,
  SectionHomeHero,
  SectionListPreviewLoader,
  SectionTopRatedMoviesLoader,
} from '@/components/sections';

import { popularMovieHomeHeroAdapter } from '@/utils/adapters';

export default async function Home() {
  const [genresMoviesApi, popularMovie] = await Promise.all([
    GenresApi.create('movie'),
    getPopularMovieDetails({ includes: ['credits', 'videos'] }),
  ]);
  const genres = genresMoviesApi.allGenres;

  return (
    <>
      <SectionHomeHero {...popularMovieHomeHeroAdapter(popularMovie)} />
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
        <SectionEditorPickBanner genres={genres} />
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
