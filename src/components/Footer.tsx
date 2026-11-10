import { PERSONAL_INFO } from "@/data/portfolioData";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-base text-slate-100">{PERSONAL_INFO.name}</span>
              <span className="text-slate-600">·</span>
              <span className="text-blue-400 font-medium">{PERSONAL_INFO.role}</span>
            </div>
            <p className="text-slate-500 text-xs mt-1">
              Desarrollo de software de alta calidad, acelerado con Inteligencia Artificial.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-lime-400 hover:text-lime-300 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://atalayaerp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <span>Atalaya ERP</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-3">
          <p>© 2026 {PERSONAL_INFO.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Construido con Next.js, Tailwind CSS & Antigravity AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
