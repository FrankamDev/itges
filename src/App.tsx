
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BackToTop, ScrollProgress } from './components/ui/ScrollProgress';

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { WhyUs } from './components/sections/WhyUs';
import { Courses } from './components/sections/Courses';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { Stats } from './components/sections/Stats';

import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { ContactSection } from './components/sections/ContactSection';


import { MobileCallBar } from './components/layout/MobileCallBar';
import { Preloader } from './components/widgets/Preloader';

import { VehiclesGallery } from './components/sections/VehiculesGallery';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/widgets/WhatsappButton';

export function App() {
  return (
    // <HelmetProvider>
    <>
      <Preloader />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
        {/* <Helmet> */}
          <title>DriveAcademy | Auto-École Haute Gamme & Formation Permis</title>
          <meta name="description" content="Passez votre permis de conduire rapidement avec DriveAcademy. Formation accélérée, permis A/B, moniteurs agréés et financement CPF." />
        {/* </Helmet> */}

        {/* Utilitaires Globaux */}
        <ScrollProgress />
        <BackToTop />
        <WhatsAppButton />

        {/* Navigation */}
        <Navbar />

        {/* Sections du site */}
        <main>
          <Hero />
          <WhyUs />
          <Courses />
          <ProcessTimeline />
          <Stats />
          <VehiclesGallery />
          <Testimonials />
          <FAQ />
          <ContactSection />
        </main>

        {/* Pied de page et CTA mobile */}
        <Footer />
        <MobileCallBar />
      </div>
      </>
    // </HelmetProvider>
  );
}

export default App;