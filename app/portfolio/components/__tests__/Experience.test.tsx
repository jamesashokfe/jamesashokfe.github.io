import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Experience from "../Experience";

describe("Experience Component", () => {
  const mockExperience = [
    {
      company_name: "Tech Corp",
      role: "Senior Software Engineer",
      duration: "Jan 2020 - Present",
      impact_achieved: [
        "Led a team of 5 developers to deliver a new product feature",
        "Improved application performance by 40%",
        "Mentored junior developers",
      ],
    },
    {
      company_name: "Web Solutions Inc",
      role: "Frontend Developer",
      duration: "Mar 2018 - Dec 2019",
      impact_achieved: [
        "Developed responsive web applications",
        "Implemented new UI components",
      ],
    },
  ];

  it("renders the experience section with correct title", () => {
    render(<Experience experience={mockExperience} />);
    expect(
      screen.getByRole("heading", { level: 2, name: /experience/i }),
    ).toBeInTheDocument();
  });

  it("renders all experience items", () => {
    render(<Experience experience={mockExperience} />);
    const companyNames = screen.getAllByRole("heading", { level: 3 });
    expect(companyNames).toHaveLength(mockExperience.length);
    expect(companyNames[0]).toHaveTextContent("Tech Corp");
    expect(companyNames[1]).toHaveTextContent("Web Solutions Inc");
  });

  it("displays role, duration, and impact for each experience item", () => {
    render(<Experience experience={mockExperience} />);

    // Check first experience item
    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Jan 2020 - Present")).toHaveClass("text-gray-500");
    expect(
      screen.getByText(
        "Led a team of 5 developers to deliver a new product feature",
      ),
    ).toBeInTheDocument();

    // Check second experience item
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Mar 2018 - Dec 2019")).toHaveClass(
      "text-gray-500",
    );
    expect(
      screen.getByText("Developed responsive web applications"),
    ).toBeInTheDocument();
  });

  it("renders impact points as a list", () => {
    render(<Experience experience={mockExperience} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(5); // 3 from first experience + 2 from second
  });

  it("handles empty experience array", () => {
    render(<Experience experience={[]} />);
    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
