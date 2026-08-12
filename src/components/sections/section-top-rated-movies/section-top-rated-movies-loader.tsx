import { Skeleton } from '@/components/ui';

export function SectionTopRatedMoviesLoader() {
  return (
    <section className="section-top-rated-movies">
      <div className="container">
        <Skeleton className="h-[192px] w-full rounded-[16px] md:h-[256px] lg:h-[320px]" />
      </div>
    </section>
  );
}
