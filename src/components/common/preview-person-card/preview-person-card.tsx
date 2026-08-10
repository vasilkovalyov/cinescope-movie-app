import Image from 'next/image';
import Link from 'next/link';

import { PreviewPersonCardProps } from './preview-person-card.type';

export function PreviewPersonCard({ title, subtitleInfo, image, link }: PreviewPersonCardProps) {
  return (
    <Link className="flex-shrink-0 w-[150px] md:w-[160px] group text-center" href={link}>
      <div className="relative overflow-hidden rounded-xl bg-[#0D1221] aspect-[2/3] mb-3">
        <Image
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-[#E2E8F4] text-sm font-medium leading-tight line-clamp-1 mb-0.5 group-hover:text-[#D4A853] transition-colors">
        {title}
      </h3>
      <p className="text-[#6B7A99] text-xs">{subtitleInfo}</p>
    </Link>
  );
}
