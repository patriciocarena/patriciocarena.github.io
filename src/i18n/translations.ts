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
      downloadCV: "Download Resume",
      connect: "Let's Connect",
      chips: ["Process Optimization", "Data Visualization", "Continuous Improvement"],
    },
    about: {
      title: "About",
      bio: "Industrial Engineering student (4th year, UCC Argentina) on academic exchange at USF in San Francisco. Hands-on experience implementing inventory and procurement systems in a biotech lab with hazmat compliance requirements. 4th place at the Stanford × DeepMind Hackathon.",
      lookingTitle: "What I'm looking for",
      lookingText:
        "Roles where I can apply process improvement, data-driven decision-making, and operational design in fast-moving environments.",
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
            "KPI design & data reporting",
            "PDCA, process mapping",
            "Root cause analysis (Ishikawa)",
            "5W2H, GUT/REI prioritization",
          ],
        },
        {
          title: "Tools",
          items: ["Claude Code", "Codex", "Google AI Studio"],
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
          role: "Industrial Engineering Intern",
          company: "Frontier Tower — BioPunk (Biotech/Neuroscience)",
          period: "Feb 2026 – Jun 2026",
          description:
            "Leading the implementation of a new inventory and procurement system for a biotech lab, optimizing storage layouts and enabling real-time tracking of materials — especially critical for hazmat compliance and safety protocols.",
        },
        {
          role: "Restaurant Server",
          company: "Italian Restaurant — Sydney, Australia",
          period: "Dec 2023 – Mar 2024",
          description:
            "Managed a 12-table section at a small Italian restaurant in Sydney, handling orders, service, bar support, and closing duties. Worked full summer season in a fast-paced environment with minimal supervision.",
        },
        {
          role: "Sales Representative",
          company: "Royal Prestige — Córdoba",
          period: "Jan – May 2022",
          description:
            "Conducted 10+ live product demonstrations of premium cookware lines (avg. ticket ~$200+). Generated ~$1,000 in sales through in-home demos, objection handling, and structured follow-up sequences.",
        },
      ],
    },
    awards: {
      title: "Awards & Recognition",
      teamLabel: "Team",
      items: [
        {
          title: "Stanford × DeepMind Hackathon",
          placement: "4th Place — $5,000 in GCP Tokens",
          event: "Stanford University & Google DeepMind — 100+ teams, judged by 50+ VCs and industry leaders",
          description:
            "Built an AI app where different AI personas react to your product, debate each other, and change their minds — like a real focus group. Built in 3 hours with Gemini models, Fastshot, and Google AI Studio.",
          team: "Alejandro Gonzalez, Franco Ascheri, Miranda Cavalie",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7449534765713580033/",
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
      chips: ["Optimización de procesos", "Visualización de Datos", "Mejora Continua"],
    },
    about: {
      title: "Sobre mí",
      bio: "Estudiante de Ingeniería Industrial (4to año, UCC Argentina) en intercambio académico en USF, San Francisco. Experiencia práctica implementando sistemas de inventario y compras en un laboratorio de biotecnología con requisitos de cumplimiento de materiales peligrosos. 4to puesto en el Stanford × DeepMind Hackathon.",
      lookingTitle: "Qué estoy buscando",
      lookingText:
        "Roles donde pueda aplicar mejora de procesos, toma de decisiones basada en datos y diseño operacional en entornos dinámicos.",
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
            "Diseño de KPIs y reportes de datos",
            "PDCA, mapeo de procesos",
            "Análisis de causa raíz (Ishikawa)",
            "5W2H, priorización GUT/REI",
          ],
        },
        {
          title: "Herramientas",
          items: ["Claude Code", "Codex", "Google AI Studio"],
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
          role: "Pasante de Ingeniería Industrial",
          company: "Frontier Tower — BioPunk (Biotech/Neurociencia)",
          period: "Feb 2026 – Jun 2026",
          description:
            "Liderando la implementación de un nuevo sistema de inventario y compras para un laboratorio de biotecnología, optimizando la distribución de espacios y habilitando el seguimiento en tiempo real de materiales — especialmente crítico para el cumplimiento de normativas de materiales peligrosos (hazmats).",
        },
        {
          role: "Mozo / Camarero",
          company: "Restaurante Italiano — Sídney, Australia",
          period: "Dic 2023 – Mar 2024",
          description:
            "Gestioné una sección de 12 mesas en un restaurante italiano en Sídney, manejando pedidos, servicio, apoyo en barra y tareas de cierre. Trabajé la temporada completa de verano en un entorno de alto ritmo con supervisión mínima.",
        },
        {
          role: "Representante de Ventas",
          company: "Royal Prestige — Córdoba",
          period: "Ene – May 2022",
          description:
            "Realicé más de 10 demostraciones en vivo de líneas premium de utensilios de cocina (ticket promedio ~$200+). Generé ~$1,000 en ventas a través de demos a domicilio, manejo de objeciones y secuencias de seguimiento estructuradas.",
        },
      ],
    },
    awards: {
      title: "Premios y Reconocimientos",
      teamLabel: "Equipo",
      items: [
        {
          title: "Stanford × DeepMind Hackathon",
          placement: "4to Puesto — $5.000 en Tokens GCP",
          event: "Stanford University & Google DeepMind — 100+ equipos, evaluados por 50+ VCs y líderes de la industria",
          description:
            "Construimos una app de IA donde distintas personas IA reaccionan a tu producto, debaten entre sí y cambian de opinión — como un focus group real. Construido en 3 horas con modelos Gemini, Fastshot y Google AI Studio.",
          team: "Alejandro Gonzalez, Franco Ascheri, Miranda Cavalie",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7449534765713580033/",
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
