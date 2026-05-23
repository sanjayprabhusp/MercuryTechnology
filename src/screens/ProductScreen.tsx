import { motion } from 'motion/react';
import { SpotlightCard } from '../components/SpotlightCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
} as const;

export function ProductScreen() {
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="px-6 md:px-12 max-w-7xl mx-auto space-y-10 pb-16">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-500/10 bg-slate-950/80 p-8 md:p-10 shadow-[0_35px_120px_rgba(14,165,233,0.15)]">
        <div className="pointer-events-none absolute -left-20 top-10 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Product Innovation</div>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">Our <span className="text-sky-400">Products</span></h1>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-300">A dynamic, modern product page designed for fast interactions, bold visuals, and a confident blue technology aesthetic.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-[2rem] border border-sky-500/15 bg-slate-900/80 p-6 shadow-xl shadow-sky-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%)]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-sky-500/10 bg-slate-950/90 p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-12 w-12 rounded-3xl bg-sky-500/15 text-sky-200 grid place-items-center text-lg font-bold">01</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">Fast Motion</p>
                  <p className="text-sm font-semibold text-white">Smoother transition speeds</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">Each content panel is built to animate with quick, smooth momentum so product details feel immediate and modern.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <ProductSection
        title="IOT - Smart Monitoring & Automation"
        img="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000"
        items={[
          { title: 'Home and Industry Automation', desc: 'Control lights, manage EB usage, and automate door locks.' },
          { title: 'Smart Monitoring System', desc: 'Real-time energy tracking and secure door lock access for homes and industrial sites.' },
          { title: 'GPS Tracking', desc: 'Location-aware automation and monitoring for faster, smarter control.' }
        ]}
      />

      <ProductSection
        title="Corporate & Business Automation"
        img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000"
        desc="Our Corporate & Business Automation platform streamlines operations with unified HR, task management, finance tools, bookings, and order management. It delivers a seamless workflow that improves efficiency, transparency, and decision-making for modern teams."
      />

      <ProductSection
        title="Web Applications"
        img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000"
        items={[
          { title: 'Capture360', desc: 'Real-time monitoring, resource tracking, and AI-driven insights.' },
          { title: 'Libro360AI', desc: 'Adaptive learning with intelligent recruitment and analytics.' },
          { title: 'Property360', desc: 'Automated digital suite for managing listings, engagement, and sales.' }
        ]}
      />

      <ProductSection
        title="Mobile Applications"
        img="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000"
        items={[
          { title: 'Ecom360', desc: 'Order tracking, route optimization, and delivery automation.' },
          { title: 'Thiran Telematics', desc: 'Fleet monitoring with GPS, fuel efficiency, and maintenance alerts.' },
          { title: 'Kovais', desc: 'Automated customer management, order tracking, and service coordination.' }
        ]}
      />
    </motion.div>
  );
}

function ProductSection({ title, desc, items, img }: { title: string; desc?: string; items?: { title: string; desc: string }[]; img?: string }) {
  return (
    <motion.div variants={itemVariants} className="relative">
      <SpotlightCard className="relative overflow-hidden border border-sky-400/10 bg-slate-950/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_32px_120px_rgba(14,165,233,0.12)] transition-all duration-300 hover:shadow-[0_40px_140px_rgba(14,165,233,0.18)]">
        <div className="pointer-events-none absolute -left-20 -top-16 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-14 bottom-12 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Dynamic design pattern</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
            {desc && <p className="text-slate-300 leading-relaxed text-base md:text-lg max-w-2xl">{desc}</p>}
          </div>

          {img && (
            <div className="relative overflow-hidden rounded-[2rem] border border-sky-500/10 bg-slate-900/90 shadow-xl shadow-sky-500/10">
              <img src={img} alt={title} className="w-full h-72 object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-white shadow-lg shadow-slate-950/20">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Fresh pattern</p>
                <p className="mt-2 text-sm text-slate-300">Fast, layered content blocks with motion.</p>
              </div>
            </div>
          )}
        </div>

        {items && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative"
              >
                <div className="absolute -left-4 -top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="relative rounded-[1.75rem] border border-sky-500/10 bg-slate-900/90 p-6 backdrop-blur-xl text-left shadow-[0_24px_70px_rgba(14,165,233,0.08)] transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/15 text-sky-100 font-semibold">{idx + 1}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sky-300">
                    <span className="inline-flex h-2 w-2 rounded-full bg-sky-400" /> rapid
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </SpotlightCard>
    </motion.div>
  );
}

