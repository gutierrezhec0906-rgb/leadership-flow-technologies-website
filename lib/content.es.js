// Spanish content/data store — mirrors lib/content.js field-for-field.
// Used by every page under app/es/*.
//
// "Accountability" is kept as an English loanword throughout (matching the
// brand's own Spanish tagline, "Lidera con Accountability") rather than
// translated as "responsabilidad" — it refers to the branded framework, not
// the generic concept.

import { siteConfig, socialLinks } from "@/lib/content";

export { siteConfig, socialLinks };

export const navLinks = [
  { label: "Inicio", href: "/es" },
  { label: "Nosotros", href: "/es/about" },
  { label: "La App", href: "/es/app" },
  { label: "Las 5 Prácticas", href: "/es/practices" },
  { label: "Precios", href: "/es/pricing" },
  { label: "Recursos", href: "/es/resources" },
  { label: "Contacto", href: "/es/contact" },
];

export const footerColumns = {
  about: {
    heading: "Nosotros",
    text: "Leadership Flow Technologies desarrolla la Accountability App — una plataforma de desarrollo de liderazgo para los líderes que dirigen las operaciones actuales de manufactura aeroespacial, de defensa y electrónica.",
  },
  quickLinks: {
    heading: "Enlaces Rápidos",
    links: navLinks,
  },
  theApp: {
    heading: "La App",
    links: [
      { label: "Cómo Funciona", href: "/es/app" },
      { label: "Las 5 Prácticas", href: "/es/practices" },
      { label: "Precios", href: "/es/pricing" },
      { label: "Visita accountability-app.com", href: "https://accountability-app.com" },
    ],
  },
  connect: {
    heading: "Conéctate",
    email: siteConfig.email,
  },
  rightsReserved: "Todos los derechos reservados.",
};

// ---------------------------------------------------------------------------
// Home page
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "Para CHROs, CEOs y Líderes de Operaciones en Manufactura",
  headline: "¿Qué pasaría si pudieras reducir tu curva de desarrollo de liderazgo de 10 años a 6 meses?",
  subheadline:
    "La Accountability App — una plataforma de desarrollo de liderazgo totalmente integrada donde tus líderes se desarrollan a sí mismos mientras tú supervisas su progreso en tiempo real.",
  primaryCta: { label: "Ve Cómo Funciona", href: "/es/app" },
  secondaryCta: { label: "Agenda una Demo", href: "/es/contact#demo" },
};

export const problemsSection = {
  eyebrow: "El Problema",
  headline: "El Problema del Desarrollo de Liderazgo",
};

export const problems = [
  {
    icon: "GraduationCap",
    title: "La capacitación no perdura",
    description: "Envías a tu gente a capacitarse — y el lunes nada cambia.",
  },
  {
    icon: "Clock",
    title: "No hay tiempo para asesorar a todos",
    description: "No tienes tiempo para desarrollar a cada líder de forma manual.",
  },
  {
    icon: "EyeOff",
    title: "No hay visibilidad del crecimiento",
    description: "No tienes visibilidad de quién está creciendo y quién no.",
  },
];

export const solutionSection = {
  eyebrow: "La Solución",
  headline: "Hay una mejor manera",
};

export const solutionStats = [
  { icon: "LayoutGrid", value: "18", label: "Módulos" },
  { icon: "Target", value: "5", label: "Prácticas Centrales" },
  { icon: "Layers", value: "3", label: "Pilares de Habilidades" },
  { icon: "Activity", value: "Tiempo Real", label: "Monitoreo" },
];

export const solutionIntro =
  "La Accountability App coloca un sistema estructurado de desarrollo de liderazgo directamente en el bolsillo de tus líderes — y coloca visibilidad en tiempo real directamente en el tuyo. Se acabó adivinar quién está creciendo. Se acabaron las capacitaciones genéricas que se olvidan el lunes.";

