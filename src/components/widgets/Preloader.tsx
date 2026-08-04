import  { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center text-white"
        >
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-orange-500/30"
          >
            <Car className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-black tracking-wider">
            IT<span className="text-orange-500">GES</span>
          </h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};