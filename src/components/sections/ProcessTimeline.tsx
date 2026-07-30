
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { UserCheck, BookOpen, Car, Award } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    { icon: UserCheck, title: '1. Inscription', desc: 'Constitution simplifiée de votre dossier en ligne ou en agence.' },
    { icon: BookOpen, title: '2. Code de la Route', desc: 'Entraînement théorique avec nos séries et cours interactifs.' },
    { icon: Car, title: '3. Leçons Pratiques', desc: 'Apprentissage sur la route avec votre moniteur référent.' },
    { icon: Award, title: '4. Examen & Permis', desc: 'Passage de l’épreuve pratique et délivrance du permis.' }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Étapes Clés"
          title="Votre parcours vers l'autonomie"
          description="Une méthode éprouvée pour vous amener vers le succès en toute sérénité."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-700/50"
              >
                <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};