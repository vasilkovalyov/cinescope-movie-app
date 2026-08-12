import { GenresDictionary } from '@/api';

import { MovieGenre } from '@/types/movie';

export interface SectionEditorPickBannerProps {
  genres: GenresDictionary;
}

export interface EditorPickBannerProps {
  title: string;
  overview: string;
  rating: number;
  genres: MovieGenre[];
  link: string;
  image: string;
}
