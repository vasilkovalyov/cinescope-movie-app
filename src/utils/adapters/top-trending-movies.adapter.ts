import { BannerTrandingMovieProps } from '@/components/common';

import { AppendResponseCredits, AppendResponseVideos } from '@/types/append-response.type';
import { MovieDetails } from '@/types/movie/movie-details.type';

export function topTrendingMoviesAdapter(
  movies: MovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>[],
): BannerTrandingMovieProps[] {
  return movies.map(({ id, genres, backdrop_path, title, vote_average }, index) => {
    const movieProps: BannerTrandingMovieProps = {
      id: id.toString(),
      number: (index + 1).toString(),
      title,
      voteAverage: vote_average.toFixed(1),
      genres,
      image: backdrop_path,
    };

    return movieProps;
  });
}
