import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import {
  PreviewMovieCard,
  PreviewMovieCardProps,
  PreviewPersonCard,
  PreviewPersonCardProps,
  SwiperCarousel,
} from '@/components/common';
import { Button } from '@/components/ui';

import { SectionListPreviewProps } from './section-list-preview.type';

export function SectionListPreview({
  title,
  subtitle,
  link,
  type = 'movie',
  items,
}: SectionListPreviewProps) {
  return (
    <section className="py-[20px] md:py-[40px]">
      <div className="container">
        <div className="flex flex-col flex-wrap gap-[12px] justify-between mb-[24px] sm:items-end sm:flex-row">
          <div>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <div>
            <Button asChild variant="link" size="none">
              <Link href={link}>
                View all
                <ChevronRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <SwiperCarousel
            loop={false}
            slidesPerView="auto"
            spaceBetween="16px"
            slideClassName="!w-auto"
            pagination={{
              clickable: false,
              enabled: false,
            }}
            navigation={true}
          >
            {items.length ? (
              items.map((item) => {
                if (type === 'person') {
                  return <PreviewPersonCard key={item.id} {...(item as PreviewPersonCardProps)} />;
                }

                return <PreviewMovieCard key={item.id} {...(item as PreviewMovieCardProps)} />;
              })
            ) : (
              <p className="text-light">No information</p>
            )}
          </SwiperCarousel>
        </div>
      </div>
    </section>
  );
}
