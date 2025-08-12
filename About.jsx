import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="intro">
          Passionate about technology and dedicated to applying creative
          problem-solving techniques to real-world scenarios. I look for
          chances to work on valuable projects and keep learning new
          technologies.
        </p>

        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>B.E. in Computer Science & Engineering</strong> <br />
              New Horizon College of Engineering, Bangalore — CGPA: 9.23
            </li>
            <li>
              <strong>12th (Senior Secondary)</strong> <br />
              Narayana PU College, Bangalore — 100%
            </li>
            <li>
              <strong>10th (Secondary)</strong> <br />
              Henk Bruna Swamy Vivekananda Round Table School — 97.12%
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
