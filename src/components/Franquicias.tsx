"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Franquicias() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="franquicias" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFC107]/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#FFC107] text-sm font-bold uppercase tracking-[0.3em]">
            Franquicias
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Quiero mi{" "}
            <span className="text-[#E53935]">Franquicia</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Sé parte de la familia Ke-Tomate y lleva la michelada perfecta a tu ciudad
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#2a2a2a] rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {[
              {
                icon: "🏪",
                title: "Modelo Probado",
                desc: "4 sucursales exitosas en Cuernavaca con un concepto único y replicable.",
              },
              {
                icon: "🍹",
                title: "Recetas Exclusivas",
                desc: "Salsas artesanales y un menú que enamora a todos.",
              },
              {
                icon: "📈",
                title: "Alta Rentabilidad",
                desc: "Inversión accesible con retorno rápido gracias a nuestro modelo operativo eficiente.",
              },
              {
                icon: "🤝",
                title: "Soporte Total",
                desc: "Capacitación completa, manual de operaciones y acompañamiento continuo.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <a
              href="mailto:ke.tomates22@gmail.com?subject=Informes%20Franquicia%20Ke-Tomate"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(229,57,53,0.4)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Solicitar Información
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Se abrira tu correo con ke.tomates22@gmail.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
