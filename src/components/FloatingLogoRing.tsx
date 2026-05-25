import { motion } from 'motion/react';
import { Package, Layers, Rocket, Server, Shield, TrendingUp } from 'lucide-react';

const logos = [
  { icon: Package, label: 'Product UI' },
  { icon: Layers, label: 'Platform' },
  { icon: Rocket, label: 'Launch' },
  { icon: Server, label: 'Cloud' },
  { icon: Shield, label: 'Secure' },
  { icon: TrendingUp, label: 'Growth' },
];

export function FloatingLogoRing() {
  // Duplicate array items for a seamless, continuous infinite loop animation strip
  const continuousLogos = [...logos, ...logos];

  return (
    <section className="relative py-16 overflow-hidden bg-[#081a33]">
      {/* Top Gradient Shadow */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#061121] to-transparent pointer-events-none z-10" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[3rem] border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_40px_120px_rgba(14,165,233,0.18)] backdrop-blur-xl overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            
            {/* Left Column: Typography */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-300/80">Connecting sections</p>
              <h2 className="text-4xl font-black text-white">Floating service and product logos</h2>
              <p className="text-slate-300 leading-relaxed">
                A smooth loop of emblematic circles creates a subtle motion bridge between product and about pages, reinforcing the brand rhythm.
              </p>
            </div>
            
            {/* Right Column: Dynamic Framer Motion Marquees */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-6 flex flex-col gap-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_25%)] pointer-events-none" />
              
              {/* Row 1: Leftward Infinite Marquee */}
              <div className="relative w-full overflow-hidden mask-gradient">
                <motion.div 
                  className="flex gap-4 w-max"
                  animate={{ x: [0, "-50%"] }}
                  transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity
                  }}
                >
                  {continuousLogos.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={`row1-${item.label}-${index}`} className="w-36 flex-shrink-0 flex flex-col items-center gap-3 rounded-[2rem] border border-sky-500/15 bg-slate-950/90 px-4 py-5 shadow-[0_18px_45px_rgba(14,165,233,0.14)]">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-500/10 text-sky-300">
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-semibold text-slate-100 text-center select-none">{item.label}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Row 2: Rightward Infinite Marquee (Reversed layout context) */}
              <div className="relative w-full overflow-hidden mask-gradient">
                <motion.div 
                  className="flex gap-4 w-max"
                  animate={{ x: ["-50%", 0] }}
                  transition={{
                    ease: "linear",
                    duration: 22, // Altered slightly to add visual rhythm variance
                    repeat: Infinity
                  }}
                >
                  {[...continuousLogos].reverse().map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={`row2-${item.label}-${index}`} className="w-36 flex-shrink-0 flex flex-col items-center gap-3 rounded-[2rem] border border-sky-500/15 bg-slate-950/90 px-4 py-5 shadow-[0_18px_45px_rgba(14,165,233,0.14)]">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 text-sky-200">
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-semibold text-slate-100 text-center select-none">{item.label}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Soft Gradient Mask Layers to fade edges gracefully */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-900/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-900/80 to-transparent pointer-events-none z-10" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}