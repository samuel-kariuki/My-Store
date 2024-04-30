import React from 'react';
import { render } from '@testing-library/react';
import footer from './footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<footer />);
    const footerElement = getByText('© 2024 Your Site Name. All rights reserved.');
    expect(footerElement).toBeInTheDocument();
  });
});
