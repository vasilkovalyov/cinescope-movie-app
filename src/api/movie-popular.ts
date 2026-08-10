import { DEFAULT_LANGUAGE } from '@/constants';

import { IResponseList } from '@/types/api.type';

import { Movie } from '../types/movie/movie.type';
import { fetchGetApiTMDB } from './fetch-api-tmdb';

export function getMoviePopular(): Promise<IResponseList<Movie>> {
  return fetchGetApiTMDB('/movie/popular', {
    language: DEFAULT_LANGUAGE,
    page: '1',
  });
}
