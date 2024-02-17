import { getReminderById } from '@/app/actions/reminders';
import { Reminder } from '@/app/types/reminder';
import ReminderForm from '@/app/ui/reminder-form/ReminderForm';
import Title from '@/app/ui/title/Title';

export default async function EditPage({ params: { day, id } }: { params: { day: string, id: string } }) {
  // Utils
  const reminder: Reminder = await getReminderById(id);
  // Render
  return (
    <>
      <Title day={day} message="Edit reminder" />
      <ReminderForm day={day} reminder={reminder} />
    </>
  );
}