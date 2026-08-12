import { SiteType, VideoType } from '../video.type';

export interface MovieVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: true;
  published_at: string;
  site: SiteType;
  size: number;
  type: VideoType;
}
