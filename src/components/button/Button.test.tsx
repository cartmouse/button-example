import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render a button", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should be a 150px x 50px square", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveStyle({
      width: "150px",
      height: "50px",
    });
  });

  it("should have no border", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toHaveStyle({
      border: "0px",
    });
  });

  it("should render a button of a given colour", () => {
    const { rerender } = render(<Button colour="red" />);
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: "red",
    });

    rerender(<Button colour="ff00ff" />);
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: "ff00ff",
    });
  });
});
