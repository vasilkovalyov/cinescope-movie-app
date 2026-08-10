import { MovieGenre } from '@/types/movie';

export interface BannerTrandingMovieProps {
  id: string;
  number: string;
  title: string;
  voteAverage: string;
  genres: MovieGenre[];
  image: string;
}
