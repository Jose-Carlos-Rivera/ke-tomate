"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function MicheladaAnimation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const micheladaXPercent = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.65, 0.85], [-150, -150, 0, 0, 150]);
  const micheladaRotate = useTransform(scrollYProgress, [0, 0.35], [-15, 0]);
  const micheladaOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.85], [0, 1, 1, 0]);

  const handXPercent = useTransform(scrollYProgress, [0.5, 0.65, 0.85], [120, 25, 160]);
  const handOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);

  const textOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.6, 0.7], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.2, 0.3], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[180vh] md:h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a]" />

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute z-20 text-center px-4 top-[10%]"
        >
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            La michelada que{" "}
            <span className="text-[#E53935]">todos quieren</span>
          </h3>
          <p className="text-[#FFC107] text-xl md:text-2xl font-semibold">
            Simplemente la Michelada Perfecta
          </p>
        </motion.div>

        <motion.div
          style={{
            x: handXPercent,
            opacity: handOpacity,
            filter: "brightness(0.75)",
          }}
          className="absolute z-[5]"
        >
          <Image
            src="/images/animation/hand.webp"
            alt="Mano agarrando michelada"
            width={800}
            height={800}
            className="w-[250px] md:w-[400px] h-auto object-contain"
            priority
            unoptimized
          />
        </motion.div>

        <motion.div
          style={{
            x: micheladaXPercent,
            rotate: micheladaRotate,
            opacity: micheladaOpacity,
          }}
          className="absolute z-10"
        >
          <Image
            src="/images/animation/beer.webp"
            alt="Micheladas Ke-Tomate"
            width={400}
            height={500}
            className="w-[220px] md:w-[400px] h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
