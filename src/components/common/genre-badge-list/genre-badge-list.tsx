'use client';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/ui';

import { GenreBadgeListProps } from './genre-badge-list.type';

export function GenreBadgeList({
  items,
  label,
  selectedIds,
  onChange,
  className,
}: GenreBadgeListProps) {
  function toggleGenre(id: number) {
    const isSelected = selectedIds.includes(id);

    onChange(
      isSelected ? selectedIds.filter((selectedId) => selectedId !== id) : [...selectedIds, id],
    );
  }

  return (
    <div className="grid gap-[12px]">
      <span className="filter-title">{label}</span>
      <ul className={cn('flex flex-wrap items-center gap-[8px]', className)}>
        {items.map(({ id, name }) => {
          const isSelected = selectedIds.includes(id);

          return (
            <li key={id}>
              <Toggle
                aria-pressed={isSelected}
                onClick={() => toggleGenre(id)}
                className="
                px-3 py-1.5 rounded-lg text-xs font-medium transition-colors bg-accent-bg-1 text-secondary-dark-text border border-[rgba(255,255,255,0.06)] hover:text-light aria-pressed:bg-primary/15 aria-pressed:text-primary  aria-pressed:border-primary/30 cursor-pointer"
              >
                {name}
              </Toggle>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
