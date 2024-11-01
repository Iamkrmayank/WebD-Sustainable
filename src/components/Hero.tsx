import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 pt-16 transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Transforming Housing Through
              <span className="text-green-600 dark:text-green-500"> Climate Finance</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Connecting sustainable housing projects with carbon credit markets to make
              affordable housing a reality for 169 million Indians while fighting climate change.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-700 flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button className="text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-500">
                Learn more →
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Sustainable Housing Project"
              className="rounded-2xl object-cover w-full h-[600px]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;