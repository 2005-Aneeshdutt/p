'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Aneesh Dutt</h1>
              <p className={styles.role}>CS Undergrad · Backend &amp; AI Systems</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Bangalore, India
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/2005-Aneeshdutt" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I build systems, then try to break them. I&apos;ve killed replicas under load,
                shed traffic at 2.5× capacity, and reported a negative result when my routing
                classifier failed to beat a simple heuristic.
              </p>

              <p className={styles.paragraph}>
                I&apos;m a final-year Computer Science student at PES University, working across
                backend infrastructure and applied AI: LLM gateways, container engines, voice
                agents and causal inference.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Aug 2023 – May 2027</span>
                </div>
                <h3 className={styles.expRole}>B.Tech in Computer Science and Engineering</h3>
                <p className={styles.expCompany}>PES University, Bangalore</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>C</span>
                    <span className={styles.skillTag}>C++</span>
                    <span className={styles.skillTag}>SQL</span>
                    <span className={styles.skillTag}>TypeScript</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend &amp; Infra</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>FastAPI</span>
                    <span className={styles.skillTag}>PostgreSQL</span>
                    <span className={styles.skillTag}>Redis</span>
                    <span className={styles.skillTag}>nginx</span>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>Linux</span>
                    <span className={styles.skillTag}>k6</span>
                    <span className={styles.skillTag}>pytest</span>
                    <span className={styles.skillTag}>CI/CD</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>AI / ML</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>LLMs</span>
                    <span className={styles.skillTag}>AI Agents</span>
                    <span className={styles.skillTag}>RAG</span>
                    <span className={styles.skillTag}>LangGraph</span>
                    <span className={styles.skillTag}>PyTorch</span>
                    <span className={styles.skillTag}>Transformers</span>
                    <span className={styles.skillTag}>scikit-learn</span>
                    <span className={styles.skillTag}>EconML</span>
                  </div>
                </div>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Publication</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>2026</span>
                </div>
                <h3 className={styles.expRole}>Chain-of-Thought Depth Modulates Performance by Task and Model: Evidence from Ablation Studies Across Five Model Families</h3>
                <p className={styles.expCompany}>
                  Sole author · Accepted at INLG 2026 and the Efficient Reasoning Workshop at COLM 2026
                </p>
                <ul className={styles.expList}>
                  <li>
                    Ran 68,872 evaluations across three reasoning-depth conditions and five model
                    configurations from four families (Llama-3.3-70B, Gemma-2-27B, Qwen3-32B, DeepSeek-R1)
                  </li>
                  <li>
                    Showed the reported CoT collapse is largely a generation-budget artifact: a larger
                    budget raised response rate from 29% to 100% and accuracy from 18.6% to 66.7%
                  </li>
                </ul>
              </div>

              <div className={styles.writingLinks}>
                <a
                  href="https://www.researchgate.net/publication/407296441_Chain-of-Thought_Depth_Modulates_Performance_by_Task_and_Model_Evidence_from_Ablation_Studies_Across_Five_Model_Families"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>Read the paper</span>
                  <VscLinkExternal size={14} />
                </a>

                <a
                  href="https://github.com/2005-Aneeshdutt/cot-reasoning-depth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>Code</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Achievements</h2>
            </div>

            <div className={styles.sectionBody}>
              <ul className={styles.expList}>
                <li>
                  <strong>2nd place</strong> of 800+ teams at the Epsilon All India Hackathon with
                  Kairos, a causal decisioning engine
                </li>
                <li>
                  <strong>Top 20</strong> of 4,000+ registrants at the Google DeepMind Bangalore
                  Hackathon with PRISM, a communication policy engine built on Gemini
                </li>
                <li>
                  <strong>Selected</strong> as one of 250 students worldwide for the AI4I Winter
                  School, run by Italy&apos;s National Institute for Artificial Intelligence
                </li>
              </ul>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
