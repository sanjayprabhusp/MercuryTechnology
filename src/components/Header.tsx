import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Menu, X } from 'lucide-react';
import { ScreenName } from '../types';

interface HeaderProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'service', label: 'Service' },
  { id: 'product', label: 'Product' },
  { id: 'about', label: 'About' },
  { id: 'employees', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export function Header({
  currentScreen,
  onNavigate,
}: HeaderProps) {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        fixed
        top-0
        left-0
        right-0
        z-50
        px-3
        pt-3
      "
      >
        <div
          className="
          h-[78px]
          rounded-[28px]
          border
          border-white/10
          bg-[#081127]/95
          backdrop-blur-xl
          px-5
          flex
          items-center
          justify-between
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
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
          "
          >
            <div
              className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-br
              from-blue-500
              to-cyan-400
              flex
              items-center
              justify-center
              shadow-lg
            "
            >
              <Zap
                size={20}
                className="
                text-white
              "
              />
            </div>

            <div>
              <div
                className="
                text-white
                text-xl
                font-bold
              "
              >
                Mercury
              </div>

              <div
                className="
                text-blue-300
                text-xs
              "
              >
                Technology
              </div>
            </div>
          </button>

          {/* MENU */}

          <button
            onClick={() =>
              setOpen(true)
            }
            className="
            w-12
            h-12
            rounded-xl
            text-white
            flex
            items-center
            justify-center
          "
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* FULL SCREEN MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            z-[100]
            bg-[#081127]
          "
          >
            {/* TOP */}

            <div
              className="
              h-[78px]
              px-5
              flex
              items-center
              justify-between
              border-b
              border-white/10
            "
            >
              <div
                className="
                flex
                items-center
                gap-3
              "
              >
                <div
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-400
                  flex
                  items-center
                  justify-center
                "
                >
                  <Zap
                    size={20}
                    className="
                    text-white
                  "
                  />
                </div>

                <div>
                  <div className="text-white font-bold">
                    Mercury
                  </div>

                  <div className="text-blue-300 text-xs">
                    Technology
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="
                text-white
              "
              >
                <X size={28} />
              </button>
            </div>

            {/* MENU ITEMS */}

            <div
              className="
              p-6
            "
            >
              {tabs.map(
                (
                  tab,
                  index
                ) => (
                  <motion.button
                    key={
                      tab.id
                    }
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay:
                        index *
                        0.08,
                    }}
                    onClick={() => {
                      onNavigate(
                        tab.id
                      );

                      setOpen(
                        false
                      );
                    }}
                    className={`
                      w-full
                      text-left
                      py-7
                      text-xl
                      rounded-3xl
                      px-5
                      mb-3
                      transition

                      ${
                        currentScreen ===
                        tab.id
                          ? `
                        bg-blue-500/20
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
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}