import React from 'react';
import { motion } from 'framer-motion';
import {  ShieldCheck, Award, Star} from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Gauche - Textes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-6">
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span>N°1 de la formation routière en 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Passez votre permis avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Confiance</span> et Rapidité.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Des moniteurs diplômés d'État, une flotte de véhicules récents et un suivi 100% digitalisé pour réussir du premier coup.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300">
                S'inscrire maintenant
              </a>
              <Button variant="outline" size="lg">
                Découvrir nos offres
              </Button>
            </div>

            {/* Badges de Réassurance */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Agréé Qualiopi / CPF</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">94% de Réussite</span>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite - Image Multi-layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
                alt="Conduite Auto École"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Card Flottante Évaluation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 hidden sm:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 font-bold">
                4.9/5
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Excellente Réputation</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Basé sur +1200 avis Google</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};