import { DEFAULT_LANGUAGE } from '@/constants';

import { MovieGenre } from '@/types/movie';

import { fetchGetApiTMDB } from './fetch-api-tmdb';

type GenreType = 'movie' | 'tv';
export type GenresDictionary = ReadonlyMap<number, string> | null;

export class GenresApi {
  private constructor(private readonly _genresDictionary: ReadonlyMap<number, string>) {}

  get allGenres(): GenresDictionary {
    return this._genresDictionary;
  }

  static async create(type: GenreType): Promise<GenresApi> {
    const list = await fetchGetApiTMDB<{ genres: MovieGenre[] }>(`/genre/${type}/list`, {
      language: DEFAULT_LANGUAGE,
    });

    const dictionary = new Map(list.genres.map(({ id, name }) => [id, name]));

    return new GenresApi(dictionary);
  }
}
