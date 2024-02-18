import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Loading from '@/app/ui/loading/Loading';

describe('Loading', () => {
  it('renders loading spinner', () => {
    render(<Loading />);

    const loading = screen.getByAltText('Loading');

    expect(loading).toBeInTheDocument();
  });
});
