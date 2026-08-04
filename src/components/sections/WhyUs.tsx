import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import {
  ShieldCheck,
  Clock,
  Award,
  Smartphone,
  Users,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../layout/Navbar";


export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Agréé Qualiopi & CPF",
      description:
        "Financez l’intégralité de votre formation grâce à votre Compte Personnel de Formation.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Clock,
      title: "Horaires Flexibles",
      description:
        "Plages horaires étendues du lundi au samedi de 7h à 20h pour s’adapter à votre emploi du temps.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Smartphone,
      title: "App & Code en ligne 24/7",
      description:
        "Accédez à plus de 4 000 questions conformes à l’examen officiel sur smartphone et tablette.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Moniteurs Certifiés",
      description:
        "Une équipe pédagogique diplômée d’État, patiente, bienveillante et orientée réussite.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "94% de Réussite",
      description:
        "Des méthodes d’apprentissage modernes garantissant un taux de succès au-dessus de la moyenne.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Véhicules Récents",
      description:
        "Apprenez à conduire sur des véhicules récents, équipés des dernières aides à la conduite.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <>
      <section
        id="why-us"
        className="py-24 bg-slate-100/50 dark:bg-slate-900/50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Vos Avantages"
            title="Pourquoi choisir DriveAcademy ?"
            description="Une expérience d'apprentissage moderne, fluide et axée sur votre réussite au permis."
          />
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-slate-200/20 dark:shadow-none transition-all group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};
