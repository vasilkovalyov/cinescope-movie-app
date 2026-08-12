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
import { MovieSpokenLanguages } from './movie-spoken-languages.type';

export type MovieDetails<
  CreditsType = undefined,
  VideosType = undefined,
  ImagesType = undefined,
  KeywordsType = undefined,
> = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: MovieProductionCompany[];
  production_countries: MovieProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  softcore: boolean;
  spoken_languages: MovieSpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
} & AppendField<'credits', CreditsType> &
  AppendField<'videos', VideosType> &
  AppendField<'images', ImagesType> &
  AppendField<'keywords', KeywordsType>;

export type MovieHomeHeroDetails = MovieDetails<
  AppendResponseCredits,
  AppendResponseVideos,
  undefined,
  undefined
>;

export type MovieFullDetails = MovieDetails<
  AppendResponseCredits,
  AppendResponseVideos,
  AppendResponseImages,
  AppendResponseKeywords
>;
