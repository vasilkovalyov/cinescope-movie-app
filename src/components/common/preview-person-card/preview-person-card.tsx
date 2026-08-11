import Image from 'next/image';
import Link from 'next/link';

import { PersonStanding } from 'lucide-react';

import { PreviewPersonCardProps } from './preview-person-card.type';

export function PreviewPersonCard({ title, subtitleInfo, image, link }: PreviewPersonCardProps) {
  return (
    <div className="relative flex-shrink-0 w-[160px] group">
      <Link className="block" href={link}>
        <div className="relative overflow-hidden rounded-[12px] bg-navigation-mobile-bg aspect-[2/3] mb-[12px]">
          {image ? (
            <Image
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={image}
              width={160}
              height={240}
            />
          ) : (
            <div className="flex aspect-[2/3] items-center justify-center bg-muted">
              <PersonStanding className="size-10 text-muted-foreground" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h6 className="font-base line-clamp-2 mb-[4px] group-hover:text-primary transition-colors">
          {title}
        </h6>
        <p className="text-primary-dark-text line-clamp-2 text-[12px]">{subtitleInfo}</p>
      </Link>
    </div>
  );
}
