import { MovieTrending } from '../types/movie/movie-trending.type';

export function getTrendingMovies(): Promise<MovieTrending[]> {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, {
    method: 'GET',
    headers: { accept: 'application/json', Authorization: `Bearer ${process.env.MOVIE_API_KEY}` },
  })
    .then((res) => res.json())
    .then((data) => data.results);
}
