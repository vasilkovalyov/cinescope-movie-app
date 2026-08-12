import { PeopleApi, TVSeriesApi } from '@/api';
import { GenresApi, MoviesApi } from '@/api';

import { SectionHomeHero, SectionListPreview, SectionTopRatedMovies } from '@/components/sections';

import { PAGES } from '@/constants';
import { TOP_RATE_COUNT } from '@/constants/common.constant';

import {
  listMoviesPreviewAdapter,
  listPeoplePreviewAdapter,
  listTVSeriesPreviewAdapter,
  popularMovieHomeHeroAdapter,
  topRatedMoviesAdapter,
} from '@/utils/adapters';

export default async function Home() {
  const genresMoviesApi = await GenresApi.create('movie');
  const movieApi = new MoviesApi({
    genres: genresMoviesApi.allGenres,
  });

  const tvSeriesApi = new TVSeriesApi();
  const peopleApi = new PeopleApi();

  const popularMovie = await movieApi.getPopularMovieDetails({
    includes: ['credits', 'videos'],
  });

  // ('2026-08-09T23:31:38.000Z');
  // ('2026-07-28T07:29:07.000Z');
  // ('2026-06-16T04:40:22.000Z');
  // ('2026-03-18T11:05:15.000Z');
  // ('2025-08-01T13:00:56.000Z');

  const topRatedMovies = await movieApi.getTopRatedList({
    topSize: TOP_RATE_COUNT,
  });
  const trendingListMovies = await movieApi.getTrendingList();
  const popularListMovies = await movieApi.getPopularList();
  const nowPlayingListMovies = await movieApi.getNowPlayingList();
  const topRatedListMovies = await movieApi.getTopRatedList();
  const upcomingListMovies = await movieApi.getUpcomingList();

  const popularTVSeries = await tvSeriesApi.getPopularList();
  const topRatedTVSeries = await tvSeriesApi.getTopRatedList();

  const popularPeople = await peopleApi.getPopularList();

  return (
    <>
      <SectionHomeHero {...popularMovieHomeHeroAdapter(popularMovie)} />
      <SectionTopRatedMovies items={topRatedMoviesAdapter(topRatedMovies.results)} />
      <SectionListPreview
        title="Trending Now"
        subtitle="What everyone is watching"
        link={PAGES.discover}
        type="movie"
        items={listMoviesPreviewAdapter(trendingListMovies.results)}
      />
      <SectionListPreview
        title="Popular Movies"
        link={PAGES.discover}
        type="movie"
        items={listMoviesPreviewAdapter(popularListMovies.results)}
      />
      <SectionListPreview
        title="Now Playing"
        subtitle="In theatres this week"
        link={PAGES.discover}
        type="movie"
        items={listMoviesPreviewAdapter(nowPlayingListMovies.results)}
      />
      <SectionListPreview
        title="Top Rated Films"
        subtitle="The highest rated movies of all time"
        link={PAGES.discover}
        type="movie"
        items={listMoviesPreviewAdapter(topRatedListMovies.results)}
      />
      <SectionListPreview
        title="Coming Soon"
        subtitle="Upcoming releases to anticipate"
        link={PAGES.discover}
        type="movie"
        items={listMoviesPreviewAdapter(upcomingListMovies.results)}
      />
      <SectionListPreview
        title="Popular TV Shows"
        subtitle="The most-watched series right now"
        link={PAGES.tvShows}
        type="movie"
        items={listTVSeriesPreviewAdapter(popularTVSeries)}
      />
      <SectionListPreview
        title="Top Rated Series"
        link={PAGES.tvShows}
        type="movie"
        items={listTVSeriesPreviewAdapter(topRatedTVSeries)}
      />
      <SectionListPreview
        title="Notable People"
        subtitle="Directors, actors, and creators to know"
        link={PAGES.people}
        type="person"
        items={listPeoplePreviewAdapter(popularPeople.results)}
      />
    </>
  );
}
