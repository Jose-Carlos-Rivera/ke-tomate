"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const introCards = [
  { image: "/images/menu/trago-antojable.jpeg", alt: "Trago antojable" },
  { image: "/images/menu/trago-antojable-2.jpeg", alt: "Trago antojable" },
  { image: "/images/menu/trago-antojable-3.jpeg", alt: "Trago antojable" },
  { image: "/images/menu/trago-antojable-4.jpeg", alt: "Trago antojable" },
];

const micheladas = [
  { name: "Ke Camaron", desc: "Camaron, pepino, clamato, limon, salsas", emoji: "🦐", color: "#E53935", image: "/images/menu/ke-camaron.jpeg" },
  { name: "Ke Cubana", desc: "Salsas, limon, sal", emoji: "🍺", color: "#FFC107" },
  { name: "Ke Tonata", desc: "Clamato, salsas, limon, sal", emoji: "🍅", color: "#FF6F00" },
  { name: "Ke Goma", desc: "Gomitas, pulpa de la casa", emoji: "🍬", color: "#E91E63", image: "/images/menu/ke-goma.jpeg" },
  { name: "Ke Antojo", desc: "Todos los toppings que quieras", emoji: "🤤", color: "#9C27B0", image: "/images/menu/ke-antojo.jpeg" },
  { name: "Ke Tomate", desc: "Refrescante clamato preparado", emoji: "🍹", color: "#4CAF50", badge: "La Original" },
  { name: "Ke Solapa", desc: "Para los que les gusta algo mas natural", emoji: "🌿", color: "#8BC34A" },
  { name: "Ke Boost", desc: "Energía con sabor a cerveza", emoji: "⚡", color: "#00E5FF" },
];

const tragos = [
  { name: "Mezcalito", desc: "Tamarindo, maracuya y jamaica", emoji: "🥃", color: "#FF6F00", image: "/images/menu/mezcalito.jpeg" },
  { name: "Frappe Bailey's", desc: "Con mazapan", emoji: "🍫", color: "#8D6E63" },
  { name: "Whisky", desc: "", emoji: "🥂", color: "#FFC107" },
  { name: "Gin Gin", desc: "Ginebra y frutos rojos, pepino, romero", emoji: "🫐", color: "#7C4DFF" },
  { name: "La Niña Fresa", desc: "Mezcla de sabores tiernos, delicados y divertidos", emoji: "🍓", color: "#FF4081" },
  { name: "Roncito", desc: "Cuba libre", emoji: "🍸", color: "#FF5722" },
  { name: "10 de Abril", desc: "Ron, cerveza y mineral", emoji: "🍻", color: "#2196F3" },
  { name: "Palomita", desc: "Tequila y Squirt, escarchado con sal", emoji: "🍋", color: "#CDDC39" },
  { name: "Malibu Premium", desc: "El favorito de la casa", emoji: "🏖️", color: "#00BCD4", badge: "Favorito", image: "/images/menu/malibu-premium.jpeg" },
  { name: "Blue Cherry", desc: "Exótico sabor hidratante", emoji: "🍒", color: "#3F51B5" },
  { name: "Piña Colada", desc: "Cóctel tropical con coco y piña", emoji: "🍍", color: "#FFC107", image: "/images/menu/pina-colada.jpeg" },
  { name: "Tintinto", desc: "Trago de la casa", emoji: "🍷", color: "#9C27B0", image: "/images/menu/tintinto.jpeg" },
];

const botanas = [
  { name: "Aceitunas", desc: "", emoji: "🫒", color: "#4CAF50" },
  { name: "Coconato", desc: "Coco, cacahuate, japones, chamoy, esquite, pulpa de la casa y limon", emoji: "🥥", color: "#FFC107", badge: "Estrella", image: "/images/menu/cocomato.jpeg" },
  { name: "Papas Zarandeadas", desc: "Papa natural y/o horneada, chicharron, a elegir pollo, camaron y salsas", emoji: "🥔", color: "#FF6F00" },
  { name: "Cochipapas", desc: "Cacahuate, mix de verduras, cueritos, mix de gomita dulce, rielitos, limon y salsas", emoji: "🍟", color: "#E53935", image: "/images/menu/cochipapas.jpeg" },
  { name: "Tostilichi", desc: "Botana crujiente con todos los toppings", emoji: "🌮", color: "#FF5722", image: "/images/menu/tostilichi.jpeg" },
];

