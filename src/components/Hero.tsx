import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Glow Accents (Cobalt & Cyan) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-300 text-xs sm:text-sm font-medium tracking-wide shadow-inner">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>Abierto a Empleo Remoto & Proyectos Freelance</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Desarrollo de Software Fullstack & Cloud{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Potenciado por IA
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Hola, soy <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. Construyo
            arquitecturas backend robustas (.NET, Python, Java) e interfaces modernas (Next.js, TypeScript). 
            Creador de <span className="text-blue-400 font-medium">Atalaya ERP</span>, un sistema SaaS en producción.
            Multiplico la velocidad de entrega utilizando Inteligencia Artificial agéntica.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              href="#atalaya-case"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 hover:scale-[1.02]"
            >
              <span>Ver Caso: Atalaya ERP</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border border-slate-700 bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 transition-all hover:scale-[1.02]"
            >
              <span>Servicios Freelance</span>
            </a>

            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium border border-lime-500/30 bg-lime-950/30 text-lime-300 hover:bg-lime-900/40 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-lime-400" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm text-center hover:border-slate-700 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
