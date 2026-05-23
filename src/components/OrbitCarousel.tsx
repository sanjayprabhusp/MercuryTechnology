import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function OrbitCarousel({ items, title, className = '' }: { items: { img: string; title?: string; description?: string }[]; title?: React.ReactNode; className?: string }) {
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % items.length);
      }, 4200);
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [items.length, isPaused]);

  const go = (dir: number) => {
    setIndex((i) => {
      const next = (i + dir + items.length) % items.length;
      return next;
    });
  };

  const jump = (i: number) => setIndex(i);

  return (
    <div className="w-full flex flex-col items-center py-8">
      {title && <div className="mb-4">{title}</div>}

      <div
        className={`relative w-full max-w-6xl min-h-[420px] md:min-h-[560px] rounded-[2.25rem] overflow-hidden bg-slate-900/60 border border-white/10 shadow-[0_35px_70px_rgba(15,23,42,0.35)] ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="absolute inset-0 flex flex-col md:flex-row items-stretch"
          >
            <div className="w-full md:w-1/2 relative h-[260px] md:h-auto overflow-hidden">
              <img src={items[index].img} alt={items[index].title || 'slide'} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
            </div>
            <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-2 text-sm md:text-base font-semibold text-sky-200 mb-4">Featured</div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{items[index].title}</h3>
              <p className="text-base md:text-lg text-slate-300 max-w-3xl">A smooth slideshow pattern with quick, responsive transitions — click arrows or dots to navigate.</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next */}
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white p-3 rounded-lg"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white p-3 rounded-lg"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-40 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => jump(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-sky-400 w-6' : 'bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
