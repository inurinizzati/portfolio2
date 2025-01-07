import React from 'react';

const projects = [
  {
    title: "Machine Learning Algorithm",
    description: "This project explores the application of machine learning in predicting heart disease using three supervised learning algorithms: K-Nearest Neighbors (KNN), Support Vector Machine (SVM), and Decision Tree.",
    image: "https://www.icertglobal.com/images/machine-learning-concept.jpg",
    tags: ["Python"],
    github: "https://github.com/inurinizzati/CPC152"
  },
  {
    title: "TEXT-BASED GAME",
    description: "Text-based game is an interactive storytelling experience where players engage with the game entirely through written text. Players make decisions by typing commands or selecting from options, influencing the narrative and outcomes. ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWeLwMgImoTyPEp3ExH-I1lOicaEH3INAxw&s",
    tags: ["C++"],
    github: "https://github.com/inurinizzati/HACKHATON_G31"
  },
  {
    title: " LuxeAura Beauty & Spa Website",
    description: "This project involves creating a company website for LuxeAura a beauty and wellness company, using ReactJS and NodeJS.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fpybgzdVfGiKVhxfamxe_qliA6q-gS5r-A&s",
    tags: ["React", "CSS", "Node.js", "JavaScript"],
    github: "https://github.com/ainasofeya/CAT201-Assignment-II"
  },
  {
    title: "Spa Management System",
    description: "Develop an intuitive spa management app that optimizes spa operations, enhances customer service, and streamlines employee management. The app will be built using Java and integrated with an SQLite database to ensure efficient data storage and retrieval.",
    image: "https://queuebuster.co/_next/image?url=https%3A%2F%2Fquebuster.s3.ap-south-1.amazonaws.com%2Fwebsite%2Fassets%2Fspa%2Fsalon-hero-img.webp&w=3840&q=75",
    tags: ["Java","SqlLite"],
    github: "https://github.com/ainasofeya/CAT201-Project-Group43"
  },
  {
    title: " CITIBANK Management System",
    description: "Implemented the CT Bank Management Database System using Oracle APEX. Key components include designing a robust database architecture, normalizing tables to the third normal form (3NF), and implementing modules for customer profile registration, bank account management, fixed deposits, and loan management.",
    image: "https://i0.wp.com/www.iedunote.com/img/1087/bank-management.jpg",
    tags: ["Oracle"],
    github: "https://github.com/inurinizzati/CMT221"
  },
  {
    title: "Extracurricular Event Tracking System",
    description: "The creation of the Extracurricular Event Tracking System at the University of Science Malaysia (USM), designed to improve student participation in extracurricular activities. The system focuses on  Project Management & Planning, System Architecture and Design and Software Quality & Testing.",
    image: "https://media.licdn.com/dms/image/D5612AQHAAb9IJYeHbg/article-cover_image-shrink_600_2000/0/1693199223255?e=2147483647&v=beta&t=pQMitp23JI55wtBcqt7hmY-hXMFFVserqKswnSJhI6A",
    tags: ["Figma"],
    github: "https://github.com/ainasofeya/CAT201-Project-Group43"
  }
];

export default function Projects() {
  return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                          <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
