import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  center = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}
    >
      <span className="text-orange-500 dark:text-orange-400 text-sm font-bold uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};