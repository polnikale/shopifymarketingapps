export type StackLayer = {
  name: string;
  tools: string;
  role: string;
  verticalFit: string;
  failureMode: string;
  operatorTest: string;
};

export type SegmentPageContent = {
  slug: string;
  heroSubtitle: string;
  tldrPicks: { label: string; tool: string; reason: string }[];
  intro: string[];
  merchantStories: { name: string; revenue: string; story: string }[];
  stackScenarios: { name: string; description: string }[];
  stackArchitectureTitle: string;
  stackLayers: StackLayer[];
  roadmap: { week: string; tasks: string }[];
  economics: string[];
  crossLinks: string[];
  faqs: { question: string; answer: string }[];
  toolReviews: { slug: string; paragraphs: string[] }[];
};
