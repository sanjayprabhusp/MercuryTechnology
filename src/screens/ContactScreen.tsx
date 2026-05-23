import { motion } from 'motion/react';
import { Mail, MapPin, Send, Instagram, Linkedin, UserCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
} as const;

export function ContactScreen() {
  return (
      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          <motion.div variants={itemVariants} className="space-y-8 bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/50 shadow-lg shadow-black/5 transition-all hover:shadow-xl relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-700 z-0" alt="Contact Us bg" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-transparent z-0" />
            
            <div className="space-y-4 relative z-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-sm">Get In <span className="text-rose-400">Touch</span></h1>
              <p className="text-slate-300 text-lg font-medium">Have a project in mind? Let's discuss how we can help bring your vision to life.</p>
            </div>
            
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Name" className="w-full bg-white/60 border border-white/40 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all backdrop-blur-md shadow-sm" />
                <input type="email" placeholder="Email" className="w-full bg-white/60 border border-white/40 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all backdrop-blur-md shadow-sm" />
              </div>
              <input type="tel" placeholder="Phone" className="w-full bg-white/60 border border-white/40 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all backdrop-blur-md shadow-sm" />
              <textarea placeholder="Message" rows={4} className="w-full bg-white/60 border border-white/40 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all resize-none backdrop-blur-md shadow-sm"></textarea>
              <button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors w-full shadow-md shadow-rose-500/20">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-sm space-y-6 hover:shadow-md transition-shadow">
              <div className="flex gap-4 items-center mb-6">
                <img src="https://cdn.corenexis.com/files/c/5513414720.jpg" alt="CEO" className="w-16 h-16 rounded-full object-cover border-2 border-white" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Maanickavasagar G</h2>
                  <p className="text-sky-700 font-bold">Chief Executive Officer & Founder</p>
                </div>
              </div>
              <p className="text-slate-800 italic text-lg leading-relaxed border-l-4 border-sky-500 pl-4 py-1 font-medium">"At Thiran, our vision is to empower innovation through intelligence — creating tech that doesn't just work, but inspires."</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-sm transition-all hover:shadow-lg space-y-6 relative overflow-hidden group">
                <h2 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Our Branches</h2>
                <div className="space-y-5 mt-4 relative z-10">
                  <Branch name="Gobichettipalayam" desc="Gobi Arts & Science" />
                  <Branch name="Chennai" desc="Corporate Office" />
                  <Branch name="Bengaluru" desc="Tech Hub" />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-sm transition-all hover:shadow-lg space-y-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Follow Us</h2>
                  <div className="flex items-center gap-4">
                    <a href="#" title="Instagram" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center bg-white/60 border border-white/40 hover:bg-pink-500 hover:border-pink-500 hover:text-white text-slate-700 rounded-2xl transition-all duration-300 shadow-sm"><Instagram size={24} /></a>
                    <a href="#" title="LinkedIn" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center bg-white/60 border border-white/40 hover:bg-blue-600 hover:border-blue-600 hover:text-white text-slate-700 rounded-2xl transition-all duration-300 shadow-sm"><Linkedin size={24} /></a>
                    <a href="mailto:info@thiran360ai.com" title="Email" aria-label="Email" className="w-12 h-12 flex items-center justify-center bg-white/60 border border-white/40 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white text-slate-700 rounded-2xl transition-all duration-300 shadow-sm"><Mail size={24} /></a>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-slate-900 font-bold flex items-center gap-2"><Mail size={16} className="text-rose-500" /> info@thiran360ai.com</p>
                  <p className="text-sm text-slate-600 font-medium mt-2">Stay connected with us for updates.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
  );
}

function Branch({ name, desc }: { name: string, desc: string }) {
  return (
    <div className="flex gap-4 items-start group bg-white/60 p-4 rounded-xl border border-white/40 hover:border-rose-400/50 transition-all shadow-sm">
      <div className="text-rose-500 mt-0.5 group-hover:scale-110 transition-transform"><MapPin size={20} /></div>
      <div>
        <h4 className="font-bold text-slate-900 group-hover:text-rose-600 transition-colors">{name}</h4>
        <p className="text-sm text-slate-700 font-medium">{desc}</p>
      </div>
    </div>
  );
}
