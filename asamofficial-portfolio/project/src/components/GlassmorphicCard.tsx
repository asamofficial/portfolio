import React, { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative overflow-hidden
      backdrop-blur-md bg-white/10 dark:bg-black/20
      border border-white/20 dark:border-white/10
      rounded-xl shadow-lg
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-white/10 before:to-transparent dark:before:from-white/5
      before:pointer-events-none
      transition-all duration-300 ease-in-out
      hover:bg-white/15 dark:hover:bg-black/25
      hover:shadow-xl
      ${className}
    `}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassmorphicCard;