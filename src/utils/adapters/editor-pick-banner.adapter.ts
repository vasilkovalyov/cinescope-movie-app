import { SectionEditorPickBannerProps } from '@/components/sections';

import { PAGES } from '@/constants';

import { MovieResolved } from '@/types/movie';

import { getImageUrl, roundToDecimal } from '../common';

export function editorSectionPickBannerAdapter(movie: MovieResolved): SectionEditorPickBannerProps {
  const { id, title, overview, backdrop_path, vote_average, genres } = movie;

  return {
    title: title,
    overview: overview,
    image: getImageUrl(backdrop_path, 'tablet'),
    rating: roundToDecimal(vote_average),
    genres: genres,
    link: `${PAGES.movie}/${id}`,
  };
}
