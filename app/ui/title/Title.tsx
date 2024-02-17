import { Days, Months } from '@/app/shared/enumerations';

import styles from '@/app/ui/title/title.module.css';

export default function Title({ day, message }: { day: string, message?: string }) {
  // Utils
  const [dd, mm, dayNumber, yyyy] = new Date(`${day}T00:00:00`).toDateString().split(' ');
  // Render
  return <p className={styles.title}>{message ? `${message} - ` : ''}{Days[dd]}, {Months[mm]} {dayNumber}, {yyyy}</p>;
}
