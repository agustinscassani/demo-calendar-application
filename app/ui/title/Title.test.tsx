import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Title from '@/app/ui/title/Title';

describe('Title', () => {
  it('renders title for given day', () => {
    render(<Title day="2024-10-17" />);

    const text = screen.getByText(/October/i);

    expect(text).toBeInTheDocument();
  });
});