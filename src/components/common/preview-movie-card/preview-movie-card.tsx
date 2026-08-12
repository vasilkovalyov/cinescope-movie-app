import Image from 'next/image';
import Link from 'next/link';

import { FavoriteToggler } from '@/features';
import { Film, Heart } from 'lucide-react';

import { Badge } from '@/components/ui';

import { GenreList } from '../genre-list';
import { Rating } from '../rating';
import { PreviewMovieCardProps } from './preview-movie-card.type';

export function PreviewMovieCard({
  image,
  genres,
  link,
  subtitleInfo,
  title,
  rating,
  status,
}: PreviewMovieCardProps) {
  return (
    <div className="relative flex-shrink-0 w-[160px] md:w-[180px] group">
      <Link className="block" href={link}>
        <div className="relative overflow-hidden rounded-[12px] bg-navigation-mobile-bg aspect-[2/3] mb-[12px]">
          {image ? (
            <Image
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={image}
              width={180}
              height={270}
              loading="lazy"
            />
          ) : (
            <div className="flex aspect-[2/3] items-center justify-center bg-muted">
              <Film className="size-10 text-muted-foreground" />
            </div>
          )}
          <div className="card-overlay-gradient" />
          <div className="absolute top-2 right-2">
            <div className="bg-dark/80 backdrop-blur-[8px] rounded-[8px] px-[6px] py-[2px]">
              <Rating value={rating} size="sm" />
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-[12px] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            {genres.length ? <GenreList items={genres} color="secondary" gap="sm" /> : null}
          </div>
        </div>
        <h6 className="font-base line-clamp-2 mb-[4px] group-hover:text-primary transition-colors">
          {title}
        </h6>
        <p className="text-primary-dark-text line-clamp-2 text-[12px]">{subtitleInfo}</p>
      </Link>
      <div className="absolute top-[8px] left-[8px]">
        {status && (
          <Badge
            variant="success"
            className="text-[9px] mb-[8px] font-semibold uppercase tracking-wider inline-flex max-w-[120px] truncate block"
          >
            {status}
          </Badge>
        )}
        <FavoriteToggler
          aria-label="Add to favorites"
          className="size-[32px] rounded-[8px] flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 bg-dark/80 backdrop-blur-[8px] text-primary-dark-text hover:text-danger aria-pressed:bg-primary aria-pressed:text-dark cursor-pointer"
        >
          <Heart />
        </FavoriteToggler>
      </div>
    </div>
  );
}
