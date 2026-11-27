import Link from 'next/link';
import Image from 'next/image';
import {
  VscArrowRight,
  VscGithub,
  VscMail,
  VscBook,
} from 'react-icons/vsc';

import RobotPanel from '@/components/RobotPanel';
import { projects } from '@/data/projects';
import { papers } from '@/data/research';
import { achievements } from '@/data/achievements';

import styles from '@/styles/HomePage.module.css';

const STATS = [
  { value: '190 RPS', label: 'LLM gateway throughput' },
  { value: '50 GB', label: 'of security logs in 19 min' },
  { value: '68,872', label: 'evaluations in my paper' },
  { value: 'COLM · INLG', label: 'accepted & presented' },
];

const FEATURED = ['forgetrace', 'switchyard', 'kairos'];

export default function HomePage() {
  const featured = FEATURED.map((slug) => projects.find((p) => p.slug === slug)!);
  const paper = papers[0];

  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden />

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Backend &amp; AI systems · PES University &rsquo;27
          </span>

          <h1 className={styles.name}>Aneesh Dutt</h1>
          <p className={styles.tagline}>
            I build systems, <span className={styles.accent}>then try to break them.</span>
          </p>

          <p className={styles.description}>
            Final-year CS student building end-to-end systems: LLM gateways, multi-agent
            pipelines, security investigation engines and container runtimes. I measure them
            under load and report what actually happened.
          </p>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              View projects
              <VscArrowRight size={16} />
            </Link>
            <Link href="/research" className={styles.secondaryAction}>
              <VscBook size={16} />
              Research
            </Link>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/2005-Aneeshdutt"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={15} />
              GitHub
            </a>
            <Link href="/contact" className={styles.link}>
              <VscMail size={15} />
              Contact
            </Link>
            <Link href="/about" className={styles.link}>
              About me
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <RobotPanel />
        </div>
      </section>

      <section className={styles.stats} aria-label="Highlights">
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Shipped systems</h2>
          <Link href="/projects" className={styles.sectionLink}>
            All projects <VscArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.featuredGrid}>
          {featured.map((p) => (
            <a
              key={p.slug}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featureCard}
            >
              <div className={styles.featureTop}>
                <Image src={p.logo} alt="" width={28} height={28} className={styles.featureLogo} />
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
              </div>
              <h3 className={styles.featureTitle}>{p.title}</h3>
              <p className={styles.featureTagline}>{p.tagline}</p>
              <div className={styles.featureMetric}>
                <span className={styles.featureMetricValue}>{p.metrics[0].value}</span>
                <span className={styles.featureMetricLabel}>{p.metrics[0].label}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Research</h2>
          <Link href="/research" className={styles.sectionLink}>
            Research <VscArrowRight size={14} />
          </Link>
        </div>

        <Link href="/research" className={styles.researchCard}>
          <div className={styles.venues}>
            {paper.venues.map((v) => (
              <span key={v.short} className={styles.venue}>
                {v.short}
              </span>
            ))}
            <span className={styles.venueStatus}>{paper.status}</span>
          </div>
          <h3 className={styles.researchTitle}>{paper.title}</h3>
          <div className={styles.researchFindings}>
            {paper.findings.map((f) => (
              <div key={f.label}>
                <span className={styles.findingValue}>{f.value}</span>
                <span className={styles.findingLabel}>{f.label}</span>
              </div>
            ))}
          </div>
        </Link>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Recognition</h2>
          <Link href="/about#achievements" className={styles.sectionLink}>
            Details <VscArrowRight size={14} />
          </Link>
        </div>
        <ul className={styles.recognition}>
          {achievements.map((a) => (
            <li key={a.title} className={styles.recognitionItem}>
              <span className={styles.rank}>{a.rank}</span>
              <span className={styles.recognitionTitle}>{a.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
