'use client';

import { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { MovieFilter, type MovieFilterValue } from '@/components/common';

import { MOVIE_LANGUAGE_OPTIONS, MOVIE_SORT_OPTIONS, PAGES } from '@/constants';

import { MovieGenre } from '@/types/movie';

interface MoviesFilterPanelProps {
  genres: MovieGenre[];
}

const FILTER_PARAM_KEYS: Record<keyof MovieFilterValue, string> = {
  search: 'search',
  genreIds: 'genre',
  releaseYearRange: 'year',
  ratingRange: 'rating',
  language: 'language',
  sortBy: 'sortBy',
} as const;

function getDefaultFilterValue(): MovieFilterValue {
  return {
    search: '',
    genreIds: [],
    releaseYearRange: [1950, new Date().getFullYear()],
    ratingRange: [0, 10],
    language: '',
    sortBy: MOVIE_SORT_OPTIONS[0]?.value ?? '',
  };
}

export function MoviesFilterPanel({ genres }: MoviesFilterPanelProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [value, setValue] = useState<MovieFilterValue>(getDefaultFilterValue);

  function onHandleChange(nextValue: MovieFilterValue, changedKey: keyof MovieFilterValue) {
    const params = new URLSearchParams(searchParams);
    const paramKey = FILTER_PARAM_KEYS[changedKey];
    const fieldValue = nextValue[changedKey];
    const serializedValue = Array.isArray(fieldValue) ? fieldValue.join(',') : fieldValue;

    if (serializedValue) {
      params.set(paramKey, serializedValue);
    } else {
      params.delete(paramKey);
    }

    router.push(`${PAGES.movies}?${params.toString()}`);

    setValue(nextValue);
  }

  function onHandleClear() {
    setValue(getDefaultFilterValue);
    router.replace(pathname);
  }

  return (
    <MovieFilter
      value={value}
      onChange={onHandleChange}
      onClear={onHandleClear}
      genres={genres}
      languages={MOVIE_LANGUAGE_OPTIONS}
      sortOptions={MOVIE_SORT_OPTIONS}
    />
  );
}
