import { cn } from '@/lib/utils';

import { MovieGenre } from '@/types/movie';

import { Badge } from '../ui';

interface GenreListProps {
  items: MovieGenre[];
  size?: 'xs' | 'base';
  color?: 'default' | 'secondary';
}

export function GenreList({ items, size = 'base', color = 'default' }: GenreListProps) {
  return (
    <ul className="flex flex-wrap items-center gap-[12px] text-primary-dark-text">
      {items.map(({ id, name }) => (
        <li key={id}>
          <Badge
            variant={color}
            className={cn({
              'text-[10px]': size === 'base',
            })}
          >
            {name}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
