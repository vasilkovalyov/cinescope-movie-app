'use client';

import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface SwiperCarouselProps extends PropsWithChildren, SwiperProps {
  slideClassName?: string;
}

export function SwiperCarousel({ children, slideClassName, ...props }: SwiperCarouselProps) {
  const slides = Array.isArray(children) ? children : [children];

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      slidesPerView={1}
      loop
      pagination={{
        clickable: true,
      }}

      {...props}
    >
      {slides.map((child, index) => (
        <SwiperSlide className={cn(slideClassName)} key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
