"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Instagram: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Facebook: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Email: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const colorMap: Record<string, string> = {
  Instagram: "#E4405F",
  Facebook: "#1877F2",
  Email: "#EA4335",
};

interface ContactProps {
  content: {
    links: { name: string; handle: string; url: string }[];
  };
}

export default function Contact({ content }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 px-4 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFC107]/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E53935] text-sm font-bold uppercase tracking-[0.3em]">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Síguenos y{" "}
            <span className="text-[#FFC107]">Contáctanos</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Encuéntranos en redes sociales o escríbenos directamente
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {content.links.map((link, i) => {
            const color = colorMap[link.name] || "#E53935";
            const icon = iconMap[link.name];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-gray-600 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {icon && (
                  <div
                    className="p-3 rounded-xl transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${color}20`, color }}
                  >
                    {icon}
                  </div>
                )}
                <div>
                  <div className="text-white font-bold text-lg">{link.name}</div>
                  <div className="text-gray-400 text-sm">{link.handle}</div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
