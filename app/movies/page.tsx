import { GenresApi } from '@/api';

import { MoviesFilterPanel } from '@/components/common';
import { Button } from '@/components/ui';

export default async function Movies({
  searchParams,
}: {
  searchParams: Promise<{ genre?: string }>;
}) {
  const genresMoviesApi = await GenresApi.create('movie');
  const genres = Array.from(genresMoviesApi.allGenres ?? [], ([id, name]) => ({ id, name }));
  const searchParamsStr = await searchParams;
  const res = new URLSearchParams(searchParamsStr);

  return (
    <section className="pt-[96px]">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-4xl text-light mb-1">Discover Movies</h1>
            <p className="text-primary-dark-text text-sm">20 films found</p>
          </div>
        </div>
        <div className="flex gap-8">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="space-y-8">
                <MoviesFilterPanel genres={genres} />
              </div>
            </div>
          </aside>
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
              list
            </div>
            <div className="mt-10 text-center">
              <Button variant="secondary" size="lg">
                Load more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
