import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  
  it('App', () => {
    render(<App />);
    const linkElement = screen.getByText(/Code here.../i);
    expect(linkElement).toBeInTheDocument();
  });

})

