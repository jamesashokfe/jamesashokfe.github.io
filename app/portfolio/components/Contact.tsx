import React from "react";
import { config } from "../config/text";
import Link from "next/link";

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
        <Link href={contact.linkedin} className="text-blue-500 hover:underline">
          {config.contact.linkedin}
        </Link>
        <Link href={contact.github} className="text-blue-500 hover:underline">
          {config.contact.github}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
