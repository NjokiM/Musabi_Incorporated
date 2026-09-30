export type ProjectStatus = "concept" | "in-progress" | "completed" | "on-hold";

export type ProjectNarrative = {
  overview: string;
  context: string;
  challenge: string;
  approach: string;
  concept: string;
  design: string;
  outcome: string;
  impact: string;
};

export type ProjectMedia = {
  heroImage?: string;
  gallery?: string[];
  drawings?: string[];
  plans?: string[];
  sections?: string[];
  diagrams?: string[];
  renderings?: string[];
  videos?: string[];
  drone?: string[];
  beforeAfter?: string[];
  pdfs?: string[];
};

export type Project = {
  slug: string;
  name: string;
  client?: string;
  location?: string;
  country?: string;
  year?: number;
  status: ProjectStatus;
  sector?: string;
  entity?: string;
  service?: string;
  projectType?: string;
  team?: string[];
  collaborators?: string[];
  narrative?: Partial<ProjectNarrative>;
  technical?: {
    siteArea?: string;
    floorArea?: string;
    programme?: string;
    budget?: string;
    role?: string;
    stage?: string;
    completionDate?: string;
  };
  media?: ProjectMedia;
  classification?: {
    discipline?: string;
    sector?: string;
    country?: string;
    status?: ProjectStatus;
  };
  seo?: {
    title?: string;
    description?: string;
    socialImage?: string;
  };
};

export type Article = {
  slug: string;
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  category?: string;
  entity?: string;
  readingTime?: string;
  heroImage?: string;
  body?: string;
  references?: string[];
  relatedProjects?: string[];
  relatedArticles?: string[];
  pdf?: string;
  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
    socialImage?: string;
  };
};
