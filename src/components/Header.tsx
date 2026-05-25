import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  Zap,
  Menu,
  X,
} from 'lucide-react';

import { ScreenName } from '../types';

interface HeaderProps {
  currentScreen: ScreenName;
  onNavigate: (
    screen: ScreenName
  ) => void;
}

const tabs: {
  id: ScreenName;
  label: string;
}[] = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'service',
    label: 'Service',
  },
  {
    id: 'product',
    label: 'Product',
  },
  {
    id: 'about',
    label: 'About',
  },
  {
    id: 'employees',
    label: 'Team',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
];

export function Header({
  currentScreen,
  onNavigate,
}: HeaderProps) {
  const [open, setOpen] =
    useState(false);

  const closeMenu = () =>
    setOpen(false);

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
        transition={{
          duration: 0.4,
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
            type="button"
            onClick={() =>
              onNavigate(
                'home'
              )
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
              <h1
                className="
                text-white
                text-lg
                font-bold
              "
              >
                Mercury
              </h1>

              <p
                className="
                text-cyan-300
                text-xs
              "
              >
                Technology
              </p>
            </div>
          </button>

          {/* MENU */}

          <button
            type="button"
            onClick={() =>
              setOpen(true)
            }
            className="
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            text-white
          "
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* OVERLAY */}

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
              justify-between
              items-center
            "
            >
              <div
                className="
                text-white
                font-bold
                text-xl
              "
              >
                Mercury
              </div>

              <button
                type="button"
                onClick={
                  closeMenu
                }
                className="
                text-white
              "
              >
                <X size={28} />
              </button>
            </div>

            {/* MENU */}

            <div
              className="
              px-6
              pt-8
            "
            >
              {tabs.map(
                (
                  tab,
                  index
                ) => (
                  <motion.button
                    type="button"
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

                      closeMenu();
                    }}
                    className={`
                    block
                    w-full
                    text-left
                    py-6
                    text-2xl
                    rounded-3xl
                    px-5
                    mb-3

                    ${
                      currentScreen ===
                      tab.id
                        ? `
                        bg-blue-500/20
                        text-white
                        `
                        : `
                        text-slate-300
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