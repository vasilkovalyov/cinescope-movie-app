import {
  AppendResponseCredits,
  AppendResponseVideos,
  TopTrandingMoviesAppendResponseParams,
} from '../types/append-response.type';
import { MovieDetails } from '../types/movie/movie-details.type';
import { getMovieDetails } from './get-movie-details';
import { getTrendingMovies } from './get-movie-trending';

export async function getTopTrendingMovies(
  params: TopTrandingMoviesAppendResponseParams,
): Promise<MovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>[]> {
  const trendingMovies = await getTrendingMovies();
  const topMovieIds = trendingMovies.results.slice(0, params.topSize).map((item) => item.id);

  const movies = await Promise.all(
    topMovieIds.map((id) =>
      getMovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>(id),
    ),
  );

  return movies;
}
