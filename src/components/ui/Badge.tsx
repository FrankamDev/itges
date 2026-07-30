import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'blue' | 'green';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'orange' }) => {
  const styles = {
    orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    green: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${styles[variant]}`}>
      {children}
    </span>
  );
};