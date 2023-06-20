import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import {act} from 'react-dom/test-utils'; 

describe("Welcome Page", () => {
  test("Displays all menu items", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Pokemon Store")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("Store")).toBeInTheDocument();
  });

  test("Displays the home page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Go Shopping")).toBeInTheDocument();
  });
});

