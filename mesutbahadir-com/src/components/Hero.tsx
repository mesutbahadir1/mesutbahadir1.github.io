'use client';

import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, ChevronDown, Youtube } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    // Find the hero section's height and scroll just past it
    const heroHeight = document.getElementById('hero')?.offsetHeight || window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="container mx-auto px-4 py-40 w-full min-h-screen relative flex flex-col justify-between" dir="ltr">
      <div>
        <p className="text-xl mb-4">Hey, I'm</p>
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text">
          Muhammed Mesut BAHADIR
        </h1>

        <p className="max-w-3xl text-gray-300 mb-12">
          After completing my Bachelor's degree in Computer Engineering, I focused on backend development, primarily using .NET Core and Entity Framework Core to build secure, scalable, and maintainable RESTful APIs within microservice architectures.

          I also gained experience in mobile development with Flutter, designing modern, responsive, and user-friendly interfaces integrated with backend services. Throughout the development process, I actively used tools such as Git, Postman, JIRA, and Azure to collaborate effectively and manage tasks in a team environment.

          I am highly motivated in problem solving, teamwork, and continuous learning. My career goal is to advance as a backend developer within the .NET ecosystem, building high-performance, user-focused, and robust software solutions
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={20} />
            <a href="mailto:mesutbahadir81@gmail.com" className="hover:text-blue-400 transition-colors">mesutbahadir81@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Github size={20} />
            <a href="https://github.com/mesutbahadir1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Linkedin size={20} />
            <a href="https://www.linkedin.com/in/muhammedmesutbahadir/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
