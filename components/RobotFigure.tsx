import styles from '@/styles/Robot.module.css';

interface RobotFigureProps {
  size?: number;
  /** change this value to replay the wave animation */
  waveKey?: number;
  className?: string;
}

const RobotFigure = ({ size = 76, waveKey = 0, className }: RobotFigureProps) => (
  <svg
    viewBox="0 0 96 104"
    width={size}
    height={size * (104 / 96)}
    aria-hidden
    className={className}
  >
    <line x1="48" y1="6" x2="48" y2="20" className={styles.stroke} />
    <circle cx="48" cy="6" r="4.5" className={styles.antenna} />
    <rect x="18" y="20" width="60" height="44" rx="14" className={styles.head} />
    <rect x="26" y="29" width="44" height="26" rx="9" className={styles.face} />
    <g className={styles.eyes}>
      <circle cx="39" cy="42" r="4.2" className={styles.eye} />
      <circle cx="57" cy="42" r="4.2" className={styles.eye} />
    </g>
    <path d="M42 49.5 Q48 54 54 49.5" className={styles.mouth} />
    <rect x="11" y="35" width="7" height="14" rx="3" className={styles.head} />
    <rect x="78" y="35" width="7" height="14" rx="3" className={styles.head} />
    <rect x="30" y="68" width="36" height="28" rx="9" className={styles.head} />
    <circle cx="48" cy="82" r="4" className={styles.core} />
    <path d="M30 74 Q20 80 22 92" className={styles.arm} />
    <g key={waveKey} className={styles.wave}>
      <path d="M66 74 Q78 68 82 56" className={styles.arm} />
      <circle cx="82" cy="54" r="4.5" className={styles.hand} />
    </g>
  </svg>
);

export default RobotFigure;
