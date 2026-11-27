export interface Paper {
  title: string;
  authorship: string;
  year: string;
  venues: { short: string; full: string }[];
  status: string;
  summary: string;
  findings: { value: string; label: string }[];
  links: { label: string; href: string }[];
}

export const RESEARCHGATE_PROFILE = 'https://www.researchgate.net/profile/Naneesh-Dutt/research';

export const papers: Paper[] = [
  {
    title:
      'Chain-of-Thought Depth Modulates Performance by Task and Model: Evidence from Ablation Studies Across Five Model Families',
    authorship: 'Sole author',
    year: '2026',
    venues: [
      { short: 'COLM 2026', full: 'Efficient Reasoning Workshop, Conference on Language Modeling' },
      { short: 'INLG 2026', full: 'International Natural Language Generation Conference' },
    ],
    status: 'Accepted & presented',
    summary:
      'Does asking a model to think longer actually help? I ran ablations across three reasoning-depth conditions and five model configurations from four families (Llama-3.3-70B, Gemma-2-27B, Qwen3-32B, DeepSeek-R1) and found that the widely reported chain-of-thought collapse is largely a generation-budget artifact.',
    findings: [
      { value: '68,872', label: 'evaluations' },
      { value: '29% → 100%', label: 'response rate with a larger budget' },
      { value: '18.6% → 66.7%', label: 'accuracy with a larger budget' },
    ],
    links: [
      {
        label: 'Read the paper',
        href: 'https://www.researchgate.net/publication/407296441_Chain-of-Thought_Depth_Modulates_Performance_by_Task_and_Model_Evidence_from_Ablation_Studies_Across_Five_Model_Families',
      },
      { label: 'Code', href: 'https://github.com/2005-Aneeshdutt/cot-reasoning-depth' },
      { label: 'ResearchGate profile', href: RESEARCHGATE_PROFILE },
    ],
  },
];
