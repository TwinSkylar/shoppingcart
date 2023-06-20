import { render, screen } from '@testing-library/react';
import {expect} from '@jest/globals'

import StoreMenu from '../StoreMenu';

test('Displays all store menu items', () => {
  render(<StoreMenu />);
  expect(screen.getByText('Store Menu')).toBeInTheDocument();
  expect(screen.getByText('Group A')).toBeInTheDocument();
  expect (screen.getByText('Group B')).toBeInTheDocument();
  expect (screen.getByText('Group C')).toBeInTheDocument();
});
