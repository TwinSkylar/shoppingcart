import { render, screen } from '@testing-library/react';
import App from './App';



describe("Welcome Page", () => {
  test('Displays all menu items', () => {
    render(<App/>);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect (screen.getByText('Pokemon Store')).toBeInTheDocument();
    expect (screen.getByText('Checkout')).toBeInTheDocument();
    expect (screen.getByText('Store')).toBeInTheDocument();
  });

  test('Displays the home page', () => {
    render(<App />);
    expect(screen.getByText('Go Shopping')).toBeInTheDocument();
  });
});

