import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/30 dark:bg-primary/20 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-60 -right-40 w-80 h-80 bg-primary/40 dark:bg-primary/30 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-primary/20 dark:bg-primary/10 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-white dark:to-gray-400">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-600 dark:text-gray-300">{personalInfo.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">{personalInfo.shortBio}</p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-primary text-primary dark:border-white dark:text-white rounded-lg hover:bg-primary/10 dark:hover:bg-white/10 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex gap-4 mt-8">
              {Object.entries(personalInfo.socialLinks).map(([platform, url], index) => (
                <a 
                  key={index}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  aria-label={`Visit ${platform}`}
                >
                  <img 
                    src={`https://api.iconify.design/mdi/${platform}.svg`}
                    alt={platform} 
                    className="w-6 h-6 dark:invert" 
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 dark:border-primary/20 shadow-xl">
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/40 dark:to-black/60"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            className="text-primary dark:text-white hover:text-primary/80 dark:hover:text-white/80 transition-colors"
          >
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;