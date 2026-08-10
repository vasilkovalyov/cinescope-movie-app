import { getPopularMovieDetails, getTopRatedMovies, getTrendingMovies } from '@/api';

import { SectionHomeHero, SectionListPreview, SectionTopRatedMovies } from '@/components/sections';

import { PAGES } from '@/constants';

import {
  listMoviesPreviewAdapter,
  popularMovieAdapter,
  topRatedMoviesAdapter,
} from '@/utils/adapters';

export default async function Home() {
  const popularMovie = await getPopularMovieDetails({
    includes: ['credits', 'videos'],
  });

  const topRatedMovies = await getTopRatedMovies({
    topSize: 5,
  });

  const trendingMovies = await getTrendingMovies();

  return (
    <>
      <SectionHomeHero {...popularMovieAdapter(popularMovie)} />
      <SectionTopRatedMovies items={topRatedMoviesAdapter(topRatedMovies)} />

      <SectionListPreview
        title="Trending Now"
        subtitle="What everyone is watching"
        link={PAGES.discover}
        type="movie"
        items={listMoviesPreviewAdapter(trendingMovies)}
      />
      <SectionListPreview title="Popular Movies" link={PAGES.discover} type="movie" items={[]} />
      <SectionListPreview
        title="Now Playing"
        subtitle="In theatres this week"

        link={PAGES.discover}
        type="movie"
        items={[]}
      />
      <SectionListPreview
        title="Top Rated Films"
        subtitle="The highest rated movies of all time"
        link={PAGES.discover}
        type="movie"
        items={[]}
      />
      <SectionListPreview
        title="Coming Soon"
        subtitle="Upcoming releases to anticipate"
        link={PAGES.discover}
        type="movie"
        items={[]}
      />
      <SectionListPreview
        title="Popular TV Shows"
        subtitle="The most-watched series right now"
        link={PAGES.tvShows}
        type="movie"
        items={[]}
      />
      <SectionListPreview title="Top Rated Series" link={PAGES.tvShows} type="movie" items={[]} />
      <SectionListPreview
        title="Notable People"
        subtitle="Directors, actors, and creators to know"
        link={PAGES.people}
        type="person"
        items={[]}
      />
    </>
  );
}
