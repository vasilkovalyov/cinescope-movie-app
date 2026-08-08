import Link from 'next/link';

import clsx from 'clsx';

interface LogoProps {
  size?: 'small' | 'medium';
}

const LOGO_TEXT = 'CineScope';

export function Logo({ size = 'medium' }: LogoProps) {
  return (
    <Link href="/" className="inline-flex">
      <span className="flex items-center gap-2 flex-shrink-0 mr-2">
        <span
          className={clsx('rounded-[8px] bg-primary flex items-center justify-center', {
            'w-[28] h-[28]': size === 'small',
            'w-[32] h-[32]': size === 'medium',
          })}
        >
          <svg
            className={clsx('w-4 h-4 text-dark-text', {
              'w-[14] h-[14]': size === 'small',
              'w-[16] h-[16]': size === 'medium',
            })}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </span>
        <span
          className={clsx('font-display text-light tracking-tight font-heading', {
            'text-[18px]': size === 'small',
            'text-[20px]': size === 'medium',
          })}
        >
          {LOGO_TEXT}
        </span>
      </span>
    </Link>
  );
}
