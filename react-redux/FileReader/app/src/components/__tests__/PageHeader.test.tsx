import * as React from 'react';

import { render, screen } from '@testing-library/react';

import PageHeader from '../PageHeader';

describe('PageHeader Component', () => {

  beforeEach(() => {
    const title = 'Smart Pension - FE Engineer Test'
    render(<PageHeader title={title} />);
  });

  test('Renders PageHeader component', () => {
    const linkElement = screen.getByText(/Smart Pension - FE Engineer Test/i);
    expect(linkElement).toBeInTheDocument();
  });

});
