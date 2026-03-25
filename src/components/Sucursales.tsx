"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const sucursales = [
  {
    name: "Granjas",
    subtitle: "Sucursal Original",
    address: "Av. 10 de Abril s/n, Esq. Calle Vicente Guerrero, Col. Las Granjas, Cuernavaca, Mor.",
    hours: { weekday: "Dom - Jue: 12:00 - 8:00 PM", weekend: "Vie - Sab: 12:00 PM - 12:00 AM" },
    phone: "56 3329 5799",
    mapUrl: "https://www.google.com/maps/search/Ke+Tomate+Granjas+Cuernavaca",
    color: "#E53935",
    tipo: "Consumo en establecimiento",
  },
  {
    name: "Satelite",
    address: "Av. 10 de Abril, Esq. Orquidea, Col. Satelite, Cuernavaca, Mor.",
    hours: { weekday: "Lun - Vie: 12:00 - 8:00 PM", weekend: "Sab - Dom: 9:00 AM - 8:00 PM" },
    mapUrl: "https://www.google.com/maps/search/Ke+Tomate+Satelite+Cuernavaca",
    color: "#FFC107",
    tipo: "Para llevar",
  },
  {
    name: "Gobernadores",
    address: "Av Vicente Guerrero 106-b, Lomas de Cortes, 62230 Cuernavaca, Mor.",
    hours: { weekday: "Lun - Vie: 12:00 - 8:00 PM", weekend: "Sab - Dom: 9:00 AM - 8:00 PM" },
    mapUrl: "https://www.google.com/maps/search/Av+Vicente+Guerrero+106+Lomas+de+Cortes+Cuernavaca",
    color: "#FF6F00",
    tipo: "Para llevar",
  },
  {
    name: "Palmas",
    subtitle: "Plaza Anatani",
    address: "Av. Morelos 147, Col. Las Palmas, CP 62380, Cuernavaca, Morelos",
    hours: { weekday: "Lun - Vie: 12:00 - 8:00 PM", weekend: "Sab - Dom: 9:00 AM - 8:00 PM" },
    mapUrl: "https://www.google.com/maps/search/Plaza+Anatani+Av+Morelos+147+Las+Palmas+Cuernavaca",
    color: "#4CAF50",
    tipo: "Consumo en establecimiento",
  },
];

export default function Sucursales() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="sucursales" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E53935]/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-[#E53935] text-sm font-bold uppercase tracking-[0.3em]">
            Visítanos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Nuestras{" "}
            <span className="text-[#FFC107]">Sucursales</span>
          </h2>
        </motion.div>

        {/* Leyenda */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12"
        >
          En Ke Tomate cada sucursal tiene su propio estilo: algunas están diseñadas para que pidas y lleves tu cerveza, y otras para que te quedes a disfrutar.
        </motion.p>

        {/* Tab selector */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {sucursales.map((suc, i) => (
            <button
              key={suc.name}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                active === i
                  ? "text-black scale-105"
                  : "bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-gray-600"
              }`}
              style={
                active === i
                  ? { backgroundColor: suc.color }
                  : undefined
              }
            >
              {suc.name}
            </button>
          ))}
        </motion.div>

        {/* Active sucursal card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-4 h-4 rounded-full mt-1.5 shrink-0"
              style={{ backgroundColor: sucursales[active].color }}
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white">
                Suc. {sucursales[active].name}
              </h3>
              {sucursales[active].subtitle && (
                <span
                  className="text-sm font-semibold"
                  style={{ color: sucursales[active].color }}
                >
                  {sucursales[active].subtitle}
                </span>
              )}
            </div>
          </div>

          {/* Tipo badge - post-it style */}
          <div className="mb-6">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold ${
                sucursales[active].tipo === "Consumo en establecimiento"
                  ? "bg-[#4CAF50]/15 text-[#4CAF50] border border-[#4CAF50]/30"
                  : "bg-[#FFC107]/15 text-[#FFC107] border border-[#FFC107]/30"
              }`}
            >
              {sucursales[active].tipo === "Consumo en establecimiento" ? "🪑" : "🛍️"}{" "}
              {sucursales[active].tipo}
            </span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <p className="text-gray-300">{sucursales[active].address}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">🕐</span>
              <div>
                <p className="text-gray-300">{sucursales[active].hours.weekday}</p>
                <p className="text-gray-300">{sucursales[active].hours.weekend}</p>
              </div>
            </div>
            {sucursales[active].phone && (
              <div className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <a
                  href={`tel:${sucursales[active].phone}`}
                  className="text-[#FFC107] hover:text-[#E53935] transition-colors"
                >
                  {sucursales[active].phone}
                </a>
              </div>
            )}
          </div>

          <a
            href={sucursales[active].mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E53935] hover:bg-[#C62828] text-white font-bold rounded-full transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Abrir en Google Maps
          </a>
        </motion.div>

      </div>
    </section>
  );
}
