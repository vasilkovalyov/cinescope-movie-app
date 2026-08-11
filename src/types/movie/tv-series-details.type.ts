import {
  AppendResponseCredits,
  AppendResponseImages,
  AppendResponseKeywords,
  AppendResponseVideos,
} from '../append-response.type';
import { AppendField } from '../utils.type';
import { MovieGenre } from './movie-genre.type';
import { MovieProductionCompany } from './movie-production-companies.type';
import { MovieProductionCountry } from './movie-production-country.type';

export type TVSeriesDetails<
  CreditsType = undefined,
  VideosType = undefined,
  ImagesType = undefined,
  KeywordsType = undefined,
> = {
  adult: boolean;
  backdrop_path: string;
  created_by: string[];
  episode_run_time: number[];
  first_air_date: string;
  genres: MovieGenre[];
  homepage: string;
  id: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TVSeriesEpisode;
  name: string;
  networks: TVSeriesNetwork[];
  next_episode_to_air: string | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieProductionCompany[];
  production_countries: MovieProductionCountry[];
  seasons: TVSeriesSeason[];
  softcore: string;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
} & AppendField<'credits', CreditsType> &
  AppendField<'videos', VideosType> &
  AppendField<'images', ImagesType> &
  AppendField<'keywords', KeywordsType>;

export type TVSeriesLimitedDetails = TVSeriesDetails<
  AppendResponseCredits,
  undefined,
  undefined,
  undefined
>;

export type TVSeriesFullDetails = TVSeriesDetails<
  AppendResponseCredits,
  AppendResponseImages,
  AppendResponseVideos,
  AppendResponseKeywords
>;

export interface TVSeriesEpisode {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: null;
  season_number: number;
  show_id: number;
  still_path: null;
  vote_average: number;
  vote_count: number;
}

export interface TVSeriesNetwork {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface TVSeriesSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}
