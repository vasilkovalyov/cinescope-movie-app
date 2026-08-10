import {
  AppendResponseCredits,
  AppendResponseVideos,
  MovieAppendResponseParams,
} from '../types/append-response.type';
import { MovieDetails } from '../types/movie/movie-details.type';
import { getMovieDetails } from './get-movie-details';
import { getMoviePopular } from './get-movie-popular';

export async function getPopularMovieDetails(
  params: MovieAppendResponseParams,
): Promise<MovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>> {
  const trendingMovies = await getMoviePopular();

  const firstMovie = trendingMovies.results[0];

  if (!firstMovie) {
    throw Error('Error load movie details');
  }

  const movieDetails = await getMovieDetails<
    AppendResponseCredits,
    undefined,
    undefined,
    AppendResponseVideos
  >(firstMovie.id, params);

  return movieDetails;
}
