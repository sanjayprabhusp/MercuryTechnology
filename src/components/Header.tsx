import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ScreenName } from '../types';

interface HeaderProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

const NavButton: React.FC<{ tab: { id: ScreenName; label: string }; isActive: boolean; onClick: () => void }> = ({ tab, isActive, onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

   return (
    <motion.button
     type="button"
     ref={buttonRef}
     onMouseMove={handleMouseMove}
     onClick={onClick}
     whileHover={{ y: -2, scale: 1.02 }}
     whileTap={{ scale: 0.98 }}
     transition={{ duration: 0.22 }}
     aria-current={isActive ? 'page' : undefined}
     className={`relative px-5 py-2 text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 group ${
       isActive ? 'text-white' : 'text-slate-300 hover:text-white hover:bg-sky-500/15'
     }`}
   >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(40px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.8), transparent 40%)`
        }}
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(40px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`
        }}
      />
     {isActive && (
       <motion.div
         layoutId="active-pill"
         className="absolute inset-0 bg-sky-500/20 border border-sky-400/30 rounded-full shadow-sm"
         transition={{ type: 'spring', duration: 0.6, bounce: 0.2 }}
       />
     )}
     <span className="relative z-10 transition-colors duration-300">{tab.label}</span>
   </motion.button>
  );
}

export function Header({ currentScreen, onNavigate }: HeaderProps) {
  const tabs: { id: ScreenName; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'service', label: 'Services' },
    { id: 'product', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'employees', label: 'Employees' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-3 left-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-7xl -translate-x-1/2 rounded-full bg-slate-950/95 backdrop-blur-3xl border border-sky-500/20 shadow-[0_25px_80px_rgba(15,23,42,0.35)] transition-all duration-500"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-3 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/20 border border-white/10">
            <span className="text-lg font-black tracking-tight">M</span>
          </div>
          <div>
            <div className="text-base font-black text-white">Mercury</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Tech</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2 rounded-full bg-slate-900/70 p-2 border border-sky-500/10 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
          {tabs.map((tab) => (
            <NavButton
              key={tab.id}
              tab={tab}
              isActive={currentScreen === tab.id}
              onClick={() => onNavigate(tab.id)}
            />
          ))}
        </nav>

        <div className="md:hidden flex flex-wrap justify-center gap-2 overflow-x-auto bg-slate-950/90 rounded-full px-3 py-2 hide-scrollbar border border-sky-500/10 shadow-sm">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              aria-current={currentScreen === tab.id ? 'page' : undefined}
              className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300 ${
                currentScreen === tab.id ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'text-slate-300 bg-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
