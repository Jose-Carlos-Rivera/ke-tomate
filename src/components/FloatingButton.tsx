"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const contactOptions = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/KeTomateCuerna",
    color: "#1877F2",
    // Position: to the LEFT
    x: -75,
    y: 0,
    delay: 0,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:ke.tomates22@gmail.com",
    color: "#E53935",
    // Position: at 45 degrees (between left and up)
    x: -53,
    y: -53,
    delay: 0.05,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ke_tomate/",
    color: "#E1306C",
    // Position: straight UP
    x: 0,
    y: -75,
    delay: 0.1,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Backdrop when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Contact options */}
      <AnimatePresence>
        {isOpen &&
          contactOptions.map((option) => (
            <motion.a
              key={option.name}
              href={option.href}
              target={option.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{
                scale: 1,
                x: option.x,
                y: option.y,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                x: 0,
                y: 0,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: option.delay,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
              style={{
                backgroundColor: option.color,
                boxShadow: `0 0 20px ${option.color}50`,
              }}
              aria-label={option.name}
              title={option.name}
            >
              {option.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Main contact button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(229,57,53,0.5)] hover:shadow-[0_0_35px_rgba(229,57,53,0.7)] transition-shadow z-10"
        aria-label="Contacto"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isOpen ? (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </motion.div>

        {/* Pulse animation - only when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#E53935] animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
