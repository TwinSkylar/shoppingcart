import { render, screen } from '@testing-library/react';
import {expect} from '@jest/globals'
import { MemoryRouter } from "react-router-dom";
import Header from './../Header';

test('Displays all menu items', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect (screen.getByText('Pokemon Store')).toBeInTheDocument();
  expect (screen.getByText('Checkout')).toBeInTheDocument();
  expect (screen.getByText('Store')).toBeInTheDocument();
});


