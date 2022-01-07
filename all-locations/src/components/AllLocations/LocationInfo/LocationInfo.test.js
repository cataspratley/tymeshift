import { render, screen } from "@testing-library/react";
import LocationInfo from "./LocationInfo";

const props = {
  users: "20",
  time: "9h50",
  views: 3,
};

test("if renders correctly the info", () => {
  expect.assertions(3);

  render(<LocationInfo {...props} />);

  expect(screen.getByText("20 users")).toBeInTheDocument();
  expect(screen.getByText("9h50")).toBeInTheDocument();
  expect(screen.getByText("3 views")).toBeInTheDocument();
});
