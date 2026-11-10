import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Code, Terminal, Layers, Sparkles } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Competencias & Herramientas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Stack Tecnológico de Alto Nivel
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base">
          Dominio integral de tecnologías para el diseño y construcción de sistemas escalables,
          desde la base de datos hasta la interfaz del usuario.
        </p>
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/30 transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                {cat.title}
              </h3>
              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                {cat.description}
              </p>

              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-zinc-200">{skill.name}</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-zinc-800 text-emerald-400 border border-emerald-500/20">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
