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

  // Phase 1: Michelada enters from left (0 -> 0.35)
  const micheladaX = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.65, 0.85], [-600, -600, 0, 0, 600]);
  const micheladaRotate = useTransform(scrollYProgress, [0, 0.35], [-15, 0]);
  const micheladaOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.85], [0, 1, 1, 0]);

  // Phase 2: Hand enters from right BEHIND the micheladas (0.5 -> 0.65) and both leave right (0.65 -> 0.85)
  const handX = useTransform(scrollYProgress, [0.5, 0.65, 0.85], [500, 100, 700]);
  const handOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);

  // Text
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.6, 0.7], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.2, 0.3], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E53935]/8 rounded-full blur-[120px]" />

        {/* Text */}
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

        {/* Hand Photo - BEHIND the micheladas (z-5) */}
        <motion.div
          style={{
            x: handX,
            opacity: handOpacity,
            filter: "brightness(0.75) drop-shadow(0 0 8px rgba(0,0,0,0.6))",
          }}
          className="absolute z-[5]"
        >
          <Image
            src="/images/animation/hand.webp"
            alt="Mano agarrando michelada"
            width={754}
            height={636}
            className="w-[300px] md:w-[400px] h-auto object-contain"
            priority
            unoptimized
          />
        </motion.div>

        {/* Real Michelada Photo - IN FRONT of the hand (z-10) */}
        <motion.div
          style={{
            x: micheladaX,
            rotate: micheladaRotate,
            opacity: micheladaOpacity,
          }}
          className="absolute z-10 drop-shadow-[0_0_60px_rgba(229,57,53,0.5)]"
        >
          <Image
            src="/images/animation/beer.webp"
            alt="Micheladas Ke-Tomate"
            width={400}
            height={500}
            className="w-[280px] md:w-[400px] h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
