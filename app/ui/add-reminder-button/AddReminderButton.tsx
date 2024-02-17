import Link from 'next/link';

import styles from '@/app/ui/add-reminder-button/add-reminder-button.module.css';

export default function AddReminderButton({ day }: { day: string }) {
  // Render
  return (
    <Link href={`/${day}/add`}>
      <button className={styles.addReminderButton}>Add reminder</button>
    </Link>
  );
}