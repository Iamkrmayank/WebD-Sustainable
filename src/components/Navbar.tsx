import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">CLIFIx</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Features</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Projects</a>
            <a href="#impact" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Impact</a>
            <a href="#founder" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Founder</a>
            <ThemeToggle />
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Join Platform
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 dark:text-white" /> : <Menu className="h-6 w-6 dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <a href="#features" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Features</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Projects</a>
            <a href="#impact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Impact</a>
            <a href="#founder" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Founder</a>
            <button className="w-full text-left px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Join Platform
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;