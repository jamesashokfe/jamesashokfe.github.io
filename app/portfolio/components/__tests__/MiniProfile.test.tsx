import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MiniProfile from "../MiniProfile";
import profile from "../../../assets/profile.json";

describe("MiniProfile", () => {
  it("renders the profile information correctly", () => {
    render(<MiniProfile />);

    // Check if the profile image is rendered with correct alt text
    const profileImage = screen.getByAltText(profile.name);
    expect(profileImage).toBeInTheDocument();

    // Check if the name is rendered correctly
    const nameElement = screen.getByText(profile.name);
    expect(nameElement).toBeInTheDocument();

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(profile.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the subtitle is rendered correctly
    const subtitleElement = screen.getByText(profile.subtitle);
    expect(subtitleElement).toBeInTheDocument();
  });

  it("renders social media links with correct href and target attributes", () => {
    render(<MiniProfile />);

    // Check LinkedIn link
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("href", profile.contact.linkedin);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check GitHub link
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", profile.contact.github);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies correct styling to the profile image container", () => {
    render(<MiniProfile />);

    // Check if the profile image container has the correct classes
    const imageContainer = screen.getByRole("img", {
      name: profile.name,
    }).parentElement;
    expect(imageContainer).toHaveClass("relative");
    expect(imageContainer).toHaveClass("w-32", "h-32");
    expect(imageContainer).toHaveClass("lg:w-48", "lg:h-48");
    expect(imageContainer).toHaveClass("xl:w-64", "xl:h-64");
    expect(imageContainer).toHaveClass("mb-4");
  });

  it("applies correct styling to social media icons", () => {
    render(<MiniProfile />);

    // Check if social media links have the correct classes
    const socialLinks = screen.getAllByRole("link");
    socialLinks.forEach((link) => {
      expect(link).toHaveClass("mr-2");
      expect(link).toHaveClass("p-4");
      expect(link).toHaveClass("relative");
      expect(link).toHaveClass("bg-gray-100");
      expect(link).toHaveClass("rounded-sm");
      expect(link).toHaveClass("border-2");
      expect(link).toHaveClass("border-transparent");
      expect(link).toHaveClass("dark:border-gray-800");
      expect(link).toHaveClass("hover:border-blue-500");
      expect(link).toHaveClass("dark:hover:border-blue-400");
    });
  });
});
