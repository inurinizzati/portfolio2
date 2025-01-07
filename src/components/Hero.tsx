import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 py-24 md:px-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              NURIN FARAH IZZATI BINTI MOHD RUSDI
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">Internship</h2>
            <p className="text-lg md:text-xl max-w-2xl mb-12 text-gray-400">
              I am a passionate and dedicated computer science student with a strong foundation in programming, algorithms, and software development,
              eager to apply my knowledge to solve real-world problems and continuously learn new technologies.
            </p>
            <div className="flex gap-6">
              <a
                  href="https://github.com/inurinizzati"
                  className="hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                  href="https://github.com/inurinizzati"
                  className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                  href="mailto:inurin32@gmail.com"
                  className="hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={scrollToProjects}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
  );
}
