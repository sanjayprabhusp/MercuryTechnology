import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScreenName } from '../types';
import { Zap } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

const tabs: {
  id: ScreenName;
  label: string;
}[] = [
  { id: 'home', label: 'Home' },
  { id: 'service', label: 'Services' },
  { id: 'product', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'employees', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export function Header({
  currentScreen,
  onNavigate,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        justify-center
        px-5
        pt-6
      "
    >
      <div
        className="
        w-full
        max-w-7xl
        rounded-full
        border
        border-white/10
        bg-black/35
        backdrop-blur-xl
        px-6
        py-4
        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
      "
      >
        <div
          className="
          flex
          items-center
          justify-between
          gap-5
        "
        >

          {/* LOGO */}

          <button
            onClick={() =>
              onNavigate('home')
            }
            className="
            flex
            items-center
            gap-3
            shrink-0
           "
          >
            <div
              className="
              h-12
              w-12
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-indigo-600
              flex
              items-center
              justify-center
              shadow-lg
              "
            >
              <Zap
                size={22}
                className="text-white"
              />
            </div>

            <div>
              <div
                className="
                text-white
                font-bold
                text-lg
                tracking-tight
                "
              >
                Mercury
              </div>

              <div
                className="
                text-cyan-300
                text-[10px]
                uppercase
                tracking-[3px]
                "
              >
                Technology
              </div>
            </div>
          </button>

          {/* NAVIGATION */}

          <nav
            className="
            flex
            overflow-x-auto
            gap-2
            justify-center
            flex-1
            hide-scrollbar
          "
          >
            {tabs.map((tab) => {
              const active =
                currentScreen === tab.id;

              return (
                <motion.button
                  layout
                  key={tab.id}
                  whileHover={{
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() =>
                    onNavigate(tab.id)
                  }
                  className={`
                    relative
                    px-4
                    py-2
                    rounded-full
                    whitespace-nowrap
                    text-sm
                    transition

                    ${
                      active
                        ? `
                        bg-white/10
                        border
                        border-cyan-400/30
                        text-white
                        `
                        : `
                        text-white/70
                        hover:text-white
                      `
                    }
                  `}
                >
                  {tab.label}

                  {active && (
                    <motion.div
                      layoutId="navActive"
                      transition={{ type: 'spring', stiffness: 450, damping: 40 }}
                      className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-6
                      bg-cyan-400
                      -translate-x-1/2
                    "
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Mobile menu button (only on small screens) */}
          <div className="flex items-center gap-3">
            {/* replace plain hamburger with three-element logo button on mobile */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-white/5"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-cyan-400 shadow-sm" />
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-sky-400 shadow-sm" />
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-500 shadow-sm" />
              </div>
            </motion.button>
          </div>

        </div>
        {/* Mobile slide-out nav */}
        {mobileOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-slate-900/95 backdrop-blur-lg p-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-white">Menu</div>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-white text-2xl leading-none">×</button>
            </div>

            <nav className="mt-6 flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    onNavigate(tab.id);
                    setMobileOpen(false);
                  }}
                  className="text-left px-3 py-3 rounded-lg text-white/90 hover:bg-white/5 transition"
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </motion.aside>
        )}
      </div>
    </motion.header>
  );
}