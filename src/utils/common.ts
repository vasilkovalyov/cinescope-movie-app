import { IMAGE_URL } from '@/constants';

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
