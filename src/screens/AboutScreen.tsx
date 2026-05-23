import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
} as const;

const blockVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 6 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } }
} as const;

export function AboutScreen() {
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="min-h-screen px-4 md:px-12 max-w-7xl mx-auto space-y-10 py-10">
      <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="space-y-6">
          <motion.h1 variants={blockVariants} className="text-5xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg">
            About <span className="text-sky-400">Us</span>
          </motion.h1>
          <motion.p variants={blockVariants} className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl leading-relaxed">
            We are a global software collective building intelligent digital products with clarity, speed, and design-forward thinking.
          </motion.p>
          <motion.div variants={blockVariants} className="grid gap-4 sm:grid-cols-2">
            <FeaturePill title="Fast" description="Designed for performance and polished user journeys." />
            <FeaturePill title="Professional" description="Every interaction feels premium and confident." />
          </motion.div>
        </div>

        <motion.div variants={blockVariants} className="relative h-[560px] rounded-[3rem] overflow-hidden border border-sky-500/10 bg-slate-900/80 shadow-[0_40px_120px_rgba(14,165,233,0.15)]">
          <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop" alt="Product team collaborating" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_22%)]" />
          <div className="absolute -right-10 top-12 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative z-10 flex h-full items-end p-10">
            <div className="max-w-xl rounded-[2.5rem] border border-white/15 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80 mb-4">Driven by precision</p>
              <h2 className="text-4xl font-black text-white leading-tight">We transform ideas into elegant digital products.</h2>
              <p className="mt-5 text-slate-300 leading-relaxed">From AI-driven systems to immersive web experiences, our work is built for speed, scale, and lasting impact.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div variants={blockVariants} className="relative rounded-[3rem] border border-sky-500/10 bg-slate-950/85 overflow-hidden shadow-[0_40px_120px_rgba(14,165,233,0.16)]">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Our story" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
          <div className="absolute left-0 top-0 h-40 w-40 rounded-br-[3rem] bg-sky-500/10 blur-3xl" />
          <div className="relative z-10 p-10 lg:p-14">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-sky-500/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-200">Our Story</span>
              <h2 className="text-4xl font-black text-white">The story behind our momentum.</h2>
              <p className="text-slate-300 leading-relaxed text-lg">Thiran is built on a belief that modern software should be intelligent, accessible, and beautifully designed. We bring that belief to everything we build, with a relentless focus on quality and growth.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <StoryCard title="About Thiran" text="The name ‘Thiran’ symbolizes talent and ability—qualities that define our team and shape each solution with creativity and precision." />
                <StoryCard title="360 Approach" text="Our all-encompassing perspective makes sure every product works beautifully across users, devices, and goals." />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={blockVariants} className="relative rounded-[3rem] border border-sky-500/10 bg-slate-950/85 overflow-hidden shadow-[0_40px_120px_rgba(14,165,233,0.16)]">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" alt="Our values" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/95 via-slate-950/60 to-transparent" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[3rem] bg-sky-400/10 blur-3xl" />
          <div className="relative z-10 p-10 lg:p-14">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-sky-500/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sky-200">Our Values</span>
              <h2 className="text-4xl font-black text-white">What guides every decision.</h2>
              <p className="text-slate-300 leading-relaxed text-lg">We believe clarity beats complexity, and collaboration beats isolation. Every value is chosen to help teams move faster while building trust, reliability, and delight.</p>
              <div className="grid gap-4">
                <StoryCard title="Our Vision" text="To become a global leader in intelligent digital transformation—empowering industries through AI, design, and innovation." />
                <StoryCard title="Innovation" text="We constantly push boundaries, harnessing emerging technologies to shape intelligent solutions." />
                <StoryCard title="Team First" text="We support each other across disciplines to deliver more creative, more reliable outcomes." />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FeaturePill({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[2rem] border border-sky-500/10 bg-slate-900/85 p-6 shadow-[0_30px_90px_rgba(14,165,233,0.12)] backdrop-blur-xl">
      <div className="inline-flex items-center rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200 mb-4">{title}</div>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

function StoryCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div whileHover={{ translateY: -4 }} transition={{ duration: 0.24 }} className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-5 backdrop-blur-md shadow-lg shadow-slate-950/20 hover:border-sky-400/20">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{text}</p>
    </motion.div>
  );
}
