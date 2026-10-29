export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Switchyard',
    description:
      'OpenAI-compatible LLM gateway across 6 providers with failover, circuit breaking, rate limits and caching. Scaled 80 → 190 RPS; p99 cut from 19 s to 0.6 s under 2.5× overload.',
    logo: '/logos/switchyard.svg',
    link: 'https://github.com/2005-Aneeshdutt/switchyard',
    slug: 'switchyard',
  },
  {
    title: 'Docksmith',
    description:
      'A Docker-like container engine written in C: Flex/Bison build-file parser, layered images, SHA-256 build cache, and isolation with Linux namespaces and chroot.',
    logo: '/logos/docksmith.svg',
    link: 'https://github.com/2005-Aneeshdutt/Docksmith',
    slug: 'docksmith',
  },
  {
    title: 'Kairos',
    description:
      'Causal decisioning engine: uplift models over 64,000 customers, a contextual-bandit channel selector and a budget optimizer. 2nd of 800+ teams at the Epsilon hackathon.',
    logo: '/logos/kairos.svg',
    link: 'https://github.com/2005-Aneeshdutt/KAIROS',
    slug: 'kairos',
  },
  {
    title: 'Veritas',
    description:
      'Revenue-recovery agent for failed payments: an LLM proposes, a deterministic policy kernel checks it against a signed mandate, and a hash-chained ledger records every decision. Razorpay AI Buildathon 2026.',
    logo: '/logos/veritas.svg',
    link: 'https://github.com/2005-Aneeshdutt/veritas',
    slug: 'veritas',
  },
  {
    title: 'CoT Reasoning Depth',
    description:
      'Code for my INLG 2026 paper: 68,872 evaluations showing reported chain-of-thought collapse is largely a generation-budget artifact.',
    logo: '/logos/cot.svg',
    link: 'https://github.com/2005-Aneeshdutt/cot-reasoning-depth',
    slug: 'cot-reasoning-depth',
  },
];
