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
import { getContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getContent();

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero content={content.hero} />
      <About content={content.about} />
      <MicheladaAnimation content={content.animation} />
      <MenuCompleto content={content.menu} />
      <Eventos content={content.eventos} />
      <Sucursales content={content.sucursales} />
      <Franquicias content={content.franquicias} />
      <Contact content={content.contact} />
      <Footer />
      <FloatingButton />
    </main>
  );
}
