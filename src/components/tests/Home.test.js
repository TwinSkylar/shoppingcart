import { render, screen } from '@testing-library/react';
import {describe, expect, it} from '@jest/globals'

import Home from './../Home';

test('Displays the home page', () => {
  render(<Home />);
  expect(screen.getByText('Go Shopping')).toBeInTheDocument();
});


