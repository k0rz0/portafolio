import { AI_PHILOSOPHY } from "@/data/portfolioData";
import { Sparkles, Zap, ShieldCheck, Cpu } from "lucide-react";

export default function AiBanner() {
  const icons = [Zap, ShieldCheck, Cpu];

  return (
    <section className="py-12 border-y border-zinc-800/60 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Ventaja Competitiva</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {AI_PHILOSOPHY.title}
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            {AI_PHILOSOPHY.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {AI_PHILOSOPHY.points.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="relative group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
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
