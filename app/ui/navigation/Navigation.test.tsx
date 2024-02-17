import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Navigation from '@/app/ui/navigation/Navigation';

describe('Navigation', () => {
  it('renders both direction arrows for navigation', () => {
    render(<Navigation day="2024-10-17" />);

    const leftArrow = screen.getByAltText('chebron left');
    const rightArrow = screen.getByAltText('chebron right');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });
});