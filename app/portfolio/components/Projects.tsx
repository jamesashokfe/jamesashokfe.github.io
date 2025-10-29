import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  technologies: { name: string }[];
  image: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <Link href={project.link} className="text-blue-500 hover:underline">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
