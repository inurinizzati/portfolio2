import React from 'react';
import { Code2, Palette, Terminal } from 'lucide-react';

export default function About() {
  return (
      <section id="about" className="py-20 bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-1 text-center">
            <div className="mb-6">
              <img src="https://www.usm.my/templates/yootheme/cache/48/USM-Crest-Circle-483ccddf.png" alt="Universiti Sains Malaysia Logo" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Year 3</h3>
              <h3 className="text-lg mb-4 font-bold">Bachelor of Computer Science (Honours)(Intelligent Computing)</h3>
              <h3 className="text-lg mb-4 "> I am looking for an internship opportunity where I can expand my knowledge and skills in machine learning, artificial intelligence,
                data analysis, and software development. I am eager to contribute to meaningful projects, explore new technologies, and learn from experienced professionals.
                This internship will allow me to grow both personally and professionally while making valuable contributions to the organization." </h3>
            </div>
          </div>
        </div>
      </section>


  );
}
