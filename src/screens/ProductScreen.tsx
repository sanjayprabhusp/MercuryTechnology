import { motion } from 'motion/react';
import { SpotlightCard } from '../components/SpotlightCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25
    }
  }
} as const;

export function ProductScreen() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="px-6 md:px-12 max-w-7xl mx-auto space-y-10 pb-16"
    >

      <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-500/10 bg-slate-950/80 p-8 md:p-10 shadow-[0_14px_40px_rgba(14,165,233,0.08)]">

        <div className="pointer-events-none absolute -left-20 top-10 h-44 w-44 rounded-full bg-sky-500/10 md:blur-2xl blur-lg" />

        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-400/10 md:blur-2xl blur-lg" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">

          <motion.div variants={itemVariants} className="space-y-6">

            <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">

              Product Innovation

            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">

              Our <span className="text-sky-400">Products</span>

            </h1>

            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-300">

              A dynamic, modern product page designed for fast interactions.

            </p>

          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative rounded-[2rem] border border-sky-500/15 bg-slate-900/80 p-6 shadow-lg"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_30%)]" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-sky-500/10 bg-slate-950/90 p-6">

              <div className="mb-6 flex items-center gap-3">

                <span className="h-12 w-12 rounded-3xl bg-sky-500/15 text-sky-200 grid place-items-center text-lg font-bold">

                  01

                </span>

                <div>

                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">

                    Fast Motion

                  </p>

                  <p className="text-sm font-semibold text-white">

                    Smoother transition speeds

                  </p>

                </div>

              </div>

              <p className="text-slate-400">

                Each panel is optimized for faster mobile rendering.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

      <ProductSection
        title="IOT - Smart Monitoring & Automation"
        img="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000"
        items={[
          {
            title: 'Home and Industry Automation',
            desc: 'Control lights and automate door locks.'
          },
          {
            title: 'Smart Monitoring System',
            desc: 'Real-time energy tracking.'
          },
          {
            title: 'GPS Tracking',
            desc: 'Location-aware automation.'
          }
        ]}
      />

      <ProductSection
        title="Corporate & Business Automation"
        img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000"
        desc="Streamlined workflow and modern business operations."
      />

      <ProductSection
        title="Web Applications"
        img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000"
        items={[
          {
            title: 'Capture360',
            desc: 'Real-time monitoring.'
          },
          {
            title: 'Libro360AI',
            desc: 'Adaptive learning.'
          },
          {
            title: 'Property360',
            desc: 'Automated management.'
          }
        ]}
      />

      <ProductSection
        title="Mobile Applications"
        img="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000"
        items={[
          {
            title: 'Ecom360',
            desc: 'Order automation.'
          },
          {
            title: 'Thiran Telematics',
            desc: 'Fleet monitoring.'
          },
          {
            title: 'Kovais',
            desc: 'Customer management.'
          }
        ]}
      />

    </motion.div>
  );
}

function ProductSection({
  title,
  desc,
  items,
  img
}: {
  title: string;
  desc?: string;
  items?: {
    title: string;
    desc: string;
  }[];
  img?: string;
}) {

  return (

    <motion.div variants={itemVariants} className="relative">

      <SpotlightCard
        className="
        relative
        overflow-hidden
        border
        border-sky-400/10
        bg-slate-950/80
        md:backdrop-blur-lg
        p-8
        md:p-12
        rounded-[2.5rem]
        shadow-[0_14px_40px_rgba(14,165,233,0.06)]
        transition-transform
        duration-200
        md:hover:scale-[1.01]
        will-change-transform
      "
      >

        <div className="pointer-events-none absolute -left-20 -top-16 h-44 w-44 rounded-full bg-sky-500/10 md:blur-2xl blur-lg" />

        <div className="pointer-events-none absolute -right-14 bottom-12 h-56 w-56 rounded-full bg-sky-400/10 md:blur-2xl blur-lg" />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start relative z-10">

          <div className="space-y-6">

            <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs text-sky-200">

              Dynamic design pattern

            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">

              {title}

            </h2>

            {desc && (
              <p className="text-slate-300">

                {desc}

              </p>
            )}

          </div>

          {img && (

            <div className="relative overflow-hidden rounded-[2rem] border border-sky-500/10 bg-slate-900/90">

              <img
                loading="lazy"
                decoding="async"
                src={img}
                alt={title}
                className="w-full h-72 object-cover transform-gpu transition-transform duration-500 md:hover:scale-[1.02]"
              />

            </div>

          )}

        </div>

        {items && (

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">

            {items.map((item, idx) => (

              <motion.div
                key={idx}
                initial={false}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.2
                }}
                className="relative"
              >

                <div className="absolute -left-4 -top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-lg" />

                <div
                  className="
                  relative
                  rounded-[1.75rem]
                  border
                  border-sky-500/10
                  bg-slate-900/90
                  p-6
                  md:backdrop-blur-xl
                  shadow-lg
                  transition-transform
                  duration-200
                  md:hover:-translate-y-1
                "
                >

                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/15 text-sky-100">

                    {idx + 1}

                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">

                    {item.title}

                  </h3>

                  <p className="text-sm text-slate-400">

                    {item.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        )}

      </SpotlightCard>

    </motion.div>

  );
}