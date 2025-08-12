import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Sketches from "./components/Sketches";
import Contact from "./components/contact";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);

    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <section id="home" data-aos="fade-up">
          <Hero />
        </section>
        <section id="about" data-aos="fade-right">
          <About />
        </section>
        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>
        <section id="projects" data-aos="zoom-in">
          <Projects />
        </section>
        <section id="sketches" data-aos="fade-up">
          <Sketches />
        </section>
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
