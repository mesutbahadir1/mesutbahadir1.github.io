'use client';

import React, { useState } from 'react';
import { Code, Server, Layout, Database, Cpu, GitBranch, Users } from 'lucide-react';
import Link from 'next/link';

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  link: string;
  responsibilities: string[];
};

const About = () => {
  const [selectedCompany, setSelectedCompany] = useState('econtech');

  const experiences: Experience[] = [
    {
      id: 'econtech',
      company: 'Econtech',
      role: 'Intern Backend Engineer',
      period: '01.12.2024 – 14.05.2025',
      location: 'Istanbul',
      link: 'https://econtech.com.tr/',
      responsibilities: [
        'Developed RESTful APIs using .NET Core and Entity Framework Core within a microservice architecture',
        'Built a test automation system using the Selenium WebDriver library',
        'Conducted code reviews to identify performance bottlenecks and bugs; proposed and implemented fixes and optimizations when necessary'
      ]
    },
    {
      id: 'talentify',
      company: 'TalentifyLab',
      role: 'Intern Mobile Developer',
      period: '02.06.2024 – 27.11.2024',
      location: 'Istanbul',
      link: 'https://talentifylab.com/tr',
      responsibilities: [
        'Designed and developed modern, responsive user interfaces (UI) using Flutter to provide a seamless mobile experience',
        'Integrated RESTful APIs to retrieve and send data from/to backend systems, enabling dynamic content in mobile applications',
        'Evaluated, reported, and tracked issues through JIRA'
      ]
    },
  ];

  const skills: Skill[] = [
    {
      name: 'Backend Development',
      icon: <Server size={24} />,
      description: 'ASP.NET Core, Entity Framework, RESTful APIs'
    },
    {
      name: 'Version Control',
      icon: <GitBranch size={24} />,
      description: 'Git, GitHub, Azure'
    },
    {
      name: 'Database Management',
      icon: <Database size={24} />,
      description: 'SQL, SQLite, PostgreSQL, Relational Modeling'
    },
    {
      name: 'Soft Skills',
      icon: <Users size={24} />,
      description: 'Teamwork, Fast Learning, Communication, Problem Solving'
    }
  ];


  const currentExperience = experiences.find(exp => exp.id === selectedCompany) || experiences[0];

  return (
    <div className="bg-black text-white min-h-screen" dir="ltr">
      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16 text-left">
        <h2 className="text-sm font-medium tracking-widest mb-12">EXPERIENCE</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Company List */}
          <div className="w-full md:w-[240px] flex-shrink-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompany(exp.id)}
                  className={`whitespace-nowrap md:whitespace-normal p-4 text-left rounded-lg transition-all duration-300 ${
                    selectedCompany === exp.id 
                      ? 'bg-neutral-800 text-white' 
                      : 'bg-transparent text-gray-400 hover:bg-neutral-900 hover:text-gray-300'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="flex-grow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                {currentExperience.role} at{' '}
                <a
                  href={currentExperience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {currentExperience.company}
                </a>
              </h3>
              <p className="text-gray-400">
                {currentExperience.period} • {currentExperience.location}
              </p>
            </div>
            <ul className="space-y-4">
              {currentExperience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-sm font-medium tracking-widest mb-12">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-400 p-2 bg-blue-400/10 rounded-lg">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      {/* <section id="education" className="container mx-auto px-4 py-16">
        <h2 className="text-sm font-medium tracking-widest mb-12">EDUCATION</h2>
        <div className="bg-neutral-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">B.Sc. in Computer Engineering</h3>
          <p className="text-gray-400">Fatih Sultan Mehmet Vakıf University</p>
          <p className="text-gray-400">2021 – 2025</p>
        </div>
      </section> */}


    </div>
  );
};

export default About;
