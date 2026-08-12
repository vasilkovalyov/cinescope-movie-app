import { BannerRatedMovie, type BannerRatedMovieProps, SwiperCarousel } from '@/components/common';

interface SectionTopRatedMoviesProps {
  movies: BannerRatedMovieProps[];
}

export function SectionTopRatedMovies({ movies }: SectionTopRatedMoviesProps) {
  return (
    <section className="section-top-rated-movies py-[40px]">
      <div className="container">
        <SwiperCarousel
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          {movies.map((movie) => (
            <BannerRatedMovie key={movie.number} {...movie} />
          ))}
        </SwiperCarousel>
      </div>
    </section>
  );
}
