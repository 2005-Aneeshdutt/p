import Image from 'next/image';
import { VscArrowRight } from 'react-icons/vsc';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${index === 1 ? styles.featured : ''}`}
    >
      <div className={styles.top}>
        <div className={styles.identity}>
          <Image src={project.logo} alt="" width={36} height={36} className={styles.logo} />
          <div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.tagline}>{project.tagline}</p>
          </div>
        </div>
        <span className={styles.index}>{String(index).padStart(2, '0')}</span>
      </div>

      {project.badge && <span className={styles.badge}>🏆 {project.badge}</span>}

      <p className={styles.description}>{project.description}</p>

      {project.metrics.length > 0 && (
        <div className={styles.metrics}>
          {project.metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.stack}>
          {project.stack.map((s) => (
            <span key={s} className={styles.tag}>
              {s}
            </span>
          ))}
        </div>
        <span className={styles.cta}>
          View on GitHub <VscArrowRight size={13} />
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
