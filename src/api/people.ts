import { API_REQUESTS, DEFAULT_LANGUAGE, MOVIE_REVALIDATION } from '@/constants';

import { IResponseList } from '@/types/api.type';
import { People } from '@/types/people.type';

import { limitArray } from '@/utils';

import { fetchGetApiTMDB } from './fetch-api-tmdb';

export async function getPopularList() {
  const people = await fetchGetApiTMDB<IResponseList<People>>(
    API_REQUESTS.peoplePopular,
    {
      language: DEFAULT_LANGUAGE,
      page: '1',
    },
    {
      next: {
        revalidate: MOVIE_REVALIDATION,
      },
    },
  );

  return {
    ...people,
    results: limitArray(people.results),
  };
}
