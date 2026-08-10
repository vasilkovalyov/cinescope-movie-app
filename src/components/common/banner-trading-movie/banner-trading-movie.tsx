import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

import { GenreList } from '../genre-list';
import { Rating } from '../rating';
import { BannerTrandingMovieProps } from './banner-trading-movie.type';

export function BannerTrandingMovie({
  id,
  number,
  title,
  voteAverage,
  genres,
  image,
}: BannerTrandingMovieProps) {
  return (
    <div className="relative h-[192px] overflow-hidden md:h-[256px] lg:h-[320px] flex flex-col justify-center rounded-[16px] border border-white/5">
      <div className="absolute inset-0">
        <Image
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={title}
          fill={true}
          className="w-full h-full object-cover "
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-transparent" />
      </div>

      <div className="container relative">
        <div className="max-w-[300px]">
          <div className="uppercase text-primary font-semibold text-[12px] tracking-[1.2] mb-[8px]">
            trending #{number}
          </div>
          <h3 className="mb-[8px] leading-[1]">{title}</h3>
          <div className="flex items-center gap-[12px] mb-[16px]">
            <Rating value={voteAverage} size="xs" />
            <GenreList items={genres} color="secondary" />
          </div>
          <Button asChild variant="link" size="none">
            <Link href={`${PAGES.movies}/${id}`}>
              View details
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
