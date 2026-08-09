import {
  AppendResponseCredits,
  AppendResponseImages,
  AppendResponseKeywords,
  AppendResponseVideos,
  MovieAppendResponseParams,
} from '../types/append-response.type';
import { MovieDetails } from '../types/movie/movie-details.type';

export function getMovieDetails(
  movieId: number,
  params?: MovieAppendResponseParams,
): Promise<
  MovieDetails<
    AppendResponseCredits,
    AppendResponseImages,
    AppendResponseKeywords,
    AppendResponseVideos
  >
> {
  const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}`);

  if (params?.language) {
    url.searchParams.set('language', params.language);
  }

  if (params?.includes?.length) {
    url.searchParams.set('append_to_response', params?.includes?.join(','));
  }

  return fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json', Authorization: `Bearer ${process.env.MOVIE_API_KEY}` },
  })
    .then((res) => res.json())
    .then((data) => data);
}
