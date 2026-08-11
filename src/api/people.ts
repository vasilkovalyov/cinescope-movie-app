import { API_REQUESTS, DEFAULT_LANGUAGE } from '@/constants';

import { IResponseList } from '@/types/api.type';
import { People } from '@/types/people.type';

import { limitArray } from '@/utils';

import { fetchGetApiTMDB } from './fetch-api-tmdb';

export class PeopleApi {
  async getPopularList() {
    const people = await fetchGetApiTMDB<IResponseList<People>>(API_REQUESTS.peoplePopular, {
      language: DEFAULT_LANGUAGE,
      page: '1',
    });

    return {
      ...people,
      results: limitArray(people.results),
    };
  }
}
