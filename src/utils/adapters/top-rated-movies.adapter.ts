import { BannerRatedMovieProps } from '@/components/common';

import { AppendResponseCredits, AppendResponseVideos } from '@/types/append-response.type';
import { MovieDetails } from '@/types/movie/movie-details.type';

import { getImageFullUrl, roundToDecimal } from '../common';

export function topRatedMoviesAdapter(
  movies: MovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>[],
): BannerRatedMovieProps[] {
  return movies.map(({ id, genres, backdrop_path, title, vote_average }, index) => {
    const movieProps: BannerRatedMovieProps = {
      id: id.toString(),
      number: (index + 1).toString(),
      title,
      voteAverage: roundToDecimal(vote_average),
      genres,
      image: getImageFullUrl(backdrop_path),
    };

    return movieProps;
  });
}
