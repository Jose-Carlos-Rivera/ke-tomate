"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Eventos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eventos" className="py-24 px-4 relative" ref={ref}>
      <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6F00]/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] aspect-[4/3]">
              <Image
                src="/images/eventos/eventos.webp"
                alt="Barra de micheladas para eventos Ke-Tomate"
                fill
                className="object-cover object-center scale-[1.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#E53935] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  🎉 EVENTOS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          >
            <span className="text-[#FF6F00] text-sm font-bold uppercase tracking-[0.3em]">
              Eventos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              Tu fiesta con{" "}
              <span className="text-[#FFC107]">Ke-Tomate</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Llevamos la experiencia de Ke Tomate hasta tu evento. Nuestras micheladas, preparadas al momento con ingredientes premium y el sabor que nos distingue, convierten cualquier reunión en algo memorable. Ideal para eventos sociales y corporativos que buscan un toque original, fresco y lleno de estilo.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "🍹", text: "Barra completa de micheladas y escarchados" },
                { icon: "🌶️", text: "Salsas, frutas, dulces y toppings premium" },
                { icon: "👥", text: "Servicio para eventos de cualquier tamaño" },
                { icon: "📍", text: "Cobertura en Cuernavaca y alrededores" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/ke_tomate/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6F00] hover:bg-[#E65100] text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,111,0,0.3)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Cotiza tu Evento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
