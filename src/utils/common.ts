import { IMAGE_URL } from '@/constants';
import { PREVIEW_LIST_COUNT, YOUTUBE_EMBED_URL } from '@/constants/common.constant';

import { MovieVideo } from '@/types/movie/movie-video.type';

export function getFormatRuntime(runtime: number): string {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
}

export function getImageFullUrl(imageName: string): string {
  return `${IMAGE_URL}${imageName}`;
}

export function roundToDecimal(value: number, decimals = 1): number {
  const multiplier = 10 ** decimals;
  return Math.round(value * multiplier) / multiplier;
}

export function getRatingColor(rating: number) {
  if (rating >= 8) return 'text-success';
  if (rating >= 6) return 'text-yellow-500';
  if (rating >= 4) return 'text-orange-500';

  return 'text-red-500';
}

export function limitArray<T>(array: readonly T[], limit = PREVIEW_LIST_COUNT): T[] {
  return array.slice(0, limit);
}

export function getTrailerUrl(videos: MovieVideo[]): string | null {
  const trailer =
    videos.find(
      (video) =>
        video.site === 'YouTube' &&
        video.type === 'Trailer' &&
        video.name === 'Official Trailer' &&
        video.official,
    ) ??
    videos.find((video) => video.site === 'YouTube' && video.type === 'Trailer') ??
    videos.find((video) => video.site === 'YouTube');

  return trailer ? `${YOUTUBE_EMBED_URL}${trailer.key}` : null;
}
