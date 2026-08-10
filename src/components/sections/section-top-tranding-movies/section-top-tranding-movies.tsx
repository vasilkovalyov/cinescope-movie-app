import { BannerTrandingMovie, BannerTrandingMovieProps, SwiperCarousel } from '@/components/common';

interface SectionTopTrandingMoviesProps {
  items: BannerTrandingMovieProps[];
}

export function SectionTopTrandingMovies({ items }: SectionTopTrandingMoviesProps) {
  return (
    <section>
      <div className="container">
        <SwiperCarousel
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          {items.map((item) => (
            <BannerTrandingMovie key={item.number} {...item} />
          ))}
        </SwiperCarousel>
      </div>
    </section>
  );
}
