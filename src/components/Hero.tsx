import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Sparkles, Terminal, Code2, Server, Database, ExternalLink, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Abierto a Empleo Remoto & Proyectos Freelance</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Desarrollo de Software Fullstack & Cloud{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Potenciado por IA
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Hola, soy <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. Construyo
            arquitecturas backend robustas (.NET, Python, Java) e interfaces modernas (Next.js, TypeScript). 
            Creador de <span className="text-emerald-400 font-medium">Atalaya ERP</span>, un sistema SaaS en producción.
            Multiplico la velocidad de entrega utilizando Inteligencia Artificial agéntica.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              href="#atalaya-case"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
            >
              <span>Ver Caso: Atalaya ERP</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:text-white hover:bg-zinc-800/90 transition-all hover:scale-[1.02]"
            >
              <span>Servicios Freelance</span>
            </a>

            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/50 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm text-center hover:border-zinc-700 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
