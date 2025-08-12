import React from "react";
import "./Sketches.css";

function Sketches() {
  const sketches = [
    { src: "/sketch1.jpg", alt: "Sketch 1" },
    { src: "/sketch2.jpg", alt: "Sketch 2" },
    { src: "/sketch3.jpg", alt: "Sketch 3" },
    { src: "/sketch4.jpg", alt: "Sketch 4" }
  ];

  const languagesKnown = ["English",  "Kannada","Hindi"];
 const hobbies = [
  "Traveling",
  "Sketching",
  "Writing poetry in Kannada",
  "Singing"
];

  return (
    <section id="sketches" className="sketches">
      <div className="container">
        <h2>My Sketches</h2>
        <div className="sketch-grid">
          {sketches.map((sketch, index) => (
            <div className="sketch-card" key={index}>
              <img src={sketch.src} alt={sketch.alt} />
            </div>
          ))}
        </div>

        {/* Languages Known */}
        <div className="languages-known">
          <h3>Languages Known</h3>
          <p>{languagesKnown.join(", ")}</p>
        </div>

        {/* Hobbies */}
        <div className="hobbies">
          <h3>Hobbies</h3>
          <ul>
            {hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sketches;
