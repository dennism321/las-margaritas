import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Experience from "./components/Experience";
import MenuSection from "./components/MenuSection";
import Cantina from "./components/Cantina";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#menu"
        className="sr-only z-[60] rounded-full bg-marigold px-4 py-2 font-semibold text-carbon focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to menu
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <MenuSection />
        <Cantina />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
