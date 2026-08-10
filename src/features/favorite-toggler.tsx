import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/ui';

interface FavoriteTogglerProps extends PropsWithChildren {
  className?: string;
}

export function FavoriteToggler({ className, children }: FavoriteTogglerProps) {
  return <Toggle className={cn(className)}>{children}</Toggle>;
}
