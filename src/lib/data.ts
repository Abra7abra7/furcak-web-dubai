export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  keyOutputs: string[];
}

export const COMPANY_INFO = {
  legalName: "FURCAK MARKETING MANAGEMENT - FZCO",
  shortName: "FURCAK",
  tagline: "Marketing Management | Business Development | Project Development Consultancy",
  heroH1: "Driving Business Growth. Developing Opportunities. Connecting Markets.",
  heroSubtext:
    "FURCAK MARKETING MANAGEMENT - FZCO is a Dubai-based business consultancy providing Marketing Management, Business Development and Project Development Consultancy services.",
  
  // Registration & Legal Compliance
  tradeLicenceNo: "89324",
  authority: "DIEZA (Dubai Integrated Economic Zones Authority)",
  legalStatus: "FZCO (Free Zone Company)",
  freeZone: "Dubai Silicon Oasis (DSO-IFZA)",
  
  // Address & Direct Communications
  premisesAddress: "Premises No. DSO-IFZA, IFZA Properties, Dubai Silicon Oasis, Dubai, UAE",
  phoneDisplay: "+971 50 539 5412",
  phoneRaw: "+971505395412",
  emailGeneral: "info@furcak.com",
  contactEmail: "jan@furcak.com",
  
  whatsappNumber: "+971505395412",
  whatsappUrl:
    "https://wa.me/971505395412?text=Hello%20FURCAK%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  
  // Trust Badges
  trustBadges: [
    { label: "Dubai Silicon Oasis", subtitle: "Strategic UAE Free Zone" },
    { label: "IFZA Registered", subtitle: "Global Business Community" },
    { label: "DIEZA Authority", subtitle: "Official Trade Licence No. 89324" },
  ],

  // Key Stats
  stats: [
    { value: "10+", label: "Years Experience", detail: "Corporate & commercial track record" },
    { value: "6", label: "Core Pillars", detail: "End-to-end B2B consultancy" },
    { value: "8+", label: "Key Sectors", detail: "Industrial, engineering & technology" },
    { value: "100%", label: "UAE Compliance", detail: "DIEZA licensed FZCO entity" },
  ],
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Approach", href: "#approach" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "marketing-management",
    number: "01",
    title: "Marketing Management",
    shortDesc: "Strategic positioning, brand architecture, and Go-To-Market campaigns designed specifically for high-value B2B enterprises.",
    description:
      "We design and execute integrated marketing frameworks tailored to industrial, engineering, and corporate B2B environments. From market penetration strategies to brand authority positioning, we ensure your value proposition resonates across regional and international stakeholders.",
    deliverables: [
      "B2B Brand Architecture & Positioning",
      "Comprehensive Go-To-Market (GTM) Strategy",
      "Executive & Corporate Communication",
      "Digital Presence & High-Touch Inbound Marketing",
      "Reputation & Stakeholder Alignment",
    ],
    iconName: "TrendingUp",
  },
  {
    id: "business-development",
    number: "02",
    title: "Business Development",
    shortDesc: "Expanding commercial pipelines, client acquisition models, and revenue-generating opportunities in the UAE and internationally.",
    description:
      "Accelerating commercial traction through structured business development methodologies. We identify untapped high-yield opportunities, establish senior-level institutional introductions, and architect sustainable client acquisition channels.",
    deliverables: [
      "Commercial Pipeline Structuring",
      "Enterprise Lead Generation & Prospecting",
      "Contract Negotiation & Pitch Optimization",
      "Market Entry & Regional Expansion Roadmaps",
      "Key Account Commercial Strategies",
    ],
    iconName: "Target",
  },
  {
    id: "project-development",
    number: "03",
    title: "Project Development Consultancy",
    shortDesc: "End-to-end guidance through project feasibility, commercial viability, structuring, and execution governance.",
    description:
      "Transforming project concepts into bankable, commercially viable realities. We advise on project governance, stakeholder alignment, regulatory milestones, and risk mitigation strategies across complex industrial and commercial initiatives.",
    deliverables: [
      "Project Concept & Feasibility Evaluation",
      "Commercial Viability & Structuring",
      "Risk Mitigation & Regulatory Roadmapping",
      "Milestone Governance & Execution Oversight",
      "Cross-Disciplinary Coordination",
    ],
    iconName: "Building2",
  },
  {
    id: "international-market-development",
    number: "04",
    title: "International Market Development",
    shortDesc: "Bridging European, GCC, and global markets with customized cross-border expansion frameworks.",
    description:
      "Positioned at the nexus of global commerce in Dubai, we facilitate cross-border expansion for industrial and commercial organizations entering the GCC, or regional enterprises scaling internationally with confidence.",
    deliverables: [
      "Cross-Border Market Entry Strategies",
      "Regulatory & Jurisdiction Intelligence",
      "Channel & Distribution Network Structuring",
      "Localized Value Proposition Localization",
      "Import / Export Opportunity Assessment",
    ],
    iconName: "Globe2",
  },
  {
    id: "strategic-partnerships",
    number: "05",
    title: "Strategic Partnerships",
    shortDesc: "Cultivating alliances, joint venture structures, and institutional relationships that compound enterprise value.",
    description:
      "Building strategic bridges between capital, technical expertise, and regional market access. We identify synergetic partners, broker high-trust commercial alliances, and structure robust collaborative frameworks.",
    deliverables: [
      "Joint Venture & Alliance Scoping",
      "Strategic Partner Due Diligence",
      "Alliance Structuring & MoUs",
      "Consortium Building for Major Tenders",
      "Long-Term Relationship Governance",
    ],
    iconName: "Handshake",
  },
  {
    id: "commercial-project-coordination",
    number: "06",
    title: "Commercial & Project Coordination",
    shortDesc: "Seamless orchestration between engineering, legal, financial, and operational stakeholders.",
    description:
      "Bridging the execution gap between commercial strategy and physical delivery. Drawing on deep commercial acumen and legal foundations, we oversee inter-stakeholder coordination, contract compliance, and milestone delivery.",
    deliverables: [
      "Multi-Stakeholder Project Orchestration",
      "Commercial Contract & SLA Alignment",
      "Timeline & Milestone Accountability",
      "Dispute Preemption & Risk Management",
      "Executive Dashboard Reporting",
    ],
    iconName: "Briefcase",
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "industrial-manufacturing",
    title: "Industrial Manufacturing",
    category: "Heavy Industry & Production",
    description:
      "Supporting advanced manufacturers with supply chain positioning, industrial plant initiatives, and international distributor networks.",
    focusAreas: ["Machinery & Equipment", "Automated Production", "Supply Chain Integration"],
  },
  {
    id: "engineering",
    title: "Engineering",
    category: "Technical Solutions",
    description:
      "Advising civil, mechanical, electrical, and systems engineering contractors on commercial positioning, institutional tenders, and partnership consortia.",
    focusAreas: ["Specialized Engineering", "Turnkey Contracts", "Technical Consortiums"],
  },
  {
    id: "technology-innovation",
    title: "Technology & Innovation",
    category: "Digital & Smart Systems",
    description:
      "Assisting enterprise software, cleantech, smart city, and industrial automation firms in launching B2B platforms within the UAE innovation ecosystem.",
    focusAreas: ["Enterprise Tech", "Industrial Automation", "Smart Infrastructure"],
  },
  {
    id: "professional-services",
    title: "Professional Services",
    category: "Corporate Advisory",
    description:
      "Structuring cross-border advisory, technical auditing, and specialised consulting practices expanding their GCC regional presence.",
    focusAreas: ["Advisory Practices", "Corporate Restructuring", "Specialized Consulting"],
  },
  {
    id: "construction-infrastructure",
    title: "Construction & Infrastructure",
    category: "Built Environment",
    description:
      "Facilitating commercial coordination, material sourcing partnerships, and project development support for major infrastructure undertakings.",
    focusAreas: ["Civil Infrastructure", "Specialty Contracting", "Material Procurement"],
  },
  {
    id: "real-estate-development",
    title: "Real Estate & Development",
    category: "Commercial Property",
    description:
      "Commercial structuring and project development guidance for premium commercial properties, mixed-use assets, and industrial logistics facilities.",
    focusAreas: ["Logistics Hubs", "Commercial Real Estate", "Development Feasibility"],
  },
  {
    id: "international-trade",
    title: "International Trade",
    category: "Global Commerce",
    description:
      "Structuring cross-border trading routes, commodity distribution channels, and bilateral commercial agreements leveraging Dubai's logistics infrastructure.",
    focusAreas: ["Cross-Border Distribution", "Trade Corridors", "GCC Market Access"],
  },
  {
    id: "project-development-sector",
    title: "Industrial & Commercial Project Development",
    category: "Strategic Projects",
    description:
      "Guiding large-scale greenfield and brownfield commercial ventures from initial opportunity identification through to commercial commissioning.",
    focusAreas: ["Greenfield Projects", "Joint Ventures", "Commercial Structuring"],
  },
];

