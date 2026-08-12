import { cn } from '@/lib/utils';

import { Skeleton } from '@/components/ui';

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={cn('w-[160px] flex-shrink-0 md:w-[180px]', className)}>
      <Skeleton className="mb-[12px] aspect-[2/3] w-full rounded-[12px]" />
      <Skeleton className="mb-[4px] h-[14px] w-full" />
      <Skeleton className="h-[12px] w-2/3" />
    </div>
  );
}
