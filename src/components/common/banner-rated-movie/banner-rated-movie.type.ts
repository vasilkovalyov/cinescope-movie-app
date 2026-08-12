import { MovieGenre } from '@/types/movie';

export interface BannerRatedMovieProps {
  id: string;
  number: string;
  title: string;
  rating: number;
  genres: MovieGenre[];
  image: string;
}
