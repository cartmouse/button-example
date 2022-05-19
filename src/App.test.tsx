import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render 1 button1", () => {
    render(<App />);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });
});
