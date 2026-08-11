import { MovieGenre } from './movie-genre.type';

export interface TVSeries {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  softcore: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TVSeriesResolved extends Omit<TVSeries, 'genre_ids'> {
  genres: MovieGenre[];
}
