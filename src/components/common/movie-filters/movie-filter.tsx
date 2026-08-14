'use client';

import { cn } from '@/lib/utils';

import { FilterSelect } from '@/components/common/filter-select';
import { GenreBadgeList } from '@/components/common/genre-badge-list';
import { RangeFilter } from '@/components/common/range-filter';
import { SearchInput } from '@/components/common/search-input';
import { Button } from '@/components/ui';

import { MOVIE_RATING_CATEGORY } from '@/constants';

import { MovieFilterProps, MovieFilterValue } from './movie-filter.type';

const DEFAULT_RATING_RANGE = { min: MOVIE_RATING_CATEGORY.min, max: MOVIE_RATING_CATEGORY.max };
const DEFAULT_YEAR_RANGE_START = 1950;

function getDefaultYearRange() {
  return { min: DEFAULT_YEAR_RANGE_START, max: new Date().getFullYear() };
}

export function MovieFilter({
  value,
  genres,
  languages,
  sortOptions,
  yearRange = getDefaultYearRange(),
  ratingRange = DEFAULT_RATING_RANGE,
  className,
  onChange,
  onClear,
}: MovieFilterProps) {
  function updateField<Key extends keyof MovieFilterValue>(
    key: Key,
    fieldValue: MovieFilterValue[Key],
  ) {
    onChange({ ...value, [key]: fieldValue }, key);
  }

  return (
    <div className={cn('grid gap-[24px]', className)}>
      <SearchInput
        label="Search"
        value={value.search}
        onChange={(search) => updateField('search', search)}
        placeholder="Search movies"
        aria-label="Search movies"
        useClearSearch
        useIconSearch
      />
      <FilterSelect
        label="Language"
        placeholder="Any language"
        items={languages}
        value={value.language}
        onChange={(language) => updateField('language', language)}
      />
      <FilterSelect
        label="Sort by"
        placeholder="Sort by"
        items={sortOptions}
        value={value.sortBy}
        onChange={(sortBy) => updateField('sortBy', sortBy)}
      />
      <RangeFilter
        label="Release year"
        min={yearRange.min}
        max={yearRange.max}
        value={value.releaseYearRange}
        onChange={(releaseYearRange) => updateField('releaseYearRange', releaseYearRange)}
      />
      <RangeFilter
        label="Rating"
        min={ratingRange.min}
        max={ratingRange.max}
        step={0.5}
        formatValue={(rating) => rating.toFixed(1)}
        value={value.ratingRange}
        onChange={(nextRatingRange) => updateField('ratingRange', nextRatingRange)}
      />
      <GenreBadgeList
        label="Genres"
        items={genres}
        selectedIds={value.genreIds}
        onChange={(genreIds) => updateField('genreIds', genreIds)}
      />
      <Button onClick={onClear} variant="secondary">
        Clear
      </Button>
    </div>
  );
}
