import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { personalInfo } from '../data/personalInfo';
import { MapPin, Mail, Phone, FileText, Download } from 'lucide-react';

const About: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const aboutContent = {
    bio: `
      I'm a seasoned IT professional with 2 years of freelance experience in creating scalable, efficient software solutions that solve real-world problems. 
      With expertise across the full stack, from front-end development to back-end systems and cloud infrastructure.
      
      My approach combines technical excellence with a strong focus on user experience and business needs. I believe in writing clean, maintainable code and implementing best practices that ensure long-term project success.
      
      Throughout my career, I've worked with diverse clients in both startup and enterprise environments, contributing to projects that have made significant impacts for users.
    `,
    specialties: [
      'Full-Stack Development',
      'Cloud Architecture',
      'DevOps & CI/CD',
      'Microservices',
      'Database Design',
      'System Optimization',
      'Security Implementation'
    ]
  };

  const handleResumeDownload = async (url: string, filename: string) => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Failed to download resume:', error);
      alert('Failed to download resume. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my background and expertise"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GlassmorphicCard className="p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Background</h3>
              
              {aboutContent.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {aboutContent.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </GlassmorphicCard>
          </div>
          
          <div>
            <GlassmorphicCard className="p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personal Info</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-700 dark:text-gray-300">{personalInfo.location}</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-3 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <FileText className="w-5 h-5 mt-1 mr-3 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Resumes</p>
                    <div className="space-y-2 mt-2">
                      <button 
                        onClick={() => handleResumeDownload(personalInfo.resumes.primary, 'resume.pdf')}
                        disabled={isDownloading}
                        className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDownloading ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-500 border-t-transparent mr-2" />
                        ) : (
                          <Download size={16} className="mr-2" />
                        )}
                        <span>Download Resume (PDF)</span>
                      </button>
                      <button 
                        onClick={() => handleResumeDownload(personalInfo.resumes.secondary, 'cv.pdf')}
                        disabled={isDownloading}
                        className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDownloading ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-500 border-t-transparent mr-2" />
                        ) : (
                          <Download size={16} className="mr-2" />
                        )}
                        <span>Download CV (PDF)</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Connect With Me</h4>
                <div className="flex gap-4">
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
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;