import { motion } from 'motion/react';
import React from 'react';
import { OrbitCarousel } from '../components/OrbitCarousel';
import { Cloud, Code, Cpu, Database } from 'lucide-react';

const FloatingIcons = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[15%] left-[10%] text-sky-500/10 md:text-sky-500/20">
      <Cloud size={80} />
    </div>
    <div className="absolute top-[25%] right-[10%] text-sky-600/10 md:text-sky-600/20">
      <Code size={64} />
    </div>
    <div className="absolute bottom-[40%] left-[5%] text-sky-400/10 md:text-sky-400/20">
      <Cpu size={90} />
    </div>
    <div className="absolute bottom-[20%] right-[10%] text-sky-500/10 md:text-sky-500/20">
      <Database size={100} />
    </div>
  </div>
);

const FloatingModel = () => (
  <motion.div
    animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    className="relative w-full max-w-[420px] aspect-[1.02]"
  >
    <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-violet-900 via-fuchsia-700 to-sky-500 shadow-[0_40px_120px_rgba(168,85,247,0.25)] ring-1 ring-white/10 overflow-hidden">
      <div className="absolute -left-10 top-12 w-40 h-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute right-10 bottom-10 w-52 h-52 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute inset-x-0 top-1/2 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="absolute left-16 top-16 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md" />
      <div className="absolute right-16 bottom-16 w-24 h-24 rounded-full bg-purple-300/20 blur-xl" />
      <div className="absolute inset-0 border border-white/10" />
    </div>
    <div className="absolute inset-0 rounded-[3rem] ring-1 ring-cyan-300/20 backdrop-blur-sm" />
  </motion.div>
);

export function HomeScreen() {
  return (
    <div className="relative z-10 w-full overflow-hidden min-h-[calc(100vh-80px)] pt-20 pb-12">
      <FloatingIcons />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center py-12 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
              <span className="text-sky-400">We Build</span> <span className="text-white">Digital Experiences</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed">
              Crafting innovative technology solutions that transform businesses and elevate user experiences.
            </p>
          </div>

          <div className="relative w-full h-96 md:h-[480px] lg:h-[560px] flex items-center justify-center pointer-events-none">
            <div className="hero-model-bg absolute inset-0 rounded-[2.5rem] bg-cover bg-center shadow-[0_40px_120px_rgba(20,18,49,0.35)]" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/10" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <FloatingModel />
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <OrbitCarousel
            items={[
              { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070', title: 'Data Analytics' },
              { img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000', title: 'Abstract UI' },
              { img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2000', title: 'Finance Logic' },
            ]}
            title={<h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight opacity-90">Featured <span className="text-sky-400">Projects</span></h2>}
          />
        </div>
      </div>
    </div>
  );
}
