import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Welcome Page", () => {
  test("Displays all menu items", () => {
    render(<App />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Pokemon Store")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("Store")).toBeInTheDocument();
  });

  test("Displays the home page", () => {
    render(<App />);
    expect(screen.getByText("Go Shopping")).toBeInTheDocument();
  });
});

describe("Tests all the routing", () => {
  test("should redirect and update history", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>
    );
    userEvent.click(screen.getByText(/Home/));
    expect(history.location.pathname).toEqual("/home");
  });

  test('should redirect and update dom', () => {
    render(<BrowserRouter><App/></BrowserRouter>);

    userEvent.click(screen.getByText(/Home/));

    expect(screen.getByText('Go Shopping')).toBeInTheDocument();
});
});
