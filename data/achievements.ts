export interface Achievement {
  rank: string;
  title: string;
  detail: string;
  href?: string;
}

export const achievements: Achievement[] = [
  {
    rank: 'Published',
    title: 'Research paper accepted & presented at COLM 2026 and INLG 2026',
    detail:
      'Sole-author paper on chain-of-thought depth, presented at the COLM Efficient Reasoning Workshop and at INLG.',
    href: '/research',
  },
  {
    rank: '2nd',
    title: 'Epsilon All India Hackathon',
    detail: 'Out of 800+ teams, with Kairos, a causal decisioning engine.',
    href: 'https://github.com/2005-Aneeshdutt/KAIROS',
  },
  {
    rank: '4th',
    title: 'CyberForge Hackathon by Mitigata',
    detail: 'Out of 5,700+ registered students, with ForgeTrace, an offline attack-path investigation engine.',
    href: 'https://github.com/2005-Aneeshdutt/ForgeTrace',
  },
  {
    rank: 'Top 20',
    title: 'Google DeepMind Bangalore Hackathon',
    detail: 'Out of 4,000+ registrants, with PRISM, a communication policy engine built on Gemini.',
  },
  {
    rank: '1 of 250',
    title: 'AI4I Winter School',
    detail: "Selected worldwide for the winter school run by Italy's National Institute for Artificial Intelligence.",
  },
];
