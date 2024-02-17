import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Month from '@/app/ui/month/Month';

describe('Month', () => {
  it('renders literal month for given number month', () => {
    render(<Month month="10" />);

    const text = screen.getByText('October');

    expect(text).toBeInTheDocument();
  });
});