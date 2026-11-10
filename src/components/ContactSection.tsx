"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, MessageCircle, Copy, Check, Send, Sparkles, MapPin } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", type: "proyecto" });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Preparamos enlace mailto con el asunto y cuerpo
    const subject = encodeURIComponent(`[Portafolio] Mensaje de ${formData.name} (${formData.type})`);
    const body = encodeURIComponent(
      `Hola Leo,\n\nSoy ${formData.name} (${formData.email}).\nTipo de consulta: ${formData.type}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contacto" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hablemos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          ¿Tienes una oportunidad o proyecto en mente?
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Ya sea que busques contratar a un ingeniero senior fullstack o requieras construir una solución freelance a la medida con IA, conversemos directamente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Quick Connect */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Card */}
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Respuesta Inmediata
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Chatear por WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                La forma más rápida de consultar disponibilidad, tarifas o coordinar una llamada.
              </p>
            </div>
          </a>

          {/* Email Card */}
          <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950/60 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase font-semibold">Correo Electrónico</div>
                  <div className="text-sm font-medium text-white">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                title="Copiar correo"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-3xl border border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase font-semibold">Perfil en GitHub</div>
                <div className="text-sm font-medium text-white">github.com/k0rz0</div>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800">
              Ver repos
            </span>
          </a>

          {/* Location / Status */}
          <div className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950/30 text-xs text-zinc-400 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-500" />
            <span>{PERSONAL_INFO.location} · Zona horaria UTC-5 (Colombia)</span>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-1">
              Envíame un mensaje
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Completa el formulario y se abrirá tu cliente de correo con el mensaje listo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Tu Nombre o Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez / Tech Startup"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="juan@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Tipo de Consulta
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="proyecto">Desarrollo de Proyecto / MVP Freelance</option>
                  <option value="empleo">Oportunidad Laboral / Contratación</option>
                  <option value="ia-integracion">Integración de Inteligencia Artificial</option>
                  <option value="consultoria">Consultoría o Auditoría Técnica</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  ¿Cómo te puedo ayudar? (Detalles del proyecto o rol)
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntame sobre los objetivos, tecnologías esperadas, tiempos estimados o presupuesto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Propuesta / Mensaje</span>
              </button>

              {formSent && (
                <p className="text-center text-xs text-emerald-400 mt-2">
                  Se ha preparado el mensaje en tu cliente de correo. ¡Hablamos pronto!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
