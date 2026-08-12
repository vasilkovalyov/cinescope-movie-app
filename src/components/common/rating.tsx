import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

import { getRatingColor } from '@/utils';

interface RatingProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
}

export function Rating({ value, size = 'md' }: RatingProps) {
  function getSizeIcon() {
    if (size === 'sm') {
      return 10;
    }

    if (size === 'lg') {
      return 20;
    }

    return 16;
  }

  const iconSize = getSizeIcon();
  const colorClassName = getRatingColor(value);

  return (
    <span
      role="img"
      aria-label={`Rating: ${value} out of 10`}
      className={cn(
        'flex items-center',
        {
          'gap-[4px]': size === 'sm',
          'gap-[6px]': size === 'md' || size === 'lg',
        },
        colorClassName,
      )}
    >
      <Star
        aria-hidden="true"
        width={iconSize}
        height={iconSize}
        fill="currentColor"
        color="currentColor"
      />
      <span
        aria-hidden="true"
        className={cn({
          'text-[12px]': size === 'sm',
          'text-[14px]': size === 'md',
          'text-[16px]': size === 'lg',
        })}
      >
        {value}
      </span>
    </span>
  );
}
