import { PROJECTS } from "@/data/portfolioData";
import { ExternalLink, BookOpen, CheckCircle2, Layers, Server, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function FeaturedProject() {
  const atalaya = PROJECTS.find((p) => p.id === "atalaya");

  if (!atalaya) return null;

  return (
    <section id="atalaya-case" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Caso de Estudio Principal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {atalaya.title} — ERP SaaS en Producción
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            {atalaya.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {atalaya.liveUrl && (
            <a
              href={atalaya.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/25"
            >
              <span>Visitar atalayaerp.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {atalaya.swaggerUrl && (
            <a
              href={atalaya.swaggerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-700 bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Swagger API</span>
            </a>
          )}
          {atalaya.githubUrl && (
            <a
              href={atalaya.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repo"
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Main Case Study Box */}
      <div className="rounded-3xl border border-slate-800 bg-[#0e1424]/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context, Problem & Solution */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">
                El Desafío & Solución de Negocio
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {atalaya.longDescription}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                <span>Puntos Clave de Arquitectura & Calidad</span>
              </h3>
              <ul className="space-y-2.5">
                {atalaya.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Tecnologías Implementadas
              </div>
              <div className="flex flex-wrap gap-2">
                {atalaya.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Server className="w-4 h-4 text-blue-400" />
                  <span>Arquitectura en Producción</span>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-lime-500/20 text-lime-400 border border-lime-500/30">
                  Activo
                </span>
              </div>

              {/* Topology Summary */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">Frontend Web / POS</div>
                  <div className="font-semibold text-white flex items-center justify-between mt-0.5">
                    <span>Next.js · TypeScript · Tailwind</span>
                    <a
                      href="https://atalayaerp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline inline-flex items-center gap-1 text-xs font-medium"
                    >
                      atalayaerp.com <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">Backend REST API</div>
                  <div className="font-semibold text-white flex items-center justify-between mt-0.5">
                    <span>.NET 8 · C# · Render Service</span>
                    <a
                      href="https://api.atalayaerp.com/swagger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline inline-flex items-center gap-1 text-xs font-medium"
                    >
                      API Swagger <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">Almacenamiento Global & Backups</div>
                  <div className="font-semibold text-white flex items-center justify-between mt-0.5">
                    <span>Cloudflare R2 + GitHub Actions</span>
                    <span className="text-slate-400 text-xs">CDN Dedicada</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">Base de Datos</div>
                  <div className="font-semibold text-white mt-0.5">
                    PostgreSQL Relacional (Multi-tenant)
                  </div>
                </div>
              </div>

              {/* Metrics */}
              {atalaya.metrics && (
                <div className="pt-2 grid grid-cols-2 gap-2">
                  {atalaya.metrics.map((m, i) => (
                    <div key={i} className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center">
                      <div className="text-blue-400 font-bold text-sm">{m.value}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
