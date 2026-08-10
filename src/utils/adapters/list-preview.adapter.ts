import type { PreviewMovieCardProps } from '@/components/common';

import { PAGES } from '@/constants';

import { MovieDetails } from '@/types/movie';

import { getImageFullUrl, roundToDecimal } from '../common';

export function listMoviesPreviewAdapter(movies: MovieDetails[]): PreviewMovieCardProps[] {
  return movies.map(({ id, title, release_date, poster_path, genres, vote_average }) => {
    const movieProps: PreviewMovieCardProps = {
      id: id.toString(),
      title: title,
      subtitleInfo: new Date(release_date).getFullYear().toString(),
      link: `${PAGES.movies}/${id}`,
      image: getImageFullUrl(poster_path),
      genres: genres,
      voteAverage: roundToDecimal(vote_average),
    };
    return movieProps;
  });
}
