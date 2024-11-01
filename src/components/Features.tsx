import React from 'react';
import { Building2, Users, Sprout, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Sustainable Housing',
      description: 'Eco-friendly building solutions that reduce carbon footprint while providing affordable homes.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Stakeholder Collaboration',
      description: 'Connecting architects, banks, corporations, and government bodies for inclusive development.'
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: 'Carbon Credits',
      description: 'Generate and trade carbon credits through sustainable housing development.'
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: 'Market Growth',
      description: 'Access to a $3 billion market potential in climate finance and carbon trading.'
    }
  ];

  return (
    <div id="features" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Transforming Housing Through Innovation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our platform combines sustainable development with climate finance to create
            affordable housing solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="rounded-lg bg-green-600 p-3 text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;