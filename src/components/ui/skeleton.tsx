import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-md bg-accent bg-navigation-mobile-bg', className)}
      {...props}
    />
  );
}

export { Skeleton };
