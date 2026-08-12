import { getPeoplePopularList } from '@/api';

import { PAGES } from '@/constants';

import { listPeoplePreviewAdapter } from '@/utils/adapters';

import { SectionListPreview } from '../sections';

export async function BlockNotablePeople() {
  const popularPeople = await getPeoplePopularList();

  return (
    <SectionListPreview
      title="Notable People"
      subtitle="Directors, actors, and creators to know"
      link={PAGES.people}
      type="person"
      items={listPeoplePreviewAdapter(popularPeople.results)}
    />
  );
}
