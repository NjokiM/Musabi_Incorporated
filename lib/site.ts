export type PageSection = {
  heading: string;
  body: string[];
};

export type SubPage = {
  slug: string;
  title: string;
  intro: string;
  sections: PageSection[];
  links?: { label: string; href: string }[];
};

export type EntityStatus = "operational" | "emerging" | "future";

export type Entity = {
  slug: string;
  name: string;
  short: string;
  token: string;
  hex: string;
  role: string;
  association: string;
  status: EntityStatus;
  statusNote?: string;
  intro: string;
  sections: PageSection[];
  pages: SubPage[];
};

export const brand = {
  name: "Musabi Incorporated",
  tagline: "Building a Resilient Future",
  coreThought: "The parts make the whole.",
  promise:
    "Musabi exists to turn ideas, knowledge and resources into meaningful, resilient and enduring outcomes — for people, places, organisations and communities.",
  description:
    "A multidisciplinary African design, research, development and innovation institution. One institution, six capabilities.",
  coreThoughts: [
    "We create with purpose.",
    "We think with wisdom.",
    "We serve with care.",
  ],
};

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/entities", label: "Entities" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/moses-musabi", label: "Moses Musabi" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const values = [
  {
    name: "Excellence",
    meaning:
      "High standards of thought, craft, communication and delivery — pursued through discipline, craftsmanship and continuous improvement.",
  },
  {
    name: "Integrity",
    meaning:
      "Honesty, transparency and responsibility, especially when it is difficult. Trust is earned through consistent actions, not words.",
  },
  {
    name: "Stewardship",
    meaning:
      "Long-term consideration for people, resources, places and institutions. Every decision considers its long-term impact.",
  },
  {
    name: "Collaboration",
    meaning:
      "Better outcomes through different knowledge and perspectives. The best ideas emerge through partnership.",
  },
  {
    name: "Innovation",
    meaning:
      "Useful new approaches that challenge assumptions and solve problems — curiosity guided by purpose.",
  },
];

export const processSteps = [
  { number: "01", name: "Discovery", note: "Understanding before creating." },
  { number: "02", name: "Research", note: "Good decisions are informed decisions." },
  { number: "03", name: "Strategy", note: "Defining the direction before drawing the solution." },
  { number: "04", name: "Concept Development", note: "Transforming ideas into possibilities." },
  { number: "05", name: "Design Development", note: "Refining vision into reality." },
  { number: "06", name: "Implementation Support", note: "Supporting successful delivery." },
  { number: "07", name: "Quality Assurance", note: "Protecting design integrity." },
  { number: "08", name: "Project Completion", note: "Completing with confidence." },
  { number: "09", name: "Post-Occupancy Review", note: "Learning from every project." },
];

export const journalCategories = [
  {
    slug: "ideas",
    title: "Ideas",
    description:
      "Thinking that precedes the work — positions, provocations and working notes from across the institution.",
  },
  {
    slug: "research",
    title: "Research",
    description:
      "Evidence-led studies and findings from the Urban Lab and project practice.",
  },
  {
    slug: "projects",
    title: "Projects",
    description:
      "Process and outcomes from live work, told as case studies: the problem, the approach, what changed.",
  },
  {
    slug: "cities",
    title: "Cities",
    description:
      "Urbanism, policy and the future of African cities.",
  },
  {
    slug: "design",
    title: "Design",
    description:
      "Craft, practice and design thinking across the built environment and brand.",
  },
  {
    slug: "sustainability",
    title: "Sustainability",
    description:
      "Resilience, environment and long-term stewardship in practice.",
  },
  {
    slug: "community",
    title: "Community",
    description:
      "People, participation and the social value of the work.",
  },
];

