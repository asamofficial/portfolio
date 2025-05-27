import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              {Object.entries(personalInfo.socialLinks).map(([platform, url], index) => (
                <a 
                  key={index}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                  aria-label={`Visit ${platform}`}
                >
                  <img 
                    src={`https://api.iconify.design/mdi/${platform}.svg`}
                    alt={platform} 
                    className="w-5 h-5 dark:invert" 
                  />
                </a>
              ))}
            </div>
            
            <a 
              href="#home" 
              className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;