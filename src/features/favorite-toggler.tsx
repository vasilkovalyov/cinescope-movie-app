import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/ui';

type FavoriteTogglerProps = ComponentProps<typeof Toggle>;

export function FavoriteToggler({ className, ...props }: FavoriteTogglerProps) {
  return <Toggle className={cn(className)} {...props} />;
}
