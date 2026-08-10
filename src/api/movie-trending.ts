import { DEFAULT_LANGUAGE } from '@/constants';

import { IResponseList } from '@/types/api.type';
import { AppendResponseCredits } from '@/types/append-response.type';
import { MovieDetails } from '@/types/movie';

import { Movie } from '../types/movie/movie.type';
import { fetchGetApiTMDB } from './fetch-api-tmdb';
import { getMovieDetails } from './movie-details';

export async function getTrendingMovies(): Promise<MovieDetails<AppendResponseCredits>[]> {
  const movies = await fetchGetApiTMDB<IResponseList<Movie>>('/trending/movie/week', {
    language: DEFAULT_LANGUAGE,
    page: '1',
  });

  const movieIds = movies.results.map((item) => item.id);

  return await Promise.all(movieIds.map((id) => getMovieDetails<AppendResponseCredits>(id)));
}
