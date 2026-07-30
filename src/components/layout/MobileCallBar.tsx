import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export const MobileCallBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-3 flex gap-3 shadow-lg">
      <a
        href="tel:0123456789"
        className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm"
      >
        <Phone className="w-4 h-4 text-orange-500" />
        Appeler
      </a>
      <a
        href="#contact"
        className="flex-1 bg-orange-500 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm text-center"
      >
        <Calendar className="w-4 h-4" />
        Rendez-vous
      </a>
    </div>
  );
};