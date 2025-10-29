import React from 'react';

interface Skill {
  name: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.name.toLowerCase()}/${skill.name.toLowerCase()}-original.svg`}
              alt={skill.name}
              className="w-8 h-8 mr-3"
            />
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
