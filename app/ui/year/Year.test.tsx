import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Year from '@/app/ui/year/Year';

describe('Year', () => {
  it('renders year for given value', () => {
    render(<Year year="2024" />);

    const text = screen.getByText('2024');

    expect(text).toBeInTheDocument();
  });
});