export const founderQuote = {
  quote:
    "Pasé 30 años viendo fracasar a personas talentosas — no porque les faltara potencial, sino porque nadie les dio un sistema real para crecer. Construí la solución que desearía haber tenido hace 30 años.",
  name: "Hector Gutierrez",
  title: "Fundador, Leadership Flow Technologies",
};

export const socialProofSection = {
  eyebrow: "Desde el Fundador",
  headline: "Construido por un líder que lo vivió",
};

export const finalCta = {
  headline: "¿Listo para desarrollar a tu próxima generación de líderes?",
  cta: { label: "Comienza Hoy", href: "/es/contact" },
};

// ---------------------------------------------------------------------------
// Las 5 Prácticas (compartido entre el preview del Home y la página /practices)
// ---------------------------------------------------------------------------

export const practicesPreviewSection = {
  eyebrow: "El Marco",
  headline: "Las 5 Prácticas Centrales",
  exploreLink: "Explora las 5 prácticas",
};

export const practices = [
  {
    number: "01",
    slug: "set-the-bar",
    title: "Establece el Estándar",
    icon: "Target",
    oneLiner: "Define el estándar antes de exigir el desempeño.",
    paragraphs: [
      "Define la excelencia antes de exigir el desempeño. Establece el estándar de forma clara, visible e innegociable.",
      "Tu equipo no puede entregar una excelencia que nunca ha visto definida.",
    ],
  },
  {
    number: "02",
    slug: "spark-the-vision",
    title: "Enciende la Visión",
    icon: "Sparkles",
    oneLiner: "Las personas siguen un propósito, no tareas.",
    paragraphs: [
      "Las personas no dan lo mejor de sí a una tarea. Dan lo mejor de sí a un propósito.",
      "Muéstrale a tu equipo hacia dónde van y por qué importa. La visión genera energía y compromiso.",
    ],
  },
  {
    number: "03",
    slug: "improve-the-flow",
    title: "Mejora el Flujo",
    icon: "Waves",
    oneLiner: "Elimina los obstáculos antes de que rompan el flujo.",
    paragraphs: [
      "La Accountability se rompe cuando el proceso está roto. Identifica qué está frenando a tu equipo.",
      "Elimina los obstáculos antes de que se conviertan en crisis. Crea las condiciones para que tu equipo rinda al máximo nivel todos los días.",
    ],
  },
  {
    number: "04",
    slug: "enable-the-team",
    title: "Capacita al Equipo",
    icon: "Users",
    oneLiner: "La Accountability requiere capacidad.",
    paragraphs: [
      "No puedes exigir Accountability por resultados para los que no has preparado a tu gente.",
      "Dale a tu equipo las herramientas, la capacitación y el apoyo que necesitan para crecer. Capacitar a tu gente es tu responsabilidad como líder.",
    ],
  },
  {
    number: "05",
    slug: "winning-with-compassion",
    title: "Ganar con Compasión",
    icon: "Heart",
    oneLiner: "Impulsa resultados Y cuida a tu gente.",
    paragraphs: [
      "Los mejores líderes impulsan resultados Y cuidan a su gente. La compasión no es debilidad — es la forma más alta de fortaleza en el liderazgo.",
      "Cuando tu equipo sabe que te importan como seres humanos, te darán todo lo que tienen.",
    ],
  },
];

export const practicesPage = {
  headline: "Las 5 Prácticas Centrales de la Accountability",
  subheadline:
    "La Accountability no es un rasgo de personalidad. Es un sistema. Y todo sistema necesita pilares sobre los cuales sostenerse.",
  practiceLabel: "Práctica",
  bottomCta: {
    text: "Descubre cómo la Accountability App integra estas prácticas en tu organización",
    cta: { label: "Explora la App", href: "/es/app" },
  },
};

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------

