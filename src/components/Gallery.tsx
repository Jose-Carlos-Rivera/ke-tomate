"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryItems = [
  {
    image: "/images/gallery/miche1.webp",
    title: "Michelada Clasica",
    description: "Dos micheladas con todo el estilo Ke-Tomate",
    color: "#E53935",
  },
  {
    image: "/images/gallery/miche2.webp",
    title: "COCOMATO",
    description: "Nuestra estrella de la casa",
    color: "#FFC107",
  },
  {
    image: "/images/gallery/miche3.webp",
    title: "Escarchado Premium",
    description: "Con chamoy, tajin y toppings",
    color: "#FF6F00",
  },
  {
    image: "/images/gallery/miche4.webp",
    title: "La Nina Fresa",
    description: "Dulce, fresca y divertida",
    color: "#FF4081",
  },
  {
    emoji: "🌶️",
    title: "Sabor Unico",
    description: "Salsas artesanales y secretas",
    color: "#FF6F00",
    bg: "from-orange-900/40 to-orange-950/60",
  },
  {
    emoji: "🥜",
    title: "Botanas",
    description: "Cacahuates, camaron y cuernitos",
    color: "#8D6E63",
    bg: "from-amber-900/40 to-amber-950/60",
  },
  {
    emoji: "🎉",
    title: "Eventos",
    description: "Barra de micheladas para tu fiesta",
    color: "#AB47BC",
    bg: "from-purple-900/40 to-purple-950/60",
  },
  {
    emoji: "🍻",
    title: "Cerveza de Barril",
    description: "Modelo, Heineken y mas",
    color: "#FFC107",
    bg: "from-yellow-900/40 to-yellow-950/60",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E53935]/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E53935] text-sm font-bold uppercase tracking-[0.3em]">
            Galeria
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Nuestros{" "}
            <span className="text-[#FFC107]">Productos</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Los colores y sabores que hacen de Ke-Tomate algo unico
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-[#2a2a2a] hover:border-[#E53935]/40 transition-all duration-300 ${
                !item.image ? `bg-gradient-to-br ${item.bg}` : "bg-[#111]"
              }`}
            >
              {/* Real image */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              )}

              {/* Overlay gradient for images */}
              {item.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                {/* Emoji for non-image items */}
                {!item.image && item.emoji && (
                  <div className="text-6xl md:text-7xl mb-3 group-hover:scale-125 transition-transform duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {item.emoji}
                  </div>
                )}
                <h3
                  className="font-bold text-sm md:text-base drop-shadow-lg"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                  {item.description}
                </p>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <a
            href="https://www.instagram.com/ke_tomate/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E53935] hover:text-[#FFC107] transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Ver mas en Instagram @ke_tomate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
