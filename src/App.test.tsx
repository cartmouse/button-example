import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render 1 button1", () => {
    const {container} = render(<App />);
    expect(container.getElementsByClassName("button")).toHaveLength(1);
  });
});
