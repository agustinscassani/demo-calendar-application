import styles from '@/app/ui/month/month.module.css';

const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function Month({ month }: { month: string }) {
  // Render
  return <div className={styles.month}>{months[Number(month) - 1]}</div>;
}
