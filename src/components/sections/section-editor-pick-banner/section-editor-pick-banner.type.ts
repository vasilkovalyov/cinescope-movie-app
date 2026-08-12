import { MovieGenre } from '@/types/movie';

export interface SectionEditorPickBannerProps {
  title: string;
  overview: string;
  rating: number;
  genres: MovieGenre[];
  link: string;
  image: string;
}
