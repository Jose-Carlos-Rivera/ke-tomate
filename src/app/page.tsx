import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCompleto from "@/components/MenuCompleto";
import MicheladaAnimation from "@/components/MicheladaAnimation";
import Eventos from "@/components/Eventos";
import Sucursales from "@/components/Sucursales";
import Franquicias from "@/components/Franquicias";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <MicheladaAnimation />
      <MenuCompleto />
      <Eventos />
      <Sucursales />
      <Franquicias />
      <Contact />
      <Footer />
      <FloatingButton />
    </main>
  );
}
