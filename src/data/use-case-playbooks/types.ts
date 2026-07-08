export type PlaybookStackLayer = {
  name: string;
  tools: string;
  role: string;
  playbookFit: string;
  failureMode: string;
  operatorTest: string;
};

export type UseCasePlaybookContent = {
  slug: string;
  heroSubtitle: string;
  tldrPicks: { label: string; tool: string; reason: string }[];
  intro: string[];
  scenarios: { name: string; description: string }[];
  checklist: string[];
  stackMapTitle: string;
  stackLayers: PlaybookStackLayer[];
  timingGovernance: string[];
  measurement: string[];
  relatedPlaybooks: string[];
  faqs: { question: string; answer: string }[];
  toolReviews: { slug: string; paragraphs: string[] }[];
};
