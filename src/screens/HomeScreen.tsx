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
        className="relative z-10 w-full overflow-hidden min-h-[calc(100vh-80px)] pt-20 pb-12"
      >
        <FloatingIcons />
        <DigitalGlobe />

        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="text-center py-12 flex flex-col items-center">
              <motion.h1
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
              >
                <span className="text-sky-400">We Build</span> <span className="text-white">Digital Experiences</span>
              </motion.h1>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.15, ease: 'easeInOut' }}
                className="mt-6 text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed"
              >
                Crafting innovative technology solutions that transform businesses and elevate user experiences.
              </motion.p>

              {/* About button intentionally removed from homepage per request */}
            </div>

            {/* Right: Blobs / visual */}
            <div className="relative w-full h-96 md:h-[480px] lg:h-[560px] flex items-center justify-center pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* colorful blobs generated with layered divs */}
                  <div className="absolute right-6 top-8 w-64 h-40 md:w-96 md:h-56 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 opacity-90 blur-[36px] transform rotate-6" />
                  <div className="absolute right-24 top-40 w-44 h-28 md:w-72 md:h-44 rounded-full bg-gradient-to-r from-cyan-300 via-sky-500 to-fuchsia-500 opacity-95 blur-[30px] transform rotate-12" />
                  <div className="absolute right-[-20px] bottom-12 w-96 h-72 md:w-[520px] md:h-[360px] rounded-[48%] bg-gradient-to-r from-violet-600 via-pink-400 to-cyan-300 opacity-95 blur-[40px] transform rotate-6" />
                  <div className="absolute right-40 bottom-36 w-36 h-24 md:w-56 md:h-36 rounded-full bg-gradient-to-r from-pink-400 via-sky-300 to-cyan-400 opacity-90 blur-[20px] transform rotate-12" />

                  {/* glossy highlights */}
                  <div className="absolute right-14 top-20 w-36 h-20 md:w-52 md:h-28 rounded-full bg-white/10 mix-blend-screen blur-[8px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured carousel kept below hero */}
          <div className="w-full mt-12">
            <OrbitCarousel
              items={[
                { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070", title: "Data Analytics", description: "Actionable insights from user behavior, revenue trends, and operational health." },
                { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000", title: "Abstract UI", description: "Themed interface systems built for clarity, motion, and brand-forward presentation." },
                { img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2000", title: "Finance Logic", description: "Secure fintech dashboards and intelligent workflows for modern financial teams." },
                { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000", title: "Smart Tech", description: "Connected product experiences blending automation, IoT, and responsive data surfaces." },
                { img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070", title: "Code Platform", description: "Developer-centric tooling that streamlines engineering delivery and shared collaboration." },
                { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070", title: "Team Collaboration", description: "Real-time planning and communication tools that keep distributed teams aligned." },
              ]}
              title={<h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight opacity-90">Featured <span className="text-sky-400">Projects</span></h2>}
            />
          </div>
        </div>
      </motion.div>
  );
}
