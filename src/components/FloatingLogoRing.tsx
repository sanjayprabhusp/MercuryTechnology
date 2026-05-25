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
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900/90 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[3rem] border border-sky-500/10 bg-slate-950/85 p-8 shadow-[0_40px_120px_rgba(14,165,233,0.18)] backdrop-blur-xl overflow-hidden">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-300/80">Connecting sections</p>
              <h2 className="text-4xl font-black text-white">Floating service and product logos</h2>
              <p className="text-slate-300 leading-relaxed">A clean showcase of capabilities and brand rhythm without heavy runtime motion.</p>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_25%)]" />
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {logos.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={`${item.label}-${index}`} className="flex-shrink-0 flex flex-col items-center gap-3 rounded-[2rem] border border-sky-500/15 bg-slate-950/90 px-5 py-4 shadow-[0_18px_45px_rgba(14,165,233,0.14)]">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 text-sky-300">
                        <Icon size={24} />
                      </div>
                      <span className="text-sm font-semibold text-slate-100 text-center">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
