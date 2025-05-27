import React from 'react';
import SectionTitle from '../components/SectionTitle';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { education, certifications } from '../data/education';
import { Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <BookOpen className="mr-2" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <GlassmorphicCard key={edu.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
                        {edu.startYear} - {edu.endYear}
                      </span>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300 mt-4">{edu.description}</p>
                  )}
                </GlassmorphicCard>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Award className="mr-2" />
              Professional Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <GlassmorphicCard key={cert.id} className="p-5">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full">
                        {new Date(cert.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </span>
                    </div>
                  </div>
                  
                  {cert.expires && (
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                      Expires: {new Date(cert.expires).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </p>
                  )}
                  
                  {cert.credentialURL && (
                    <div className="mt-3">
                      <a 
                        href={cert.credentialURL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                      >
                        View Credential
                      </a>
                    </div>
                  )}
                </GlassmorphicCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;