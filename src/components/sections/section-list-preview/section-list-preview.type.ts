import { PreviewMovieCardProps, PreviewPersonCardProps } from '@/components/common';

interface BaseSectionListPreviewProps {
  title: string;
  subtitle?: string;
  link: string;
}

interface MovieSectionListPreviewProps extends BaseSectionListPreviewProps {
  type: 'movie';
  items: PreviewMovieCardProps[];
}

interface PersonSectionListPreviewProps extends BaseSectionListPreviewProps {
  type: 'person';
  items: PreviewPersonCardProps[];
}

export type SectionListPreviewProps = MovieSectionListPreviewProps | PersonSectionListPreviewProps;
