import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RightPane from "../RightPane";

// Mock child components
jest.mock("../Skills", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-skills">Skills</div>),
}));

jest.mock("../Projects", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-projects">Projects</div>),
}));

jest.mock("../Experience", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-experience">Experience</div>),
}));

jest.mock("../Education", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-education">Education</div>),
}));

// Mock the config
jest.mock("../../config/text", () => ({
  config: {
    sections: {
      about: "About Me",
    },
  },
}));

// Mock the profile data
jest.mock(
  "../../../assets/profile.json",
  () => ({
    about_me: "Test about me text",
    skills: [],
    projects: [],
    experience: [],
    education: [],
  }),
  {
    virtual: true,
  },
);

describe("RightPane Component", () => {
  it("renders all sections with correct content", () => {
    render(<RightPane />);

    // Check if all sections are rendered
    expect(
      screen.getByRole("heading", { name: /about me/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Test about me text")).toBeInTheDocument();

    // Check if all child components are rendered
    expect(screen.getByTestId("mock-skills")).toBeInTheDocument();
    expect(screen.getByTestId("mock-experience")).toBeInTheDocument();
    expect(screen.getByTestId("mock-education")).toBeInTheDocument();
  });

  it("hides projects section when there are no projects", () => {
    render(<RightPane />);

    // Projects section should not be in the document
    expect(screen.queryByTestId("mock-projects")).not.toBeInTheDocument();
  });

  it("applies correct layout classes", () => {
    render(<RightPane />);

    const container = screen.queryByTestId("right-pane");
    expect(container).toHaveClass("md:w-2/3", "md:ml-[33.333333%]", "p-8");
  });
});
