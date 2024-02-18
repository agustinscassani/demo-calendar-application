'use client';

import { useFormStatus } from 'react-dom';

import styles from '@/app/ui/save-button/save-button.module.css';

export default function SaveButton() {
  // Utils
  const { pending } = useFormStatus();
  // Render
  return (
    <button className={styles.saveButton} disabled={pending} type="submit">
      {
        pending ? 'Saving' : 'Save'
      }
    </button>
  );
}
