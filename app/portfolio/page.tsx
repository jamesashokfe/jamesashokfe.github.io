'use client';

import React, { useEffect } from 'react';
import profile from '../assets/profile.json';
import { config } from './config/text';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

export default function Portfolio() {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')!;
      const targetElement = document.querySelector(targetId)!;
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <div className="antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      <ThemeToggle />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 md:fixed md:h-screen bg-gray-100 dark:bg-gray-800 p-8 flex flex-col justify-center items-center text-center">
          <img src="/profile.jpg" alt="Your Name" className="w-32 h-32 rounded-full mb-4" />
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <h2 className="text-2xl">{profile.title}</h2>
          <p className="text-lg mt-4">{profile.subtitle}</p>
          <nav className="mt-8">
            <ul className="space-y-2">
              <li><a href="#about" className="text-lg hover:text-blue-500">{config.sections.about}</a></li>
              <li><a href="#skills" className="text-lg hover:text-blue-500">{config.sections.skills}</a></li>
              <li><a href="#projects" className="text-lg hover:text-blue-500">{config.sections.projects}</a></li>
              <li><a href="#experience" className="text-lg hover:text-blue-500">{config.sections.experience}</a></li>
              <li><a href="#education" className="text-lg hover:text-blue-500">{config.sections.education}</a></li>
              <li><a href="#contact" className="text-lg hover:text-blue-500">{config.sections.contact}</a></li>
            </ul>
          </nav>
        </div>
        <div className="md:w-2/3 md:ml-[33.333333%] p-8">
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">{config.sections.about}</h2>
            <p className="text-lg leading-relaxed">{profile.about_me}</p>
          </section>
          <section id="skills" className="mb-16">
            <Skills skills={profile.skills.map(name => ({ name }))} />
          </section>
          <section id="projects" className="mb-16">
            <Projects projects={profile.projects} />
          </section>
          <section id="experience" className="mb-16">
            <Experience experience={profile.experience} />
          </section>
          <section id="education" className="mb-16">
            <Education education={profile.education} />
          </section>
          <section id="contact" className="mb-16">
            <Contact contact={profile.contact} />
          </section>
        </div>
      </div>
    </div>
  );
}
