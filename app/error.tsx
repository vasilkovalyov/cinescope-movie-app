'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui';

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h2 className="text-light mb-[12px]">Something went wrong!</h2>
        <Button onClick={() => retry()}>Try again</Button>
      </div>
    </div>
  );
}
