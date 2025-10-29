import React from 'react';

interface ExperienceItem {
  company_name: string;
  role: string;
  duration: string;
  impact_achieved: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-8">
        {experience.map((item) => (
          <div key={item.company_name} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-bold">{item.company_name}</h3>
            <p className="text-lg font-semibold">{item.role}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.duration}</p>
            <ul className="list-disc list-inside space-y-1">
              {item.impact_achieved.map((impact, index) => (
                <li key={index}>{impact}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
