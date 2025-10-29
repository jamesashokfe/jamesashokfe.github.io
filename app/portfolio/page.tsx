import Image from "next/image";
import profile from "../assets/profile.json";
import { config } from "./config/text";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 flex flex-col md:flex-row">
      <div className="md:w-1/3 md:fixed md:h-screen bg-gray-100 dark:bg-gray-800 p-8 flex flex-col justify-center items-center text-center">
        <div className="relative w-32 h-32 xl:w-64 xl:h-64 mb-4">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="rounded-full object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
        <h2 className="text-2xl mb-2">{profile.title}</h2>
        <p className="text-lg mb-4">{profile.subtitle}</p>
        <div className="flex">
          <Link
            href={profile.contact.linkedin}
            className="w-8 h-8 mr-3 p-6 relative bg-gray-100 rounded-sm"
            target="_blank"
          >
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg`}
              alt={config.contact.linkedin}
              fill
              className="object-contain"
              unoptimized={true}
            />
          </Link>
          <Link
            href={profile.contact.github}
            className="w-8 h-8 mr-3 p-6 relative bg-gray-100 rounded-sm"
            target="_blank"
          >
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg`}
              alt={config.contact.github}
              fill
              className="object-contain"
              unoptimized={true}
            />
          </Link>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="text-lg hover:text-blue-500">
                {config.sections.about}
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-lg hover:text-blue-500">
                {config.sections.skills}
              </Link>
            </li>
            <li>
              {profile.projects.length > 0 && (
                <Link href="#projects" className="text-lg hover:text-blue-500">
                  {config.sections.projects}
                </Link>
              )}
            </li>
            <li>
              <Link href="#experience" className="text-lg hover:text-blue-500">
                {config.sections.experience}
              </Link>
            </li>
            <li>
              <Link href="#education" className="text-lg hover:text-blue-500">
                {config.sections.education}
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
      <div className="md:w-2/3 md:ml-[33.333333%] p-8">
        <section id="about" className="py-4 mb-4">
          <h2 className="text-3xl font-bold mb-4">{config.sections.about}</h2>
          <p className="text-lg leading-relaxed">{profile.about_me}</p>
        </section>
        <section id="skills" className="py-4 mb-4">
          <Skills skills={profile.skills} />
        </section>
        {profile.projects.length > 0 && (
          <section id="projects" className="py-4 mb-4">
            <Projects projects={profile.projects} />
          </section>
        )}
        <section id="experience" className="py-4 mb-4">
          <Experience experience={profile.experience} />
        </section>
        <section id="education" className="py-4 mb-4">
          <Education education={profile.education} />
        </section>
      </div>
    </div>
  );
}
