import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { STATS_DATA } from "../../data/mockData";

// Sécurité pour la compatibilité d'import CJS/ESM
const CountUpComponent =
  (CountUp as unknown as { default: typeof CountUp }).default || CountUp;

export const Stats: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className="p-6">
              <div className="text-4xl md:text-6xl font-black text-orange-400 mb-2">
                {inView ? (
                  <CountUpComponent start={0} end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <p className="text-slate-300 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
