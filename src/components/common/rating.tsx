import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface RatingProps {
  value: string;
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

  return (
    <span
      className={cn('flex items-center text-success', {
        'gap-[4px]': size === 'xs',
        'gap-[6px]': size === 'base',
      })}
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
