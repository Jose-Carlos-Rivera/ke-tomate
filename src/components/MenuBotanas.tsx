"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const botanas = [
  {
    name: "Cacahuates",
    description: "Con salsas especiales estilo Ke-Tomate. El complemento perfecto para tu michelada.",
    emoji: "🥜",
  },
  {
    name: "Camaron",
    description: "Botana de camaron preparada con nuestro sello. Sabor del mar en cada bocado.",
    emoji: "🦐",
  },
  {
    name: "Cuernitos Calientes",
    description: "Con verduras calientes, limon y salsas. Crujientes y adictivos.",
    emoji: "🌶️",
  },
  {
    name: "Cacahuate y Salsas XL",
    description: "Porcion grande de cacahuates con variedad de salsas para compartir.",
    emoji: "🫘",
  },
];

export default function MenuBotanas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FF6F00]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6F00] text-sm font-bold uppercase tracking-[0.3em]">
            Para Acompanar
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            <span className="text-[#FFC107]">Botanas</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            El complemento perfecto para tu michelada favorita
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {botanas.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#FF6F00]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,111,0,0.15)] text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform group-hover:rotate-12">
                {item.emoji}
              </div>
              <h3 className="text-[#FFC107] text-lg font-bold mb-2">
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
