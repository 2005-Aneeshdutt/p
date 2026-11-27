// Rule-based assistant: every answer is written from real portfolio data,
// so it can't invent facts. Matching is keyword-based and runs in the browser.

export interface ChatLink {
  label: string;
  href: string;
}

export interface BotReply {
  text: string;
  links?: ChatLink[];
  navigate?: string;
}

export const SUGGESTIONS = [
  'What has he built?',
  'Tell me about his research',
  'Achievements',
  'Skills',
  'How do I contact him?',
  'Take me to projects',
];

export const GREETING: BotReply = {
  text: "Hi! 👋 I'm Aneesh's bot. What do you want to know about him? Ask me anything, or tell me which page to open.",
};

const PAGES: { href: string; name: string; words: RegExp }[] = [
  { href: '/projects', name: 'Projects', words: /\bprojects?\b|\bwork\b/ },
  { href: '/research', name: 'Research', words: /\bresearch\b|\bpapers?\b|\bpublications?\b/ },
  { href: '/about', name: 'About', words: /\babout\b|\bachievements?\b|\bskills?\b|\beducation\b/ },
  { href: '/contact', name: 'Contact', words: /\bcontact\b/ },
  { href: '/github', name: 'GitHub', words: /\bgithub\b/ },
  { href: '/settings', name: 'Settings', words: /\bsettings?\b|\bthemes?\b/ },
  { href: '/', name: 'Home', words: /\bhome\b/ },
];

const NAV_INTENT = /\b(go|take|open|show|navigate|bring|visit|jump)\b/;

const gh = (repo: string) => `https://github.com/2005-Aneeshdutt/${repo}`;

