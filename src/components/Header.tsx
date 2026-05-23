import React from 'react';
import { motion } from 'motion/react';
import { ScreenName } from '../types';

interface HeaderProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

const NavButton: React.FC<{ tab: { id: ScreenName; label: string }; isActive: boolean; onClick: () => void }> = ({ tab, isActive, onClick }) => {
   return (
    <motion.button
     type="button"
     onClick={onClick}
     whileHover={{ y: -1, scale: 1.01 }}
     whileTap={{ scale: 0.99 }}
     transition={{ duration: 0.15 }}
     aria-current={isActive ? 'page' : undefined}
     className={`relative px-4 py-2 text-sm font-semibold rounded-full overflow-hidden transition-colors duration-150 will-change-transform ${
       isActive ? 'text-white bg-sky-500/25 border border-sky-400/40' : 'text-slate-300 hover:text-white hover:bg-white/5 border border-white/10'
     }`}
   >
     <span className="relative z-10">{tab.label}</span>
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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed top-3 left-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-7xl -translate-x-1/2 rounded-full bg-slate-950/20 backdrop-blur-lg border border-white/10 shadow-[0_8px_20px_rgba(15,23,42,0.1)] will-change-transform"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 sm:h-12 w-9 sm:w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-md shadow-sky-500/15 border border-white/10">
            <span className="text-sm sm:text-lg font-black tracking-tight">M</span>
          </div>
          <div>
            <div className="text-sm sm:text-base font-black text-white">Mercury</div>
            <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Tech</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-slate-950/15 p-1.5 border border-white/10 shadow-sm shadow-slate-950/5 backdrop-blur-lg">
          {tabs.map((tab) => (
            <NavButton
              key={tab.id}
              tab={tab}
              isActive={currentScreen === tab.id}
              onClick={() => onNavigate(tab.id)}
            />
          ))}
        </nav>

        <div className="md:hidden flex flex-wrap justify-center gap-1 overflow-x-auto bg-slate-950/15 rounded-full px-1.5 py-1 hide-scrollbar border border-white/10 shadow-sm shadow-slate-950/5">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              aria-current={currentScreen === tab.id ? 'page' : undefined}
              className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-colors duration-150 ${
                currentScreen === tab.id ? 'bg-sky-500/25 text-white border border-sky-400/40' : 'text-slate-300 bg-white/0 hover:text-white hover:bg-white/5 border border-transparent'
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
