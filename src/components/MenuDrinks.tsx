"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const drinks = [
  {
    name: "Michelada Clasica",
    description: "Nuestra receta original con mezcla de tomate, limon, escarchado de chile y tu cerveza favorita.",
    emoji: "🍺",
    color: "#E53935",
  },
  {
    name: "COCOMATO",
    description: "Coco + cacahuate = felicidad en cada mordida. Nuestra creacion mas popular.",
    emoji: "🥥",
    color: "#FFC107",
    badge: "Estrella de la casa",
  },
  {
    name: "Ke Boost",
    description: "Boost (bebida energetica) con cerveza. Para las mejores noches, que el DJ haga lo suyo.",
    emoji: "⚡",
    color: "#00E5FF",
  },
  {
    name: "La Nina Fresa",
    description: "Mezcla de sabores tiernos, delicados y divertidos. Basada en fresa, perfecta para quienes buscan algo dulce.",
    emoji: "🍓",
    color: "#FF4081",
  },
  {
    name: "Roncito / Cuba Libre",
    description: "Para los amantes del ron. Preparado con nuestro toque especial Ke-Tomate.",
    emoji: "🥃",
    color: "#FF6F00",
  },
  {
    name: "Michelada de Limon",
    description: "Fresca, citrica e intensa. La variante clasica para los puristas.",
    emoji: "🍋",
    color: "#CDDC39",
  },
  {
    name: "Michelada de Coco",
    description: "Preparado con coco para un sabor tropical que te transporta a la playa.",
    emoji: "🌴",
    color: "#8D6E63",
  },
  {
    name: "Cerveza de Barril",
    description: "Cervezas de barril de marcas como Modelo y Heineken, siempre fresca.",
    emoji: "🍻",
    color: "#FFC107",
  },
];

export default function MenuDrinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#E53935]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E53935] text-sm font-bold uppercase tracking-[0.3em]">
            Nuestro Menu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Micheladas y{" "}
            <span className="text-[#FFC107]">Tragos</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Cada bebida preparada con ingredientes frescos y nuestro toque especial
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#E53935]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(229,57,53,0.15)]"
            >
              {drink.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {drink.badge}
                </div>
              )}

              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {drink.emoji}
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: drink.color }}
              >
                {drink.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {drink.description}
              </p>

              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: drink.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
