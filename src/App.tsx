import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Helmet, HelmetProvider } from "react-helmet-async";

import { BackToTop, ScrollProgress } from "./components/ui/ScrollProgress";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MobileCallBar } from "./components/layout/MobileCallBar";

import { Hero } from "./components/sections/Hero";
import { WhyUs } from "./components/sections/WhyUs";
import { Courses } from "./components/sections/Courses";
import { ProcessTimeline } from "./components/sections/ProcessTimeline";
import { Stats } from "./components/sections/Stats";
import { VehiclesGallery } from "./components/sections/VehiculesGallery";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { ContactSection } from "./components/sections/ContactSection";

import { Preloader } from "./components/widgets/Preloader";
import WhatsAppButton from "./components/widgets/WhatsappButton";

function HomePage() {
  return (
    <>
      <Preloader />

      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white dark:bg-slate-950 dark:text-slate-100">
        
          <title>
            DriveAcademy | Auto-École Haute Gamme & Formation Permis
          </title>

          <meta
            name="description"
            content="Passez votre permis de conduire rapidement avec DriveAcademy. Formation accélérée, permis A/B, moniteurs agréés et financement CPF."
          />
        

        <ScrollProgress />
        <BackToTop />
        <WhatsAppButton />

        <Navbar />

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

        <Footer />
        <MobileCallBar />
      </div>
    </>
  );
}

export default function App() {
  return (
    // <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/vehicule" element={<VehiclesGallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
    // </HelmetProvider>
  );
}