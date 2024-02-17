import { Suspense } from 'react';

import AddReminderButton from '@/app/ui/add-reminder-button/AddReminderButton';
import Reminders from '@/app/ui/reminders/Reminders';
import Title from '@/app/ui/title/Title';

export default function HomePage({ params: { day } }: { params: { day: string } }) {
  // Render
  return (
    <>
      <section className="flex items-center justify-between">
        <Title day={day} />
        <AddReminderButton day={day} />
      </section>
      <Suspense fallback={<p>loading...</p>}>
        <Reminders day={day} />
      </Suspense>
    </>
  );
}
