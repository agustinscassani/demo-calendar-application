'use client';

import { useFormStatus } from 'react-dom';

import styles from '@/app/ui/delete-button/delete-button.module.css';

export default function DeleteButton({ text, pendingText, type }: { text: string, pendingText?: string, type: 'button' | 'submit' }) {
  // Utils
  const { pending } = useFormStatus();
  // Render
  return type === 'button'
    ? (
      <button className={styles.deleteButton} type={type}>
        {text}
      </button>
    )
    : (
      <button className={styles.deleteButton} disabled={pending} type={type} >
        {
          pending ? pendingText : text
        }
      </button >
    );
}