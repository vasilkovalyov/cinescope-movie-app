import { API_REQUESTS, DEFAULT_LANGUAGE } from '@/constants';

import { IResponseList } from '@/types/api.type';
import { AppendRequestParams, TopMoviesAppendRequestParams } from '@/types/append-response.type';
import { MovieFullDetails, MovieGenre, MovieHomeHeroDetails } from '@/types/movie';

import { limitArray } from '@/utils';
import { getRegion } from '@/utils/region';

import { Movie, MovieResolved } from '../types/movie/movie.type';
import { fetchGetApiTMDB } from './fetch-api-tmdb';
import type { GenresDictionary } from './genres';

interface MoviesApiOptions {
  genres: GenresDictionary;
}

type ResponseMoviesList = Promise<IResponseList<MovieResolved>>;

function getFormattedMoviesGenres(genresIds: number[], genres: GenresDictionary): MovieGenre[] {
  return genresIds.map<MovieGenre>((id) => {
    return {
      id: id,
      name: genres?.get(id) || '',
    };
  });
}

export class MoviesApi {
  private _genres: GenresDictionary | null;

  constructor(options: MoviesApiOptions) {
    this._genres = options.genres;
  }

  async getUpcomingList(): ResponseMoviesList {
    const today = new Date();

    const startDate = today.toISOString().split('T')[0];

    const DAYS_30 = 30 * 24 * 60 * 60 * 1000;

    const endDate = new Date(today.getTime() + DAYS_30).toISOString().split('T')[0];

    const region = await getRegion();

    const movies = await fetchGetApiTMDB<IResponseList<Movie>>(API_REQUESTS.movieDiscover, {
      language: DEFAULT_LANGUAGE,
      page: '1',
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
      sort_by: 'primary_release_date.asc',
      region: region,
    });

    return {
      ...movies,
      results: limitArray(movies.results).map<MovieResolved>((movie) => {
        return {
          ...movie,
          genre_ids: undefined,
          genres: getFormattedMoviesGenres(movie.genre_ids, this._genres),
        };
      }),
    };
  }

  async getTrendingList(): ResponseMoviesList {
    const movies = await fetchGetApiTMDB<IResponseList<Movie>>(API_REQUESTS.movieTrendingWeek, {
      language: DEFAULT_LANGUAGE,
      page: '1',
    });

    return {
      ...movies,
      results: limitArray(movies.results).map<MovieResolved>((movie) => {
        return {
          ...movie,
          genre_ids: undefined,
          genres: getFormattedMoviesGenres(movie.genre_ids, this._genres),
        };
      }),
    };
  }

  async getTopRatedList(params?: TopMoviesAppendRequestParams): ResponseMoviesList {
    const movies = await fetchGetApiTMDB<IResponseList<Movie>>(API_REQUESTS.movieTopRated, {
      language: DEFAULT_LANGUAGE,
      page: '1',
    });

    let moviesUpdate: Movie[];

    if (params?.topSize) {
      moviesUpdate = limitArray(movies.results, params.topSize);
    } else {
      moviesUpdate = limitArray(movies.results);
    }

    return {
      ...movies,
      results: moviesUpdate.map<MovieResolved>((movie) => {
        return {
          ...movie,
          genre_ids: undefined,
          genres: getFormattedMoviesGenres(movie.genre_ids, this._genres),
        };
      }),
    };
  }

  async getPopularList(): ResponseMoviesList {
    const movies = await fetchGetApiTMDB<IResponseList<Movie>>(API_REQUESTS.moviePopular, {
      language: DEFAULT_LANGUAGE,
      page: '1',
    });

    return {
      ...movies,
      results: limitArray(movies.results).map<MovieResolved>((movie) => {
        return {
          ...movie,
          genre_ids: undefined,
          genres: getFormattedMoviesGenres(movie.genre_ids, this._genres),
        };
      }),
    };
  }

  async getNowPlayingList(): ResponseMoviesList {
    const region = await getRegion();
    const movies = await fetchGetApiTMDB<IResponseList<Movie>>(API_REQUESTS.movieNowPlaying, {
      language: DEFAULT_LANGUAGE,
      page: '1',
      region: region,
    });

    return {
      ...movies,
      results: limitArray(movies.results).map<MovieResolved>((movie) => {
        return {
          ...movie,
          genre_ids: undefined,
          genres: getFormattedMoviesGenres(movie.genre_ids, this._genres),
        };
      }),
    };
  }

  async getPopularMovieDetails(params: AppendRequestParams): Promise<MovieHomeHeroDetails> {
    const trendingMovies = await fetchGetApiTMDB<IResponseList<Movie>>(API_REQUESTS.moviePopular, {
      language: DEFAULT_LANGUAGE,
      page: '1',
    });

    const firstMovie = trendingMovies.results[0];

    if (!firstMovie) {
      throw Error('Error load movie details');
    }

    const movieDetails = await this.getMovieHomeHeroDetails(firstMovie.id, params);

    return movieDetails;
  }

  async getMovieFullDetails(
    movieId: number,
    params?: AppendRequestParams,
  ): Promise<MovieFullDetails> {
    return fetchGetApiTMDB(`${API_REQUESTS.movieSingle}${movieId}`, {
      language: params?.language,
      append_to_response: params?.includes?.join(','),
    });
  }

  async getMovieHomeHeroDetails(
    movieId: number,
    params?: AppendRequestParams,
  ): Promise<MovieHomeHeroDetails> {
    return fetchGetApiTMDB(`${API_REQUESTS.movieSingle}${movieId}`, {
      language: params?.language,
      append_to_response: 'credits,videos',
    });
  }
}
