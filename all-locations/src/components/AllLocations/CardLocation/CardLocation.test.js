import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CardLocation from "./CardLocation";

const props = {
  name: "name",
  users: "20",
  time: "9h50",
  description: "nice description",
};

test("if renders correctly the card location", () => {
  expect.assertions(3);

  render(<CardLocation {...props} />);

  expect(screen.getByText("20 users")).toBeInTheDocument();
  expect(screen.getByText("9h50")).toBeInTheDocument();
  expect(screen.getByText("0 views")).toBeInTheDocument();
});

test("views increase when clicking the edit button", () => {
  expect.assertions(1);

  render(<CardLocation {...props} />);

  expect(screen.getByText("0 views")).toBeInTheDocument();

  fireEvent.mouseOver(screen.getByTestId("cardLocationModal"));
  const button = screen.getByRole("button");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
});
