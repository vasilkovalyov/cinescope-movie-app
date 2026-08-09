import { SectionHomeHeroProps } from '@/components/sections';

import {
  AppendResponseCredits,
  AppendResponseImages,
  AppendResponseKeywords,
  AppendResponseVideos,
} from '@/types/append-response.type';
import { MovieDetails } from '@/types/movie/movie-details.type';

import { getFormatRuntime } from '../common';

export function trendingMovieAdapter(
  movie: MovieDetails<
    AppendResponseCredits,
    AppendResponseImages,
    AppendResponseKeywords,
    AppendResponseVideos
  >,
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
    image: backdrop_path,
    voteAverage: vote_average.toFixed(1),
    releaseDate: new Date(release_date).getFullYear().toString(),
    director: director?.name || '',
    runtime: getFormatRuntime(runtime),
    featureGenre: genres.map((genre) => genre.name)[0] || '',
  };
}
