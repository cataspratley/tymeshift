import { render, screen } from "@testing-library/react";
import AllLocations from "./AllLocations";

test("renders learn react link", () => {
  render(<AllLocations />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
