import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should match snapshot", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
