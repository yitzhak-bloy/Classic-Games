import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import ListGames from "./ListGames";

describe("ListGames component", () => {
  test("should render the names of games - 'TicTacToe' 'Snake' 'Matching-Card'", () => {
    render(<ListGames />);
    // screen.debug();
    expect(screen.getByRole("list")).toHaveTextContent(/TicTacToe/);
    expect(screen.getByRole("list")).toHaveTextContent(/Snake/);
    expect(screen.getByRole("list")).toHaveTextContent(/Matching-Card/);
  });

  test('"TicTacToe" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <ListGames />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /TicTacToe/i });
    userEvent.click(link);
    const element = screen.getByTestId("TicTacToe");
    screen.debug(element);

    expect(element).toBeInTheDocument();
  });
});
