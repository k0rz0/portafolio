import { PERSONAL_INFO } from "@/data/portfolioData";
import { UserCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      title: "Criterio de Ingeniería + Velocidad de IA",
      description: "Utilizo agentes inteligentes y LLMs para acelerar la generación de código y pruebas, manteniendo siempre estándares estrictos de Clean Architecture y seguridad."
    },
    {
      title: "Orientado al Negocio & Producción",
      description: "El código solo tiene valor si resuelve problemas reales y está en producción. Atalaya ERP y mis demás proyectos son prueba tangible de soluciones operativas."
    },
    {
      title: "Comunicación Transparente & Entregas Frecuentes",
      description: "Tanto en equipos de ingeniería remotos como con clientes freelance, mantengo claridad total en avances, estimaciones realistas y demostraciones continuas."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 border-t border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Sobre Mí</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ingeniería con propósito, acelerada con tecnología de punta
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Soy un desarrollador de software con sede en Colombia, trabajando para proyectos locales e internacionales de manera remota. Mi enfoque combina la solidez técnica del ecosistema empresarial (.NET, Spring Boot, PostgreSQL) con la agilidad y experiencia de usuario del desarrollo web moderno (Next.js, TypeScript, Tailwind).
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              He liderado y construido desde cero plataformas como <strong className="text-slate-200">Atalaya ERP</strong>, un SaaS comercial con frontend en Next.js, backend .NET y arquitectura cloud distribuida en Cloudflare R2 y Render. Además, exploro activamente la frontera de la IA aplicada en proyectos como <strong className="text-slate-200">HostMind AI</strong> y motores cuantitativos como <strong className="text-slate-200">BetMind AI</strong>.
            </p>

            {/* Principles */}
            <div className="space-y-4 pt-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{v.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-800 bg-[#0e1424]/80 p-8 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white text-2xl font-black mb-6 shadow-md shadow-blue-500/20">
                LG
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-blue-400 text-sm font-medium mt-0.5">
                {PERSONAL_INFO.role}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                {PERSONAL_INFO.location}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">Especialidad</span>
                  <span className="text-slate-200 font-medium">Fullstack, Cloud & SaaS</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">Metodología</span>
                  <span className="text-cyan-400 font-medium">IA Agéntica + Clean Arch</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-500">Idiomas</span>
                  <span className="text-slate-200 font-medium">Español (Nativo), Inglés</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Modalidad</span>
                  <span className="text-lime-400 font-medium">Remoto / Híbrido / Freelance</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contacto"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-600/20"
                >
                  <span>Iniciar Conversación</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
