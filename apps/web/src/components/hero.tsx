import React from 'react';
import { HeroClient } from './hero-client';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Solid black background */}
      <div className="absolute inset-0" style={{ background: '#000000' }} />
      <HeroClient />
    </section>
  );
};
