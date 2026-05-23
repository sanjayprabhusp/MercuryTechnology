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
     className={`relative px-5 py-2 text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 group border backdrop-blur-sm ${
       isActive ? 'text-white border-sky-400/50' : 'text-slate-300 hover:text-white hover:bg-white/10 border-white/10 hover:border-white/20'
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
         className="absolute inset-0 bg-gradient-to-b from-sky-500/40 to-sky-500/20 border border-sky-300/50 rounded-full shadow-lg shadow-sky-500/20 backdrop-blur-sm"
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
      className="fixed top-3 left-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-7xl -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-950/30 to-slate-950/10 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 sm:h-12 w-9 sm:w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/20 border border-white/10">
            <span className="text-sm sm:text-lg font-black tracking-tight">M</span>
          </div>
          <div>
            <div className="text-sm sm:text-base font-black text-white">Mercury</div>
            <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Tech</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-b from-slate-900/30 to-slate-950/20 p-2 border border-white/10 shadow-lg shadow-slate-950/5 backdrop-blur-xl">
          {tabs.map((tab) => (
            <NavButton
              key={tab.id}
              tab={tab}
              isActive={currentScreen === tab.id}
              onClick={() => onNavigate(tab.id)}
            />
          ))}
        </nav>

        <div className="md:hidden flex flex-wrap justify-center gap-1.5 overflow-x-auto bg-gradient-to-b from-slate-950/30 to-slate-950/15 rounded-full px-2 py-1.5 hide-scrollbar border border-white/10 shadow-md shadow-slate-950/5">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              aria-current={currentScreen === tab.id ? 'page' : undefined}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300 backdrop-blur ${
                currentScreen === tab.id ? 'bg-sky-500/80 text-white shadow-lg shadow-sky-500/30 border border-sky-400/50' : 'text-slate-300 bg-white/5 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
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
