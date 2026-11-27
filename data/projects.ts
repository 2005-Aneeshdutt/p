import type { Project } from '@/types';

export type { Project };

export const projects: Project[] = [
  {
    title: 'ForgeTrace',
    tagline: 'Offline attack-path investigation engine',
    description:
      'Streams security logs in any format into Parquet, runs YAML detection rules in DuckDB, maps each hit to MITRE ATT&CK, links alerts into incidents and rebuilds the attack path. Live mode keeps a Neo4j knowledge graph, and every finding is explained with SHA-256-verified raw log lines.',
    logo: '/logos/forgetrace.svg',
    link: 'https://github.com/2005-Aneeshdutt/ForgeTrace',
    slug: 'forgetrace',
    stack: ['Python', 'DuckDB', 'Parquet', 'Neo4j', 'FastAPI', 'scikit-learn'],
    metrics: [
      { value: '50 GB', label: 'in 19 min' },
      { value: '62M', label: 'events, 0 parse errors' },
      { value: '127 ms', label: 'to open an attack path' },
    ],
    badge: '4th / 5,700+ · CyberForge',
  },
  {
    title: 'Switchyard',
    tagline: 'LLM gateway that survives overload',
    description:
      'OpenAI-compatible LLM gateway across 6 providers with failover, circuit breaking, rate limits and caching.',
    logo: '/logos/switchyard.svg',
    link: 'https://github.com/2005-Aneeshdutt/switchyard',
    slug: 'switchyard',
    stack: ['Python', 'FastAPI', 'Redis', 'nginx', 'k6'],
    metrics: [
      { value: '190 RPS', label: 'up from 80' },
      { value: '0.6 s', label: 'p99, down from 19 s' },
      { value: '2.5×', label: 'overload absorbed' },
    ],
  },
  {
    title: 'Kairos',
    tagline: 'Causal decisioning engine',
    description:
      'Uplift models over 64,000 customers, a contextual-bandit channel selector and a budget optimizer.',
    logo: '/logos/kairos.svg',
    link: 'https://github.com/2005-Aneeshdutt/KAIROS',
    slug: 'kairos',
    stack: ['Python', 'EconML', 'scikit-learn', 'FastAPI'],
    metrics: [
      { value: '64K', label: 'customers modelled' },
    ],
    badge: '2nd / 800+ · Epsilon',
  },
  {
    title: 'Veritas',
    tagline: 'Revenue-recovery agent with a policy kernel',
    description:
      'An LLM proposes, a deterministic policy kernel checks it against a signed mandate, and a hash-chained ledger records every decision. Built for the Razorpay AI Buildathon 2026.',
    logo: '/logos/veritas.svg',
    link: 'https://github.com/2005-Aneeshdutt/veritas',
    slug: 'veritas',
    stack: ['LLM agents', 'Policy kernel', 'Audit ledger'],
    metrics: [],
  },
  {
    title: 'Docksmith',
    tagline: 'A Docker-like container engine in C',
    description:
      'Flex/Bison build-file parser, layered images, SHA-256 build cache, and isolation with Linux namespaces and chroot.',
    logo: '/logos/docksmith.svg',
    link: 'https://github.com/2005-Aneeshdutt/Docksmith',
    slug: 'docksmith',
    stack: ['C', 'Flex/Bison', 'Linux namespaces'],
    metrics: [],
  },
  {
    title: 'CoT Reasoning Depth',
    tagline: 'Code for my INLG 2026 paper',
    description:
      '68,872 evaluations showing reported chain-of-thought collapse is largely a generation-budget artifact.',
    logo: '/logos/cot.svg',
    link: 'https://github.com/2005-Aneeshdutt/cot-reasoning-depth',
    slug: 'cot-reasoning-depth',
    stack: ['Python', 'PyTorch', 'Transformers'],
    metrics: [
      { value: '68,872', label: 'evaluations' },
      { value: '5', label: 'model configs' },
    ],
  },
];
