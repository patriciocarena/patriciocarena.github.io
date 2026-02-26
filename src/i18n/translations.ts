export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      headline: "Industrial Engineering.",
      headlineSub: "Operations, Quality & Data-driven improvement.",
      subheadline:
        "Industrial Engineering student at Universidad Católica de Córdoba | USF academic exchange (San Francisco) | Building KPI dashboards, quality systems, and process improvements.",
      downloadCV: "Download CV",
      connect: "Let's Connect",
      chips: ["ISO 9001 fundamentals", "KPI dashboards", "Process improvement (PDCA, RCA)"],
    },
    about: {
      title: "About",
      bio: "I'm an Industrial Engineering student from Córdoba, Argentina, currently on academic exchange at the University of San Francisco. I specialize in quality management systems, KPI design, and process improvement using tools like PDCA, Ishikawa, and 5W2H. I combine engineering rigor with a collaborative mindset and a strong drive to deliver measurable results.",
      lookingTitle: "What I'm looking for",
      lookingText:
        "Internships or entry-level roles in Operations, Quality Engineering, Supply Chain, Analytics, or AI-enabled operations tools — where I can apply structured problem-solving and continuous improvement methodologies.",
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Quality Management System Design",
          context: "Sanatorio Allende Women's Center",
          description:
            "Designed a JCI-aligned QMS using SIPOC, defined quality indicators, and built a continuous improvement roadmap.",
          outcomes: [
            "Patient satisfaction: 94%",
            "Service time: 46 min (target <60)",
            "Compliance audit passed",
          ],
          skills: ["QMS design", "SIPOC", "Continuous improvement", "JCI standards"],
        },
        {
          title: "Balanced Scorecard & KPI Dashboard",
          context: "Prodeman S.A. (ManiKing brand)",
          description:
            "Conducted SWOT/PESTEL analysis. Designed KPIs with owners, formulas, and frequency. Built BI dashboards for performance tracking.",
          outcomes: [
            "Lead time reduction targeted",
            "Training compliance ≥90%",
            "COPQ -30% in 12 months",
            "Repeat purchase ≥80%",
          ],
          skills: ["KPI design", "Balanced Scorecard", "SWOT/PESTEL", "BI dashboards"],
        },
        {
          title: "Warehouse & Fulfillment Improvement",
          context: "Wonder Hamburguesería",
          description:
            "Collected operational data, applied GUT matrix prioritization, mapped processes with flowcharts and 5W2H, and used Ishikawa for root cause analysis.",
          outcomes: ["Prioritized action plan via REI matrix", "Process bottlenecks identified & addressed"],
          skills: ["Process mapping", "Root cause analysis", "GUT/REI matrix", "5W2H"],
        },
        {
          title: "Solar PV System Sizing",
          context: "On-grid & Off-grid configurations",
          description:
            "Performed energy balance calculations and concept sizing for solar photovoltaic systems, including storage considerations for off-grid setups.",
          outcomes: ["Energy balance completed", "Storage sizing defined"],
          skills: ["Energy systems", "Technical sizing", "Sustainability"],
        },
      ],
    },
    skills: {
      title: "Skills",
      columns: [
        {
          title: "Analytics & Ops",
          items: [
            "Advanced Excel (Power Query, PivotTables, Dashboards)",
            "KPI design & data reporting",
            "PDCA, process mapping",
            "Root cause analysis (Ishikawa)",
            "5W2H, GUT/REI prioritization",
          ],
        },
        {
          title: "Tools",
          items: ["Microsoft Excel (advanced)", "AutoCAD (basic–intermediate)", "C++ (intermediate)"],
        },
        {
          title: "Languages",
          items: ["Spanish — Native", "English — C1 (Advanced)"],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Sales Representative",
          company: "Royal Prestige",
          period: "Jan – May 2022",
          description:
            "Developed communication and follow-up skills through product demos, client relationship management, and disciplined sales processes.",
        },
        {
          role: "Hospitality & Construction",
          company: "International Work Experience — Australia",
          period: "Dec 2023 – Mar 2024",
          description:
            "Built adaptability, reliability, and cross-cultural problem-solving while working in fast-paced environments abroad.",
        },
      ],
    },
    leadership: {
      title: "Leadership & Activities",
      rugby:
        "Rugby team captain (multiple seasons) at La Tablada Rugby Club — leadership, discipline, and team coordination under pressure.",
      rugbyBold: "Rugby team captain",
      volunteering:
        "La Salle community initiatives & Cenáculo youth group — service-oriented mindset and community engagement.",
      volunteeringBold: "Volunteering:",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's build something useful together.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      send: "Send Message",
      sent: "Message sent!",
      sentSub: "I'll get back to you soon.",
      errName: "Name is required (max 100 chars)",
      errEmail: "Valid email required",
      errMessage: "Message is required (max 1000 chars)",
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Patricio Carena. All rights reserved.`,
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      headline: "Ingeniería Industrial.",
      headlineSub: "Operaciones, Calidad y Mejora basada en datos.",
      subheadline:
        "Estudiante de Ingeniería Industrial en la Universidad Católica de Córdoba | Intercambio académico en USF (San Francisco) | Construyendo dashboards de KPIs, sistemas de calidad y mejoras de procesos.",
      downloadCV: "Descargar CV",
      connect: "Conectemos",
      chips: ["Fundamentos ISO 9001", "Dashboards de KPIs", "Mejora de procesos (PDCA, RCA)"],
    },
    about: {
      title: "Sobre mí",
      bio: "Soy estudiante de Ingeniería Industrial de Córdoba, Argentina, actualmente en intercambio académico en la University of San Francisco. Me especializo en sistemas de gestión de calidad, diseño de KPIs y mejora de procesos usando herramientas como PDCA, Ishikawa y 5W2H. Combino rigor ingenieril con mentalidad colaborativa y fuerte orientación a resultados medibles.",
      lookingTitle: "Qué estoy buscando",
      lookingText:
        "Pasantías o roles junior en Operaciones, Ingeniería de Calidad, Supply Chain, Analítica o herramientas de operaciones con IA — donde pueda aplicar resolución estructurada de problemas y metodologías de mejora continua.",
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        {
          title: "Diseño de Sistema de Gestión de Calidad",
          context: "Sanatorio Allende — Centro de la Mujer",
          description:
            "Diseñé un SGC alineado a JCI usando SIPOC, definí indicadores de calidad y construí una hoja de ruta de mejora continua.",
          outcomes: [
            "Satisfacción del paciente: 94%",
            "Tiempo de atención: 46 min (objetivo <60)",
            "Auditoría de cumplimiento aprobada",
          ],
          skills: ["Diseño SGC", "SIPOC", "Mejora continua", "Estándares JCI"],
        },
        {
          title: "Balanced Scorecard & Dashboard de KPIs",
          context: "Prodeman S.A. (marca ManiKing)",
          description:
            "Realicé análisis FODA/PESTEL. Diseñé KPIs con responsables, fórmulas y frecuencia. Construí dashboards de BI para seguimiento de desempeño.",
          outcomes: [
            "Reducción de lead time objetivo",
            "Cumplimiento de capacitación ≥90%",
            "COPQ -30% en 12 meses",
            "Recompra ≥80%",
          ],
          skills: ["Diseño de KPIs", "Balanced Scorecard", "FODA/PESTEL", "Dashboards BI"],
        },
        {
          title: "Mejora de Almacén y Fulfillment",
          context: "Wonder Hamburguesería",
          description:
            "Recolecté datos operativos, apliqué priorización con matriz GUT, mapeé procesos con diagramas de flujo y 5W2H, y usé Ishikawa para análisis de causa raíz.",
          outcomes: ["Plan de acción priorizado vía matriz REI", "Cuellos de botella identificados y resueltos"],
          skills: ["Mapeo de procesos", "Análisis causa raíz", "Matriz GUT/REI", "5W2H"],
        },
        {
          title: "Dimensionamiento de Sistema Solar FV",
          context: "Configuraciones On-grid y Off-grid",
          description:
            "Realicé cálculos de balance energético y dimensionamiento conceptual de sistemas fotovoltaicos, incluyendo consideraciones de almacenamiento para configuraciones off-grid.",
          outcomes: ["Balance energético completado", "Dimensionamiento de almacenamiento definido"],
          skills: ["Sistemas energéticos", "Dimensionamiento técnico", "Sustentabilidad"],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      columns: [
        {
          title: "Analítica y Operaciones",
          items: [
            "Excel avanzado (Power Query, Tablas dinámicas, Dashboards)",
            "Diseño de KPIs y reportes de datos",
            "PDCA, mapeo de procesos",
            "Análisis de causa raíz (Ishikawa)",
            "5W2H, priorización GUT/REI",
          ],
        },
        {
          title: "Herramientas",
          items: ["Microsoft Excel (avanzado)", "AutoCAD (básico–intermedio)", "C++ (intermedio)"],
        },
        {
          title: "Idiomas",
          items: ["Español — Nativo", "Inglés — C1 (Avanzado)"],
        },
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Representante de Ventas",
          company: "Royal Prestige",
          period: "Ene – May 2022",
          description:
            "Desarrollé habilidades de comunicación y seguimiento a través de demostraciones de producto, gestión de relaciones con clientes y procesos de venta disciplinados.",
        },
        {
          role: "Hotelería y Construcción",
          company: "Experiencia Laboral Internacional — Australia",
          period: "Dic 2023 – Mar 2024",
          description:
            "Fortalecí adaptabilidad, responsabilidad y resolución de problemas interculturales trabajando en entornos exigentes en el exterior.",
        },
      ],
    },
    leadership: {
      title: "Liderazgo y Actividades",
      rugby:
        "Capitán del equipo de rugby (varias temporadas) en La Tablada Rugby Club — liderazgo, disciplina y coordinación de equipo bajo presión.",
      rugbyBold: "Capitán del equipo de rugby",
      volunteering:
        "Iniciativas comunitarias La Salle y grupo juvenil Cenáculo — mentalidad de servicio y compromiso comunitario.",
      volunteeringBold: "Voluntariado:",
    },
    contact: {
      title: "Contacto",
      subtitle: "Construyamos algo útil juntos.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Tu mensaje",
      send: "Enviar Mensaje",
      sent: "¡Mensaje enviado!",
      sentSub: "Te responderé pronto.",
      errName: "Nombre requerido (máx 100 caracteres)",
      errEmail: "Email válido requerido",
      errMessage: "Mensaje requerido (máx 1000 caracteres)",
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Patricio Carena. Todos los derechos reservados.`,
    },
  },
} as const;
