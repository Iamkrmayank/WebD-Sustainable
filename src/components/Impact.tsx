import React from 'react';
import { Home, Shield, Globe } from 'lucide-react';

const Impact = () => {
  return (
    <div id="impact" className="bg-green-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-6 text-lg leading-8 text-green-100">
            Making a difference through sustainable housing and climate action
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {[
              {
                icon: <Home className="h-8 w-8" />,
                title: 'Housing Access',
                description: 'Providing safe and affordable housing to millions of families in need.'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Environmental Protection',
                description: 'Reducing carbon emissions through sustainable building practices.'
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: 'Global Collaboration',
                description: 'Connecting stakeholders worldwide for sustainable development.'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="rounded-lg bg-white p-3 text-green-600">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-green-100">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;