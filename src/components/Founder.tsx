import React from 'react';
import { Github, Linkedin, Mail, Twitter, Leaf, Brain, Database, Blocks } from 'lucide-react';

const Founder = () => {
  return (
    <div id="founder" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dwtrhbzl9/image/upload/v1730478012/Screenshot_2024-11-01_at_9.49.48_PM_xsmjv7.png"
              alt="Kumar Mayank"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/Iamkrmayank" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/kumar-mayank-392381168/" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="krmayank2002@gmail.com" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Mail className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Kumar Mayank
            </h2>
            <p className="mt-4 text-lg text-green-600 dark:text-green-500 font-semibold">
              Innovator | AI & ML Researcher | Blockchain Expert
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Pioneering the intersection of sustainability and technology to create impactful solutions 
              for the global housing crisis through CLIFIx's innovative carbon marketplace.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI & ML Research</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Developing intelligent solutions for sustainable housing and carbon credit verification
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Blocks className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Blockchain Innovation</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Creating transparent and efficient carbon credit trading systems
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sustainability Focus</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Leading initiatives for eco-friendly housing solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data-Driven Approach</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Leveraging data analytics for optimal housing solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;