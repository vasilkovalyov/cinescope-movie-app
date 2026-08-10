'use client';

import { PropsWithChildren } from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

type SwiperCarouselProps = PropsWithChildren & SwiperProps;

export function SwiperCarousel({ children, ...props }: SwiperCarouselProps) {
  const slides = Array.isArray(children) ? children : [children];

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      slidesPerView={1}
      loop
      pagination={{
        clickable: true,
      }}
      {...props}
    >
      {slides.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
