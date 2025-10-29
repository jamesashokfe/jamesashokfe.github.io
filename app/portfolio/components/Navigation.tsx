import Link from "next/link";
import { config } from "../config/text";
import profile from "../../assets/profile.json";

const navItems = [
  { id: "about", label: config.sections.about },
  { id: "skills", label: config.sections.skills },
  {
    id: "projects",
    label: config.sections.projects,
    condition: profile.projects.length > 0,
  },
  { id: "experience", label: config.sections.experience },
  { id: "education", label: config.sections.education },
];

export const Navigation = () => (
  <nav className="mt-8 max-md:hidden w-full print:hidden">
    <ul>
      {navItems.map(({ id, label, condition = true }) => {
        if (!condition) return null;

        return (
          <li key={id}>
            <Link
              href={`#${id}`}
              className="text-lg py-1 flex justify-center border-2 rounded-md border-transparent dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Navigation;
