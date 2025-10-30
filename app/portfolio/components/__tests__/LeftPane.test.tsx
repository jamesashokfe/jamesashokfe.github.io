import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LeftPane from "../LeftPane";
// Mocked components are imported via jest.mock()

// Mock child components
jest.mock("../Navigation", () => ({
  __esModule: true,
  Navigation: jest.fn(() => (
    <nav data-testid="mock-navigation">Navigation</nav>
  )),
  default: jest.fn(() => <nav data-testid="mock-navigation">Navigation</nav>),
}));

jest.mock("../MiniProfile", () => ({
  __esModule: true,
  default: jest.fn(() => (
    <div data-testid="mock-mini-profile">MiniProfile</div>
  )),
}));

describe("LeftPane Component", () => {
  it("renders the left pane with MiniProfile and Navigation", () => {
    render(<LeftPane />);

    // Check if the container has the correct classes
    const container = screen.getByTestId("left-pane");
    expect(container).toHaveClass("md:w-1/3", "md:fixed", "md:h-screen");

    // Check if child components are rendered
    expect(screen.getByTestId("mock-mini-profile")).toBeInTheDocument();
    expect(screen.getByTestId("mock-navigation")).toBeInTheDocument();
  });

  it("applies dark mode classes when in dark mode", () => {
    // Mock the theme context or add a theme provider if needed
    render(
      <div className="dark">
        <LeftPane />
      </div>,
    );

    const container = screen.getByTestId("left-pane");
    expect(container).toHaveClass("dark:bg-gray-800");
  });
});
