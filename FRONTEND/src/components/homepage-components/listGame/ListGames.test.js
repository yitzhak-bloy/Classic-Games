import React from "react";
import { render, screen } from "@testing-library/react";

import ListGames from "./ListGames";

describe("ListGames component", () => {
  test("should render the names of games - 'TicTacToe' 'Snake' 'Matching-Card' ", () => {
    render(<ListGames />);
    expect(screen.getByRole("list")).toHaveTextContent(/TicTacToe/);
    expect(screen.getByRole("list")).toHaveTextContent(/Snake/);
    expect(screen.getByRole("list")).toHaveTextContent(/Matching-Card/);
  });
});
