export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  swaggerUrl?: string;
  githubUrl?: string;
  category: "SaaS & Fullstack" | "Inteligencia Artificial" | "Backend & Cloud" | "Data & Algoritmos";
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Leo Gallego",
  fullName: "Leonardo Gallego Ríos",
  role: "Fullstack Engineer & AI-Augmented Developer",
  secondaryRole: "Backend, Cloud Architect & SaaS Builder",
  location: "Colombia · Remoto Global",
  email: "leogallego77@gmail.com",
  corporateEmail: "erpatalaya@gmail.com",
  github: "https://github.com/k0rz0",
  linkedin: "https://www.linkedin.com/in/leonardo-gallego-rios-0016771b9",
  whatsappNumber: "573113024691",
  whatsappDisplay: "+57 311 302 4691",
  whatsapp: "https://wa.me/573113024691?text=Hola%20Leo,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto",
  bio: "Ingeniero de software con sólida trayectoria en desarrollo Fullstack, arquitecturas backend empresariales y soluciones Cloud. Creo productos digitales robustos en tiempo récord apalancando flujos modernos de Inteligencia Artificial agéntica sin comprometer la calidad de ingeniería.",
  availability: "Disponible para empleo formal (Full-time / Sr Fullstack / Backend) y proyectos de consultoría / desarrollo freelance.",
  stats: [
    { label: "SaaS en Producción", value: "Atalaya ERP" },
    { label: "Enfoque de Ingeniería", value: "Fullstack + Cloud" },
    { label: "Desarrollo Aumentado", value: "IA Agéntica" },
    { label: "Disponibilidad", value: "Inmediata" },
  ]
};

