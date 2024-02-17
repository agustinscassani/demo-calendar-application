import Image from 'next/image';

import { getRemindersByDay } from '@/app/actions/reminders';
import { Reminder } from '@/app/types/reminder';
import ReminderItem from '@/app/ui/reminder/Reminder';
import styles from '@/app/ui/reminders/reminders.module.css';

export default async function Reminders({ day }: { day: string }) {
  // Utils
  const reminders = await getRemindersByDay(day);
  // Render
  return (
    <main className={styles.remindersContainer}>
      {
        reminders.length > 0
          ? reminders.map((reminder: Reminder) => <ReminderItem day={day} key={reminder.id} reminder={reminder} />)
          : (
            <div className={styles.noRemindersContainer}>
              <Image
                alt="No reminders"
                height={228}
                priority
                src="/no-reminders.svg"
                width={359}
              />
              <p className={styles.noRemindersText}>No reminders registered so far</p>
            </div>
          )
      }
    </main>
  );
}