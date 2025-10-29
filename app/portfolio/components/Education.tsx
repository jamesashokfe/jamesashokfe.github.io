interface EducationItem {
  school_name: string;
  degree_title: string;
  duration: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education = ({ education }: EducationProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div>
        {education.map((item) => (
          <div key={item.school_name} className="mb-4">
            <h3 className="text-xl font-bold">{item.school_name}</h3>
            <p className="text-lg">{item.degree_title}</p>
            <p className="text-sm text-gray-500">{item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
