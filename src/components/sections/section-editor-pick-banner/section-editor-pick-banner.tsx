import Image from 'next/image';
import Link from 'next/link';

import { GenreList } from '@/components/common';
import { Rating } from '@/components/common/rating';
import { Button } from '@/components/ui';

import { SectionEditorPickBannerProps } from './section-editor-pick-banner.type';

export async function SectionEditorPickBanner({
  image,
  title,
  overview,
  rating,
  genres,
  link,
}: SectionEditorPickBannerProps) {
  return (
    <section>
      <div className="container">
        <div className="relative overflow-hidden rounded-[16px] mb-[48px] bg-navigation-mobile-bg border border-[rgba(255,255,255,0.07)]">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[216px] md:h-auto overflow-hidden">
              <Image
                src={image}
                alt={title}
                className="size-full object-cover opacity-70"
                fill={true}
                sizes="(max-width: 768px) 100vw, 768px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navigation-mobile-bg hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-navigation-mobile-bg to-transparent md:hidden" />
            </div>
            <div className="p-[32px] md:p-[40px]">
              <span className="pretitle mb-[12px]">Editor`s Pick</span>
              <h2 className="font-display text-light mb-[12px]">{title}</h2>
              <p className="text-secondary-dark-text mb-[20px] line-clamp-3">{overview}</p>
              <div className="flex items-center gap-[12px] mb-[24px]">
                <Rating value={rating} />
                <GenreList items={genres} color="secondary" />
              </div>
              <Button asChild>
                <Link href={link}>Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
