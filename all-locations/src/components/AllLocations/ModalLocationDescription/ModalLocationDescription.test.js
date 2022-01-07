import { render, screen, fireEvent } from "@testing-library/react";
import ModalLocationDescription from "./ModalLocationDescription";

const props = {
  name: "name",
  users: "20",
  time: "9h50",
  views: 3,
  description: "nice description",
  handleClose: jest.fn(),
};

test("if renders correctly the modal with all info", () => {
  expect.assertions(6);

  render(<ModalLocationDescription {...props} />);

  expect(screen.getByText("name")).toBeInTheDocument();
  expect(screen.getByText("20 users")).toBeInTheDocument();
  expect(screen.getByText("9h50")).toBeInTheDocument();
  expect(screen.getByText("3 views")).toBeInTheDocument();
  expect(screen.getByText("nice description")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("if calls onClick prop when clicked", () => {
  expect.assertions(1);

  render(<ModalLocationDescription {...props} />);

  const closeButton = screen.getByRole("button");
  fireEvent.click(closeButton);

  expect(props.handleClose).toHaveBeenCalledTimes(1);
});
