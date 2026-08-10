import { BannerRatedMovie, type BannerRatedMovieProps, SwiperCarousel } from '@/components/common';

interface SectionTopRatedMoviesProps {
  items: BannerRatedMovieProps[];
}

export function SectionTopRatedMovies({ items }: SectionTopRatedMoviesProps) {
  return (
    <section className="section-top-rated-movies">
      <div className="container">
        <SwiperCarousel
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          {items.map((item) => (
            <BannerRatedMovie key={item.number} {...item} />
          ))}
        </SwiperCarousel>
      </div>
    </section>
  );
}
