
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { TESTIMONIALS_DATA } from '../../data/mockData';
import { Star, Quote } from 'lucide-react';
import { Navbar } from '../layout/Navbar';

export const Testimonials: React.FC = () => {
  return (
    <>
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Témoignages"
          title="Ce que disent nos élèves"
          description="Découvrez les retours d'expérience de ceux qui ont décroché leur permis avec nous."
        />
<Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-orange-500/20 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-orange-500 font-semibold">{item.licenseType}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* <Footer/> */}
    </>
  );
};