import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Left from '@/app/ui/left/Left';

describe('Left', () => {
  it('renders elements as children', () => {
    render(<Left><p>Hi there!</p></Left>);

    const text = screen.getByText('Hi there!');

    expect(text).toBeInTheDocument();
  });
});