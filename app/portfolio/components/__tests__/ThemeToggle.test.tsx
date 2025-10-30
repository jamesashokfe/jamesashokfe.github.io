import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeToggle from "../ThemeToggle";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("ThemeToggle", () => {
  beforeEach(() => {
    // Clear localStorage and reset classList before each test
    localStorage.clear();
    document.documentElement.classList.remove("dark");

    // Reset matchMedia mock
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders with light mode by default", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toHaveTextContent("🌚");
    expect(document.documentElement).not.toHaveClass("dark");
  });

  it("toggles between light and dark mode when clicked", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });

    // Initial state (light mode)
    expect(button).toHaveTextContent("🌚");
    expect(document.documentElement).not.toHaveClass("dark");

    // Click to switch to dark mode
    fireEvent.click(button);
    expect(button).toHaveTextContent("🌞");
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    // Click again to switch back to light mode
    fireEvent.click(button);
    expect(button).toHaveTextContent("🌚");
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("uses system preference for initial theme when no localStorage value exists", () => {
    // Mock matchMedia to prefer dark mode
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });

    // Should use system preference (dark in this case)
    expect(button).toHaveTextContent("🌞");
    expect(document.documentElement).toHaveClass("dark");
  });

  it("uses localStorage value for initial theme when available", () => {
    // Set initial theme in localStorage
    localStorage.setItem("theme", "dark");

    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });

    // Should use stored dark theme
    expect(button).toHaveTextContent("🌞");
    expect(document.documentElement).toHaveClass("dark");
  });
});
