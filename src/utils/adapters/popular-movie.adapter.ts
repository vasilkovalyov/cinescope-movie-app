import { SectionHeroLargeProps } from '@/components/sections';

import { MovieHomeHeroDetails } from '@/types/movie/movie-details.type';

import { getFormatRuntime, getImageUrl, getTrailerUrl, roundToDecimal } from '../common';

export function popularMovieHomeHeroAdapter(movie: MovieHomeHeroDetails): SectionHeroLargeProps {
  const {
    id,
    title,
    tagline,
    overview,
    backdrop_path,
    genres,
    vote_average,
    release_date,
    runtime,
    videos,
  } = movie;

  const director = movie.credits.crew.find((person) => person.job === 'Director');

  return {
    id: id.toString(),
    title: title,
    tagline: tagline,
    overview: overview,
    image: getImageUrl(backdrop_path, 'wide'),
    rating: roundToDecimal(vote_average),
    releaseDate: new Date(release_date).getFullYear().toString(),
    director: director?.name || '',
    runtime: getFormatRuntime(runtime),
    featureGenre: genres.map((genre) => genre.name)[0] || '',
    trailerUrl: getTrailerUrl(videos.results),
  };
}
