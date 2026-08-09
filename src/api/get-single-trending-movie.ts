import {
  AppendResponseCredits,
  AppendResponseImages,
  AppendResponseKeywords,
  AppendResponseVideos,
  MovieAppendResponseParams,
} from '../types/append-response.type';
import { MovieDetails } from '../types/movie/movie-details.type';
import { getMovieDetails } from './get-movie-details';
import { getTrendingMovies } from './get-movie-trending';

export async function getSingleTrendingMovie(
  params: MovieAppendResponseParams,
): Promise<
  MovieDetails<
    AppendResponseCredits,
    AppendResponseImages,
    AppendResponseKeywords,
    AppendResponseVideos
  >
> {
  const trendingMovies = await getTrendingMovies();
  const firstMovie = trendingMovies[0];

  if (!firstMovie) {
    throw Error('Error load movie details');
  }

  const movieDetails = await getMovieDetails(firstMovie.id, params);

  return movieDetails;
}
