import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.filter(p => p.featured));
  const [activeFilter, setActiveFilter] = useState<'featured' | 'all'>('featured');
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setVisibleProjects(activeFilter === 'featured' ? projects.filter(p => p.featured) : projects);
      setIsAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeFilter]);
  
  const handleFilterChange = (filter: 'featured' | 'all') => {
    if (filter === activeFilter) return;
    setActiveFilter(filter);
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="My Projects" 
          subtitle="A showcase of my recent work and personal projects"
        />
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-gray-200 dark:bg-gray-800">
            <button
              onClick={() => handleFilterChange('featured')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeFilter === 'featured' 
                  ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
          </div>
        </div>
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;