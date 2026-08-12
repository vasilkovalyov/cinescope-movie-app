import { MovieGenre } from '@/types/movie';

export interface PreviewMovieCardProps {
  id: string;
  title: string;
  subtitleInfo: string;
  rating: number;
  genres: MovieGenre[];
  link: string;
  image: string | null;
  status?: string;
}
