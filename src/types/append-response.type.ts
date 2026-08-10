import type { MovieCastMember, MovieCrewMember, MovieImage, MovieKeyword } from './movie';
import { MovieVideo } from './movie/movie-video.type';

export type MovieAppendResponseIncludeOption = 'credits' | 'videos' | 'images' | 'keywords';

export type MovieAppendResponseParams = {
  language?: string;
  includes?: MovieAppendResponseIncludeOption[];
};

export interface AppendResponseCredits {
  cast: MovieCastMember[];
  crew: MovieCrewMember[];
}

export interface AppendResponseImages {
  backdrops: MovieImage[];
  logos: MovieImage[];
  posters: MovieImage[];
}

export interface AppendResponseVideos {
  results: MovieVideo[];
}

export interface AppendResponseKeywords {
  keywords: {
    keywords: MovieKeyword[];
  };
}

export type TopTrandingMoviesAppendResponseParams = {
  language?: string;
  includes?: MovieAppendResponseIncludeOption[];
  topSize: number;
};
