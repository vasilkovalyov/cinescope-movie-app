import { API_REQUESTS, DEFAULT_LANGUAGE } from '@/constants';

import { IResponseList } from '@/types/api.type';
import { AppendRequestParams, TopMoviesAppendRequestParams } from '@/types/append-response.type';
import { TVSeries, TVSeriesLimitedDetails } from '@/types/movie';

import { limitArray } from '@/utils';

import { fetchGetApiTMDB } from './fetch-api-tmdb';

type ResponseTVSeriesLimitedList = Promise<TVSeriesLimitedDetails[]>;

export class TVSeriesApi {
  async getTopRatedList(params?: TopMoviesAppendRequestParams): ResponseTVSeriesLimitedList {
    const tvSeries = await fetchGetApiTMDB<IResponseList<TVSeries>>(API_REQUESTS.tvTopRated, {
      language: DEFAULT_LANGUAGE,
      page: '1',
    });

    let tvSeriesUpdate: TVSeries[];

    if (params?.topSize) {
      tvSeriesUpdate = limitArray(tvSeries.results, params.topSize);
    } else {
      tvSeriesUpdate = limitArray(tvSeries.results);
    }

    const tvSeriesIds = tvSeriesUpdate.map((item) => item.id);

    return await Promise.all(tvSeriesIds.map((id) => this.getTVSeriesLimitedDetails(id, params)));
  }

  async getPopularList(params?: AppendRequestParams): ResponseTVSeriesLimitedList {
    const tvSeries = await fetchGetApiTMDB<IResponseList<TVSeries>>(API_REQUESTS.tvPopular, {
      language: DEFAULT_LANGUAGE,
      page: '1',
    });

    const tvSeriesIds = limitArray(tvSeries.results).map((item) => item.id);

    return await Promise.all(tvSeriesIds.map((id) => this.getTVSeriesLimitedDetails(id, params)));
  }

  async getTVSeriesLimitedDetails(
    movieId: number,
    params?: AppendRequestParams,
  ): Promise<TVSeriesLimitedDetails> {
    return fetchGetApiTMDB(`${API_REQUESTS.tvSingle}${movieId}`, {
      language: params?.language,
      append_to_response: 'credits',
    });
  }
}
