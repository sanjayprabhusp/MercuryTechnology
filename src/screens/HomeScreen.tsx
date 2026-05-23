import { motion } from 'motion/react';
import { GlowButton } from '../components/GlowButton';
import { OrbitCarousel } from '../components/OrbitCarousel';
import { Cloud, Code, Cpu, Database } from 'lucide-react';

const FloatingIcons = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <motion.div
      className="absolute top-[15%] left-[10%] md:left-[20%] text-sky-500/10 md:text-sky-500/20"
      animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    >
      <Cloud size={80} />
    </motion.div>
    <motion.div
      className="absolute top-[25%] right-[10%] md:right-[25%] text-sky-600/10 md:text-sky-600/20"
      animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -15, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    >
      <Code size={64} />
    </motion.div>
    <motion.div
      className="absolute bottom-[40%] left-[5%] md:left-[25%] text-sky-400/10 md:text-sky-400/20"
      animate={{ y: [0, 25, 0], x: [0, -30, 0], rotate: [0, 20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <Cpu size={90} />
    </motion.div>
    <motion.div
      className="absolute bottom-[20%] right-[10%] md:right-[20%] text-sky-500/10 md:text-sky-500/20"
      animate={{ y: [0, -40, 0], x: [0, 30, 0], rotate: [0, -10, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    >
      <Database size={100} />
    </motion.div>
  </div>
);

const DigitalGlobe = () => (
  <div className="absolute top-[20%] md:top-[30%] lg:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.3] sm:scale-[0.4] md:scale-[0.5] pointer-events-none z-0 flex items-center justify-center opacity-70">
    <div className="absolute bg-sky-200/40 rounded-full blur-3xl w-[500px] h-[500px]" />
    <motion.div 
      className="relative w-[500px] h-[500px] rounded-full"
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateY: [0, 360], rotateX: [15, 25, 15] }}
      transition={{ rotateY: { duration: 25, repeat: Infinity, ease: "linear" }, rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" } }}
    >
      {[...Array(8)].map((_, i) => (
        <div 
          key={`lng-${i}`}
          className="absolute inset-0 rounded-full border border-sky-400/20"
          style={{ transform: `rotateY(${i * 22.5}deg)` }}
        />
      ))}
      {[...Array(7)].map((_, i) => (
        <div 
          key={`lat-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20"
          style={{ 
            width: `${Math.cos((i - 3) * 25 * Math.PI / 180) * 100}%`,
            height: `${Math.cos((i - 3) * 25 * Math.PI / 180) * 100}%`,
            transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${Math.sin((i - 3) * 25 * Math.PI / 180) * 250}px)`
          }}
        />
      ))}
    </motion.div>
  </div>
);

export function HomeScreen() {
  return (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col items-center justify-start pt-20 md:justify-center min-h-[calc(100vh-80px)] p-6 text-center relative z-10 w-full overflow-hidden"
      >
        <FloatingIcons />
        <DigitalGlobe />

        <div className="max-w-4xl space-y-10 relative z-20 w-full mt-10 md:mt-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2, duration: 1.2, bounce: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight drop-shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <span className="text-sky-400">We Build</span><br />
              <span className="text-white">Digital Experiences</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          >
            Crafting innovative technology solutions that transform businesses and elevate user experiences.
          </motion.p>
        </div>

        <div className="w-full max-w-6xl mt-8 relative z-20">
          <OrbitCarousel 
            items={[
               { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070", title: "Data Analytics" },
               { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000", title: "Abstract UI" },
               { img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2000", title: "Finance Logic" },
               { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000", title: "Smart Tech" },
               { img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070", title: "Code Platform" },
               { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070", title: "Team Collaboration" },
            ]}
            title={<h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight opacity-90">Featured <span className="text-sky-400">Projects</span></h2>}
          />
        </div>
      </motion.div>
  );
}
