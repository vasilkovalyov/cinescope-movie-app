import { GenresDictionary, getMovieEditorPick } from '@/api';

import { editorSectionPickBannerAdapter } from '@/utils/adapters';

import { SectionEditorPickBanner } from '../sections';

interface BlockComingSoonProps {
  genres: GenresDictionary;
}

export async function BlockEditorPickBanner({ genres }: BlockComingSoonProps) {
  const editorPickMovie = await getMovieEditorPick(genres);

  if (!editorPickMovie) return null;

  return <SectionEditorPickBanner {...editorSectionPickBannerAdapter(editorPickMovie)} />;
}
