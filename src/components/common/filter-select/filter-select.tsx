'use client';

import { cn } from '@/lib/utils';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';

import { FilterSelectProps } from './filter-select.type';

export function FilterSelect({
  label,
  items,
  value,
  onChange,
  placeholder,
  className,
}: FilterSelectProps) {
  return (
    <div className={cn('grid gap-[12px]', className)}>
      <span className="filter-title">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger aria-label={label} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