const pulpas = ["Skwinkles", "Tamarindo Habanero", "Sandia", "Algodon de Azucar", "Mora Azul", "Picafressa"];
const escarchados = ["Tajin", "Pecositas", "Miguelito", "Ajonjoli", "Garapinado", "Miguelito Mora Azul"];
const cervezas = [
  "Tecate", "Tecate Light", "XX Lager", "Heineken", "Heineken Cero", "Bohemia Cristal",
  "Corona Cero", "Negra Modelo", "Pacifico", "Carta Blanca", "Miller", "Amstel",
  "Ultra", "Indio", "Corona", "Victoria", "Modelo Especial", "Negra Modelo Cero",
];

const tabs = [
  { id: "micheladas", label: "Micheladas", color: "#E53935" },
  { id: "tragos", label: "Tragos", color: "#FFC107" },
  { id: "botanas", label: "Botanas", color: "#FF6F00" },
];

function ItemCard({ item, index }: { item: { name: string; desc: string; emoji: string; color: string; badge?: string; image?: string }; index: number }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#E53935]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(229,57,53,0.15)]"
    >
      {item.badge && (
        <div className="absolute top-3 right-3 z-10 bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
          {item.badge}
        </div>
      )}
      {item.image ? (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>
      ) : (
        <div className="pt-6 px-6">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.emoji}</div>
        </div>
      )}
      <div className={item.image ? "p-4 -mt-6 relative z-10" : "px-6 pb-6"}>
        <h3 className="text-lg font-bold mb-1" style={{ color: item.color }}>{item.name}</h3>
        {item.desc && <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: item.color }}
      />
    </motion.div>
  );
}

export default function MenuCompleto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("micheladas");

  return (
    <section id="menu" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#E53935]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#E53935] text-sm font-bold uppercase tracking-[0.3em]">
            Nuestro Menú
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Micheladas, <span className="text-[#FFC107]">Tragos</span> y{" "}
            <span className="text-[#FF6F00]">Botanas</span>
          </h2>
        </motion.div>

        {/* Intro cards - 4 fotos antojables */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {introCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === tab.id
                  ? "text-black scale-105"
                  : "bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-gray-600"
              }`}
              style={activeTab === tab.id ? { backgroundColor: tab.color } : undefined}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "micheladas" && (
            <motion.div
              key="micheladas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* How it works */}
              <div className="bg-gradient-to-r from-[#E53935]/10 to-[#FFC107]/10 border border-[#2a2a2a] rounded-2xl p-6 mb-8">
                <h3 className="text-white font-bold text-lg mb-4 text-center">Arma tu michelada en 3 pasos</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-[#E53935] mb-1">1</div>
                    <p className="text-gray-300 text-sm font-semibold">Elige tu michelada</p>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#FFC107] mb-1">2</div>
                    <p className="text-gray-300 text-sm font-semibold">La pulpa y escarchado</p>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#FF6F00] mb-1">3</div>
                    <p className="text-gray-300 text-sm font-semibold">Tu cerveza (incluyen 2 latones)</p>
                  </div>
                </div>
              </div>

              {/* Michelada cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {micheladas.map((item, i) => (
                  <ItemCard key={item.name} item={item} index={i} />
                ))}
              </div>

              {/* Personalización */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5">
                  <h4 className="text-[#E53935] font-bold text-sm mb-3 uppercase tracking-wider">Pulpas</h4>
                  <div className="flex flex-wrap gap-2">
                    {pulpas.map((p) => (
                      <span key={p} className="text-gray-300 text-xs bg-[#111] border border-[#333] px-3 py-1 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5">
                  <h4 className="text-[#FFC107] font-bold text-sm mb-3 uppercase tracking-wider">Escarchados</h4>
                  <div className="flex flex-wrap gap-2">
                    {escarchados.map((e) => (
                      <span key={e} className="text-gray-300 text-xs bg-[#111] border border-[#333] px-3 py-1 rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5">
                  <h4 className="text-[#FF6F00] font-bold text-sm mb-3 uppercase tracking-wider">Cervezas</h4>
                  <div className="flex flex-wrap gap-2">
                    {cervezas.map((c) => (
                      <span key={c} className="text-gray-300 text-xs bg-[#111] border border-[#333] px-3 py-1 rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "tragos" && (
            <motion.div
              key="tragos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {tragos.map((item, i) => (
                <ItemCard key={item.name} item={item} index={i} />
              ))}
            </motion.div>
          )}

          {activeTab === "botanas" && (
            <motion.div
              key="botanas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {botanas.map((item, i) => (
                <ItemCard key={item.name} item={item} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
