import { SERVICES, PERSONAL_INFO } from "@/data/portfolioData";
import { Rocket, Brain, Server, CheckCircle, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      case "Brain":
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-teal-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="servicios" className="py-20 border-t border-zinc-800/80 bg-zinc-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servicios Freelance & Consultoría</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Tienes una idea o necesitas acelerar tu desarrollo?
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Ofrezco soluciones de desarrollo a la medida para fundadores, empresas y equipos técnicos. 
            Aprovecho flujos de IA agéntica para entregar productos de calidad en tiempo récord.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner">
                    {getIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Ventajas Clave
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Entregables Típicos
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <a
                  href={`https://wa.me/?text=Hola%20Leo,%20estoy%20interesado%20en%20el%20servicio%20de:%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar este servicio por WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-14 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-cyan-950/40 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            ¿Tienes un requerimiento especial o una oportunidad de contratación?
          </h3>
          <p className="mt-2 text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Conversemos directamente. Analizaré tu caso y te daré una propuesta clara en menos de 24 horas.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escríbeme por WhatsApp</span>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-zinc-700 bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <span>Enviar un Correo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