export const aboutPage = {
  heroEyebrow: "Nuestra Historia",
  heroHeadline: "Construido por un Líder que lo Vivió",
  founderEyebrow: "El Fundador",
  founderPhotoAlt: "Hector Gutierrez, fundador de Leadership Flow Technologies",
  storyQuote:
    "Envié a mi mejor gente a capacitarse. Los vi regresar el lunes por la mañana. Nada había cambiado.",
  storyParagraphs: [
    "Ese momento acompañó a Hector Gutierrez durante más de 30 años liderando equipos de alto desempeño en manufactura aeroespacial, de defensa y electrónica en Estados Unidos, México, Canadá y República Checa.",
    "Vio a personas talentosas ser promovidas a puestos de liderazgo sin un sistema real para crecer en ellos — enviadas a un taller, con un manual en mano, y dejadas a su suerte para resolverlo. La capacitación era real. El cambio nunca lo fue.",
    "Así que construyó el sistema que hubiera querido que alguien le diera tres décadas antes: una plataforma donde los líderes se desarrollan a través de la práctica estructurada, y las personas responsables de su crecimiento finalmente pueden verlo suceder en tiempo real.",
  ],
  experienceStats: [
    { value: "30+", label: "Años en liderazgo" },
    { value: "4", label: "Países — EE. UU., México, Canadá, República Checa" },
    { value: "3", label: "Industrias — Aeroespacial, Defensa, Electrónica" },
  ],
  missionEyebrow: "Nuestra Misión",
  mission:
    "Nuestra misión es desarrollar líderes que desarrollen a otros — construyendo culturas de Accountability que generan resultados reales y duraderos.",
  valuesSection: {
    eyebrow: "En Qué Creemos",
    headline: "Nuestros Valores",
  },
  values: [
    {
      icon: "ShieldCheck",
      title: "Accountability",
      description: "Nos exigimos el mismo estándar que construimos en cada módulo — compromisos claros, seguimiento visible.",
    },
    {
      icon: "TrendingUp",
      title: "Crecimiento",
      description: "El liderazgo es una práctica, no un certificado. Construimos para un desarrollo continuo y medible.",
    },
    {
      icon: "HeartHandshake",
      title: "Compasión",
      description: "Los resultados y el cuidado no son opuestos. Los mejores líderes — y el mejor software — sostienen ambos a la vez.",
    },
    {
      icon: "Award",
      title: "Excelencia",
      description: "Treinta años en plantas de producción nos enseñaron la diferencia entre lo suficientemente bueno y lo construido para durar. Nosotros construimos lo segundo.",
    },
  ],
  companyInfoLabels: {
    company: "Empresa",
    location: "Ubicación",
    entityNumber: "Número de Entidad",
    founded: "Fundada",
  },
  companyInfo: {
    name: siteConfig.legalName,
    location: "California, Estados Unidos",
    entityNumber: siteConfig.entityNumber,
    foundedYear: siteConfig.foundedYear,
  },
};

// ---------------------------------------------------------------------------
// The App page
// ---------------------------------------------------------------------------

