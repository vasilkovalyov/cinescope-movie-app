import { Fragment } from 'react/jsx-runtime';

import { Rating } from './rating';

interface MovieMetaProps {
  rating: number;
  details: {
    id: string;
    value: string;
  }[];
}

export function MovieMeta({ rating, details }: MovieMetaProps) {
  return (
    <ul className="flex flex-wrap items-center gap-[20px] mb-[24px] text-primary-dark-text">
      <li>
        <Rating value={rating} size="lg" />
      </li>
      {details.map(({ value, id }, index, list) => (
        <Fragment key={id}>
          {list.length !== index && <li className="w-px h-4 bg-divider" />}
          <li>{value}</li>
        </Fragment>
      ))}
    </ul>
  );
}
