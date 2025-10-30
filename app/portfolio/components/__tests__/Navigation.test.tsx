import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navigation } from "../Navigation";

// Mock the config
jest.mock("../../config/text", () => ({
  config: {
    sections: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
    },
  },
}));

describe("Navigation Component", () => {
  it("renders all navigation items", () => {
    render(<Navigation />);

    // Check if all navigation items are rendered
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /skills/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /experience/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /education/i }),
    ).toBeInTheDocument();
  });

  it("hides projects section when there are no projects", () => {
    render(<Navigation />);

    // Projects link should not be in the document
    expect(
      screen.queryByRole("link", { name: /projects/i }),
    ).not.toBeInTheDocument();
  });

  it("applies hover and dark mode styles", () => {
    render(
      <div className="dark">
        <Navigation />
      </div>,
    );

    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toHaveClass(
      "hover:border-blue-500",
      "dark:hover:border-blue-400",
    );
  });
});
