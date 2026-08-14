'use client';

import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui';

import { SearchInputProps } from './search-input.type';

export function SearchInput({
  value,
  onChange,
  placeholder,
  className,
  label,
  useIconSearch,
  useClearSearch,
  ...props
}: SearchInputProps) {
  return (
    <div className="grid gap-[12px]">
      {label && <span className="filter-title">{label}</span>}
      <InputGroup className={cn(className)}>
        {useIconSearch && (
          <InputGroupAddon>
            <Search aria-hidden="true" />
          </InputGroupAddon>
        )}
        <InputGroupInput
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          {...props}
        />
        {useClearSearch && value && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              type="button"
              aria-label="Clear search"
              size="icon-xs"
              onClick={() => onChange('')}
            >
              <X aria-hidden="true" />
            </InputGroupButton>
          </InputGroupAddon>
        )}
      </InputGroup>
    </div>
  );
}
