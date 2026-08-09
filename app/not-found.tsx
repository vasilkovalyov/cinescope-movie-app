import Link from 'next/link';

import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <div className="font-heading text-[96px] text-primary mb-[16px] leading-[1]">404</div>
        <h2 className="text-light mb-[12px]">Page not found</h2>
        <p className="text-base mb-[32px]">The page you`re looking for doesn`t exist.</p>
        <Button asChild>
          <Link href={PAGES.home}>Go home</Link>
        </Button>
      </div>
    </div>
  );
}
