import Link from 'next/link';

import CancelButton from '@/app/ui/cancel-button/CancelButton';
import DeleteButton from '@/app/ui/delete-button/DeleteButton';
import { deleteReminder } from '@/app/actions/reminders';
import { getReminderById } from '@/app/actions/reminders';
import { Reminder } from '@/app/types/reminder';
import Title from '@/app/ui/title/Title';

export default async function DeletePage({ params: { day, id } }: { params: { day: string, id: string } }) {
  // Utils
  const reminder: Reminder = await getReminderById(id);
  // Handlers
  async function handleDeleteReminder() {
    'use server';
    await deleteReminder(day, reminder?.id);
  }
  // Render
  return (
    <>
      <Title day={day} message="Delete reminder" />
      <form action={handleDeleteReminder}>
        <div className="mt-40">
          <p className="text-center">
            Are you sure you want to delete <strong>{reminder?.title}</strong> reminder?
          </p>
        </div>
        <div className="flex justify-around mt-5">
          <Link href={`/${day}/edit/${id}`}>
            <CancelButton text="No" />
          </Link>
          <DeleteButton pendingText="Deleting" text="Yes" type="submit" />
        </div>
      </form>
    </>
  );
}