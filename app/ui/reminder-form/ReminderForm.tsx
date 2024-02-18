import Link from 'next/link';

import CancelButton from '@/app/ui/cancel-button/CancelButton';
import { createReminder, updateReminder } from '@/app/actions/reminders';
import DeleteButton from '@/app/ui/delete-button/DeleteButton';
import { getDate, getTime } from '@/app/lib/utils';
import { Reminder } from '@/app/types/reminder';
import SaveButton from '@/app/ui/save-button/SaveButton';
import styles from '@/app/ui/reminder-form/reminder-form.module.css';

const reminderColors: string[] = ['#C8E6C9', '#F5DD29', '#FFCC80', '#EF9A9A', '#CD8DE5', '#5BA4CF', '#29CCE5', '#6DECA9', '#FF8ED4', '#BCAAA4'];

export default function ReminderForm({ day, reminder }: { day: string, reminder?: Reminder }) {
  // Handlers
  async function handleSubmit(formData: FormData) {
    'use server';

    if (reminder) {
      await updateReminder(day, reminder?.id, formData)
    } else {
      await createReminder(day, formData);
    }
  }
  // Render
  return (
    <form action={handleSubmit} className={styles.reminderForm}>
      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={reminder ? reminder.title : ''}
          id="title"
          maxLength={30}
          name="title"
          placeholder="Title"
          required
          type="text"
        />
      </div>
      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={reminder ? reminder.description : ''}
          id="description"
          maxLength={200}
          name="description"
          placeholder="Description"
          required
          rows={3}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-8">
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={reminder ? getDate(reminder.date.toString()) : ''}
            id="date"
            name="date"
            placeholder="MM/DD/YYYY"
            required
            type="date"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={reminder ? getTime(reminder.date.toString()) : ''}
            id="time"
            name="time"
            placeholder="HH:MM"
            required
            type="time"
          />
        </div>
      </div>
      <div className="mb-12">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
          Color
        </label>
        <section className="flex justify-around">
          {
            reminderColors.map((rc: string) => (
              <label className={styles.colorLabel} key={rc} style={{ backgroundColor: rc }}>
                <input
                  className={styles.colorRadio}
                  defaultChecked={reminder ? rc === reminder.color : false}
                  name="color"
                  type="radio"
                  value={rc}
                />
              </label>
            ))
          }
        </section>
      </div>
      <div className={styles.formDivider} />
      <div className={styles.formButtons}>
        {
          reminder && (
            <Link href={`/${day}/delete/${reminder.id}`} style={{ float: 'left' }}>
              <DeleteButton text="Remove" type="button" />
            </Link>
          )
        }
        <Link href={`/${day}`}>
          <CancelButton text="Cancel" />
        </Link>
        <SaveButton />
      </div>
    </form>
  );
}