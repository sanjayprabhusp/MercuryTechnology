import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';

export function GlowButton({ children, onClick, className = '' }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative overflow-hidden rounded-full bg-[#000D53]/50 backdrop-blur-md border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:border-[#EEBA1B] group shadow-md shadow-black/20 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(238, 186, 27, 0.4), transparent 40%)`
        }}
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 40%)`
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      {/* Box shadow glow on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
    </motion.button>
  );
}
