import { Star } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';

interface MovieMetaProps {
  rating: string;
  details: {
    id: string;
    value: string;
  }[];
}

export function MovieMeta({ rating, details }: MovieMetaProps) {
  return (
    <ul className="flex flex-wrap items-center gap-[20px] mb-[24px] text-primary-dark-text">
      <li>
        <span className="flex items-center gap-[6px] text-success">
          <Star width={20} height={20} fill="currentColor" color="currentColor" />
          <span className="text-base">{rating}</span>
        </span>
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
