import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { COURSES_DATA } from "../../data/mockData";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Check, Clock, ArrowRight } from "lucide-react";
import { Navbar } from "../layout/Navbar";

export const Courses: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredCourses =
    filter === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === filter);

  const filterTabs = [
    { label: "Toutes les formations", key: "all" },
    { label: "Permis B (Voiture)", key: "B" },
    { label: "Permis A (Moto)", key: "A" },
    { label: "Stage Accéléré", key: "Accelerated" },
  ];

  return (
    <>
      <section id="courses" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos Offres"
            title="Des formules adaptées à votre rythme"
            description="Choisissez la formation adaptée à vos objectifs et bénéficiez du paiement en plusieurs fois."
          />
          <Navbar />
          {/* Filtres de catégorie */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  filter === tab.key
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grille des Formations */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={course.id}
                  className="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-shadow"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {course.badge && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="orange">{course.badge}</Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>{course.duration}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {course.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                        {course.description}
                      </p>

                      <ul className="space-y-2.5 mb-6">
                        {course.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                          >
                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-200/60 dark:border-slate-800/60 mt-auto">
                    <div className="flex items-baseline justify-between my-4">
                      <span className="text-xs text-slate-500 uppercase font-bold">
                        À partir de
                      </span>
                      <span className="text-3xl font-black text-slate-900 dark:text-white">
                        {course.price} FCFA
                      </span>
                    </div>
                    <Button
                      variant="primary"
                      className="w-full"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Découvrir l'offre
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};