export const projectCategories = [
  {
    slug: "architecture",
    title: "Architecture",
    description:
      "Buildings, landscapes and interiors designed by Musabi Architecture Studio.",
    entity: "architecture-studio",
  },
  {
    slug: "creative",
    title: "Creative",
    description:
      "Brand, communication and design work delivered by Musabi Creative.",
    entity: "creative",
  },
  {
    slug: "urban",
    title: "Urban",
    description:
      "Research-led urban projects and policy work from Musabi Urban Lab.",
    entity: "urban-lab",
  },
  {
    slug: "development",
    title: "Development",
    description:
      "Property and development projects initiated by Musabi Development.",
    entity: "development",
  },
  {
    slug: "foundation",
    title: "Foundation",
    description:
      "Community, education and social-impact programmes from Musabi Foundation.",
    entity: "foundation",
  },
  {
    slug: "ventures",
    title: "Ventures",
    description:
      "Enterprises and investments supported by Musabi Ventures.",
    entity: "ventures",
  },
];

export const aboutPages: SubPage[] = [
  {
    slug: "our-story",
    title: "Our Story",
    intro:
      "Musabi Incorporated began with a question: can thoughtful design create lasting change? The answer has been built through persistence, reflection and the courage to begin again.",
    sections: [
      {
        heading: "Where we started",
        body: [
          "Musabi was founded on the conviction that the most enduring solutions are born where vision, strategy and human-centred design converge. Its purpose reaches beyond any single discipline — architecture, landscape, interiors, branding, communications and strategy are expressions of one way of thinking.",
          "The story is not one of instant success. It is one of persistence, reflection and a growing conviction that meaningful impact demands integrity, curiosity and discipline.",
        ],
      },
      {
        heading: "What shaped us",
        body: [
          "Moments of uncertainty and lessons learned through experience became the foundation of the practice — not obstacles to overcome, but teachers that refined its purpose.",
          "Every project is approached with the same responsibility: to understand before we create, to collaborate before we conclude, and to leave every client, community and place better than we found it.",
        ],
      },
      {
        heading: "Where we are going",
        body: [
          "Musabi is built as a whole made of parts — an institution designed to grow beyond the work of any one discipline or founder, and to contribute to a future where development balances social, environmental and economic value.",
        ],
      },
    ],
  },
  {
    slug: "our-belief",
    title: "Our Belief",
    intro:
      "We believe that thoughtful design has the power to improve lives — wherever it is expressed: architecture, landscape, interiors, communication or strategy.",
    sections: [
      {
        heading: "Design is a responsibility",
        body: [
          "Design shapes how people experience the world around them. It is not decoration. It is a responsibility — and every project is an opportunity to create lasting value for clients, communities and environments alike.",
        ],
      },
      {
        heading: "What we believe",
        body: [
          "Thoughtful design improves lives. Communities matter. Sustainability is essential. Quality creates trust. Relationships outlast projects.",
        ],
      },
    ],
  },
  {
    slug: "our-vision",
    title: "Our Vision",
    intro:
      "To become one of Africa's most respected multidisciplinary design consultancies — recognised for shaping sustainable communities, influencing the future of cities, and delivering transformative solutions that leave a lasting legacy.",
    sections: [
      {
        heading: "The future we see",
        body: [
          "We see a future where thoughtful design informs every stage of development — from the planning of cities to the creation of meaningful brands, from resilient buildings to inclusive communities.",
          "We see multidisciplinary collaboration replacing fragmented thinking, sustainability becoming the standard rather than the exception, and design recognised as a catalyst for positive change.",
        ],
      },
    ],
  },
  {
    slug: "our-mission",
    title: "Our Mission",
    intro:
      "To deliver thoughtful, multidisciplinary design and strategic solutions that improve lives, strengthen communities, and create enduring value through excellence, innovation and meaningful collaboration.",
    sections: [
      {
        heading: "Why it matters",
        body: [
          "Profit enables our work, but purpose defines it. We exist to solve complex problems, strengthen communities, empower organisations, and contribute to a future where development balances social, environmental and economic value.",
        ],
      },
    ],
  },
  {
    slug: "our-values",
    title: "Our Values",
    intro:
      "Five values govern how we think, how we work and how we treat the people and places our work touches.",
    sections: [],
  },
  {
    slug: "how-we-work",
    title: "How We Work",
    intro:
      "We begin by listening. Every project starts with understanding people, context, culture and purpose before solutions are proposed. Our process is deliberate, transparent and iterative.",
    sections: [
      {
        heading: "A structured framework",
        body: [
          "Every commission follows a structured, collaborative and evidence-based methodology — nine stages from first conversation to post-occupancy review. It exists so that solutions are functional, beautiful, responsible and aligned with the people they serve.",
        ],
      },
    ],
  },
  {
    slug: "our-people",
    title: "Our People",
    intro:
      "Our greatest asset is not our portfolio — it is our people. Musabi is built to perform with excellence regardless of who is involved in a particular project.",
    sections: [
      {
        heading: "An institution over individuals",
        body: [
          "We invest in people before infrastructure: mentorship, continuous learning, knowledge sharing and leadership development. Profiles of the team are being prepared and will be published here.",
        ],
      },
    ],
    links: [{ label: "Work with us", href: "/careers" }],
  },
];

