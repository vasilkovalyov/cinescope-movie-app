import { EditorPickBannerProps } from '@/components/sections';

import { PAGES } from '@/constants';

import { MovieResolved } from '@/types/movie';

import { getImageFullUrl, roundToDecimal } from '../common';

export function editorSectionPickBannerAdapter(movie: MovieResolved): EditorPickBannerProps {
  const { id, title, overview, backdrop_path, vote_average, genres } = movie;

  return {
    title: title,
    overview: overview,
    image: getImageFullUrl(backdrop_path),
    rating: roundToDecimal(vote_average),
    genres: genres,
    link: `${PAGES.movie}/${id}`,
  };
}
