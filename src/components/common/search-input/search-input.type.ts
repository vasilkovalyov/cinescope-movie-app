import { ComponentProps } from 'react';

export interface SearchInputProps extends Omit<ComponentProps<'input'>, 'value' | 'onChange'> {
  value: string;
  label?: string;
  useIconSearch?: boolean;
  useClearSearch?: boolean;
  onChange: (value: string) => void;
}
