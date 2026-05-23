import { motion } from 'motion/react';
import { employees } from '../data';
import { Phone, MapPin } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: 12 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', stiffness: 110, damping: 18 } }
} as const;

const femaleFirstNames = new Set([
  'VARSHINI',
  'ANITA',
  'MEERA',
  'DIVYA',
  'SNEHA',
  'RAMYA',
  'ANJALI',
  'KAMALA',
  'LAVANYA'
]);

const malePortraits = [
  'https://cdn.corenexis.com/files/c/8977862720.jpg',
  'https://cdn.corenexis.com/files/c/5513414720.jpg',
  'https://cdn.corenexis.com/files/c/9696721720.webp',
  'https://cdn.corenexis.com/files/c/4299736720.jpg',
  'https://cdn.corenexis.com/files/c/6488816720.jpg',
  'https://cdn.corenexis.com/files/c/2665823720.jpg',
  'https://cdn.corenexis.com/files/c/6975235720.jpg',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format',
  'https://cdn.corenexis.com/files/c/9696721720.webp'
];

const femalePortraits = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format',
  'https://cdn.corenexis.com/files/c/9696721720.webp',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format',
  'https://images.unsplash.com/photo-1517841960108-643ea20adecb?q=80&w=400&auto=format',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format',
  'https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=400&auto=format',
  'https://images.unsplash.com/photo-1517841961426-822ad2af9f46?q=80&w=400&auto=format'
];

function getEmployeeImage(name: string, index: number) {
  if (index < 2) {
    return malePortraits[index % malePortraits.length];
  }

  const firstName = name.split(' ')[0].toUpperCase();
  const portraitList = femaleFirstNames.has(firstName) ? femalePortraits : malePortraits;
  return portraitList[index % portraitList.length];
}

export function EmployeeScreen() {
  return (
      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-6 items-center pt-6 border-b border-white/50 pb-6 relative">
          <div className="space-y-4 text-center md:text-left flex-1">
             <motion.h1 variants={cardVariants} className="text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-sm">The <span className="text-sky-400">Team</span></motion.h1>
            <motion.p variants={cardVariants} className="text-lg text-slate-300 font-medium mt-2 max-w-xl">Meet the talented individuals behind our innovative solutions.</motion.p>
            <motion.div variants={cardVariants} className="text-3xl font-light text-slate-200 mt-4 inline-block">
              <span className="font-bold">{employees.length}</span> Members
            </motion.div>
          </div>
          <motion.div variants={cardVariants} className="flex-1 w-full relative">
             <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-white/40 group relative">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="The Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent mix-blend-overlay" />
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {employees.map((emp, i) => (
            <motion.div key={emp.id} variants={cardVariants} style={{ perspective: 1100 }}>
              <motion.div whileHover={{ rotateY: 10, rotateX: 3, translateZ: 10, scale: 1.02 }} transition={{ duration: 0.22 }} style={{ transformStyle: 'preserve-3d' }}>
                <SpotlightCard className="group relative bg-slate-950/85 backdrop-blur-xl border border-sky-400/10 rounded-[2rem] p-6 overflow-hidden shadow-[0_30px_80px_rgba(14,165,233,0.12)] transition-all duration-300 hover:shadow-[0_40px_90px_rgba(14,165,233,0.22)] h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_20%)]" />
                  <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
                  <div className="absolute left-6 bottom-6 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 flex gap-4 items-center border-b border-white/10 pb-4">
                      <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-[1.5rem] bg-slate-900/90 border border-sky-400/20 shadow-lg shadow-sky-500/10 overflow-hidden">
                        <img
                          src={getEmployeeImage(emp.name, i)}
                          alt={emp.name}
                          className="w-full h-full object-cover"
                          onError={(event) => {
                            const target = event.target as HTMLImageElement;
                            target.src = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(emp.name)}`;
                          }}
                        />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-semibold text-white transition-colors group-hover:text-sky-300">{emp.name}</h3>
                        <div className="text-xs uppercase tracking-[0.24em] text-sky-200/70 mt-2">{emp.role}</div>
                      </div>
                    </div>

                    <div className="grid gap-4 flex-1">
                      <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-inner">
                        <div className="text-xs uppercase tracking-[0.24em] text-sky-200/70 mb-2">Contact</div>
                        <div className="text-sm text-slate-300 flex items-center gap-2"><Phone size={16} className="text-sky-400" />{emp.phone}</div>
                        <div className="text-sm text-slate-300 flex items-start gap-2 mt-2"><MapPin size={16} className="text-sky-400 mt-1" />{emp.address}</div>
                      </div>
                      <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-inner">
                        <div className="text-xs uppercase tracking-[0.24em] text-sky-200/70 mb-2">Professional Details</div>
                        <div className="text-sm text-slate-300 leading-relaxed">{emp.attendance ? `Attendance: ${emp.attendance}` : 'Attendance details coming soon.'}</div>
                        <div className="text-sm text-slate-300 leading-relaxed mt-3">{emp.bloodGroup ? `Blood Group: ${emp.bloodGroup}` : 'Core talent and team-first mindset.'}</div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
  );
}

