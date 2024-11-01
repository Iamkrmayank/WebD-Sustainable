import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Projects from './components/Projects';
import Impact from './components/Impact';
import Founder from './components/Founder';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Features />
          <Projects />
          <Impact />
          <Founder />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;