import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

import Store from "../Store";

describe("Displays shopping navigation", () => {
  test("Displays the home page", () => {
    render(<Store />);
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Previous")).toBeInTheDocument();
  });
});