export const appPage = {
  heroEyebrow: "La Plataforma",
  heroHeadline: "La Accountability App",
  heroSubheadline:
    "Una plataforma de desarrollo de liderazgo totalmente integrada — 18 módulos, 5 prácticas centrales, monitoreo de progreso en tiempo real.",
  howItWorksSection: {
    eyebrow: "Cómo Funciona",
    headline: "Del autodesarrollo a la visibilidad en tiempo real",
  },
  howItWorks: [
    {
      step: "01",
      title: "Autodesarrollo estructurado",
      description: "Los líderes avanzan a través de 18 módulos estructurados que cubren habilidades de liderazgo, técnicas e interpersonales.",
    },
    {
      step: "02",
      title: "Seguimiento automático del progreso",
      description: "El progreso se registra automáticamente — metas, sesiones, evaluaciones y crecimiento de habilidades.",
    },
    {
      step: "03",
      title: "Visibilidad en tiempo real",
      description: "Supervisas todo en tiempo real desde tu teléfono — ves quién está comprometido y quién se está quedando atrás.",
    },
  ],
  modulesSection: {
    eyebrow: "Dentro de la App",
    headline: "18 Módulos en 3 Áreas de Habilidades",
  },
  monitoringEyebrow: "Monitoreo en Tiempo Real",
  monitoring: {
    headline: "Supervisa tu organización desde tu bolsillo",
    paragraphs: [
      "Se acabó esperar a la revisión trimestral para saber quién está comprometido. La Accountability App te da un panel en vivo del progreso de cada líder — módulos completados, estado de metas, resultados de evaluaciones y crecimiento de habilidades — actualizado en el momento en que tu equipo registra su trabajo.",
      "Ve quién va adelante, quién necesita un impulso y quién necesita una conversación, todo antes de que aparezca en los números de desempeño en la planta.",
    ],
    teamProgressLabel: "Progreso del Equipo",
    ariaLabel: "Ilustración del panel de progreso del equipo en tiempo real de la Accountability App en un teléfono",
  },
  skillPillarsSection: {
    eyebrow: "La Base",
    headline: "3 Pilares de Habilidades",
  },
  pwaEyebrow: "Disponible en Todas Partes",
  pwa: {
    headline: "Se instala como una app nativa. Funciona en todas partes.",
    features: [
      { icon: "Smartphone", title: "iOS y Android", description: "Una sola plataforma, disponible en cada dispositivo que tu equipo ya usa." },
      { icon: "WifiOff", title: "Funciona sin Conexión", description: "Los módulos y registros funcionan en la planta, en campo, o donde no llegue la señal." },
      { icon: "Download", title: "Se Instala como Nativa", description: "Agrégala a la pantalla de inicio — sin ciclos de aprobación de tiendas de apps, sin actualizaciones forzadas." },
    ],
  },
  cta: { headline: "Comienza a desarrollar a tus líderes hoy", cta: { label: "Comenzar", href: "/es/contact" } },
};

export const skillPillars = [
  {
    icon: "Crown",
    title: "Habilidades de Liderazgo",
    description: "Visión, definición de metas, coaching, retroalimentación, mentoría y desarrollo profesional — el núcleo de liderar personas.",
  },
  {
    icon: "Cog",
    title: "Habilidades Técnicas",
    description: "Herramientas Lean, fundamentos de OPEX, resolución estructurada de problemas y planificación de producción para líderes operativos.",
  },
  {
    icon: "MessagesSquare",
    title: "Habilidades Interpersonales",
    description: "Autoconocimiento, comunicación, mindfulness y las habilidades blandas que hacen más fácil el liderazgo difícil.",
  },
];

