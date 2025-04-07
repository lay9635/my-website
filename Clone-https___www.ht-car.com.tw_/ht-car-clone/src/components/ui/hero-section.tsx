'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

export function HeroSection({ backgroundImage, title, subtitle, description }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="hero-section relative pt-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 py-32">
        <div className="hero-content max-w-2xl">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-bold text-white transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block anton tracking-widest">{title}</span>
          </h1>
          <div
            className={`mt-6 transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="hero-subtitle text-2xl sm:text-3xl font-medium text-white">
              {subtitle}
            </h2>
          </div>
          <p
            className={`mt-8 text-lg text-white/90 max-w-lg transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Diagonal slice */}
      <div className="diagonal-slice absolute bottom-0 right-0 w-full h-16"></div>
    </div>
  );
}
