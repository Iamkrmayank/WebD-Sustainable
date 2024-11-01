import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Kibera Green Building',
      location: 'Kibera, Kenya',
      image: 'https://images.unsplash.com/photo-1590502593747-42a996133562',
      description: 'Sustainable housing project utilizing recycled materials and green building techniques.'
    },
    {
      title: 'Dharavi Solar Initiative',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
      description: 'Solar-powered community development project integrating renewable energy solutions.'
    }
  ];

  return (
    <div id="projects" className="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover how we're making sustainable housing a reality through innovative projects.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={index} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"></div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-500 dark:text-gray-400">2024</time>
                  <span className="text-gray-500 dark:text-gray-400">{project.location}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                    <span className="absolute inset-0"></span>
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;