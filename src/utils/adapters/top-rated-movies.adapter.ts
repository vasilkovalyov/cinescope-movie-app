import { BannerRatedMovieProps } from '@/components/common';

import { MovieResolved } from '@/types/movie';

import { getImageUrl, roundToDecimal } from '../common';

export function topRatedMoviesAdapter(movies: MovieResolved[]): BannerRatedMovieProps[] {
  return movies.map(({ id, genres, backdrop_path, title, vote_average }, index) => {
    const movieProps: BannerRatedMovieProps = {
      id: id.toString(),
      number: (index + 1).toString(),
      title,
      rating: roundToDecimal(vote_average),
      genres,
      image: getImageUrl(backdrop_path, 'wide'),
    };

    return movieProps;
  });
}
