import { cn } from '@/lib/utils';

import { MovieGenre } from '@/types/movie';

import { Badge } from '../ui';

interface GenreListProps {
  items: MovieGenre[];
  size?: 'xs' | 'base';
  color?: 'default' | 'secondary';
  gap?: 'sm' | 'md' | 'none';
}

export function GenreList({ items, size = 'base', color = 'default', gap = 'md' }: GenreListProps) {
  return (
    <ul
      className={cn('flex flex-wrap items-center text-primary-dark-text', {
        'gap-[4px]': gap === 'sm',
        'gap-[12px]': gap === 'md',
      })}
    >
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
