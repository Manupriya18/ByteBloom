import React from "react";
import "./Skills.css";

function Skills() {
  const leftSkills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Flask", level: 75 },
    { name: "OOPs", level: 80 },
    { name: "Networking", level: 85 },
    { name: "Pandas", level: 70 }
  ];

  const rightSkills = [
    { name: "MySQL", level: 85 },
    { name: "HTML/CSS/JS", level: 95 },
    { name: "Creativity", level: 90 },
    { name: "Communication", level: 85 },
    { name: "NumPy", level: 70 },
    { name: "ML Basics", level: 60 },
    { name: "DSA", level: 75 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-column">
            {leftSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">
                  {skill.name} <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-column">
            {rightSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">
                  {skill.name} <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