export const mosesPages: SubPage[] = [
  {
    slug: "profile",
    title: "Profile",
    intro:
      "Moses Musabi is the founder of Musabi Incorporated — architect, urban policy researcher and the institution's principal.",
    sections: [
      {
        heading: "Founder and principal",
        body: [
          "Moses founded Musabi Incorporated on the belief that thoughtful design improves lives, and that meaningful change is rarely the work of one discipline. He leads the institution's direction across architecture, urban policy and research.",
          "A fuller biography, professional profile and selected work are being prepared for publication.",
        ],
      },
    ],
    links: [
      { label: "Musabi Architecture Studio", href: "/entities/architecture-studio" },
      { label: "Musabi Urban Lab", href: "/entities/urban-lab" },
    ],
  },
  {
    slug: "architecture",
    title: "Architecture",
    intro:
      "Design leadership across the built environment — architecture, landscape, interiors and urban design.",
    sections: [
      {
        heading: "Practice",
        body: [
          "Moses leads Musabi Architecture Studio, where design begins with listening, is grounded in research, and is measured by what remains long after completion. Selected projects are documented in the project archive.",
        ],
      },
    ],
    links: [
      { label: "The studio", href: "/entities/architecture-studio" },
      { label: "Architecture projects", href: "/projects/architecture" },
    ],
  },
  {
    slug: "urban-policy",
    title: "Urban Policy",
    intro:
      "Research and advisory work on the policies that shape sustainable, inclusive African cities.",
    sections: [
      {
        heading: "Focus",
        body: [
          "Interests include sustainable urbanisation, climate resilience, affordable housing, mobility and land-use planning — bridging the gap between policy formulation and practical implementation through evidence-led analysis.",
        ],
      },
    ],
    links: [{ label: "Musabi Urban Lab", href: "/entities/urban-lab" }],
  },
  {
    slug: "research",
    title: "Research",
    intro:
      "Applied research into cities, housing, sustainability and the built environment.",
    sections: [
      {
        heading: "Approach",
        body: [
          "Research forms the foundation of informed design. Published studies and findings appear through the Musabi Journal.",
        ],
      },
    ],
    links: [{ label: "Research in the Journal", href: "/journal/research" }],
  },
  {
    slug: "writing",
    title: "Writing",
    intro:
      "Essays, working notes and commentary on design, cities and institutions.",
    sections: [
      {
        heading: "Selected writing",
        body: [
          "A reading list is being prepared. In the meantime, thinking is published through the Musabi Journal.",
        ],
      },
    ],
    links: [{ label: "The Journal", href: "/journal" }],
  },
  {
    slug: "projects",
    title: "Projects",
    intro:
      "Selected projects across architecture, urban design and policy.",
    sections: [
      {
        heading: "Selected work",
        body: [
          "Case studies are published as project documentation is completed.",
        ],
      },
    ],
    links: [{ label: "Project archive", href: "/projects" }],
  },
  {
    slug: "speaking",
    title: "Speaking",
    intro:
      "Talks, panels and teaching on architecture, urbanism and institution-building.",
    sections: [
      {
        heading: "Enquiries",
        body: [
          "Speaking enquiries are welcomed through the contact form — select Moses Musabi as the entity.",
        ],
      },
    ],
    links: [{ label: "Contact", href: "/contact" }],
  },
  {
    slug: "cv",
    title: "CV",
    intro:
      "Curriculum vitae — experience, registration, memberships and selected work.",
    sections: [
      {
        heading: "Download",
        body: [
          "A current CV will be published here as a downloadable document. For a full profile in the meantime, please make contact directly.",
        ],
      },
    ],
    links: [{ label: "Contact", href: "/contact" }],
  },
];

