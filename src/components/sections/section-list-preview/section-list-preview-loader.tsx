import { SkeletonCard } from '@/components/common';
import { Skeleton } from '@/components/ui';

const SKELETON_CARDS_COUNT = 6;

export function SectionListPreviewLoader() {
  return (
    <section className="py-[20px] md:py-[40px]">
      <div className="container">
        <div className="flex flex-col flex-wrap gap-[12px] justify-between mb-[24px] sm:items-end sm:flex-row">
          <div className="grid gap-[8px]">
            <Skeleton className="h-[24px] w-[200px]" />
            <Skeleton className="h-[14px] w-[260px]" />
          </div>
          <Skeleton className="h-[20px] w-[72px]" />
        </div>
        <div className="flex gap-[16px] overflow-hidden">
          {Array.from({ length: SKELETON_CARDS_COUNT }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
