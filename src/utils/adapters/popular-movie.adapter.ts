import { SectionHomeHeroProps } from '@/components/sections';

import { AppendResponseCredits, AppendResponseVideos } from '@/types/append-response.type';
import { MovieDetails } from '@/types/movie/movie-details.type';

import { getFormatRuntime, getImageFullUrl, roundToDecimal } from '../common';

export function popularMovieAdapter(
  movie: MovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>,
): SectionHomeHeroProps {
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
  } = movie;

  const director = movie.credits.crew.find((person) => person.job === 'Director');

  return {
    id: id.toString(),
    title: title,
    tagline: tagline,
    overview: overview,
    image: getImageFullUrl(backdrop_path),
    voteAverage: roundToDecimal(vote_average),
    releaseDate: new Date(release_date).getFullYear().toString(),
    director: director?.name || '',
    runtime: getFormatRuntime(runtime),
    featureGenre: genres.map((genre) => genre.name)[0] || '',
  };
}
