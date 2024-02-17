import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import AddReminderButton from '@/app/ui/add-reminder-button/AddReminderButton';

describe('AddReminderButton', () => {
  it('renders add reminder button', () => {
    render(<AddReminderButton day={'2024-10-17'} />);

    const text = screen.getByText('Add reminder');

    expect(text).toBeInTheDocument();
  });
});