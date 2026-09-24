import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ReservationModal from "./components/ReservationModal";

export default function App() {
  const [reserveOpen, setReserveOpen] = useState(false);
  const openReserve = () => setReserveOpen(true);

  return (
    <div className="min-h-screen bg-night-950 font-sans text-cream-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-marigold-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-night-950"
      >
        Skip to content
      </a>
      <div aria-hidden className="grain-overlay" />

      <Navbar onReserve={openReserve} />

      <main id="main">
        <Hero onReserve={openReserve} />
        <SocialProof />
        <Features />
        <Menu />
        <Story />
        <Testimonials />
        <Events onReserve={openReserve} />
        <FAQ />
        <CTA onReserve={openReserve} />
      </main>

      <Footer />

      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  );
}
