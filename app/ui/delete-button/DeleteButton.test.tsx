import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import DeleteButton from '@/app/ui/delete-button/DeleteButton';

describe('DeleteButton', () => {
  it('renders delete button with given text', () => {
    render(<DeleteButton text="Delete" />);

    const text = screen.getByText('Delete');

    expect(text).toBeInTheDocument();
  });
});