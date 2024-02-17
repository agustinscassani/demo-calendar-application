import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/ui/calendar-cell/calendar-cell.module.css';

type CalendarCellProps = {
  day: string;
  daysWithReminders: number[];
  item: number;
  selectedDay: number;
}

function ClickableItem({ daysWithReminders, item }: { daysWithReminders: number[], item: number }) {
  return (
    <div className={styles.reminderCell}>
      {item}
      <div>
        {daysWithReminders.includes(item) && (
          <Image
            alt="point reminder"
            height={6}
            priority
            src="/point-reminder.svg"
            width={6}
          />
        )}
      </div>
    </div>
  );
}

export default function CalendarCell({ day, daysWithReminders, item, selectedDay }: CalendarCellProps) {
  // Render
  return (
    <div className={styles.calendarCell}>
      {
        item && Number.isInteger(item)
          ? (
            <Link href={`/${day.substring(0, 8)}${item < 10 ? `0${item}` : item}`}>
              {
                item === selectedDay
                  ? (
                    <span className={styles.selectedDay}>
                      <ClickableItem daysWithReminders={daysWithReminders} item={item} />
                    </span>
                  )
                  : <ClickableItem daysWithReminders={daysWithReminders} item={item} />
              }
            </Link>
          )
          : item
      }
    </div>
  );
}