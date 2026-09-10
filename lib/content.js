// Central content/data store for the Leadership Flow Technologies website.
// Keeping copy here (instead of scattered across page files) makes it the
// single source of truth for future edits and EN/ES localization.
//
// This file holds the English copy. lib/content.es.js mirrors every export
// here with the same shape, in Spanish, for the /es routes.

export const siteConfig = {
  name: "Leadership Flow Technologies",
  legalName: "Leadership Flow Technologies LLC",
  founder: "Hector Gutierrez",
  product: "Accountability App",
  appUrl: "https://accountability-app.com",
  email: "Hectorg@accountability-app.com",
  taglineEn: "Lead with Accountability",
  taglineEs: "Lidera con Accountability",
  location: "California, United States",
  entityNumber: "B20260333343",
  foundedYear: "2026",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.leadership-flow.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The App", href: "/app" },
  { label: "The 5 Practices", href: "/practices" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/leadership-flow-technologies/", icon: "Linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@Accountability-App", icon: "Youtube" },
];

export const footerColumns = {
  about: {
    heading: "About",
    text: "Leadership Flow Technologies builds the Accountability App — a leadership development platform for the leaders running today's aerospace, defense, and electronics manufacturing operations.",
  },
  quickLinks: {
    heading: "Quick Links",
    links: navLinks,
  },
  theApp: {
    heading: "The App",
    links: [
      { label: "How It Works", href: "/app" },
      { label: "The 5 Practices", href: "/practices" },
      { label: "Pricing", href: "/pricing" },
      { label: "Visit accountability-app.com", href: "https://accountability-app.com" },
    ],
  },
  connect: {
    heading: "Connect",
    email: siteConfig.email,
  },
  rightsReserved: "All rights reserved.",
};

// ---------------------------------------------------------------------------
// Home page
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "For CHROs, CEOs & Operations Leaders in Manufacturing",
  headline: "What if you could reduce your leadership development curve from 10 years to 6 months?",
  subheadline:
    "The Accountability App — a fully integrated leadership development platform where your leaders develop themselves while you monitor their progress in real time.",
  primaryCta: { label: "See How It Works", href: "/app" },
  secondaryCta: { label: "Book a Demo", href: "/contact#demo" },
};

export const problemsSection = {
  eyebrow: "The Problem",
  headline: "The Leadership Development Problem",
};

export const problems = [
  {
    icon: "GraduationCap",
    title: "Training doesn't stick",
    description: "You send people to training — nothing changes on Monday.",
  },
  {
    icon: "Clock",
    title: "No time to coach everyone",
    description: "You do not have time to develop every leader manually.",
  },
  {
    icon: "EyeOff",
    title: "No visibility into growth",
    description: "You have no visibility into who is growing and who is not.",
  },
];

export const solutionSection = {
  eyebrow: "The Solution",
  headline: "There is a better way",
};

export const solutionStats = [
  { icon: "LayoutGrid", value: "18", label: "Modules" },
  { icon: "Target", value: "5", label: "Core Practices" },
  { icon: "Layers", value: "3", label: "Skill Pillars" },
  { icon: "Activity", value: "Real-Time", label: "Monitoring" },
];

export const solutionIntro =
  "The Accountability App puts a structured leadership development system directly into your leaders' pockets — and puts real-time visibility directly into yours. No more guessing who is growing. No more one-size-fits-all training that fades by Monday.";

export const founderQuote = {
  quote:
    "I spent 30 years watching talented people fail — not because they lacked potential, but because nobody gave them a real system to grow. I built the solution I wish I had 30 years ago.",
  name: "Hector Gutierrez",
  title: "Founder, Leadership Flow Technologies",
};

export const socialProofSection = {
  eyebrow: "From the Founder",
  headline: "Built by a leader who lived it",
};

export const finalCta = {
  headline: "Ready to develop your next generation of leaders?",
  cta: { label: "Start Today", href: "/contact" },
};

// ---------------------------------------------------------------------------
// The 5 Practices (shared between Home preview + full /practices page)
// ---------------------------------------------------------------------------

export const practicesPreviewSection = {
  eyebrow: "The Framework",
  headline: "The 5 Core Practices",
  exploreLink: "Explore all 5 practices",
};