const INTENTS: { match: RegExp; reply: BotReply }[] = [
  {
    match: /forge ?trace|cyber ?forge|mitigata|security log|attack path|mitre|att&ck/,
    reply: {
      text: 'ForgeTrace is an offline attack-path investigation engine. It streams security logs into Parquet, runs 42 YAML detection rules in DuckDB, maps each hit to MITRE ATT&CK, links alerts into incidents and rebuilds the attack path. It processed a 50 GB dataset (62M events) in 19 minutes with 5.9 GB peak memory, and placed 4th out of 5,700+ students at the CyberForge hackathon by Mitigata.',
      links: [{ label: 'ForgeTrace on GitHub', href: gh('ForgeTrace') }],
    },
  },
  {
    match: /switchyard|gateway|rps|latency|failover|circuit/,
    reply: {
      text: 'Switchyard is an OpenAI-compatible LLM gateway across 6 providers with failover, circuit breaking, rate limits and caching. He scaled it from 80 to 190 requests per second and cut p99 latency from 19 s to 0.6 s under 2.5× overload.',
      links: [{ label: 'Switchyard on GitHub', href: gh('switchyard') }],
    },
  },
  {
    match: /kairos|causal|uplift|bandit|epsilon/,
    reply: {
      text: 'Kairos is a causal decisioning engine: uplift models over 64,000 customers, a contextual-bandit channel selector and a budget optimizer. It won 2nd place out of 800+ teams at the Epsilon All India Hackathon.',
      links: [{ label: 'Kairos on GitHub', href: gh('KAIROS') }],
    },
  },
  {
    match: /veritas|razorpay|payment|mandate|ledger/,
    reply: {
      text: 'Veritas is a revenue-recovery agent for failed payments. An LLM proposes an action, a deterministic policy kernel checks it against a signed mandate, and a hash-chained ledger records every decision. Built for the Razorpay AI Buildathon 2026.',
      links: [{ label: 'Veritas on GitHub', href: gh('veritas') }],
    },
  },
  {
    match: /docksmith|container|docker|namespace|chroot/,
    reply: {
      text: 'Docksmith is a Docker-like container engine written in C, with a Flex/Bison build-file parser, layered images, a SHA-256 build cache, and isolation using Linux namespaces and chroot.',
      links: [{ label: 'Docksmith on GitHub', href: gh('Docksmith') }],
    },
  },
  {
    match: /research|paper|publication|publish|colm|inlg|chain.of.thought|\bcot\b|reasoning/,
    reply: {
      text: 'He is the sole author of "Chain-of-Thought Depth Modulates Performance by Task and Model", accepted and presented at COLM 2026 (Efficient Reasoning Workshop) and INLG 2026. Across 68,872 evaluations on five model configurations, he showed reported chain-of-thought collapse is largely a generation-budget artifact: a larger budget raised accuracy from 18.6% to 66.7%.',
      links: [{ label: 'Open Research', href: '/research' }],
    },
  },
  {
    match: /achievement|award|won|win|hackathon|prize|rank|place|recogni/,
    reply: {
      text: 'Highlights: paper accepted & presented at COLM and INLG 2026 · 2nd of 800+ teams at the Epsilon hackathon (Kairos) · 4th of 5,700+ at CyberForge by Mitigata (ForgeTrace) · Top 20 of 4,000+ at the Google DeepMind Bangalore Hackathon · one of 250 students selected worldwide for the AI4I Winter School.',
      links: [{ label: 'See achievements', href: '/about#achievements' }],
    },
  },
  {
    match: /skill|stack|tech|language|know|langchain|langgraph|mcp|fine.?tun|python|fastapi/,
    reply: {
      text: 'Languages: Python, C, C++, SQL, TypeScript. Backend & infra: FastAPI, PostgreSQL, Redis, nginx, Docker, Linux, k6, pytest, CI/CD. AI/ML: LLMs, AI agents, RAG, LangChain, LangGraph, MCP, fine-tuning, PyTorch, Transformers, scikit-learn, EconML. Frontend: React, Next.js.',
      links: [{ label: 'Open About', href: '/about' }],
    },
  },
  {
    match: /built|projects?|work|portfolio|make|made/,
    reply: {
      text: 'His main systems: ForgeTrace (security attack-path engine, 4th at CyberForge), Switchyard (LLM gateway, 190 RPS), Kairos (causal decisioning, 2nd at Epsilon), Veritas (payment-recovery agent with a policy kernel) and Docksmith (container engine in C). Ask me about any of them!',
      links: [{ label: 'Open Projects', href: '/projects' }],
    },
  },
  {
    match: /educat|college|universit|\bpes\b|degree|study|student|graduat/,
    reply: {
      text: 'He is doing a B.Tech in Computer Science and Engineering at PES University, Bangalore (Aug 2023 – May 2027).',
      links: [{ label: 'Open About', href: '/about' }],
    },
  },
  {
    match: /contact|email|mail|phone|call|number|reach|hire|linkedin|connect/,
    reply: {
      text: 'Email: aneeshdutt67@gmail.com · Phone: +91 70222 10568 · LinkedIn: aneesh-dutt · GitHub: 2005-Aneeshdutt.',
      links: [
        { label: 'Open Contact', href: '/contact' },
        { label: 'Send an email', href: 'mailto:aneeshdutt67@gmail.com' },
      ],
    },
  },
  {
    match: /who|about him|about you|aneesh|tell me about|introduc/,
    reply: {
      text: "Aneesh Dutt is a final-year CS student at PES University in Bangalore who builds backend and AI systems, then tries to break them under load. He's built an LLM gateway, a security investigation engine and a container runtime, and published research on LLM reasoning.",
      links: [{ label: 'Open About', href: '/about' }],
    },
  },
  {
    match: /^(hi|hey|hello|yo|hola|sup|namaste)\b/,
    reply: GREETING,
  },
  {
    match: /thank|thanks|cool|nice|great|awesome/,
    reply: { text: "Happy to help! Anything else you'd like to know?" },
  },
];

const FALLBACK: BotReply = {
  text: "I'm not sure about that one. I can tell you about his projects, research, achievements, skills or how to contact him, or open any page for you.",
};

export const getReply = (input: string): BotReply => {
  const text = input.toLowerCase().trim();

  if (NAV_INTENT.test(text)) {
    const page = PAGES.find((p) => p.words.test(text));
    if (page) return { text: `Opening ${page.name}…`, navigate: page.href };
  }

  return INTENTS.find((i) => i.match.test(text))?.reply ?? FALLBACK;
};
