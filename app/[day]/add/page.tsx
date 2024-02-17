import ReminderForm from '@/app/ui/reminder-form/ReminderForm';
import Title from '@/app/ui/title/Title';

export default async function AddPage({ params: { day } }: { params: { day: string } }) {
  // Render
  return (
    <>
      <Title day={day} message="Add reminder" />
      <ReminderForm day={day} />
    </>
  );
}