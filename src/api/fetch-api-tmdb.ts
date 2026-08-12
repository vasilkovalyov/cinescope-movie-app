import { MOVIE_API_URL } from '@/constants';

type FetchGetParams = Record<string, string | number | boolean | undefined>;

export async function fetchGetApiTMDB<T>(
  url: string,
  params?: FetchGetParams,
  requestOptions?: RequestInit,
): Promise<T> {
  const searchParams = params
    ? new URLSearchParams(
        Object.entries(params)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => [key, String(value)]),
      )
    : null;

  const response = await fetch(`${MOVIE_API_URL}${url}${searchParams ? `?${searchParams}` : ''}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
    ...requestOptions,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  return response.json() as Promise<T>;
}
