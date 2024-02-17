import Calendar from '@/app/ui/calendar/Calendar';
import Footer from '@/app/ui/footer/Footer';
import Month from '@/app/ui/month/Month';
import Navigation from '@/app/ui/navigation/Navigation';
import styles from '@/app/ui/right/right.module.css';
import Year from '@/app/ui/year/Year';

export default function Right({ day }: { day: string }) {
  // Utils
  const [year, month] = day.split('-');
  // Render
  return (
    <main className={styles.rightContainer}>
      <Year year={year} />
      <Month month={month} />
      <Navigation day={day} />
      <Calendar day={day} />
      <Footer />
    </main>
  );
}