export const moduleCategories = [
  {
    key: "leadership",
    title: "Módulos de Liderazgo",
    description: "Desarrolla las capacidades centrales para liderar personas, no solo administrar tareas.",
    modules: [
      { name: "Constructor de Visión", icon: "Telescope", description: "Crea y comunica una visión de equipo convincente." },
      { name: "Metas SMART", icon: "Target", description: "Establece metas específicas y medibles que realmente se logran." },
      { name: "Evaluación DISC", icon: "PieChart", description: "Comprende tu propio estilo de comportamiento como líder." },
      { name: "Evaluación de EQ", icon: "Brain", description: "Mide y desarrolla la inteligencia emocional." },
      { name: "Coaching", icon: "MessageSquare", description: "Conversaciones de coaching estructuradas que desarrollan capacidad." },
      { name: "Buzón de Retroalimentación", icon: "Inbox", description: "Da y recibe retroalimentación de forma constante." },
      { name: "Mentoría", icon: "UserCheck", description: "Empareja a líderes con mentores para acelerar su crecimiento." },
      { name: "Desarrollo Profesional", icon: "Briefcase", description: "Traza una ruta clara de crecimiento y avance." },
      { name: "Frases de Liderazgo", icon: "Quote", description: "Mensajes diarios para reforzar la mentalidad de liderazgo." },
    ],
  },
  {
    key: "technical",
    title: "Módulos Técnicos",
    description: "Los fundamentos operativos que necesita todo líder de planta y producción.",
    modules: [
      { name: "Kit de Herramientas Lean", icon: "Wrench", description: "Herramientas y métodos centrales de manufactura Lean." },
      { name: "Herramientas OPEX (SQDIP)", icon: "Gauge", description: "Seguimiento de Seguridad, Calidad, Entrega, Inventario y Productividad." },
      { name: "Resolución de Problemas", icon: "Search", description: "5 Porqués, Diagrama de Ishikawa y A3 para la resolución estructurada de problemas." },
      { name: "Línea de Balance", icon: "BarChart3", description: "Visibilidad de la planificación y programación de producción." },
    ],
  },
  {
    key: "interpersonal",
    title: "Módulos Interpersonales",
    description: "Las habilidades humanas que convierten a líderes técnicamente fuertes en líderes de personas.",
    modules: [
      { name: "Perfil DISC", icon: "UserCircle", description: "Seguimiento continuo del estilo de comportamiento y comparación de equipo." },
      { name: "Evaluación de Habilidades", icon: "ClipboardCheck", description: "Compara las habilidades actuales con las expectativas del puesto." },
      { name: "Centro de Capacitación", icon: "GraduationCap", description: "Un solo lugar para toda la capacitación asignada y completada." },
      { name: "Mindfulness", icon: "Leaf", description: "Prácticas breves para desarrollar enfoque y reducir la reactividad." },
      { name: "Habilidades de Comunicación", icon: "MessagesSquare", description: "Practica las conversaciones que ningún líder puede evitar." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Pricing page
// ---------------------------------------------------------------------------

export const pricingPage = {
  headline: "Precios Simples y Transparentes",
  plansSection: {
    eyebrow: "Planes",
    headline: "Elige tu Plan",
  },
  betaNote: "Actualmente en Beta — contáctanos para precios especiales de lanzamiento.",
  mostPopularLabel: "Más Popular",
  faqSection: {
    eyebrow: "Preguntas",
    headline: "Preguntas Frecuentes",
  },
  consultationCta: {
    headline: "¿No estás seguro de qué plan es el indicado para ti?",
    cta: { label: "Agenda una Consulta Gratuita de 30 Minutos", href: "/es/contact#demo" },
  },
};

export const pricingTiers = [
  {
    name: "Individual",
    price: "$9",
    period: "/mes",
    description: "Para un líder individual listo para comenzar a desarrollarse hoy.",
    features: [
      "1 puesto de líder",
      "Acceso a los 18 módulos",
      "Seguimiento de progreso",
      "Acceso móvil (iOS y Android)",
    ],
    cta: { label: "Comenzar", href: "/es/contact" },
    highlighted: false,
  },
  {
    name: "Equipo",
    price: "$79",
    period: "/mes",
    description: "Para un departamento o turno listo para construir una cultura de Accountability.",
    features: [
      "Hasta 10 líderes",
      "Los 18 módulos",
      "Panel de equipo en tiempo real",
      "Monitoreo del progreso del equipo",
      "Soporte prioritario",
    ],
    cta: { label: "Comenzar", href: "/es/contact" },
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    period: "",
    description: "Para organizaciones que implementan Accountability a gran escala.",
    features: [
      "Líderes ilimitados",
      "Panel completo de la organización",
      "Incorporación personalizada",
      "Soporte dedicado",
      "Revisiones de negocio trimestrales",
    ],
    cta: { label: "Contactar Ventas", href: "/es/contact" },
    highlighted: false,
  },
];

export const pricingFaqs = [
  {
    question: "¿Está disponible la Accountability App ahora?",
    answer:
      "La app está actualmente en Beta. Los primeros usuarios obtienen acceso directo al fundador, participación en el roadmap del producto y precios especiales de lanzamiento — contáctanos para comenzar.",
  },
  {
    question: "¿Qué cuenta como un puesto de \"líder\"?",
    answer:
      "Un puesto es un líder individual con su propio inicio de sesión, progreso de módulos, metas y evaluaciones. Los puestos no se comparten entre personas.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer:
      "Sí. Puedes moverte entre Individual, Equipo y Empresarial a medida que tu organización crece — tus datos de progreso se mueven contigo.",
  },
  {
    question: "¿Ofrecen facturación anual?",
    answer:
      "La facturación anual con descuento está disponible en los planes Equipo y Empresarial — pregunta al agendar una consulta.",
  },
  {
    question: "¿Para qué industrias está diseñado esto?",
    answer:
      "La Accountability App se construyó a partir de más de 30 años de experiencia en liderazgo en manufactura aeroespacial, de defensa y electrónica — pero las 5 prácticas centrales aplican a cualquier equipo que necesite Accountability real.",
  },
];

// ---------------------------------------------------------------------------
// Resources page
// ---------------------------------------------------------------------------

export const resourcesPage = {
  heroHeadline: "Perspectivas de Liderazgo desde el Campo",
  videoEyebrow: "Mira",
  videoSectionHeadline: "Mira: Dentro de los Módulos",
  podcastEyebrow: "Escucha",
  podcastHeadline: "Podcast Lidera con Accountability",
  episodeLabel: "Episodio",
  listenOnSpotify: "Escuchar en Spotify",
  blogEyebrow: "Lee",
  blogHeadline: "Desde el Blog",
  readMoreLabel: "Leer Más",
  leadMagnet: {
    eyebrow: "Recurso Gratuito",
    headline: "Descarga Nuestra Guía de Desarrollo de Liderazgo",
    description: "Una guía gratuita de las 5 prácticas centrales, construida a partir de más de 30 años en la planta.",
  },
  newsletterForm: {
    emailSrOnlyLabel: "Correo electrónico",
    placeholder: "tu@empresa.com",
    emailRequired: "El correo electrónico es obligatorio",
    emailInvalid: "Ingresa un correo electrónico válido",
    submit: "Descargar Guía",
    success: "¡Gracias! Revisa tu correo para la guía.",
    error: "Algo salió mal. Por favor, inténtalo de nuevo.",
  },
};

export const videoResources = [
  { title: "La Fórmula del Equipo Ganador", description: "La combinación exacta de responsabilidad, confianza y propósito compartido que convierte a un grupo en un equipo.", youtubeId: "h-E2TsG8Mzo" },
  { title: "Vision Builder: Resumen", description: "Un recorrido por el módulo Vision Builder y por qué el propósito va primero." },
  { title: "Dominando las Metas SMART", description: "Cómo escribir metas que tu equipo realmente pueda lograr — y dar seguimiento." },
  { title: "La Evaluación DISC Explicada", description: "Comprende los estilos de comportamiento para liderar a cada persona de forma diferente." },
  { title: "Coaching para el Crecimiento", description: "El marco de conversación de coaching integrado en la app." },
  { title: "Los 5 Porqués para Resolver Problemas", description: "Un enfoque estructurado para encontrar la causa raíz, no los síntomas." },
  { title: "Ganar con Compasión", description: "Por qué los líderes de mejor desempeño también son los más humanos." },
];

export const podcastEpisodes = [
  {
    number: "01",
    title: "Establece el Estándar",
    description: "Por qué los estándares indefinidos son la raíz de la mayoría de los problemas de Accountability.",
    spotifyUrl: "https://open.spotify.com/episode/3k2erhglbdH6etH2WKmSHr?si=UD32mkdRQG6P8tXotGln2Q",
  },
  {
    number: "02",
    title: "Enciende la Visión",
    description: "Cómo convertir una lista de tareas en un propósito con el que tu equipo se compromete.",
    spotifyUrl: "https://open.spotify.com/episode/494fA0ybeo7jYEqkejZC1P?si=K891vq3XRUCDh1G-4opQ3w",
  },
  {
    number: "03",
    title: "Mejora el Flujo",
    description: "Cómo encontrar y eliminar los obstáculos que frenan el impulso de tu equipo.",
    spotifyUrl: "https://open.spotify.com/episode/4p8TtCiYP796VBMNqFrSBM?si=r-mwc-HVT5eD_k8ZSSBRvA",
  },
  {
    number: "04",
    title: "Capacita al Equipo",
    description: "La brecha entre esperar resultados y preparar a tu gente para lograrlos.",
    spotifyUrl: "https://open.spotify.com/episode/14Or7RLH5wF2ZpFQFQkriF?si=x3SWK8tOTEqYLkTHW98MqA",
  },
  {
    number: "05",
    title: "Ganar con Compasión",
    description: "Cómo el cuidado y el desempeño se refuerzan mutuamente en la planta.",
    spotifyUrl: "https://open.spotify.com/episode/5AsvXJWvPdxcY2NnOckabI?si=1EAjJtYmScSEqf0aNg_T5A",
  },
];

export const blogArticles = [
  {
    title: "Por Qué la Capacitación Sola No Cambia el Comportamiento el Lunes",
    excerpt: "La brecha entre un gran taller y un hábito transformado — y qué es lo que realmente la cierra.",
    category: "Desarrollo de Liderazgo",
  },
  {
    title: "El Costo Real de la Rotación de Líderes en Manufactura",
    excerpt: "Lo que realmente le cuesta a una planta cuando un buen líder se va — y cómo los sistemas de Accountability lo reducen.",
    category: "Operaciones",
  },
  {
    title: "Cómo Construir una Cultura de Accountability Sin Microgestionar",
    excerpt: "La diferencia entre Accountability y control, y por qué solo una de las dos escala.",
    category: "Cultura",
  },
];

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------

export const contactPage = {
  heroHeadline: "Desarrollemos a tus Líderes",
  heroSubheadline: "Cuéntanos sobre tu equipo y te mostraremos cómo encaja la Accountability App.",
  formSection: {
    heading: "Envíanos un Mensaje",
    subheading: "Te responderemos dentro de un día hábil.",
  },
  form: {
    name: "Nombre",
    company: "Empresa",
    email: "Correo Electrónico",
    phone: "Teléfono",
    leaderCount: "Número de Líderes",
    message: "Mensaje",
    selectRange: "Selecciona un rango",
    nameRequired: "El nombre es obligatorio",
    emailRequired: "El correo electrónico es obligatorio",
    emailInvalid: "Ingresa un correo electrónico válido",
    messageRequired: "Cuéntanos un poco sobre tu equipo",
    submit: "Enviar Mensaje",
    success: "Gracias — te contactaremos pronto.",
    error: "Algo salió mal. Por favor, inténtalo de nuevo o escríbenos directamente.",
    leaderCountOptions: ["1", "2-10", "11-50", "51-200", "200+"],
  },
  info: {
    heading: "Ponte en Contacto",
    description: "Cuéntanos sobre tu equipo, o contáctanos directamente — normalmente respondemos dentro de un día hábil.",
    bookDemo: "Agenda una Demo",
    location: "California, Estados Unidos",
  },
  demo: {
    eyebrow: "Agenda una Demo",
    headline: "Mira la Accountability App en Acción",
  },
  demoPlaceholder: {
    heading: "Agenda Próximamente",
    description: "Estamos configurando la programación en línea. Mientras tanto, escríbenos y encontraremos un horario que funcione.",
    cta: "Escribir para Agendar una Demo",
    iframeTitle: "Agenda una demo con Leadership Flow Technologies",
  },
  map: {
    eyebrow: "Dónde Estamos",
    headline: "California, Estados Unidos",
    iframeTitle: "Mapa que muestra California, Estados Unidos",
  },
};
