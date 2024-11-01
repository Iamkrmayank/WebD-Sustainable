import React from 'react';

const Stats = () => {
  return (
    <div className="bg-green-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
          {[
            { value: '169M', label: 'People Needing Housing' },
            { value: '$3B', label: 'Transaction Potential' },
            { value: '2K+', label: 'Projects Initiated' },
            { value: '50K', label: 'Carbon Credits Generated' },
          ].map((stat, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-5xl font-bold tracking-tight text-white">{stat.value}</dt>
              <dd className="text-lg leading-7 text-green-100">{stat.label}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;