import {
  AppendResponseCredits,
  AppendResponseVideos,
  TopTrandingMoviesAppendResponseParams,
} from '../types/append-response.type';
import { MovieDetails } from '../types/movie/movie-details.type';
import { getMovieDetails } from './movie-details';
import { getMovieTopRated } from './movie-top-rated';

export async function getTopRatedMovies(
  params: TopTrandingMoviesAppendResponseParams,
): Promise<MovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>[]> {
  const movies = await getMovieTopRated();
  const topMovieIds = movies.results.slice(0, params.topSize).map((item) => item.id);

  return await Promise.all(
    topMovieIds.map((id) =>
      getMovieDetails<AppendResponseCredits, undefined, undefined, AppendResponseVideos>(id),
    ),
  );
}