export const AI_PHILOSOPHY = {
  title: "Desarrollo de Software Aumentado por IA",
  subtitle: "Ingeniería tradicional rigurosa multiplicada por la velocidad de la Inteligencia Artificial",
  points: [
    {
      title: "Desarrollo 5x más Rápido",
      description: "Construyo MVPs y sistemas completos en una fracción del tiempo habitual utilizando flujos agénticos avanzados (Claude, Antigravity, Copilot, APIs de LLMs)."
    },
    {
      title: "Calidad & Arquitectura Limpia",
      description: "La IA acelera la escritura, pero la arquitectura, la seguridad, los patrones de diseño (Clean Architecture, DDD) y las pruebas son guiadas por criterio senior."
    },
    {
      title: "Integración de IA en tus Productos",
      description: "No solo uso IA para programar; integro capacidades inteligentes (asistentes, análisis contextual, automatizaciones con Gemini/OpenAI) dentro de tus aplicaciones."
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "atalaya",
    title: "Atalaya ERP",
    subtitle: "SaaS Multi-empresa de Inventario y Punto de Venta (POS) en Producción",
    badge: "Flagship SaaS · En Producción",
    featured: true,
    category: "SaaS & Fullstack",
    description: "Plataforma ERP SaaS orientada a PYMEs que centraliza facturación, inventario en tiempo real, gestión multi-empresa y módulo de punto de venta (POS) ágil.",
    longDescription: "Atalaya ERP resuelve la desconexión de herramientas tradicionales del mercado (como Alegra o sistemas legados) que exportan información fragmentada o son lentos en caja. Diseñado desde cero con una arquitectura desacoplada y escalable: backend en .NET 8 con Clean Architecture, frontend en Next.js, persistencia relacional en PostgreSQL y almacenamiento distribuido con Cloudflare R2 para catálogos de imágenes y respaldos diarios automatizados.",
    highlights: [
      "Backend de alto rendimiento con ASP.NET Core 8 Web API y Entity Framework Core",
      "Frontend moderno y responsivo en Next.js con soporte offline/online en POS",
      "Infraestructura Cloud: Render + Cloudflare R2 con CDN pública dedicada (img.atalayaerp.com)",
      "Pipeline CI/CD automatizado con GitHub Actions para deploys y respaldos diarios de base de datos",
      "Documentación interactiva de API disponible públicamente en Swagger"
    ],
    technologies: [".NET 8", "C#", "Next.js", "TypeScript", "PostgreSQL", "Cloudflare R2", "Docker", "Render", "Tailwind CSS"],
    liveUrl: "https://atalayaerp.com",
    swaggerUrl: "https://api.atalayaerp.com/swagger",
    metrics: [
      { label: "Disponibilidad", value: "99.9%" },
      { label: "Arquitectura", value: "Clean Arch / API First" },
      { label: "Almacenamiento", value: "Cloudflare R2 CDN" },
      { label: "Estado", value: "En Vivo (Prod)" }
    ]
  },
  {
    id: "hostmind-ai",
    title: "HostMind AI",
    subtitle: "Gestión Inteligente de Mensajería y Atención con IA para Alojamientos",
    badge: "IA Generativa & Meta Graph API",
    featured: false,
    category: "Inteligencia Artificial",
    description: "App en Next.js conectada en vivo a la Graph API de Meta (Messenger y comentarios) que asiste a anfitriones de alquileres turísticos sugiriendo respuestas con Google Gemini.",
    longDescription: "Diseñada para resolver la sobrecarga de consultas repetitivas que enfrentan los anfitriones turísticos. HostMind AI intercepta mensajes y comentarios a través de webhooks seguros de Meta, analiza el contexto del alojamiento y la consulta, y genera sugerencias de respuesta inteligentes con Google Gemini listas para ser aprobadas y enviadas con un solo clic.",
    highlights: [
      "Conexión directa y validada en vivo contra Meta Graph API (Messenger y Webhooks)",
      "Generación de respuestas contextuales inteligentes impulsadas por Google Gemini",
      "Módulos integrados de Dashboard, Inbox unificado, Comentarios y configuración de Habitaciones",
      "Persistencia de alta velocidad con SQLite"
    ],
    technologies: ["Next.js", "TypeScript", "Google Gemini AI", "Meta Graph API", "SQLite", "Tailwind CSS"],
  },
  {
    id: "betmind-ai",
    title: "BetMind AI",
    subtitle: "Sports Value Engine — Detección Cuantitativa de Valor Deportivo",
    badge: "Machine Learning & Algoritmos",
    featured: false,
    category: "Data & Algoritmos",
    description: "Motor estadístico y probabilístico en Python para análisis de datos futbolísticos y detección sistemática de ineficiencias de mercado.",
    longDescription: "Herramienta que sustituye la especulación por rigurosidad matemática. BetMind AI no busca adivinar partidos, sino procesar métricas de rendimiento real mediante modelos de Poisson y calcular la probabilidad subyacente de cada evento para compararla con las cuotas del mercado e identificar valor esperado positivo (+EV).",
    highlights: [
      "Modelado probabilístico con distribución de Poisson para proyecciones de goles",
      "Comparación algorítmica entre probabilidad estadística real y cuotas implícitas de mercado",
      "Base de datos histórica local para calibración y mejora continua de señales",
      "Enfoque analítico riguroso en valor esperado y gestión de riesgo"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scipy", "Data Modeling"],
  },
  {
    id: "ecoaulas",
    title: "EcoAulas",
    subtitle: "Plataforma de Aprendizaje Accesible con Estándares Universales WCAG AAA",
    badge: "Accesibilidad Universal & Java 21",
    featured: false,
    category: "Backend & Cloud",
    description: "Plataforma web educativa diseñada específicamente para personas con discapacidad visual, con soporte total para lectores de pantalla y navegación por teclado.",
    longDescription: "Proyecto de ingeniería de software enfocado en inclusión real. Garantiza total autonomía para usuarios ciegos o con baja visión mediante compatibilidad exhaustiva con NVDA, JAWS y VoiceOver, contrastes estrictos y navegación por atajos de teclado, respaldado por un backend empresarial en Java 21 y Spring Boot.",
    highlights: [
      "Conformidad con estándares internacionales de accesibilidad web (WCAG AAA)",
      "Backend empresarial desarrollado en Java 21 con Spring Boot",
      "Entorno contenerizado con Docker y Docker Compose (MySQL 8)",
      "Documentación técnica exhaustiva con ADRs (Architectural Decision Records)"
    ],
    technologies: ["Java 21", "Spring Boot", "MySQL", "Docker", "WCAG AAA", "Docker Compose"],
  }
];

export const SERVICES: Service[] = [
  {
    id: "mvp-saas",
    title: "Desarrollo de MVPs & SaaS en Tiempo Récord",
    icon: "Rocket",
    description: "Convierto tu idea o requerimiento de negocio en un producto de software funcional, escalable y en producción en semanas, no meses.",
    benefits: [
      "Desarrollo acelerado combinando frameworks modernos y flujos de IA",
      "Arquitectura sólida lista para escalar sin deuda técnica prematura",
      "Despliegue en la nube listo para usuarios reales"
    ],
    deliverables: ["Aplicación Web completa", "Base de datos & API", "Panel de administración", "Despliegue y dominio configurado"]
  },
  {
    id: "ai-integration",
    title: "Integración de Inteligencia Artificial & Automatización",
    icon: "Brain",
    description: "Implemento soluciones prácticas de IA generativa (Gemini, OpenAI, Agentes) para automatizar procesos de negocio y mejorar la atención.",
    benefits: [
      "Respuestas y atención al cliente automatizadas 24/7",
      "Extracción y análisis inteligente de documentos o mensajes",
      "Conexión con APIs de mensajería (Meta, WhatsApp, correo)"
    ],
    deliverables: ["Chatbots inteligentes", "Webhooks y conectores de API", "Sistemas de respuesta automática", "Pipelines de análisis de datos"]
  },
  {
    id: "backend-cloud",
    title: "Arquitectura Backend, APIs & Cloud Solutions",
    icon: "Server",
    description: "Diseño y construyo APIs RESTful de alto rendimiento, microservicios seguros y bases de datos relacionales bien optimizadas.",
    benefits: [
      "Rendimiento comprobado con .NET, Python, Java o Node.js",
      "Bases de datos optimizadas (PostgreSQL, MySQL, SQLite)",
      "Infraestructura cloud económica y confiable (Cloudflare R2/Workers, Docker, Render)"
    ],
    deliverables: ["API documentada (Swagger/Postman)", "Scripts de backup automatizados", "CI/CD automatizado", "Dockerización"]
  },
  {
    id: "consultoria",
    title: "Consultoría Técnica & Auditoría de Software",
    icon: "CheckCircle",
    description: "Evalúo la arquitectura, rendimiento y seguridad de tu software existente para ayudarte a optimizar costos y escalar con confianza.",
    benefits: [
      "Detección de cuellos de botella y problemas de rendimiento",
      "Recomendaciones claras de modernización de stack",
      "Estrategia de adopción de herramientas de IA en tu equipo de desarrollo"
    ],
    deliverables: ["Informe de auditoría técnica", "Plan de modernización paso a paso", "Sesión de asesoría 1 a 1"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Lenguajes de Programación",
    description: "Tecnologías centrales para desarrollo backend, frontend y scripting",
    skills: [
      { name: "C# (.NET)", level: "Avanzado" },
      { name: "TypeScript / JavaScript", level: "Avanzado" },
      { name: "Python", level: "Avanzado" },
      { name: "Java (21)", level: "Intermedio-Avanzado" },
      { name: "SQL", level: "Avanzado" }
    ]
  },
  {
    title: "Frontend & Fullstack",
    description: "Interfaces modernas, responsivas y optimizadas para rendimiento y SEO",
    skills: [
      { name: "Next.js (App Router)", level: "Avanzado" },
      { name: "React", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Avanzado" },
      { name: "HTML5 / Accesibilidad (a11y)", level: "Avanzado" },
      { name: "RESTful APIs / Fetch", level: "Avanzado" }
    ]
  },
  {
    title: "Backend, APIs & Arquitectura",
    description: "Lógica de negocio robusta, APIs seguras y patrones de diseño limpios",
    skills: [
      { name: "ASP.NET Core / Web API", level: "Avanzado" },
      { name: "Clean Architecture / DDD", level: "Avanzado" },
      { name: "Spring Boot", level: "Intermedio" },
      { name: "Entity Framework / ORMs", level: "Avanzado" },
      { name: "FastAPI / Flask", level: "Intermedio-Avanzado" }
    ]
  },
  {
    title: "Cloud, Bases de Datos & DevOps",
    description: "Infraestructura, persistencia de datos y pipelines de despliegue continuo",
    skills: [
      { name: "PostgreSQL", level: "Avanzado" },
      { name: "Cloudflare (R2, CDN, Workers)", level: "Avanzado" },
      { name: "Docker & Docker Compose", level: "Intermedio-Avanzado" },
      { name: "GitHub Actions (CI/CD)", level: "Intermedio-Avanzado" },
      { name: "Render / Vercel", level: "Avanzado" },
      { name: "MySQL / SQLite", level: "Avanzado" }
    ]
  },
  {
    title: "Inteligencia Artificial & Herramientas",
    description: "Desarrollo agéntico, modelos de lenguaje y automatización moderna",
    skills: [
      { name: "Google Gemini API", level: "Avanzado" },
      { name: "Meta Graph API (Webhooks)", level: "Avanzado" },
      { name: "Agentic Coding (Antigravity, Claude)", level: "Experto" },
      { name: "Data Science (Pandas, NumPy)", level: "Intermedio-Avanzado" },
      { name: "Git / GitHub Flow", level: "Avanzado" }
    ]
  }
];
