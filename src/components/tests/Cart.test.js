import { render, screen } from '@testing-library/react';
import { expect} from '@jest/globals'

import Home from '../Home';

test('Displays the home page', () => {
  render(<Home />);
  expect(screen.getByText('Go Shopping')).toBeInTheDocument();
});


