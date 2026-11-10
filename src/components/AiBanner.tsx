import { AI_PHILOSOPHY } from "@/data/portfolioData";
import { Sparkles, Zap, ShieldCheck, Cpu } from "lucide-react";

export default function AiBanner() {
  const icons = [Zap, ShieldCheck, Cpu];

  return (
    <section className="py-12 border-y border-slate-800/60 bg-gradient-to-b from-[#0b0f19] via-slate-900/40 to-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Ventaja Competitiva</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {AI_PHILOSOPHY.title}
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            {AI_PHILOSOPHY.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {AI_PHILOSOPHY.points.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="relative group p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