export const practices = [
  {
    number: "01",
    slug: "set-the-bar",
    title: "Set the Bar",
    icon: "Target",
    oneLiner: "Define the standard before you demand the performance.",
    paragraphs: [
      "Define excellence before you demand the performance. Set the standard clearly, visibly, and non-negotiably.",
      "Your team cannot deliver excellence they have never seen defined.",
    ],
  },
  {
    number: "02",
    slug: "spark-the-vision",
    title: "Spark the Vision",
    icon: "Sparkles",
    oneLiner: "People follow purpose, not tasks.",
    paragraphs: [
      "People do not give their best to a task. They give their best to a purpose.",
      "Show your team where you are going and why it matters. Vision creates energy and commitment.",
    ],
  },
  {
    number: "03",
    slug: "improve-the-flow",
    title: "Improve the Flow",
    icon: "Waves",
    oneLiner: "Remove obstacles before they break the flow.",
    paragraphs: [
      "Accountability breaks down when the process is broken. Identify what is blocking your team.",
      "Eliminate the obstacles before they become crises. Create the conditions where your team performs at their highest level every day.",
    ],
  },
  {
    number: "04",
    slug: "enable-the-team",
    title: "Enable the Team",
    icon: "Users",
    oneLiner: "Accountability requires capability.",
    paragraphs: [
      "You cannot hold people accountable for results you have not equipped them to achieve.",
      "Give your team the tools, the training, and the support they need to grow. Enabling your people is your responsibility as a leader.",
    ],
  },
  {
    number: "05",
    slug: "winning-with-compassion",
    title: "Winning with Compassion",
    icon: "Heart",
    oneLiner: "Drive results AND care for your people.",
    paragraphs: [
      "The best leaders drive results AND take care of their people. Compassion is not weakness — it is the highest form of leadership strength.",
      "When your team knows you care about them as human beings, they will give you everything they have.",
    ],
  },
];

export const practicesPage = {
  headline: "The 5 Core Practices of Accountability",
  subheadline:
    "Accountability is not a personality trait. It is a system. And every system needs pillars to stand on.",
  practiceLabel: "Practice",
  bottomCta: {
    text: "See how the Accountability App builds these practices into your organization",
    cta: { label: "Explore the App", href: "/app" },
  },
};

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------

export const aboutPage = {
  heroEyebrow: "Our Story",
  heroHeadline: "Built by a Leader Who Lived It",
  founderEyebrow: "The Founder",
  founderPhotoAlt: "Hector Gutierrez, founder of Leadership Flow Technologies",
  storyQuote:
    "I sent my best people to training. I watched them walk back in on Monday morning. Nothing changed.",
  storyParagraphs: [
    "That moment stayed with Hector Gutierrez through more than 30 years of leading high-performing teams across aerospace, defense, and electronics manufacturing in the United States, Mexico, Canada, and the Czech Republic.",
    "He watched talented people get promoted into leadership roles with no real system to grow into them — sent to a workshop, handed a binder, and left to figure it out. The training was real. The change never was.",
    "So he built the system he wished someone had handed him three decades earlier: a platform where leaders develop themselves through structured practice, and the people responsible for their growth can finally see it happening in real time.",
  ],
  experienceStats: [
    { value: "30+", label: "Years in leadership" },
    { value: "4", label: "Countries — US, Mexico, Canada, Czech Republic" },
    { value: "3", label: "Industries — Aerospace, Defense, Electronics" },
  ],
  missionEyebrow: "Our Mission",
  mission:
    "Our mission is to develop leaders who develop others — building cultures of accountability that drive real, lasting results.",
  valuesSection: {
    eyebrow: "What We Stand For",
    headline: "Our Values",
  },
  values: [
    {
      icon: "ShieldCheck",
      title: "Accountability",
      description: "We hold ourselves to the same standard we build into every module — clear commitments, visible follow-through.",
    },
    {
      icon: "TrendingUp",
      title: "Growth",
      description: "Leadership is a practice, not a certificate. We build for continuous, measurable development.",
    },
    {
      icon: "HeartHandshake",
      title: "Compassion",
      description: "Results and care are not opposites. The best leaders — and the best software — hold both at once.",
    },
    {
      icon: "Award",
      title: "Excellence",
      description: "Thirty years on plant floors taught us the difference between good enough and built to last. We build the latter.",
    },
  ],
  companyInfoLabels: {
    company: "Company",
    location: "Location",
    entityNumber: "Entity Number",
    founded: "Founded",
  },
  companyInfo: {
    name: siteConfig.legalName,
    location: siteConfig.location,
    entityNumber: siteConfig.entityNumber,
    foundedYear: siteConfig.foundedYear,
  },
};

// ---------------------------------------------------------------------------
// The App page
// ---------------------------------------------------------------------------