export const entities: Entity[] = [
  {
    slug: "architecture-studio",
    name: "Musabi Architecture Studio",
    short: "Architecture Studio",
    token: "arch-green",
    hex: "#2E9B52",
    role: "Architecture, landscape, interior and urban design for enduring places.",
    association: "Stewardship, growth, landscape, sustainable built environments",
    status: "operational",
    intro:
      "Musabi Architecture Studio is the built environment division of Musabi Incorporated. We design buildings, landscapes and interiors that integrate function, sustainability, technical rigour and human experience — from strategic brief through construction to post-occupancy review.",
    sections: [
      {
        heading: "The disciplines",
        body: [
          "The studio works across architecture, landscape architecture, interior architecture, conservation architecture, urban design and master planning — residential, commercial, institutional, hospitality, civic and mixed-use work.",
          "Every project begins with understanding the client's aspirations and the character of the site before translating them into context-responsive, technically robust design.",
        ],
      },
      {
        heading: "How we work",
        body: [
          "Discovery, research and strategy come before drawing. A structured nine-stage framework carries each commission from first conversation to post-occupancy review, so that outcomes are functional, beautiful, responsible and enduring.",
        ],
      },
      {
        heading: "What endures",
        body: [
          "Successful design is measured not only by what is built, but by the positive and lasting impact it has on those who experience it — spatial quality, materiality, light, occupation and landscape.",
        ],
      },
    ],
    pages: [
      {
        slug: "services",
        title: "Services",
        intro:
          "Comprehensive architectural and spatial design services across the full project lifecycle.",
        sections: [
          {
            heading: "Design",
            body: [
              "Architectural programming, concept design, schematic design, design development and building approvals.",
              "Landscape architecture, interior architecture, conservation architecture, urban design and master planning.",
            ],
          },
          {
            heading: "Advisory and delivery",
            body: [
              "Feasibility studies, construction documentation, tender documentation, contract and site administration.",
              "Project management, research, visualisation and design competitions.",
            ],
          },
        ],
      },
      {
        slug: "projects",
        title: "Projects",
        intro:
          "Selected work from the studio. Projects are documented as case studies — the problem, the approach, what changed — as their documentation is completed.",
        sections: [],
        links: [{ label: "Architecture projects", href: "/projects/architecture" }],
      },
      {
        slug: "research",
        title: "Research",
        intro:
          "Applied research strengthens every design decision. The studio undertakes research into cities, sustainability, housing, materials, building performance and emerging practice.",
        sections: [],
        links: [{ label: "Research in the Journal", href: "/journal/research" }],
      },
      {
        slug: "contact",
        title: "Contact",
        intro:
          "Discuss a commission with the studio. Tell us about the site, the brief and the outcome you are working towards.",
        sections: [],
      },
    ],
  },
  {
    slug: "creative",
    name: "Musabi Creative",
    short: "Creative",
    token: "creative-teal",
    hex: "#079A9A",
    role: "Brand, communication, graphic design, marketing and events.",
    association: "Creativity, communication, connection",
    status: "operational",
    intro:
      "Musabi Creative is the strategic communications and design division of Musabi Incorporated. We help organisations define their identity, communicate with clarity and build relationships that endure — combining creativity with strategy across brand, print and digital.",
    sections: [
      {
        heading: "Strategy before design",
        body: [
          "Strong brands begin with clear purpose. We define vision, positioning, values, personality and messaging before visual design begins, so that every touchpoint communicates consistently and meaningfully.",
        ],
      },
      {
        heading: "Design that carries meaning",
        body: [
          "Identity programmes, publications, presentations and campaigns are built as systems rather than one-off artefacts — coherent, memorable and aligned with long-term organisational goals.",
        ],
      },
    ],
    pages: [
      {
        slug: "services",
        title: "Services",
        intro:
          "Strategic communications and design services, from brand strategy to event delivery.",
        sections: [
          {
            heading: "Strategy",
            body: [
              "Brand strategy, communication strategy and marketing — positioning, messaging, audience and long-term direction.",
            ],
          },
          {
            heading: "Design",
            body: [
              "Visual identity, graphic design, presentation design and publication design — identities, reports, corporate communications and editorial work.",
            ],
          },
          {
            heading: "Engagement",
            body: [
              "Digital campaigns, social media management, PR support and event planning — measured, intentional and professional.",
            ],
          },
        ],
      },
      {
        slug: "work",
        title: "Work",
        intro:
          "Selected brand, communication and design work. Case studies are published as projects complete their documentation.",
        sections: [],
        links: [{ label: "Creative projects", href: "/projects/creative" }],
      },
      {
        slug: "contact",
        title: "Contact",
        intro:
          "Discuss a brand, communication or design commission. Tell us where your organisation is going and what stands in the way.",
        sections: [],
      },
    ],
  },
  {
    slug: "urban-lab",
    name: "Musabi Urban Lab",
    short: "Urban Lab",
    token: "urban-yellow",
    hex: "#F4C20D",
    role: "Urban research, policy, knowledge and innovation.",
    association: "Knowledge, research, insight, possibility",
    status: "operational",
    intro:
      "Musabi Urban Lab is the research and innovation platform of Musabi Incorporated, dedicated to the future of African urbanism — sustainable cities, urban policy, mobility, climate resilience, housing and public space.",
    sections: [
      {
        heading: "Why a lab",
        body: [
          "The challenges of our cities are interconnected, and so too must be the solutions. The Lab exists to create knowledge that improves practice — rigorous, institutional and useful, never research for its own sake.",
        ],
      },
      {
        heading: "How we publish",
        body: [
          "The Lab publishes through the Musabi Journal: formal research in Research, working thinking in Ideas, and applied project learning in Projects and Cities.",
        ],
      },
    ],
    pages: [
      {
        slug: "research",
        title: "Research",
        intro:
          "A research agenda across sustainable cities, urban policy, mobility, climate resilience, housing, public space and the future of African urbanism.",
        sections: [
          {
            heading: "Method",
            body: [
              "Evidence before position. The Lab combines site work, data, policy review and collaboration with governments, universities and development partners.",
            ],
          },
        ],
        links: [{ label: "Research in the Journal", href: "/journal/research" }],
      },
      {
        slug: "urban-projects",
        title: "Urban Projects",
        intro:
          "Applied projects that put research to work in real places — frameworks, studies and collaborations with cities and institutions.",
        sections: [],
        links: [{ label: "Urban projects", href: "/projects/urban" }],
      },
      {
        slug: "publications",
        title: "Publications",
        intro:
          "Formal outputs — reports, papers and policy briefs — published through the Musabi Journal.",
        sections: [],
        links: [{ label: "Publications in the Journal", href: "/journal/research" }],
      },
      {
        slug: "insights",
        title: "Insights",
        intro:
          "Shorter thinking — observations, working notes and responses to what the Lab sees in cities.",
        sections: [],
        links: [{ label: "Ideas in the Journal", href: "/journal/ideas" }],
      },
    ],
  },
  {
    slug: "development",
    name: "Musabi Development",
    short: "Development",
    token: "development-red",
    hex: "#D83B45",
    role: "Property and development activity, delivered to demonstrate Musabi's design philosophy.",
    association: "Action, transformation, development, commitment",
    status: "future",
    statusNote:
      "Musabi Development is being established as strategic opportunities arise.",
    intro:
      "Musabi Development will initiate, finance and deliver property projects that demonstrate the values and design philosophy of Musabi Incorporated — residential, commercial, mixed-use, hospitality, institutional and community development.",
    sections: [
      {
        heading: "Why development",
        body: [
          "Development turns design conviction into built proof. Projects will be selected where long-term value, sustainability and community benefit can be demonstrated — not merely promised.",
        ],
      },
    ],
    pages: [
      {
        slug: "projects",
        title: "Projects",
        intro:
          "The development pipeline will be published here as projects are initiated.",
        sections: [],
        links: [{ label: "Development projects", href: "/projects/development" }],
      },
      {
        slug: "opportunities",
        title: "Opportunities",
        intro:
          "For landowners, investors and partners who share the belief that development can be economically viable, environmentally responsible and socially meaningful at once.",
        sections: [
          {
            heading: "What we look for",
            body: [
              "Sites and ventures where thoughtful design creates measurable long-term value — and partners who measure success the same way.",
            ],
          },
        ],
        links: [{ label: "Start a conversation", href: "/contact" }],
      },
      {
        slug: "partnerships",
        title: "Partnerships",
        intro:
          "Musabi Development works with developers, landowners, financiers and public institutions. Partnerships are built on trust, shared values and transparent delivery.",
        sections: [],
        links: [{ label: "Group partnerships", href: "/contact" }],
      },
    ],
  },
  {
    slug: "foundation",
    name: "Musabi Foundation",
    short: "Foundation",
    token: "foundation-blue",
    hex: "#1769AA",
    role: "Community, education, mentorship and social-impact programmes.",
    association: "Trust, stability, responsibility, community",
    status: "future",
    statusNote:
      "Musabi Foundation is being established ahead of its first programme cycle.",
    intro:
      "Musabi Foundation is the social-impact arm of Musabi Incorporated. It exists to ensure the benefits of design extend beyond commercial projects — through education, mentorship, scholarships, design advocacy and community-led development.",
    sections: [
      {
        heading: "Why a foundation",
        body: [
          "Design is a responsibility, and communities are never props. The Foundation will pursue the kind of work whose return is measured in opportunity, capability and dignity.",
        ],
      },
    ],
    pages: [
      {
        slug: "programmes",
        title: "Programmes",
        intro:
          "Education, mentorship, scholarships and design advocacy — programmes that widen access to the professions that shape the built environment.",
        sections: [],
        links: [{ label: "Foundation work", href: "/projects/foundation" }],
      },
      {
        slug: "community",
        title: "Community",
        intro:
          "Community-led development, designed with people rather than for them. The Foundation's work begins with listening.",
        sections: [],
      },
      {
        slug: "impact",
        title: "Impact",
        intro:
          "Stewardship is a core value of Musabi Incorporated. The Foundation will report on its impact openly — what was done, what it cost, what changed.",
        sections: [],
      },
      {
        slug: "get-involved",
        title: "Get Involved",
        intro:
          "Partners, funders, mentors and volunteers who want to contribute are welcome to make contact.",
        sections: [],
        links: [{ label: "Contact the Foundation", href: "/contact" }],
      },
    ],
  },
  {
    slug: "ventures",
    name: "Musabi Ventures",
    short: "Ventures",
    token: "ventures-orange",
    hex: "#F47A22",
    role: "Investment, enterprise building and strategic partnerships.",
    association: "Opportunity, experimentation, enterprise, movement",
    status: "future",
    statusNote:
      "Musabi Ventures is being established as its investment thesis is finalised.",
    intro:
      "Musabi Ventures is the investment and innovation platform of Musabi Incorporated — identifying, incubating and supporting ideas, enterprises and partnerships aligned with its mission across the creative industries, technology and sustainable development.",
    sections: [
      {
        heading: "Why ventures",
        body: [
          "Ideas need systems through which they can become real. Ventures will back enterprises where design thinking, long-term stewardship and commercial discipline reinforce each other.",
        ],
      },
    ],
    pages: [
      {
        slug: "portfolio",
        title: "Portfolio",
        intro:
          "The venture portfolio will be published here as investments and incubations are made.",
        sections: [],
        links: [{ label: "Ventures work", href: "/projects/ventures" }],
      },
      {
        slug: "opportunities",
        title: "Opportunities",
        intro:
          "For founders and builders working in the creative industries, technology and sustainable development who want an investor that thinks in decades.",
        sections: [
          {
            heading: "What we back",
            body: [
              "Ideas that are useful, responsible and enduring — and teams that can explain their role in one sentence.",
            ],
          },
        ],
        links: [{ label: "Start a conversation", href: "/contact" }],
      },
      {
        slug: "partnerships",
        title: "Partnerships",
        intro:
          "Co-investment and strategic partnerships with institutions and investors who share a long-term view of African enterprise.",
        sections: [],
        links: [{ label: "Group partnerships", href: "/contact" }],
      },
    ],
  },
];

export function getEntity(slug: string): Entity | undefined {
  return entities.find((entity) => entity.slug === slug);
}
