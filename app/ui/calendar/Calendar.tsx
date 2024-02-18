import CalendarCell from '@/app/ui/calendar-cell/CalendarCell';
import { getCalendarItems } from '@/app/lib/utils';
import { getDaysWithReminders } from '@/app/actions/reminders';
import styles from '@/app/ui/calendar/calendar.module.css';

export default async function Calendar({ day }: { day: string }) {
  // Utils
  const data = await getDaysWithReminders(day.substring(0, 7));
  const daysWithReminders = data.map(({ date }: { date: string }) => Number(date.substring(8, 10)));
  const selectedDay = Number(day.substring(8, 10));
  const items = getCalendarItems(day);
  // Render
  return (
    <div className={styles.calendar}>
      {
        items.map((item: any, index: number) => (
          <CalendarCell
            day={day}
            daysWithReminders={daysWithReminders}
            key={index}
            item={item}
            selectedDay={selectedDay}
          />
        ))
      }
    </div>
  );
}
