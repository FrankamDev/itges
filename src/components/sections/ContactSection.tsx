import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  service: z.string().min(1, 'Veuillez choisir un permis'),
  message: z.string().min(10, 'Votre message doit contenir au moins 10 caractères')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async () => {
    // Simuler l'envoi API
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Contact"
          title="Prenez rendez-vous ou posez vos questions"
          description="Notre équipe est disponible pour vous guider dans le choix de votre formation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Infos de Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nos Coordonnées</h3>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Adresse</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">123 Avenue des Champs-Élysées, 75008 Paris</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Téléphone</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">690461830</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Email</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">frankamdev@gmail.fr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire React Hook Form + Zod */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-semibold">Votre message a été envoyé avec succès !</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Nom Complet</label>
                  <input
                    {...register('fullName')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Jean Dupont"
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="jean@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Téléphone</label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="06 12 34 56 78"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Formation Visée</label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="Permis B">Permis B</option>
                    <option value="Permis A2">Permis A2 (Moto)</option>
                    <option value="AAC">Conduite Accompagnée</option>
                    <option value="Accelerated">Stage Accéléré</option>
                  </select>
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Décrivez votre demande..."
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <Button variant="primary" className="w-full" icon={<Send className="w-4 h-4" />} disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};