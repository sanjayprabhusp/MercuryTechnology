import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export function WaveBackground() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handle = () => setReduced(mq.matches);
    handle();
    mq.addEventListener?.('change', handle);
    window.addEventListener('resize', handle);
    return () => {
      mq.removeEventListener?.('change', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[-1] overflow-hidden bg-[#081a33] flex items-end justify-center"
    >
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: `linear-gradient(135deg, #041b37 0%, #0c3f78 25%, #0f4bb5 55%, #07122f 100%)`
        }}
      />
      
      <motion.div
        animate={reduced ? { y: ["-2%", "2%", "-2%"], x: ["-4%", "4%", "-4%"], rotate: [0, 4, 0] } : { y: ["-4%", "4%", "-4%"], x: ["-8%", "8%", "-8%"], rotate: [0, 8, 0] }}
        transition={reduced ? { duration: 14, repeat: Infinity, ease: "easeInOut" } : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-[18%] -left-[18%] w-[150%] h-[150%] ${reduced ? 'opacity-18' : 'opacity-30'} mix-blend-screen pointer-events-none`}
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(56, 189, 248, 0.35) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.18) 0%, transparent 40%)'
        }}
      />

      <motion.div
        animate={reduced ? { y: ["2%", "-2%", "2%"], x: ["4%", "-4%", "4%"], rotate: [0, -4, 0] } : { y: ["4%", "-4%", "4%"], x: ["8%", "-8%", "8%"], rotate: [0, -8, 0] }}
        transition={reduced ? { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.5 } : { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className={`absolute -bottom-[18%] -right-[18%] w-[150%] h-[150%] ${reduced ? 'opacity-14' : 'opacity-25'} mix-blend-screen pointer-events-none`}
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.28) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.18) 0%, transparent 50%)'
        }}
      />
      
      <div className="absolute inset-0 z-50 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10 mix-blend-overlay" />
    </motion.div>
  );
}