export const appPage = {
  heroEyebrow: "The Platform",
  heroHeadline: "The Accountability App",
  heroSubheadline:
    "A fully integrated leadership development platform — 18 modules, 5 core practices, real-time progress monitoring.",
  howItWorksSection: {
    eyebrow: "How It Works",
    headline: "From self-development to real-time visibility",
    screenshotSrc: "/images/app-screenshot-score.webp",
    screenshotAlt: "A leader's personal dashboard in the Accountability App, showing their Accountability Score, SMART Goals, and Self-Assessment",
  },
  howItWorks: [
    {
      step: "01",
      title: "Structured self-development",
      description: "Leaders work through 18 structured modules covering leadership, technical, and interpersonal skills.",
    },
    {
      step: "02",
      title: "Automatic progress tracking",
      description: "Progress is tracked automatically — goals, sessions, assessments, and skill growth.",
    },
    {
      step: "03",
      title: "Real-time visibility",
      description: "You monitor everything in real time from your phone — see who is engaged and who is falling behind.",
    },
  ],
  modulesSection: {
    eyebrow: "Inside the App",
    headline: "18 Modules Across 3 Skill Areas",
  },
  monitoringEyebrow: "Real-Time Monitoring",
  monitoring: {
    headline: "Monitor your organization from your pocket",
    paragraphs: [
      "No more waiting for a quarterly review to find out who is engaged. The Accountability App gives you a live dashboard of every leader's progress — module completion, goal status, assessment scores, and skill growth — updated the moment your team logs their work.",
      "See who is pulling ahead, who needs a nudge, and who needs a conversation, all before it shows up in performance numbers on the plant floor.",
    ],
    teamProgressLabel: "Team Progress",
    ariaLabel: "Illustration of the Accountability App's real-time team progress dashboard on a phone",
    screenshotSrc: "/images/app-screenshot-board.webp",
    screenshotAlt: "The Accountability App's Visual Management board, showing green, yellow, and red status counts and a live task escalation tracker",
  },
  skillPillarsSection: {
    eyebrow: "The Foundation",
    headline: "3 Skill Pillars",
  },
  pwaEyebrow: "Available Anywhere",
  pwa: {
    headline: "Installs like a native app. Works everywhere.",
    features: [
      { icon: "Smartphone", title: "iOS & Android", description: "One platform, available on every device your team already carries." },
      { icon: "WifiOff", title: "Works Offline", description: "Modules and check-ins work on the plant floor, in the field, or anywhere signal doesn't reach." },
      { icon: "Download", title: "Installs Like Native", description: "Add it to the home screen — no app store approval cycles, no forced updates." },
    ],
  },
  cta: { headline: "Start developing your leaders today", cta: { label: "Get Started", href: "/contact" } },
};

export const skillPillars = [
  {
    icon: "Crown",
    title: "Leadership Skills",
    description: "Vision, goal-setting, coaching, feedback, mentoring, and career development — the core of leading people.",
  },
  {
    icon: "Cog",
    title: "Technical Skills",
    description: "Lean tools, OPEX fundamentals, structured problem solving, and production planning for operational leaders.",
  },
  {
    icon: "MessagesSquare",
    title: "Interpersonal Skills",
    description: "Self-awareness, communication, mindfulness, and the soft skills that make hard leadership easier.",
  },
];

