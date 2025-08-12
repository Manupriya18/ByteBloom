import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Bengaluru Pawsitive",
      description:
        "A web platform connecting animal lovers, adopters, and rescue organizations. Facilitates adoption, volunteer coordination, and donations for stray animals.",
      tech: "Flask, SQLAlchemy, React.js",
      github: "https://github.com/Manupriya18/Bengaluru-pawsitive.git",
    },
    {
      title: "Echo Mind",
      description:
        "A Python desktop app with Tkinter GUI that executes voice commands using AI-based speech recognition, with MySQL logging.",
      tech: "Python, Tkinter, MySQL, AI Libraries",
      github: "https://github.com/Manupriya18/EchoMind",
    },
    {
      title: "Smart City",
      description:
        "Java-based guide for new visitors with info on tourist spots, parks, museums, and restaurants.",
      tech: "Java",
    },
    {
      title: "About Netflix",
      description:
        "Interactive web dashboard highlighting Netflix’s leadership and investments.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "ByteBloom",
      description:
        "A personal portfolio website built with React.js to showcase my skills, projects, sketches, and contact info in a modern, clean layout.",
      tech: "React.js",
      github: "https://github.com/Manupriya18/bytebloom",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">
                <strong>Tech:</strong> {project.tech}
              </p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
