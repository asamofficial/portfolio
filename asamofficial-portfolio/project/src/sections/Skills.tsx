import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProgressBar from '../components/ProgressBar';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { skills, Skill } from '../data/skills';

const Skills: React.FC = () => {
  const categories = ['all', 'frontend', 'backend', 'database', 'devops', 'other'];
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkillsByCategory(filteredSkills).map((categorySkills, categoryIndex) => (
            <GlassmorphicCard key={categoryIndex} className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {getCategoryTitle(categorySkills[0]?.category || '')}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="transform transition-transform hover:scale-[1.02]">
                    <ProgressBar 
                      value={skill.level} 
                      label={skill.name} 
                    />
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to group skills by category
const getSkillsByCategory = (skills: Skill[]): Skill[][] => {
  if (skills.length === 0) return [];
  
  const categories = [...new Set(skills.map(skill => skill.category))];
  return categories.map(category => 
    skills.filter(skill => skill.category === category)
  );
};

// Helper function to get formatted category title
const getCategoryTitle = (category: string): string => {
  switch(category) {
    case 'frontend':
      return 'Frontend Development';
    case 'backend':
      return 'Backend Development';
    case 'database':
      return 'Database Technologies';
    case 'devops':
      return 'DevOps & Cloud';
    case 'other':
      return 'Other Skills';
    default:
      return 'Miscellaneous';
  }
};

export default Skills;