import { MovieAppendResponseParams } from '../types/append-response.type';
import { MovieDetails } from '../types/movie/movie-details.type';
import { fetchGetApiTMDB } from './fetch-api-tmdb';

export function getMovieDetails<
  Credits = undefined,
  Images = undefined,
  Keywords = undefined,
  Videos = undefined,
>(
  movieId: number,
  params?: MovieAppendResponseParams,
): Promise<MovieDetails<Credits, Images, Keywords, Videos>> {
  return fetchGetApiTMDB(`/movie/${movieId}`, {
    language: params?.language,
    append_to_response: params?.includes?.join(','),
  });
}
