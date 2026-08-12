'use client';

import { PropsWithChildren, useState } from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui';

interface MovieTrailerTogglerProps extends PropsWithChildren {
  trailerUrl: string;
}

export function MovieTrailerToggler({ trailerUrl, children }: MovieTrailerTogglerProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent>
          <iframe
            src={`${trailerUrl}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full aspect-[4/3] md:aspect-[16/9]"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
