import { DEFAULT_LANGUAGE } from '@/constants';

import { IResponseList } from '@/types/api.type';

import { MovieTrending } from '../types/movie/movie-trending.type';
import { fetchGetApiTMDB } from './fetch-api-tmdb';

export function getMoviePopular(): Promise<IResponseList<MovieTrending>> {
  return fetchGetApiTMDB('/movie/popular', {
    language: DEFAULT_LANGUAGE,
    page: '1',
  });
}
