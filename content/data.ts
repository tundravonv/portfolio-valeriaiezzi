// ================================================================
//  PORTFOLIO CONTENT
//  Edit this file to update text across the site.
//  Search for "← Update" comments to find fields to personalise.
// ================================================================

export type Tag = {
  label: string;
  // "purple" | "pink" | "amber" | "gray"
  color: "purple" | "pink" | "amber" | "gray";
};

export type InfoRow = {
  label: string;
  items: string[];
};

export type ProjectSection = {
  heading: string;
  body: string;
  /** Optional image path, e.g. "/images/ikea/research.png" ← Update */
  image?: string;
  imageAlt?: string;
};

export type FinalSolutionItem = {
  number: string;
  caption: string;
  /** Image path ← Update */
  image?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Company name shown as the eyebrow above the title on the card */
  company?: string;
  /** One of the logo keys defined in CompanyLogo component, or undefined */
  logoKey?: "ikea" | "suitsupply" | "sandvik" | "assa-abloy";
  dateRange?: string;
  tags: Tag[];
  /** Short description shown on the homepage card */
  description: string;
  /** Hero image for the detail page, e.g. "/images/ikea/hero.png" ← Update */
  heroImage?: string;
  /** Card image (right side on homepage), e.g. "/images/ikea/card.png" ← Update */
  cardImage?: string;
  /** Whether to show this project on the homepage */
  featured: boolean;
  // ── Detail page fields ────────────────────────────────────
  infoTable?: InfoRow[];
  goal?: string;
  processSections?: ProjectSection[];
  finalSolution?: FinalSolutionItem[];
  outcome?: string;
  outcomeItems?: string[];
  /** "Previous project" slug for bottom navigation */
  prevSlug?: string;
  /** "Next project" slug for bottom navigation */
  nextSlug?: string;
};

export type ComingSoonProject = {
  logoText: string;
  /** "ario" | "lagkagehuset" — controls special logo styling */
  logoStyle?: "ario" | "lagkagehuset";
  year: string;
  description: string;
};

// ─── Site Info ────────────────────────────────────────────────
export const siteConfig = {
  name: "Valeria Iezzi",
  year: "2026",
  // ← Update: your LinkedIn profile URL
  linkedin: "https://linkedin.com/in/valeriaiezzi",
  // ← Update: path to your CV PDF in /public, e.g. "/cv-valeria-iezzi.pdf"
  cvUrl: "/cv-valeria-iezzi.pdf",
  // ← Update: your email address
  email: "iezzi.valeria.iezzi@gmail.com",
};

// ─── Hero / About copy ────────────────────────────────────────
export const heroCopy = {
  // ← Update: your intro paragraphs
  bio1:
    "I'm a Senior Digital Product Designer with 7+ years of experience turning user needs into intuitive digital products and better product decisions. I combine UX research, interaction design, and visual design to make complex systems feel clear, useful, and easy to navigate.",
  bio2:
    "My experience spans enterprise platforms, mobile applications, and digital tools. I work closely with engineers, product managers, and stakeholders to create products that balance user needs, business goals, and technical constraints.",
  coreSkills: [
    { label: "UX research", color: "purple" as const },
    { label: "UI Design", color: "purple" as const },
    { label: "Service Design", color: "pink" as const },
    { label: "Design System", color: "amber" as const },
  ],
  photo: "/photo.png",
};

