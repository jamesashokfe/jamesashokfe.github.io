import React from 'react';
import { config } from '../config/text';

interface ContactProps {
  contact: {
    linkedin: string;
    github: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{config.sections.contact}</h2>
      <div className="flex gap-4">
        <a href={contact.linkedin} className="text-blue-500 hover:underline">{config.contact.linkedin}</a>
        <a href={contact.github} className="text-blue-500 hover:underline">{config.contact.github}</a>
      </div>
    </div>
  );
};

export default Contact;
