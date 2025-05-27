import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 relative pb-8">
      <div className="md:w-1/4 text-right pr-8 pt-2 hidden md:block">
        <span className="font-semibold text-gray-600 dark:text-gray-400">
          {date}
        </span>
      </div>
      
      <div className="md:w-0 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-200 relative z-10"></div>
        {!isLast && <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-700 -mt-3"></div>}
      </div>
      
      <div className="md:w-3/4 md:pl-8">
        <GlassmorphicCard className="p-6">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 md:hidden mb-2 block">
            {date}
          </span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">{subtitle}</p>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-gray-400 mt-2 mr-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassmorphicCard>
      </div>
    </div>
  );
};

export default TimelineItem;