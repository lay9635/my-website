'use client';

import Image from 'next/image';

interface BenefitCardProps {
  number: string;
  image: string;
  title: string;
  description?: string;
}

export function BenefitCard({ number, image, title, description }: BenefitCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-md">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Number overlay */}
        <div className="absolute bottom-0 right-0 bg-red-600 text-white p-2 px-4 font-bold text-xl anton">
          {number}
        </div>
      </div>

      {/* Title and description below image */}
      <div className="mt-3 text-center">
        <h3 className="text-gray-800 font-medium text-lg">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mt-1 px-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
