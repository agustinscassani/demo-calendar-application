import Image from 'next/image';
import Link from 'next/link';

import { Reminder } from '@/app/types/reminder';
import styles from '@/app/ui/reminder/reminder.module.css';

export default function Reminder({ day, reminder }: { day: string, reminder: Reminder }) {
  // Render
  return (
    <main className={styles.reminderCard}>
      <div className={styles.reminderColor} style={{ backgroundColor: reminder.color }} />
      <div>
        <p className={styles.reminderTitle}>{reminder.title}</p>
        <p className={styles.reminderDescription}>{reminder.description}</p>
      </div>
      <div className={styles.reminderDivider} />
      <div className={styles.reminderTime}>
        <Image
          alt="Clock icon"
          height={34}
          priority
          src="/clock-icon.svg"
          width={34}
        />
        <p>{reminder.date.toString().substring(11, 16)}</p>
      </div>
      <button className={styles.reminderButton}>
        <Link href={`/${day}/edit/${reminder.id}`}>
          <Image
            alt="Pencil icon"
            height={18}
            priority
            src="/pencil-icon.svg"
            width={18}
          />
        </Link>
      </button>
    </main>
  );
}