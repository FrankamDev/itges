import { BackToTop, ScrollProgress } from "./components/ui/ScrollProgress";
import { Navbar } from "./components/layout/Navbar";
import { WhyUs } from "./components/sections/WhyUs";
import { Courses } from "./components/sections/Courses";
import { ProcessTimeline } from "./components/sections/ProcessTimeline";
import { VehiclesGallery } from "./components/sections/VehiculesGallery";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { ContactSection } from "./components/sections/ContactSection";
import { Preloader } from "./components/widgets/Preloader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import WhatsAppButton from "./components/widgets/WhatsappButton";
import { MobileCallBar } from "./components/layout/MobileCallBar";
import { Footer } from "./components/layout/Footer";


function HomePage() {
  return (
    <>
      <Preloader />

      <div
        id="top"
        className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white dark:bg-slate-950 dark:text-slate-100"
      >
        <title>DriveAcademy | Auto-École Haute Gamme & Formation Permis</title>

        <meta
          name="description"
          content="Passez votre permis de conduire rapidement avec DriveAcademy. Formation accélérée, permis A/B, moniteurs agréés et financement CPF."
        />

        <ScrollProgress />
        <BackToTop />

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
          <WhatsAppButton />
          <ContactSection />
        </main>
        <MobileCallBar />
      </div>
        <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/process" element={<ProcessTimeline />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/faq" element={<FAQ />} /> */}
          <Route path="/vehicles" element={<VehiclesGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
