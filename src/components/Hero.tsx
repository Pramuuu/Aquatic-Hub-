
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-ocean-50 dark:bg-gray-900 py-16 sm:py-24">
      {/* Background bubbles */}
      <div className="bg-bubble w-64 h-64 left-[10%] top-[20%] opacity-70"></div>
      <div className="bg-bubble w-48 h-48 right-[15%] bottom-[30%] opacity-50"></div>
      <div className="bg-bubble w-32 h-32 left-[30%] bottom-[10%] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-ocean-900 dark:text-ocean-100 sm:text-5xl md:text-6xl">
            <span className="block">Aquatic Creatures</span>
            <span className="block text-transparent bg-clip-text bg-ocean-gradient">Prediction Platform</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore, identify, and learn about aquatic species from around the world
            with our AI-powered platform.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Button className="bg-ocean-gradient w-full flex items-center justify-center">
                Explore Species <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full bg-white dark:bg-gray-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
