import { API_REQUESTS, DEFAULT_LANGUAGE, MOVIE_REVALIDATION } from '@/constants';

import { IResponseList } from '@/types/api.type';
import { AppendRequestParams, TopMoviesAppendRequestParams } from '@/types/append-response.type';
import { MovieFullDetails, MovieGenre, MovieHomeHeroDetails } from '@/types/movie';

import { getEditorPickMovie, limitArray } from '@/utils';
import { getRegion } from '@/utils/region';

import { Movie, MovieResolved } from '../types/movie/movie.type';
import { fetchGetApiTMDB } from './fetch-api-tmdb';
import type { GenresDictionary } from './genres';

type ResponseMoviesList = Promise<IResponseList<MovieResolved>>;

function getFormattedMoviesGenres(genresIds: number[], genres: GenresDictionary): MovieGenre[] {
  return genresIds.map<MovieGenre>((id) => {
    return {
      id: id,
      name: genres?.get(id) || '',
    };
  });
}

export async function getUpcomingList(genres: GenresDictionary): ResponseMoviesList {
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
        genres: getFormattedMoviesGenres(movie.genre_ids, genres),
      };
    }),
  };
}

export async function getTopRatedList(
  genres: GenresDictionary,
  params?: TopMoviesAppendRequestParams,
): ResponseMoviesList {
  const movies = await fetchGetApiTMDB<IResponseList<Movie>>(
    API_REQUESTS.movieTopRated,
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
        genres: getFormattedMoviesGenres(movie.genre_ids, genres),
      };
    }),
  };
}

export async function getPopularList(genres: GenresDictionary): ResponseMoviesList {
  const movies = await fetchGetApiTMDB<IResponseList<Movie>>(
    API_REQUESTS.moviePopular,
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
    ...movies,
    results: limitArray(movies.results).map<MovieResolved>((movie) => {
      return {
        ...movie,
        genre_ids: undefined,
        genres: getFormattedMoviesGenres(movie.genre_ids, genres),
      };
    }),
  };
}

export async function getNowPlayingList(genres: GenresDictionary): ResponseMoviesList {
  const region = await getRegion();
  const movies = await fetchGetApiTMDB<IResponseList<Movie>>(
    API_REQUESTS.movieNowPlaying,
    {
      language: DEFAULT_LANGUAGE,
      page: '1',
      region: region,
    },
    {
      next: {
        revalidate: MOVIE_REVALIDATION,
      },
    },
  );

  return {
    ...movies,
    results: limitArray(movies.results).map<MovieResolved>((movie) => {
      return {
        ...movie,
        genre_ids: undefined,
        genres: getFormattedMoviesGenres(movie.genre_ids, genres),
      };
    }),
  };
}

export async function getPopularMovieDetails(
  params: AppendRequestParams,
): Promise<MovieHomeHeroDetails> {
  const trendingMovies = await fetchGetApiTMDB<IResponseList<Movie>>(
    API_REQUESTS.moviePopular,
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

  const firstMovie = trendingMovies.results[0];

  if (!firstMovie) {
    throw Error('Error load movie details');
  }

  const movieDetails = await getMovieHomeHeroDetails(firstMovie.id, params);

  return movieDetails;
}

export async function getMovieFullDetails(
  movieId: number,
  params?: AppendRequestParams,
): Promise<MovieFullDetails> {
  return fetchGetApiTMDB(
    `${API_REQUESTS.movieSingle}${movieId}`,
    {
      language: params?.language,
      append_to_response: params?.includes?.join(','),
    },
    {
      next: {
        revalidate: MOVIE_REVALIDATION,
      },
    },
  );
}

export async function getMovieHomeHeroDetails(
  movieId: number,
  params?: AppendRequestParams,
): Promise<MovieHomeHeroDetails> {
  return fetchGetApiTMDB(
    `${API_REQUESTS.movieSingle}${movieId}`,
    {
      language: params?.language,
      append_to_response: 'credits,videos',
    },
    {
      next: {
        revalidate: MOVIE_REVALIDATION,
      },
    },
  );
}

export async function getMovieEditorPick(genres: GenresDictionary): Promise<MovieResolved | null> {
  const region = await getRegion();

  const movies = await fetchGetApiTMDB<IResponseList<Movie>>(
    API_REQUESTS.movieDiscover,
    {
      language: DEFAULT_LANGUAGE,
      page: '1',
      'vote_average.gte': 7.5,
      'vote_count.gte': 300,
      sort_by: 'popularity.desc',
      region: region,
    },
    {
      next: {
        revalidate: MOVIE_REVALIDATION,
      },
    },
  );

  const movie = getEditorPickMovie(movies.results);

  const { genre_ids, ...movieWithoutGenreIds } = movie;

  return {
    ...movieWithoutGenreIds,
    genres: getFormattedMoviesGenres(genre_ids, genres),
  };
}

export async function getTrendingList(genres: GenresDictionary): ResponseMoviesList {
  const movies = await fetchGetApiTMDB<IResponseList<Movie>>(
    API_REQUESTS.movieTrendingWeek,
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
    ...movies,
    results: limitArray(movies.results).map<MovieResolved>((movie) => {
      return {
        ...movie,
        genre_ids: undefined,
        genres: getFormattedMoviesGenres(movie.genre_ids, genres),
      };
    }),
  };
}
