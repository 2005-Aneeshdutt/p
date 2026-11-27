import type { Metadata } from 'next';
import { VscBook, VscLinkExternal, VscGithub, VscPass } from 'react-icons/vsc';

import { papers, RESEARCHGATE_PROFILE } from '@/data/research';

import styles from '@/styles/ResearchPage.module.css';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research by Aneesh Dutt, accepted and presented at COLM 2026 (Efficient Reasoning Workshop) and INLG 2026.',
};

const linkIcon = (label: string) =>
  label === 'Code' ? <VscGithub size={15} /> : <VscLinkExternal size={14} />;

export default function ResearchPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.iconWrap}>
          <VscBook size={22} />
        </div>
        <h1 className={styles.title}>Research</h1>
        <p className={styles.subtitle}>
          I study how large language models reason, and whether the effects people report survive
          careful ablation.
        </p>
        <a
          href={RESEARCHGATE_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.profileLink}
        >
          ResearchGate profile <VscLinkExternal size={13} />
        </a>
      </header>

      {papers.map((paper) => (
        <article key={paper.title} className={styles.paper}>
          <div className={styles.paperMeta}>
            <span className={styles.status}>
              <VscPass size={14} />
              {paper.status}
            </span>
            <span className={styles.metaDivider} />
            <span>{paper.authorship}</span>
            <span className={styles.metaDivider} />
            <span>{paper.year}</span>
          </div>

          <h2 className={styles.paperTitle}>{paper.title}</h2>

          <div className={styles.venues}>
            {paper.venues.map((v) => (
              <div key={v.short} className={styles.venue}>
                <span className={styles.venueShort}>{v.short}</span>
                <span className={styles.venueFull}>{v.full}</span>
              </div>
            ))}
          </div>

          <p className={styles.summary}>{paper.summary}</p>

          <div className={styles.findings}>
            {paper.findings.map((f) => (
              <div key={f.label} className={styles.finding}>
                <span className={styles.findingValue}>{f.value}</span>
                <span className={styles.findingLabel}>{f.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.links}>
            {paper.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={i === 0 ? styles.primaryLink : styles.secondaryLink}
              >
                {l.label}
                {linkIcon(l.label)}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
