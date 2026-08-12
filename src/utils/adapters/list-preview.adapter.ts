import type { PreviewMovieCardProps, PreviewPersonCardProps } from '@/components/common';

import { PAGES } from '@/constants';

import { MovieResolved, TVSeriesDetails, TVSeriesNetwork } from '@/types/movie';
import { People } from '@/types/people.type';

import { getImageUrl, roundToDecimal } from '../common';

export function listMoviesPreviewAdapter(movies: MovieResolved[]): PreviewMovieCardProps[] {
  return movies.map(({ id, title, release_date, poster_path, genres, vote_average }) => {
    const movieProps: PreviewMovieCardProps = {
      id: id.toString(),
      title: title,
      subtitleInfo: new Date(release_date).getFullYear().toString(),
      link: `${PAGES.movie}/${id}`,
      image: poster_path ? getImageUrl(poster_path, 'poster') : null,
      genres: genres,
      rating: roundToDecimal(vote_average),
    };
    return movieProps;
  });
}

function tvSeriesNetworkList(networkList: TVSeriesNetwork[]): string | null {
  if (!networkList.length) return null;
  const t = networkList.map((network) => {
    return network.name;
  });

  return t.join(' · ');
}

export function listTVSeriesPreviewAdapter(tvSeries: TVSeriesDetails[]): PreviewMovieCardProps[] {
  return tvSeries.map(
    ({ id, name, seasons, networks, status, poster_path, genres, vote_average }) => {
      const networkList = tvSeriesNetworkList(networks);

      const movieProps: PreviewMovieCardProps = {
        id: id.toString(),
        title: name,
        subtitleInfo: `Seasons ${seasons.length} ${networkList ? ' · ' + networkList : ''}`,
        link: `${PAGES.movie}/${id}`,
        image: poster_path ? getImageUrl(poster_path, 'poster') : null,
        genres: genres,
        rating: roundToDecimal(vote_average),
        status: status,
      };
      return movieProps;
    },
  );
}

export function listPeoplePreviewAdapter(people: People[]): PreviewPersonCardProps[] {
  return people.map<PreviewPersonCardProps>(({ id, profile_path, name, known_for_department }) => {
    return {
      id,
      image: profile_path ? getImageUrl(profile_path, 'poster') : null,
      link: `${PAGES.person}/${id}`,
      title: name,
      subtitleInfo: known_for_department,
    };
  });
}
