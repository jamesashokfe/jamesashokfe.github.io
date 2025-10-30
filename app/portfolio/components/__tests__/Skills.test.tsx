import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../Skills";

describe("Skills Component", () => {
  const mockSkills = [
    {
      name: "JavaScript",
      icon_url: "/path/to/js-icon.png",
    },
    {
      name: "TypeScript",
      icon_url: "/path/to/ts-icon.png",
    },
    {
      name: "React",
      // No icon URL for this one
    },
  ];

  it("renders all skills with names", () => {
    render(<Skills skills={mockSkills} />);

    // Check if all skill names are rendered
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders icons when provided", () => {
    render(<Skills skills={mockSkills} />);

    // Should have 2 images (for JS and TS, but not React)
    const icons = screen.getAllByRole("presentation");
    expect(icons).toHaveLength(2);
  });

  it("applies correct styling to skill items", () => {
    render(<Skills skills={mockSkills} />);

    const skillItems = screen.getAllByRole("listitem");
    skillItems.forEach((item) => {
      expect(item).toHaveClass(
        "bg-gray-200",
        "dark:bg-gray-700",
        "rounded-lg",
        "px-4",
        "py-2",
      );
    });
  });

  it("handles empty skills array", () => {
    render(<Skills skills={[]} />);

    // The heading should still be rendered
    expect(
      screen.getByRole("heading", { name: /skills/i }),
    ).toBeInTheDocument();

    // No list items should be rendered
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("applies dark mode styles", () => {
    render(
      <div className="dark">
        <Skills skills={mockSkills} />
      </div>,
    );

    const skillItem = screen.getAllByRole("listitem")[0];
    expect(skillItem).toHaveClass("dark:bg-gray-700");
  });
});
