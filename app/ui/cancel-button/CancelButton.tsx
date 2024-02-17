import styles from '@/app/ui/cancel-button/cancel-button.module.css';

export default function CancelButton({ text }: { text: string }) {
  // Render
  return (
    <button className={styles.cancelButton} type="button">
      {text}
    </button>
  );
}