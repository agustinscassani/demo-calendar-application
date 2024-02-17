import styles from '@/app/ui/left/left.module.css';

export default function Left({ children }: Readonly<{ children: React.ReactNode }>) {
  // Render
  return (
    <main className={styles.leftContainer}>
      {children}
    </main>
  );
}

