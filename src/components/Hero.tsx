"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  content: { tagline: string; subtitle: string };
}

export default function Hero({ content }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E53935]/10 rounded-full blur-[60px] md:blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Ke-Tomate Logo"
            width={200}
            height={200}
            className="mx-auto rounded-full drop-shadow-[0_0_40px_rgba(229,57,53,0.5)]"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[#FFC107] text-xl md:text-2xl lg:text-3xl font-bold italic mb-8"
        >
          {content.tagline}
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(229,57,53,0.4)]"
          >
            Ver Menu
          </a>
          <a
            href="#sucursales"
            className="px-8 py-4 border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black font-bold text-lg rounded-full transition-all hover:scale-105"
          >
            Nuestras Sucursales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