export const APPROACH_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Identify Opportunities",
    tagline: "Rigorous Market Intelligence",
    description:
      "We conduct granular market research, competitive benchmarking, and regulatory assessments to pinpoint high-probability commercial vectors.",
    keyOutputs: ["Market Opportunity Matrix", "Feasibility Assessment", "Regulatory Roadmap"],
  },
  {
    step: "02",
    title: "Develop Strategy",
    tagline: "Actionable Commercial Architecture",
    description:
      "Synthesizing market insights into an executive-level commercial blueprint with clear financial targets, positioning, and milestone schedules.",
    keyOutputs: ["GTM Blueprint", "Financial Model & Pricing", "Risk Mitigation Protocol"],
  },
  {
    step: "03",
    title: "Connect Partners",
    tagline: "Institutional Alliance Building",
    description:
      "Leveraging high-level networks in Dubai and internationally to introduce strategic counterparties, distributors, and institutional partners.",
    keyOutputs: ["Qualified Partner Shortlist", "MoU & Alliance Frameworks", "Commercial Introductions"],
  },
  {
    step: "04",
    title: "Coordinate Projects",
    tagline: "Rigorous Execution Governance",
    description:
      "Maintaining hands-on oversight across engineering, commercial, and legal streams to guarantee accountability and on-time milestone delivery.",
    keyOutputs: ["Milestone Tracker", "Contract Compliance", "Stakeholder Alignment"],
  },
  {
    step: "05",
    title: "Expand Markets",
    tagline: "Sustainable Enterprise Scale",
    description:
      "Transitioning initial market success into compound regional and international scale through diversified pipelines and long-term contracts.",
    keyOutputs: ["Expansion Playbook", "Pipeline Diversification", "Long-Term Value Capture"],
  },
];

