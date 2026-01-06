"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowRight } from "react-icons/fa";


export default function RippleButton({ children, className = "", onClick }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);
  };

  return (
    <button
      onClick={(e) => {
        createRipple(e);
        onClick && onClick(e);
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <FaArrowRight className="relative top-[1px]"/>
      
      <AnimatePresence>
        {ripples.map((r) => (
            <>
            
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              borderRadius: "50%",
              backgroundColor: "rgba(255,71,18,0.6)",
              pointerEvents: "none",
            }}
          />
          
          </>
        ))}
      </AnimatePresence>
    </button>
  );
}
