import { render, screen } from "@testing-library/react";
import Portfolio from "../page";
import "@testing-library/jest-dom";

// Mock the child components
jest.mock("../components/LeftPane", () => {
  return function MockLeftPane() {
    return <div data-testid="left-pane">Left Pane</div>;
  };
});

jest.mock("../components/RightPane", () => {
  return function MockRightPane() {
    return <div data-testid="right-pane">Right Pane</div>;
  };
});

describe("Portfolio Page", () => {
  it("renders the portfolio page with left and right panes", () => {
    render(<Portfolio />);

    // Check if the main container has the correct classes
    const container = screen.getByTestId("portfolio");
    expect(container).toHaveClass("flex", "flex-col", "md:flex-row");

    // Check if both panes are rendered
    expect(screen.getByTestId("left-pane")).toBeInTheDocument();
    expect(screen.getByTestId("right-pane")).toBeInTheDocument();
  });

  it("applies dark mode classes when in dark mode", () => {
    // Mock the document element's classList
    Object.defineProperty(document.documentElement, "classList", {
      value: {
        contains: (cls: string) => cls === "dark",
      },
      configurable: true,
    });

    render(<Portfolio />);

    // Check if dark mode classes are applied
    const container = screen.getByTestId("portfolio");
    expect(container).toHaveClass("dark:bg-gray-900");
    expect(container).toHaveClass("dark:text-gray-200");
  });

  it("applies light mode classes when not in dark mode", () => {
    // Mock the document element's classList
    Object.defineProperty(document.documentElement, "classList", {
      value: {
        contains: () => false,
      },
      configurable: true,
    });

    render(<Portfolio />);

    // Check if light mode classes are applied
    const container = screen.getByTestId("portfolio");
    expect(container).toHaveClass("bg-white");
    expect(container).toHaveClass("text-gray-800");
  });
});
