import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
    }).format(date);
  };
  
  const formatDateRange = (startDate: string, endDate: string | null): string => {
    const formattedStart = formatDate(startDate);
    const formattedEnd = endDate ? formatDate(endDate) : 'Present';
    return `${formattedStart} - ${formattedEnd}`;
  };
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and career milestones"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              date={formatDateRange(exp.startDate, exp.endDate)}
              title={exp.title}
              subtitle={`${exp.company}, ${exp.location}`}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;