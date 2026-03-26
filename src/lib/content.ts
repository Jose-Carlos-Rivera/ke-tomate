import fs from "fs/promises";
import path from "path";

export interface MenuItem {
  name: string;
  desc: string;
  emoji: string;
  color: string;
  image?: string;
  badge?: string;
}

export interface IntroCard {
  image: string;
  alt: string;
}

export interface SucursalLocation {
  name: string;
  subtitle?: string;
  address: string;
  hours: { weekday: string; weekend: string };
  phone?: string;
  mapUrl: string;
  color: string;
  tipo: string;
}

export interface SiteContent {
  hero: {
    tagline: string;
    subtitle: string;
  };
  about: {
    paragraphs: string[];
    stats: { number: string; label: string; color: string }[];
  };
  animation: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  menu: {
    micheladaSteps: string[];
    micheladas: MenuItem[];
    tragos: MenuItem[];
    botanas: MenuItem[];
    pulpas: string[];
    escarchados: string[];
    cervezas: string[];
    introCards: IntroCard[];
  };
  eventos: {
    description: string;
    features: { icon: string; text: string }[];
    ctaText: string;
    ctaUrl: string;
    imageSrc: string;
  };
  sucursales: {
    description: string;
    locations: SucursalLocation[];
  };
  franquicias: {
    subtitle: string;
    benefits: { icon: string; title: string; desc: string }[];
    email: string;
  };
  contact: {
    links: { name: string; handle: string; url: string }[];
  };
}

export async function getContent(): Promise<SiteContent> {
  const filePath = path.join(process.cwd(), "public", "content.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}
