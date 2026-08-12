import { Suspense } from 'react';

import { GenresApi, getPopularMovieDetails, getTopRatedList } from '@/api';

import {
  BlockComingSoon,
  BlockNotablePeople,
  BlockNowPlaying,
  BlockPopularMovies,
  BlockPopularTVShows,
  BlockTopRatedFilms,
  BlockTopRatedSeries,
  BlockTrendingNow,
  SectionEditorPickBanner,
  SectionHomeHero,
  SectionListPreviewLoader,
  SectionTopRatedMovies,
} from '@/components/sections';

import { TOP_RATE_COUNT } from '@/constants/common.constant';

import { popularMovieHomeHeroAdapter, topRatedMoviesAdapter } from '@/utils/adapters';

export default async function Home() {
  const genresMoviesApi = await GenresApi.create('movie');
  const genres = genresMoviesApi.allGenres;

  const popularMovie = await getPopularMovieDetails({
    includes: ['credits', 'videos'],
  });
  const topRatedMovies = await getTopRatedList(genres, {
    topSize: TOP_RATE_COUNT,
  });

  return (
    <>
      <SectionHomeHero {...popularMovieHomeHeroAdapter(popularMovie)} />
      <SectionTopRatedMovies items={topRatedMoviesAdapter(topRatedMovies.results)} />
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
