'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceCardProps {
  number: string;
  image: string;
  title: string;
  description?: string;
  link?: string;
}

export function ServiceCard({ number, image, title, description, link }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Number overlay */}
        <div className="absolute bottom-0 right-0 bg-red-600 text-white p-2 px-4 font-bold text-xl anton">
          {number}
        </div>

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center px-4">
            <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
            {description && (
              <p className="text-white/80 text-sm">
                {description}
              </p>
            )}
            {link && (
              <Link
                href={link}
                className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors"
              >
                了解更多
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Title below image */}
      <div className="mt-2 text-center">
        <h3 className="text-gray-800 font-medium">{title}</h3>
      </div>
    </div>
  );
}
