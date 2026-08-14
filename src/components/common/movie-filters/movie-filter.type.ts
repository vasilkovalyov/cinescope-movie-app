import { FilterSelectOption } from '@/components/common/filter-select';

import { MovieGenre } from '@/types/movie';

export interface MovieFilterValue {
  search: string;
  genreIds: number[];
  releaseYearRange: [number, number];
  ratingRange: [number, number];
  language: string;
  sortBy: string;
}

export interface MovieFilterRange {
  min: number;
  max: number;
}

export interface MovieFilterProps {
  value: MovieFilterValue;
  genres: MovieGenre[];
  sortOptions: FilterSelectOption[];
  yearRange?: MovieFilterRange;
  languages: FilterSelectOption[];
  ratingRange?: MovieFilterRange;
  className?: string;
  onClear: () => void;
  onChange: (value: MovieFilterValue, changedKey: keyof MovieFilterValue) => void;
}
