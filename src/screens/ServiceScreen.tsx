import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Smartphone, Cpu, Cloud, Target } from 'lucide-react';
import { OrbitCarousel } from '../components/OrbitCarousel';
import { SpotlightCard } from '../components/SpotlightCard';

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
} as const;

export function ServiceScreen() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  } as const;

  return (
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-8 h-full flex flex-col justify-center min-h-[80vh]">
        <div className="flex flex-col md:flex-row gap-6 items-center pt-6 relative w-full mb-6">
          <div className="space-y-4 max-w-xl text-center md:text-left flex-1">
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-sm">Our <span className="text-sky-400">Services</span></motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 font-medium">We offer comprehensive technology solutions tailored to your business needs, engineered for scale and performance.</motion.p>
          </div>
          <motion.div variants={itemVariants} className="flex-1 w-full relative">
             <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-sky-100 group relative">
               <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Technology Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent mix-blend-overlay" />
             </div>
          </motion.div>
        </div>

        <div className="w-full relative z-20">
          <OrbitCarousel 
            className="max-w-6xl mx-auto"
            items={[
               { img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000", title: "Web Development" },
               { img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000", title: "Progressive Web Apps" },
               { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", title: "IoT Solutions" },
               { img: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1000", title: "Backend & DevOps" },
               { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000", title: "Digital Marketing" },
               { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000", title: "AI & ML" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          <ServiceCard 
            icon={<Monitor size={40} />} 
            title="Web Development" 
            desc="Responsive and scalable web applications built using modern frameworks like React, Next.js, and Tailwind CSS." 
            className="md:col-span-2  border border-sky-100"
            img="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000"
          />
          <ServiceCard 
            icon={<Smartphone size={40} />} 
            title="Progressive Web Apps" 
            desc="High-performance progressive web apps built with React + Vite for seamless cross-device experiences." 
            className=" border border-sky-100"
            img="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000"
          />
          <ServiceCard 
            icon={<Cpu size={40} />} 
            title="IoT Solutions" 
            desc="Smart systems including GPS tracking, home automation, and industrial control for connected operations." 
            className=" border border-emerald-100"
            img="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
          />
          <ServiceCard 
            icon={<Cloud size={40} />} 
            title="Backend & DevOps" 
            desc="Comprehensive backend development with RESTful APIs, database integration, Docker, Kubernetes, and CI/CD pipelines." 
            className="md:col-span-2  border border-indigo-100"
            img="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1000"
          />
          <ServiceCard 
            icon={<Target size={40} />} 
            title="Digital Marketing" 
            desc="Data-driven digital marketing strategies including SEO, SEM, and social media campaigns for growth." 
            className="md:col-span-3 lg:col-span-1  border border-rose-100"
            img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
          />
        </div>
      </motion.div>
  );
}

function ServiceCard({ icon, title, desc, img, className = "" }: { icon: React.ReactNode, title: string, desc: string, img?: string, className?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <SpotlightCard className={`h-full w-full backdrop-blur-md p-8 rounded-[2.5rem] hover:border-sky-300 transition-transform duration-300 group flex flex-col justify-end relative overflow-hidden shadow-[0_32px_80px_rgba(14,165,233,0.12)] hover:shadow-[0_42px_100px_rgba(14,165,233,0.22)] ${className}`}>
        <div className="absolute inset-0 rounded-[2.5rem] border border-sky-400/10 pointer-events-none" />
        <div className="absolute inset-4 rounded-[2.25rem] border border-sky-500/10 opacity-70 blur-sm pointer-events-none" />
        {img && <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 mix-blend-multiply transition-opacity duration-500 z-0" />}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-0" />
        <div className="absolute top-8 right-8 text-sky-500/30 group-hover:text-sky-500 transition-colors transform group-hover:scale-110 duration-500 z-10">
          {icon}
        </div>
        <div className="space-y-3 relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h3>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">{desc}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

