import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Reminder } from '@/app/types/reminder';
import ReminderComponent from '@/app/ui/reminder/Reminder';

describe('Reminder', () => {
  it('renders reminder card for given reminder', () => {
    const reminder: Reminder = {
      color: "#FF8ED4",
      createdAt: new Date("2024-02-14T14:41:24.217Z"),
      date: new Date("2024-02-14T14:40:00.000Z"),
      description: "Interview for the DevOps position",
      id: "b18324a8-a248-4ec7-b85f-ac35dd849eb9",
      title: "Interview",
      updatedAt: new Date("2024-02-14T14:41:24.217Z"),
    };
    render(<ReminderComponent day="2024-10-17" reminder={reminder} />);

    const text = screen.getByText(reminder.title);

    expect(text).toBeInTheDocument();
  });
});