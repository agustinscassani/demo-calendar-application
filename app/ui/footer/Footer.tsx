import styles from '@/app/ui/footer/footer.module.css';

export default function Footer() {
  // Render
  return (
    <p className={styles.footer}>© {new Date().getFullYear().toString()} Codelitt Inc All rights reserved</p>
  );
}