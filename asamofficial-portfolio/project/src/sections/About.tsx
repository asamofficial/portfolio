import React from 'react';
import SectionTitle from '../components/SectionTitle';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { personalInfo } from '../data/personalInfo';
import { MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const aboutContent = {
    bio: `
      I'm a seasoned IT professional with a passion for creating scalable, efficient software solutions that solve real-world problems. 
      With over 6 years of experience in software engineering, I've developed expertise across the full stack, from front-end development to back-end systems and cloud infrastructure.
      
      My approach combines technical excellence with a strong focus on user experience and business needs. I believe in writing clean, maintainable code and implementing best practices that ensure long-term project success.
      
      Throughout my career, I've worked with diverse teams in both startup and enterprise environments, contributing to projects that have made significant impacts for clients and users alike.
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return 'linkedin';
      case 'github':
        return 'github';
      case 'twitter':
        return 'twitter';
      default:
        return platform;
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
                        src={`https://cdn.simpleicons.org/${getSocialIcon(platform)}`} 
                        alt={platform} 
                        className="w-6 h-6 dark:invert" 
                      />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  className="inline-block w-full text-center px-6 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-white transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;