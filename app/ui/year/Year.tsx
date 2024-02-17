import styles from '@/app/ui/year/year.module.css';

export default function Year({ year }: { year: string }) {
  // Render
  return <div className={styles.year}>{year}</div>;
}
