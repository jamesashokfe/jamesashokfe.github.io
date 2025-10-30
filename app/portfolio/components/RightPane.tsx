import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import { config } from "../config/text";
import profile from "../../assets/profile.json";

export default function RightPane() {
  return (
    <div className="md:w-2/3 md:ml-[33.333333%] p-8" data-testid="right-pane">
      <section id="about" className="py-4 mb-4">
        <h2 className="text-2xl font-bold mb-4">{config.sections.about}</h2>
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
  );
}
