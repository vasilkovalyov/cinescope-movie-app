import { MovieGenre } from '@/types/movie';

export interface GenreBadgeListProps {
  items: MovieGenre[];
  selectedIds: number[];
  onChange: (selectedIds: number[]) => void;
  className?: string;
  label: string;
}
