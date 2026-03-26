"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AboutProps {
  content: {
    paragraphs: string[];
    stats: { number: string; label: string; color: string }[];
  };
}

export default function About({ content }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 px-4 relative" ref={ref}>
      <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFC107]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <span className="text-[#E53935] text-sm font-bold uppercase tracking-[0.3em]">
            Conócenos
          </span>
        </motion.div>

        <motion.h2
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12"
        >
          ¿Qué es{" "}
          <span className="text-[#FFC107]">Ke-Tomate</span>?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {content.paragraphs.map((paragraph, i) => (
              <p key={i} className={`text-gray-300 text-lg leading-relaxed ${i === 2 ? "font-semibold italic" : ""}`}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-3 gap-4"
          >
            {content.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center hover:border-[#E53935]/50 transition-colors"
              >
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
