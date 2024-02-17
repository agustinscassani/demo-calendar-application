import styles from '@/app/ui/delete-button/delete-button.module.css';

export default function DeleteButton({ text, type }: { text: string, type: 'button' | 'submit' }) {
  // Render
  return (
    <button className={styles.deleteButton} type={type}>
      {text}
    </button>
  );
}