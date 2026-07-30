import  { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { VEHICLES_DATA } from '../../data/mockData';
import {  } from 'react-icons';
import { Car, Fuel } from 'lucide-react';

export const VehiclesGallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Car' | 'Motorcycle'>('All');

  const filteredVehicles = filter === 'All' 
    ? VEHICLES_DATA 
    : VEHICLES_DATA.filter(v => v.type === filter);

  return (
    <section id="vehicles" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Notre Flotte"
          title="Des véhicules modernes & récents"
          description="Conduisez dans des conditions optimales de confort et de sécurité avec notre parc automobile 2024."
        />

        {/* Boutons Filtrage */}
        <div className="flex justify-center gap-4 mb-12">
          {(['All', 'Car', 'Motorcycle'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                filter === type
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {type === 'All' ? 'Tous' : type === 'Car' ? 'Voitures' : 'Motos'}
            </button>
          ))}
        </div>

        {/* Grille Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{vehicle.name}</h4>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4 text-orange-500" />
                    {vehicle.transmission}
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel className="w-4 h-4 text-blue-500" />
                    Année {vehicle.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};