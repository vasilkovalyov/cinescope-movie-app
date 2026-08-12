import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

import { GenreList } from '../genre-list';
import { Rating } from '../rating';
import { BannerRatedMovieProps } from './banner-rated-movie.type';

export function BannerRatedMovie({
  id,
  number,
  title,
  rating,
  genres,
  image,
}: BannerRatedMovieProps) {
  return (
    <div className="relative h-[192px] overflow-hidden md:h-[256px] lg:h-[320px] flex flex-col justify-center rounded-[16px] border border-white/5">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="w-full h-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-transparent" />
      </div>

      <div className="container relative">
        <div className="max-w-[360px] py-[20px]">
          <div className="pretitle mb-[8px]">trending #{number}</div>
          <h2 className="mb-[8px] leading-[1]">{title}</h2>
          <div className="flex items-center gap-[12px] mb-[16px]">
            <Rating value={rating} size="sm" />
            <GenreList items={genres} gap="sm" color="secondary" />
          </div>
          <Button asChild variant="link" size="none">
            <Link href={`${PAGES.movies}/${id}`}>
              View details
              <ChevronRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
