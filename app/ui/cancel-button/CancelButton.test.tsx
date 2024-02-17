import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import CancelButton from '@/app/ui/cancel-button/CancelButton';

describe('CancelButton', () => {
  it('renders cancel button with given text', () => {
    render(<CancelButton text="Cancel" />);

    const text = screen.getByText('Cancel');

    expect(text).toBeInTheDocument();
  });
});