import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Footer from '@/app/ui/footer/Footer';

describe('Footer', () => {
  it('renders footer for current year', () => {
    render(<Footer />);

    const text = screen.getByText((content) => content.includes(new Date().getFullYear().toString()));

    expect(text).toBeInTheDocument();
  });
});