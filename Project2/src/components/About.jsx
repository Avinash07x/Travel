import React from "react";

import about1 from "../assets/BG.jpg";
import about2 from "../assets/BG.jpg";
import about3 from "../assets/BG.jpg";

const About = ({ aboutRef }) => {
  const images = [about1, about2, about3];

  return (
    <section ref={aboutRef} id="ranch" className="py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="about-heading uppercase mb-4">What Lives Here</p>

        <h2 className="text-4xl mb-20">
          Kaleo is more than a home — it's a living rhythm.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <img
              key={i}
              className="photo-card opacity-0 translate-y-20 rounded-lg"
              src={img}
              alt={`About ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
