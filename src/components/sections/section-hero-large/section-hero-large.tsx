import Image from 'next/image';
import Link from 'next/link';

import { InfoIcon, PlayIcon } from 'lucide-react';

import { MovieMeta, MovieTrailerToggler } from '@/components/common';
import { Badge, Button } from '@/components/ui';

import { SectionHeroLargeProps } from './section-hero-large.type';

export function SectionHeroLarge({
  id,
  title,
  tagline,
  overview,
  image,
  featureGenre,
  rating,
  releaseDate,
  director,
  runtime,
  trailerUrl,
}: SectionHeroLargeProps) {
  const INFO_LIST = [
    {
      id: 'date',
      value: releaseDate,
    },
    {
      id: 'runtime',
      value: runtime,
    },
    {
      id: 'director',
      value: director,
    },
  ];

  return (
    <section className="relative flex flex-col justify-center h-[85vh] min-h-[600px] max-h-[900px]">
      <div className="absolute inset-0 bg-dark">
        <Image
          src={image}
          alt={title}
          className="object-cover"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>
      <div className="container relative">
        <div className="max-w-[576px] pt-[60px]">
          <div className="flex items-center gap-[6px]">
            <span className="pretitle flex items-center gap-[6px]">
              <span className="w-[6px] h-[6px] rounded-full bg-primary animate-pulse" />
              Featured
            </span>
            <div className="h-px w-8 bg-primary/40" />
            <Badge>{featureGenre}</Badge>
          </div>
          <h1 className="md:text-[72px] mb-[16px] tracking-[-1.8px] leading-[1]">{title}</h1>
          <p className="font-heading text-lg text-primary italic mb-[20px]">{tagline}</p>
          <p className="text-base mb-[24px] line-clamp-3">{overview}</p>
          <MovieMeta rating={rating} details={INFO_LIST} />
          <div className="flex gap-[12px]">
            {trailerUrl && (
              <MovieTrailerToggler trailerUrl={trailerUrl}>
                <Button className="capitalize" size="lg">
                  <PlayIcon aria-hidden="true" fill="text-dark" />
                  watch trailer
                </Button>
              </MovieTrailerToggler>
            )}
            <Button className="capitalize" variant="secondary" size="lg" asChild>
              <Link href={`/movie/${id}`}>
                <InfoIcon aria-hidden="true" />
                more info
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[8px] opacity-40">
        <span className="text-light text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-[32px] bg-gradient-to-b from-light to-transparent" />
      </div>
    </section>
  );
}
