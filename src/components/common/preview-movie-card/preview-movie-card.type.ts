import { MovieGenre } from '@/types/movie';

export interface PreviewMovieCardProps {
  id: string;
  title: string;
  subtitleInfo: string;
  voteAverage: number;
  genres: MovieGenre[];
  link: string;
  image: string;
}
