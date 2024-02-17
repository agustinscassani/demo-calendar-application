import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import CalendarCell from '@/app/ui/calendar-cell/CalendarCell';

describe('CalendarCell', () => {
  it('renders calendar cell for given day', () => {
    render(<CalendarCell day={'2024-10-17'} daysWithReminders={[]} item={17} selectedDay={17} />);

    const text = screen.getByText('17');

    expect(text).toBeInTheDocument();
  });
});