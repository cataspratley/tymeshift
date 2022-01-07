import { render, screen } from "@testing-library/react";
import AllLocations from "./AllLocations";

test("if renders correctly the all locations page", () => {
  expect.assertions(2);

  render(<AllLocations />);

  expect(screen.getByText("All Locations")).toBeInTheDocument();
  expect(screen.getByText("Acme Locations")).toBeInTheDocument();
});
