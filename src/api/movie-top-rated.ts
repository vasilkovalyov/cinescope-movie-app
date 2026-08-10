import { DEFAULT_LANGUAGE } from '@/constants';

import { IResponseList } from '@/types/api.type';

import { Movie } from '../types/movie/movie.type';
import { fetchGetApiTMDB } from './fetch-api-tmdb';

export function getMovieTopRated(): Promise<IResponseList<Movie>> {
  return fetchGetApiTMDB('/movie/top_rated', {
    language: DEFAULT_LANGUAGE,
    page: '1',
  });
}