export const moduleCategories = [
  {
    key: "leadership",
    title: "Leadership Modules",
    description: "Build the core capabilities of leading people, not just managing tasks.",
    modules: [
      { name: "Vision Builder", icon: "Telescope", description: "Craft and communicate a compelling team vision." },
      { name: "SMART Goals", icon: "Target", description: "Set specific, measurable goals that actually get hit." },
      { name: "DISC Assessment", icon: "PieChart", description: "Understand your own behavioral style as a leader." },
      { name: "EQ Assessment", icon: "Brain", description: "Measure and build emotional intelligence." },
      { name: "Coaching", icon: "MessageSquare", description: "Structured coaching conversations that build capability." },
      { name: "Feedback Box", icon: "Inbox", description: "Give and receive feedback on a consistent cadence." },
      { name: "Mentoring", icon: "UserCheck", description: "Pair leaders with mentors for accelerated growth." },
      { name: "Career Development", icon: "Briefcase", description: "Map out a clear path for growth and advancement." },
      { name: "Leadership Quotes", icon: "Quote", description: "Daily prompts to reinforce leadership mindset." },
    ],
  },
  {
    key: "technical",
    title: "Technical Modules",
    description: "The operational fundamentals every plant and production leader needs.",
    modules: [
      { name: "Lean Toolkit", icon: "Wrench", description: "Core lean manufacturing tools and methods." },
      { name: "OPEX Tools (SQDIP)", icon: "Gauge", description: "Safety, Quality, Delivery, Inventory, Productivity tracking." },
      { name: "Problem Solving", icon: "Search", description: "5 Whys, Fishbone, and A3 structured problem solving." },
      { name: "Line of Balance", icon: "BarChart3", description: "Production planning and scheduling visibility." },
    ],
  },
  {
    key: "interpersonal",
    title: "Interpersonal Modules",
    description: "The human skills that turn technically strong leaders into people leaders.",
    modules: [
      { name: "DISC Profile", icon: "UserCircle", description: "Ongoing behavioral style tracking and team comparison." },
      { name: "Skills Assessment", icon: "ClipboardCheck", description: "Benchmark current skills against role expectations." },
      { name: "Training Center", icon: "GraduationCap", description: "A home for all assigned and completed training." },
      { name: "Mindfulness", icon: "Leaf", description: "Short practices to build focus and reduce reactivity." },
      { name: "Communication Skills", icon: "MessagesSquare", description: "Practice the conversations leaders can't avoid." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Pricing page
// ---------------------------------------------------------------------------

export const pricingPage = {
  headline: "Simple, Transparent Pricing",
  plansSection: {
    eyebrow: "Plans",
    headline: "Choose Your Plan",
  },
  betaNote: "Currently in Beta — contact us for early adopter pricing.",
  mostPopularLabel: "Most Popular",
  faqSection: {
    eyebrow: "Questions",
    headline: "Frequently Asked Questions",
  },
  consultationCta: {
    headline: "Not sure which plan is right for you?",
    cta: { label: "Book a Free 30-Minute Consultation", href: "/contact#demo" },
  },
};

export const pricingTiers = [
  {
    name: "Individual",
    price: "$9",
    period: "/month",
    description: "For a single leader ready to start developing today.",
    features: [
      "1 leader seat",
      "Access to all 18 modules",
      "Progress tracking",
      "Mobile access (iOS & Android)",
    ],
    cta: { label: "Get Started", href: "/contact" },
    highlighted: false,
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For a department or shift ready to build a culture of accountability.",
    features: [
      "Up to 10 leaders",
      "All 18 modules",
      "Real-time team dashboard",
      "Team progress monitoring",
      "Priority support",
    ],
    cta: { label: "Get Started", href: "/contact" },
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations rolling out accountability at scale.",
    features: [
      "Unlimited leaders",
      "Full organization dashboard",
      "Custom onboarding",
      "Dedicated support",
      "Quarterly business reviews",
    ],
    cta: { label: "Contact Sales", href: "/contact" },
    highlighted: false,
  },
];

export const pricingFaqs = [
  {
    question: "Is the Accountability App available now?",
    answer:
      "The app is currently in Beta. Early adopters get direct access to the founder, input into the product roadmap, and special early-adopter pricing — contact us to get started.",
  },
  {
    question: "What counts as a \"leader\" seat?",
    answer:
      "A seat is one individual leader with their own login, module progress, goals, and assessments. Seats are not shared between people.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. You can move between Individual, Team, and Enterprise as your organization grows — your progress data moves with you.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Annual billing with a discount is available on Team and Enterprise plans — ask about it when you book a consultation.",
  },
  {
    question: "What industries is this built for?",
    answer:
      "The Accountability App was built from 30+ years of leadership experience in aerospace, defense, and electronics manufacturing — but the 5 core practices apply to any team that needs real accountability.",
  },
];

// ---------------------------------------------------------------------------
// Resources page
// ---------------------------------------------------------------------------

export const resourcesPage = {
  heroHeadline: "Leadership Insights from the Field",
  videoEyebrow: "Watch",
  videoSectionHeadline: "Watch: Inside the Modules",
  podcastEyebrow: "Listen",
  podcastHeadline: "Lead with Accountability Podcast",
  episodeLabel: "Episode",
  listenOnSpotify: "Listen on Spotify",
  blogEyebrow: "Read",
  blogHeadline: "From the Blog",
  readMoreLabel: "Read More",
  leadMagnet: {
    eyebrow: "Free Resource",
    headline: "Download Our Leadership Development Guide",
    description: "A free guide to the 5 core practices, built from 30+ years on the plant floor.",
  },
  newsletterForm: {
    emailSrOnlyLabel: "Email address",
    placeholder: "you@company.com",
    emailRequired: "Email is required",
    emailInvalid: "Enter a valid email",
    submit: "Download Guide",
    success: "Thanks! Check your inbox for the guide.",
    error: "Something went wrong. Please try again.",
  },
};

export const videoResources = [
  { title: "The Winning Team Formula", description: "The exact mix of accountability, trust, and shared purpose that turns a group into a team.", youtubeId: "h-E2TsG8Mzo" },
  { title: "Vision Builder: Overview", description: "A walkthrough of the Vision Builder module and why purpose comes first." },
  { title: "Mastering SMART Goals", description: "How to write goals your team can actually hit — and track." },
  { title: "The DISC Assessment Explained", description: "Understanding behavioral styles to lead each person differently." },
  { title: "Coaching for Growth", description: "The coaching conversation framework built into the app." },
  { title: "5 Whys Problem Solving", description: "A structured approach to finding root cause, not symptoms." },
  { title: "Winning with Compassion", description: "Why the best-performing leaders are also the most human." },
];

export const podcastEpisodes = [
  {
    number: "01",
    title: "Set the Bar",
    description: "Why undefined standards are the root of most accountability problems.",
    spotifyUrl: "https://open.spotify.com/episode/3k2erhglbdH6etH2WKmSHr?si=UD32mkdRQG6P8tXotGln2Q",
  },
  {
    number: "02",
    title: "Spark the Vision",
    description: "Turning a task list into a purpose your team commits to.",
    spotifyUrl: "https://open.spotify.com/episode/494fA0ybeo7jYEqkejZC1P?si=K891vq3XRUCDh1G-4opQ3w",
  },
  {
    number: "03",
    title: "Improve the Flow",
    description: "Finding and removing the obstacles killing your team's momentum.",
    spotifyUrl: "https://open.spotify.com/episode/4p8TtCiYP796VBMNqFrSBM?si=r-mwc-HVT5eD_k8ZSSBRvA",
  },
  {
    number: "04",
    title: "Enable the Team",
    description: "The tools and training gap between expecting results and equipping for them.",
    spotifyUrl: "https://open.spotify.com/episode/14Or7RLH5wF2ZpFQFQkriF?si=x3SWK8tOTEqYLkTHW98MqA",
  },
  {
    number: "05",
    title: "Winning with Compassion",
    description: "How care and performance reinforce each other on the plant floor.",
    spotifyUrl: "https://open.spotify.com/episode/5AsvXJWvPdxcY2NnOckabI?si=1EAjJtYmScSEqf0aNg_T5A",
  },
];

export const blogArticles = [
  {
    title: "Why Training Alone Doesn't Change Behavior on Monday",
    excerpt: "The gap between a great workshop and a changed habit — and what actually closes it.",
    category: "Leadership Development",
  },
  {
    title: "The Real Cost of Leadership Turnover in Manufacturing",
    excerpt: "What it actually costs a plant when a good leader leaves — and how accountability systems reduce it.",
    category: "Operations",
  },
  {
    title: "How to Build a Culture of Accountability Without Micromanaging",
    excerpt: "The difference between accountability and control, and why only one of them scales.",
    category: "Culture",
  },
];

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------

export const contactPage = {
  heroHeadline: "Let's Develop Your Leaders",
  heroSubheadline: "Tell us about your team and we'll show you how the Accountability App fits.",
  formSection: {
    heading: "Send Us a Message",
    subheading: "We will get back to you within one business day.",
  },
  form: {
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    leaderCount: "Number of Leaders",
    message: "Message",
    selectRange: "Select a range",
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Enter a valid email",
    messageRequired: "Tell us a bit about your team",
    submit: "Send Message",
    success: "Thanks — we will be in touch shortly.",
    error: "Something went wrong. Please try again or email us directly.",
    leaderCountOptions: ["1", "2-10", "11-50", "51-200", "200+"],
  },
  info: {
    heading: "Get in Touch",
    description: "Tell us about your team, or reach out directly — we typically respond within one business day.",
    bookDemo: "Book a Demo",
    location: siteConfig.location,
  },
  demo: {
    eyebrow: "Book a Demo",
    headline: "See the Accountability App in Action",
  },
  demoPlaceholder: {
    heading: "Scheduling Coming Soon",
    description: "Online scheduling is being set up. In the meantime, email us and we will find a time that works.",
    cta: "Email to Book a Demo",
    iframeTitle: "Book a demo with Leadership Flow Technologies",
  },
  map: {
    eyebrow: "Where We Are",
    headline: "California, United States",
    iframeTitle: "Map showing California, United States",
  },
};