// ─── Projects ─────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "ikea-master-material-library",
    title: "Master Material Library",
    company: "IKEA",
    logoKey: "ikea",
    tags: [
      { label: "UX research", color: "purple" },
      { label: "UI Design", color: "purple" },
      { label: "Design System", color: "amber" },
      { label: "Service Design", color: "pink" },
    ],
    description:
      "Redesign and transformation of IKEA's material management system into a scalable platform improving UX, workflows and material management.",
    heroImage: "/images/ikea-card.png",
    cardImage: "/images/ikea-card.png",
    featured: true,
    infoTable: [
      { label: "Client", items: ["IKEA"] },
      // ← Update: your role on the project
      { label: "Role", items: ["Lead UX Designer"] },
      // ← Update: actual duration
      { label: "Duration", items: ["2022 — 2023"] },
      {
        label: "Responsibilities",
        items: [
          "User research",
          "Strategy & roadmapping",
          "Design system",
          "Interaction design",
          "Wireframing",
          "Lo/Hi fidelity",
          "User testing",
          "Stakeholder management",
          "Animation",
        ],
      },
      {
        label: "Methods",
        items: [
          "Desk research",
          "Competitive analysis",
          "Interviews",
          "Affinity mapping",
          "User journeys",
          "Usability testing",
          "A/B testing",
          "Lab testing",
        ],
      },
      // ← Update: team members
      { label: "Team", items: ["Product Manager", "3 Developers", "2 Designers"] },
      { label: "Tools", items: ["Figma", "Miro", "Confluence"] },
    ],
    goal:
      "Redesign and transformation of IKEA's material management system into a scalable platform improving UX, workflows and material management.",
    processSections: [
      {
        heading: "User Research & Insights",
        body:
          "Research was conducted through user interviews, contextual enquiries and analysis across all user groups.\n\nKey findings highlighted the complexity of the existing information architecture, unclear navigation, and lack of a unified data structure across material categories.\n\nA series of workshops with the core team defined the key areas for improvement and aligned on strategic priorities.",
        // ← Update: image path
        image: undefined,
      },
      {
        heading: "Analysis & definition",
        body:
          "Based on the research findings, we defined:\n• Information architecture improvements\n• Identifying strategic gaps\n• Content modelling and taxonomy refinement\n• Linking workflows to user needs\n\nA comprehensive review of all existing material classifications was conducted, uncovering duplication and inconsistencies that needed to be resolved.",
        image: undefined,
      },
      {
        heading: "Strategic Impact",
        body:
          "The design decisions were validated through regular stakeholder reviews, ensuring business goals and technical constraints were reflected in the design direction.\n\nCo-creation workshops helped teams align on the new taxonomy structure and interface patterns, building shared ownership of the solution.",
        image: undefined,
      },
      {
        heading: "Key User Flows",
        body:
          "Three main user flows were designed and tested:\n\n1. Explore Materials Plus — Browse, search and filter the full materials catalogue.\n2. Request New Material Flow — Submit a request for a new material to be added to the library.\n3. Create & Manage Materials Flow — Create and search for materials within the system.",
        image: undefined,
      },
      {
        heading: "Validation & Iteration",
        body:
          "Each design iteration was validated through usability testing and stakeholder feedback sessions. Findings from each round were used to refine the interface before the next iteration.",
        image: undefined,
      },
    ],
    // ← Update: add solution image paths and captions
    finalSolution: [
      { number: "1", caption: "Home — offering templates for quick navigation, filters and previews ensuring overall flow efficiently.", image: undefined },
      { number: "2", caption: "List result — detailed list view providing multiple properties, filters and logistic information.", image: undefined },
      { number: "3", caption: "Articulate and content listing page — solid breadth tools aiding category in process to extract and work tools.", image: undefined },
      { number: "4", caption: "Detail — improved catalogue structure enabling tasks across to choose materials.", image: undefined },
      { number: "5", caption: "Show page — introducing All Info new types in best new intelligence process in MMS.", image: undefined },
    ],
    outcome:
      "The redesigned platform improved how IKEA teams access, manage and collaborate around material data.",
    outcomeItems: [
      // ← Update: add your real outcome metrics
      "Adoption increased significantly across material management teams",
      "Team efficiency improved through streamlined workflows",
      "Reduced duplication in material cataloguing",
    ],
    prevSlug: "sustainable-grocery-app",
    nextSlug: "suitsupply-insights-app",
  },

  {
    slug: "suitsupply-insights-app",
    title: "Insights App",
    company: "SUITSUPPLY",
    logoKey: "suitsupply",
    dateRange: "May 2022 — November 2022",
    tags: [
      { label: "UX research", color: "purple" },
      { label: "UI Design", color: "purple" },
      { label: "Design System", color: "amber" },
    ],
    description:
      "Building of an app that transforms complex retail performance data into actionable insights, supporting decision-making across all levels of the organisation.",
    heroImage: "/images/suitsupply-card.png",
    cardImage: "/images/suitsupply-card.png",
    featured: true,
    infoTable: [
      { label: "Client", items: ["Suitsupply"] },
      { label: "Duration", items: ["May 2022 — November 2022"] },
      {
        label: "Responsibilities",
        items: [
          "UX Design",
          "UI Design",
          "User research",
          "Interaction design",
          "Prototyping",
          "Usability testing",
        ],
      },
      {
        label: "Methods",
        items: [
          "User interviews",
          "Customer journey",
          "Affinity mapping",
          "Information architecture",
          "Wireframing",
          "Prototyping",
        ],
      },
      { label: "Team", items: ["Product Manager", "Developers", "Stakeholders"] },
      { label: "Tools", items: ["Figma", "Maze"] },
    ],
    goal:
      "The project aimed to design a mobile-first app that transforms complex retail performance data into actionable insights, supporting decision-making across all levels of the Suitsupply organisation.",
    processSections: [
      {
        heading: "User Research & Insights",
        body:
          "Research was carried out to understand how different user types interact with existing data tools. Interviews revealed that the main challenges were around data overload, lack of personalisation, and poor visualisation of trends.",
        image: undefined,
      },
      {
        heading: "Key Insights",
        body:
          "Users needed a clear, digestible view of their relevant KPIs, the ability to drill down into data at different organisational levels, and alerts for significant changes in performance.",
        image: undefined,
      },
      {
        heading: "Analysis & definition",
        body:
          "Based on findings, we defined the information architecture for the app, prioritising the most frequently accessed data points and building clear navigation flows.",
        image: undefined,
      },
      {
        heading: "Validation & Iteration",
        body:
          "Multiple rounds of usability testing were conducted with participants from different roles — store managers, regional managers, and HQ. Each round refined the design towards a more intuitive and focused experience.",
        image: undefined,
      },
    ],
    finalSolution: [
      { number: "Overview", caption: "The main overview screen summarising KPIs with clear visual hierarchy.", image: undefined },
      { number: "Alerts", caption: "Push notifications and in-app alerts highlighting significant performance changes.", image: undefined },
      { number: "Filters", caption: "Flexible filtering by region, store, and time period.", image: undefined },
      { number: "Detail", caption: "Drill-down view for individual KPI deep analysis.", image: undefined },
    ],
    outcome: "The app enabled data-driven decisions across all levels of the Suitsupply organisation.",
    outcomeItems: [
      // ← Update: add real outcome metrics
      "Improved decision-making speed for store managers",
      "Increased engagement with performance data",
      "Positive feedback from key stakeholders across the organisation",
    ],
    prevSlug: "ikea-master-material-library",
    nextSlug: "sandvik-plantdesigner-web",
  },

  {
    slug: "sandvik-plantdesigner-web",
    title: "PlantDesigner Web",
    company: "SANDVIK",
    logoKey: "sandvik",
    tags: [
      { label: "UX research", color: "purple" },
      { label: "UI Design", color: "purple" },
      { label: "Design System", color: "amber" },
    ],
    description:
      "Redesign of Sandvik's PlantDesigner platform to improve usability, simplify workflows, and support engineering collaboration.",
    heroImage: "/images/sandvik-card.png",
    cardImage: "/images/sandvik-card.png",
    featured: true,
    infoTable: [
      { label: "Client", items: ["Sandvik"] },
      { label: "Duration", items: ["2023"] }, // ← Update
      {
        label: "Responsibilities",
        items: [
          "UX research",
          "Interaction design",
          "UI Design",
          "Design system",
          "Prototyping",
          "Stakeholder management",
        ],
      },
      {
        label: "Methods",
        items: [
          "User interviews",
          "Contextual enquiry",
          "Competitive analysis",
          "Usability testing",
          "Prototyping",
        ],
      },
      { label: "Team", items: ["Product Manager", "Developers", "Engineers"] }, // ← Update
      { label: "Tools", items: ["Figma", "Miro"] },
    ],
    goal:
      "Redesign of Sandvik's PlantDesigner platform to improve usability, simplify complex engineering workflows, and support cross-team collaboration.",
    processSections: [
      {
        heading: "Research & Discovery",
        body:
          "Initial research focused on understanding how engineers used the existing platform day-to-day, what their main pain points were, and what workflows needed the most improvement.",
        image: undefined,
      },
      {
        heading: "Design & Prototyping",
        body:
          "Wireframes and interactive prototypes were created to test new navigation patterns and workflow layouts. Multiple rounds of testing with engineering users helped validate the approach.",
        image: undefined,
      },
      {
        heading: "Design System",
        body:
          "A modular design system was created to ensure consistency across all screens and allow the development team to implement the designs efficiently.",
        image: undefined,
      },
    ],
    outcome: "The redesigned PlantDesigner platform improved usability and engineering collaboration.",
    outcomeItems: [
      // ← Update: add real metrics
      "Simplified key engineering workflows",
      "Improved cross-team collaboration",
      "Consistent UI across the platform via design system adoption",
    ],
    prevSlug: "suitsupply-insights-app",
    nextSlug: "assa-abloy-lock-installation",
  },

  {
    slug: "assa-abloy-lock-installation",
    title: "Lock-installation Apps",
    company: "ASSA ABLOY",
    logoKey: "assa-abloy",
    dateRange: "April 2022 — November 2022",
    tags: [
      { label: "UX research", color: "purple" },
      { label: "UI Design", color: "purple" },
      { label: "Design System", color: "amber" },
      { label: "Service Design", color: "pink" },
    ],
    description:
      "Designing an advanced website and a mobile app for allowing locks installations, solving key user challenges.",
    heroImage: "/images/assa-abloy-card.png",
    cardImage: "/images/assa-abloy-card.png",
    featured: true,
    infoTable: [
      { label: "Client", items: ["Assa Abloy"] },
      { label: "Duration", items: ["April 2022 — November 2022"] },
      {
        label: "Responsibilities",
        items: [
          "UX Design",
          "UI Design for both platforms",
          "Design system creation",
          "Cross-functional alignment",
          "Wireframing",
          "User testing",
          "Facilitation",
        ],
      },
      {
        label: "Methods",
        items: [
          "Stakeholder interviews",
          "Customer journey",
          "Usability testing",
          "Affinity mapping",
          "Prototyping",
          "Cross-functional workshops",
          "Desk research",
          "Findings by mapping",
        ],
      },
      { label: "Team", items: ["Project Manager", "2 Android Developers", "iOS Developer", "Web Developer"] },
      { label: "Tools", items: ["Figma", "Zeplin", "FigJam"] },
    ],
    goal:
      "Assa Abloy, the Swedish global leader in door solutions, wanted to strengthen efficiency and improve the workflow of planning and installing all ASSA products, starting with the user installation team to foster safety and accessibility, creating a better experience for all of them.",
    processSections: [
      {
        heading: "Research & Needs",
        body:
          "Research was carried out through a mix of interviews and contextual observation with installation teams on site. Key challenges emerged around complex configuration interfaces, lack of clear feedback during installation, and difficulty moving between the web and mobile app.\n\nThese insights shaped the core design principles: clarity, consistent feedback, and seamless handoff between platforms.",
        image: undefined,
      },
      {
        heading: "Prototyping & Testing",
        body:
          "A unified design system was created keeping the existing branding in focus. The design system ensured coherence between the web app (used for planning complex configurations) and the mobile app (used by installers for on-site configuration).\n\nUsability testing was run with installation technicians, focusing on task completion, error recovery, and overall efficiency.",
        image: undefined,
      },
      {
        heading: "Usability Test Results",
        body:
          "Multiple rounds of testing validated key improvements. Task completion rates improved across all tested scenarios, and participants reported a significant reduction in confusion when switching between the web and mobile platforms.",
        image: undefined,
      },
    ],
    finalSolution: [
      { number: "Login page", caption: "Clean, accessible login flow for both web and mobile platforms.", image: undefined },
      { number: "Area page", caption: "Area management view enabling efficient planning of lock installations.", image: undefined },
      { number: "Two screens of the mobile app", caption: "Key mobile screens enabling on-site lock configuration.", image: undefined },
    ],
    outcome: "The redesigned web and mobile apps significantly improved installation efficiency and reduced error rates.",
    outcomeItems: [
      // ← Update: add real outcome metrics
      "Improved task completion rate for installation technicians",
      "Reduced errors during lock configuration",
      "Consistent experience across web and mobile platforms",
    ],
    prevSlug: "sandvik-plantdesigner-web",
    nextSlug: "sustainable-grocery-app",
  },

  {
    slug: "sustainable-grocery-app",
    title: "Sustainable Grocery App",
    company: undefined,
    logoKey: undefined,
    dateRange: "November 2019 — February 2020",
    tags: [
      { label: "UX research", color: "purple" },
      { label: "UI Design", color: "purple" },
    ],
    description:
      "Designing an app for showcasing products' details and their carbon footprint details in the grocery shop, to foster sustainable choices.",
    heroImage: "/images/grocery-card.png",
    cardImage: "/images/grocery-card.png",
    featured: true,
    infoTable: [
      // ← Update: "Project for" — university name or personal project
      { label: "Project for", items: ["University project"] },
      { label: "Duration", items: ["November 2019 — February 2020"] },
      {
        label: "Responsibilities",
        items: [
          "User research",
          "Concept creation",
          "UI Design",
          "Prototyping",
          "Facilitation",
        ],
      },
      {
        label: "Methods",
        items: [
          "Qualitative user research",
          "User interviews",
          "Wireframing",
          "Prototyping",
          "A/B testing",
          "Usability testing",
          "Healthy testing",
        ],
      },
      // ← Update: team members
      { label: "Team", items: ["1 Designer", "1 Researcher"] },
      { label: "Tools", items: ["Figma", "Figma Miro", "Figma Prototyping"] },
    ],
    goal:
      "The Sustainable Grocery App was designed for grocery stores, aiming to make it easier for people who want to reduce their carbon footprint by making their shopping trips more environmentally friendly.\n\nIt helps people consider climate change while grocery shopping and offers contextual experiences of making conscious environmental decisions. The app aims to help grocery shoppers make informed, sustainable choices.",
    processSections: [
      {
        heading: "Research & Concept Creation",
        body:
          "Research on sustainability communications revealed the environmental effect of food and products in a relatable and actionable way. Exploring sustainability technology for the first time, we looked at existing apps and products that provided carbon footprint information.\n\nSearching for ideas of some counter technologies like the first camera approach and identifying the type of project solution and what they actually do — and whether the app needs to scan in-store or provide results through the shopping experience.\n\nThe prototype represented a design of the CO₂ emissions for grocery items, using in-store scanning to provide real-time CO₂ impact. CO₂ feedback is presented by scanning: CO₂ shop view, use CO₂ details and light own CO₂ low-use can be found through the user experience.",
        image: undefined,
      },
      {
        heading: "Prototyping & Testing",
        body:
          "A hi-fidelity prototype was created and tested in an actual supermarket environment, with real users scanning product barcodes. The sessions provided rich behavioural insights around the practical usability of the app in a real grocery-shopping context.\n\nTwo versions were built for A/B testing:\n• View A: Simple picture at the item and much more text\n• View B: Helpful illustration and more context\n\nUser flow is playful, illustrative, and companions with CO₂ aims.",
        image: undefined,
      },
    ],
    finalSolution: [
      { number: "Solution", caption: "Testing sessions during the construction of the app prototype. Through these sessions, feedback was collected from a range of participants covering different age groups, to build an inclusive and intuitive solution. The grocery shopping app layout allows engagement. Regarding the survey, displaying the user CO₂ of food, the grocery app allows for environmental and personal recommendations. These improvements would result in making users more effective as conscious shoppers, aligning directly to the app's core purpose.", image: undefined },
    ],
    outcome: "The app prototype demonstrated how sustainability data can be meaningfully integrated into the everyday grocery shopping experience.",
    outcomeItems: [
      // ← Update: add real outcomes
      "Users were more engaged with product-level CO₂ data when presented in a visual, contextual way",
      "Scanning approach validated in real supermarket conditions",
      "Positive user feedback on the illustration-led design direction",
    ],
    prevSlug: "assa-abloy-lock-installation",
    nextSlug: "ikea-master-material-library",
  },
];

// ─── Coming-soon projects ──────────────────────────────────────
export const comingSoonProjects: ComingSoonProject[] = [
  {
    logoText: "ario",
    logoStyle: "ario",
    year: "2025",
    description: "Web app for health product system",
  },
  {
    logoText: "LAGKAGEHUSET",
    logoStyle: "lagkagehuset",
    year: "2024",
    description: "Web Dashboard, a dashboard for insights on key KPIs",
  },
];

// ─── Helpers ──────────────────────────────────────────────────
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug: string) => {
  const project = getProjectBySlug(slug);
  return {
    prev: project?.prevSlug ? getProjectBySlug(project.prevSlug) : undefined,
    next: project?.nextSlug ? getProjectBySlug(project.nextSlug) : undefined,
  };
};
