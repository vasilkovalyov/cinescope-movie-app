'use client';

import { cn } from '@/lib/utils';

import { Slider } from '@/components/ui';

import { RangeFilterProps } from './range-filter.type';

export function RangeFilter({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = (rangeValue) => `${rangeValue}`,
  className,
}: RangeFilterProps) {
  return (
    <div className={cn('grid gap-[12px]', className)}>
      <div className="flex items-center justify-between">
        <span className="filter-title">{label}</span>
        <span className="text-[12px] text-secondary-dark-text">
          {formatValue(value[0])} – {formatValue(value[1])}
        </span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        thumbLabels={[`${label}, minimum`, `${label}, maximum`]}
        onValueChange={(nextValue) => onChange([nextValue[0] ?? min, nextValue[1] ?? max])}
      />
    </div>
  );
}
