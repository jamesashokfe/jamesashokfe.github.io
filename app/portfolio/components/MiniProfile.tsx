import Image from "next/image";
import Link from "next/link";
import { config } from "../config/text";
import profile from "../../assets/profile.json";

const MiniProfile = () => {
  return (
    <>
      <div className="relative w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 mb-4">
        <Image
          src="/profile.jpg"
          alt={profile.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded-full object-cover"
          priority
        />
      </div>
      <h1 className="text-2xl lg:text-4xl font-bold mb-2">{profile.name}</h1>
      <h2 className="text-lg lg:text-2xl mb-2">{profile.title}</h2>
      <p className="text-md lg:text-lg mb-4">{profile.subtitle}</p>
      <div className="flex">
        <Link
          href={profile.contact.linkedin}
          className="mr-2 p-4 relative bg-gray-100 rounded-sm border-2 border-transparent dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
          target="_blank"
          rel="noopener noreferrer"
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
          className="mr-2 p-4 relative bg-gray-100 rounded-sm border-2 border-transparent dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400"
          target="_blank"
          rel="noopener noreferrer"
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
    </>
  );
};

export default MiniProfile;
