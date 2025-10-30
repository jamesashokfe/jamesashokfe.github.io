import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Education from "../Education";

describe("Education Component", () => {
  const mockEducation = [
    {
      school_name: "Test University",
      degree_title: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
    },
    {
      school_name: "Another University",
      degree_title: "Master of Science in Software Engineering",
      duration: "2022 - 2024",
    },
  ];

  it("renders the education section with correct title", () => {
    render(<Education education={mockEducation} />);
    expect(
      screen.getByRole("heading", { level: 2, name: /education/i }),
    ).toBeInTheDocument();
  });

  it("renders all education items", () => {
    render(<Education education={mockEducation} />);
    const educationItems = screen.getAllByRole("heading", { level: 3 });
    expect(educationItems).toHaveLength(mockEducation.length);
    expect(educationItems[0]).toHaveTextContent("Test University");
    expect(educationItems[1]).toHaveTextContent("Another University");
  });

  it("displays degree and duration for each education item", () => {
    render(<Education education={mockEducation} />);

    mockEducation.forEach((edu) => {
      expect(screen.getByText(edu.degree_title)).toBeInTheDocument();
      expect(screen.getByText(edu.duration)).toHaveClass("text-gray-500");
    });
  });

  it("handles empty education array", () => {
    render(<Education education={[]} />);
    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
  });
});
