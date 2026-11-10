"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, ExternalLink, BookOpen, Layers } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["Todos", "SaaS & Fullstack", "Inteligencia Artificial", "Backend & Cloud", "Data & Algoritmos"];

  const filteredProjects = selectedCategory === "Todos"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Proyectos & Sistemas Construidos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Soluciones Reales, Arquitecturas Probadas
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base">
          Explora proyectos desarrollados con enfoque en producción: SaaS multi-empresa, 
          asistentes con IA conectada a APIs oficiales, motores analíticos y sistemas accesibles.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === cat
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20"
                : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-[#0e1424]/60 p-6 sm:p-8 hover:border-slate-700 hover:bg-[#11192e] transition-all duration-300 relative overflow-hidden"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                  {project.badge}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {project.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                {project.subtitle}
              </p>

              {/* Short Description */}
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Pills */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-900 text-slate-400 border border-slate-800/80"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-900 text-slate-500">
                    +{project.technologies.length - 5} más
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(project)}
                className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Ver detalles de ingeniería</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Visitar web en vivo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.swaggerUrl && (
                  <a
                    href={project.swaggerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-cyan-400 hover:text-cyan-300 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Ver Swagger API"
                  >
                    <BookOpen className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Ver Repositorio"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
