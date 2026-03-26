"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import type { MenuItem, IntroCard } from "@/lib/content";

interface MenuProps {
  content: {
    micheladaSteps: string[];
    micheladas: MenuItem[];
    tragos: MenuItem[];
    botanas: MenuItem[];
    pulpas: string[];
    escarchados: string[];
    cervezas: string[];
    introCards: IntroCard[];
  };
}

function ItemCard({ item, index }: { item: MenuItem; index: number }) {
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

const tabs = [
  { id: "micheladas", label: "Micheladas", color: "#E53935" },
  { id: "tragos", label: "Tragos", color: "#FFC107" },
  { id: "botanas", label: "Botanas", color: "#FF6F00" },
];

export default function MenuCompleto({ content }: MenuProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("micheladas");

  return (
    <section id="menu" className="py-24 px-4 relative" ref={ref}>
      <div className="hidden md:block absolute top-0 left-0 w-[300px] h-[300px] bg-[#E53935]/5 rounded-full blur-[100px]" />

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

        {/* Intro cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {content.introCards.map((card, i) => (
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
                  {content.micheladaSteps.map((step, i) => (
                    <div key={i}>
                      <div className="text-2xl font-black mb-1" style={{ color: ["#E53935", "#FFC107", "#FF6F00"][i] }}>{i + 1}</div>
                      <p className="text-gray-300 text-sm font-semibold">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {content.micheladas.map((item, i) => (
                  <ItemCard key={item.name} item={item} index={i} />
                ))}
              </div>

              {/* Customization */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5">
                  <h4 className="text-[#E53935] font-bold text-sm mb-3 uppercase tracking-wider">Pulpas</h4>
                  <div className="flex flex-wrap gap-2">
                    {content.pulpas.map((p) => (
                      <span key={p} className="text-gray-300 text-xs bg-[#111] border border-[#333] px-3 py-1 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5">
                  <h4 className="text-[#FFC107] font-bold text-sm mb-3 uppercase tracking-wider">Escarchados</h4>
                  <div className="flex flex-wrap gap-2">
                    {content.escarchados.map((e) => (
                      <span key={e} className="text-gray-300 text-xs bg-[#111] border border-[#333] px-3 py-1 rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5">
                  <h4 className="text-[#FF6F00] font-bold text-sm mb-3 uppercase tracking-wider">Cervezas</h4>
                  <div className="flex flex-wrap gap-2">
                    {content.cervezas.map((c) => (
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
              {content.tragos.map((item, i) => (
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
              {content.botanas.map((item, i) => (
                <ItemCard key={item.name} item={item} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
