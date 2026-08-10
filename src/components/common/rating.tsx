import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

import { getRatingColor } from '@/utils';

interface RatingProps {
  value: number;
  size?: 'xs' | 'base';
}

export function Rating({ value, size = 'base' }: RatingProps) {
  function getSizeIcon() {
    if (size === 'xs') {
      return 10;
    }

    return 20;
  }
  const iconSize = getSizeIcon();
  const colorClassName = getRatingColor(value);

  return (
    <span
      className={cn(
        'flex items-center',
        {
          'gap-[4px]': size === 'xs',
          'gap-[6px]': size === 'base',
        },
        colorClassName,
      )}
    >
      <Star width={iconSize} height={iconSize} fill="currentColor" color="currentColor" />
      <span
        className={cn({
          'text-[12px]': size === 'xs',
          'text-base': size === 'base',
        })}
      >
        {value}
      </span>
    </span>
  );
}