export const LEADERSHIP_PROFILE = {
  name: "Jan Furcak",
  role: "Founder | Director | General Manager",
  company: "FURCAK MARKETING MANAGEMENT - FZCO",
  experienceBadge: "10+ Years Experience | International Business | Corporate Management | Business Development",
  legalFoundation: "Legal foundation since 2012 in commercial & corporate law",
  bioParagraphs: [
    "Jan Furcak brings over a decade of executive leadership, corporate management, and international business development expertise to FURCAK MARKETING MANAGEMENT - FZCO in Dubai.",
    "With a rigorous legal foundation established in 2012 specializing in commercial and corporate law, Jan synthesizes deep contractual discipline with dynamic commercial acumen. His background spans structuring cross-border transactions, orchestrating complex stakeholder negotiations, and executing high-value industrial and commercial projects across Central Europe and the Middle East.",
    "As General Manager, Jan leads FURCAK's mission to bridge global enterprises with Dubai's unmatched business ecosystem, offering B2B clients strategic clarity, institutional trust, and high-impact commercial outcomes.",
  ],
  credentials: [
    "10+ Years Corporate Management & International Execution",
    "Commercial & Corporate Law Background (Since 2012)",
    "Cross-Border Deal Structuring & Consortium Coordination",
    "Resident Director & General Manager, Dubai DSO-IFZA",
  ],
};
